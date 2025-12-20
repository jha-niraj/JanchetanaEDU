"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { getLatestArticles } from "@/actions/article.action"

interface Article {
    id: string
    title: string
    slug: string
    content: string
    status: string
    createdAt: Date
    teacher?: {
        id: string
        name: string
    } | null
}

export function ArticleCarousel() {
    const [articles, setArticles] = useState<Article[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const autoplayRef = useRef<NodeJS.Timeout | null>(null)
    const itemsToShow = 3

    useEffect(() => {
        async function fetchArticles() {
            try {
                const result = await getLatestArticles(10)
                if (result.success && result.articles) {
                    setArticles(result.articles as Article[])
                }
            } catch (error) {
                console.error("Failed to fetch articles:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchArticles()
    }, [])

    const maxIndex = Math.max(0, articles.length - itemsToShow)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, [maxIndex])

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
    // }

    const startAutoplay = useCallback(() => {
        if (autoplayRef.current) clearInterval(autoplayRef.current)
        autoplayRef.current = setInterval(() => {
            nextSlide()
        }, 5000)
    }, [nextSlide])

    const stopAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current)
            autoplayRef.current = null
        }
    }

    useEffect(() => {
        if (autoplay) startAutoplay()
        return () => stopAutoplay()
    }, [autoplay, currentIndex, startAutoplay])

    const handleMouseEnter = () => setAutoplay(false)
    const handleMouseLeave = () => setAutoplay(true)

    const visibleArticles = articles.slice(currentIndex, currentIndex + itemsToShow)

    if (visibleArticles.length < itemsToShow && articles.length > 0) {
        visibleArticles.push(...articles.slice(0, itemsToShow - visibleArticles.length))
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-muted-foreground">Loading articles...</div>
            </div>
        )
    }

    if (articles.length === 0) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-muted-foreground">No articles available yet.</div>
            </div>
        )
    }

    return (
        <>
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-6"
                        initial={false}
                        animate={{ x: `calc(-${currentIndex * 100}% / ${itemsToShow})` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {
                            articles.map((article) => {
                                const description = article.content.length > 150 
                                    ? article.content.substring(0, 150) + "..." 
                                    : article.content
                                return (
                                    <motion.div
                                        key={article.id}
                                        className="min-w-[calc(100%/3-1rem)] md:min-w-[calc(100%/3-1rem)]"
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <Card className="overflow-hidden h-full transition-all hover:shadow-md dark:border-gray-700">
                                            <CardHeader>
                                                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                                                <CardDescription>
                                                    By {article.teacher?.name || "Principal"}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="line-clamp-3 text-muted-foreground">
                                                    {description}
                                                </p>
                                            </CardContent>
                                            <CardFooter>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="gap-1"
                                                    onClick={() => setSelectedArticle(article)}
                                                >
                                                    Read more <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                </div>
                {/* <div className="flex justify-center mt-6 gap-1">
                    {
                        Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))
                    }
                </div> */}
            </div>

            <Dialog open={selectedArticle !== null} onOpenChange={() => setSelectedArticle(null)}>
                <DialogContent className="max-w-5xl max-h-[70vh] overflow-y-auto p-6">
                    <DialogHeader className="mb-4">
                        <DialogTitle className="text-2xl font-bold mb-2">{selectedArticle?.title}</DialogTitle>
                        <p className="text-muted-foreground">
                            By {selectedArticle?.teacher?.name || "Principal"}
                        </p>
                    </DialogHeader>
                    <div className="space-y-3 pr-2">
                        {
                            selectedArticle?.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-muted-foreground text-sm">
                                    {paragraph}
                                </p>
                            ))
                        }
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}