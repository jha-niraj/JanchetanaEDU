"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const articles = [
    {
        id: 1,
        title: "Our Annual Science Fair Winners",
        author: "Sarah Johnson, Grade 11",
        description:
            "This year's science fair showcased incredible talent and innovation from students across all grades. The winning projects demonstrated exceptional creativity and scientific rigor...",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        id: 2,
        title: "Basketball Team Wins Regional Championship",
        author: "Michael Chen, Grade 10",
        description:
            "Our school's basketball team has made history by winning the regional championship for the third consecutive year. The final game against Lincoln High was a nail-biter...",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        id: 3,
        title: "Student Art Exhibition Opens to Community",
        author: "Emma Rodriguez, Grade 12",
        description:
            "The annual student art exhibition opened its doors to the public last weekend, showcasing over 200 pieces from talented young artists across all grade levels...",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        id: 4,
        title: "Robotics Team Advances to National Competition",
        author: "Jason Park, Grade 11",
        description:
            "Our robotics team has qualified for the national competition after an impressive performance at the regional level. Their innovative design and programming skills impressed the judges...",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        id: 5,
        title: "Environmental Club Launches Campus Sustainability Initiative",
        author: "Olivia Martinez, Grade 9",
        description:
            "The Environmental Club has launched a new campus-wide sustainability initiative aimed at reducing waste and promoting eco-friendly practices throughout the school community...",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        id: 6,
        title: "Drama Department Presents 'A Midsummer Night's Dream'",
        author: "Ethan Williams, Grade 12",
        description:
            "The Drama Department's production of Shakespeare's 'A Midsummer Night's Dream' received standing ovations during its opening weekend. The innovative staging and performances...",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
]

export function ArticleCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const autoplayRef = useRef<NodeJS.Timeout | null>(null)
    const itemsToShow = 3
    const maxIndex = Math.max(0, articles.length - itemsToShow)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, [maxIndex]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
    }

    const startAutoplay = useCallback(() => {
        if (autoplayRef.current) clearInterval(autoplayRef.current)
        autoplayRef.current = setInterval(() => {
            nextSlide()
        }, 5000)
    }, [nextSlide]);

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

    if (visibleArticles.length < itemsToShow) {
        visibleArticles.push(...articles.slice(0, itemsToShow - visibleArticles.length))
    }

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background dark:bg-gray-800/80 dark:hover:bg-gray-800"
                    onClick={prevSlide}
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Previous</span>
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background dark:bg-gray-800/80 dark:hover:bg-gray-800"
                    onClick={nextSlide}
                >
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Next</span>
                </Button>
            </div>
            <div className="overflow-hidden">
                <motion.div
                    className="flex gap-6"
                    initial={false}
                    animate={{ x: `calc(-${currentIndex * 100}% / ${itemsToShow})` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {
                    articles.map((article) => (
                        <motion.div
                            key={article.id}
                            className="min-w-[calc(100%/3-1rem)] md:min-w-[calc(100%/3-1rem)]"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Card className="overflow-hidden h-full transition-all hover:shadow-md dark:border-gray-700">
                                <div className="relative h-48 w-full">
                                    <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                                    <CardDescription>By {article.author}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="line-clamp-3 text-muted-foreground">{article.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" size="sm" className="gap-1">
                                        Read more <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))
                    }
                </motion.div>
            </div>
            <div className="flex justify-center mt-6 gap-1">
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
            </div>
        </div>
    )
}