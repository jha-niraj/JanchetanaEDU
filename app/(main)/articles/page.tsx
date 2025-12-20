"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPublishedArticles } from "@/actions/article.action"
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react"
import { format } from "date-fns"
import { MainNav } from "@/components/navbar"
import { Footer } from "@/components/footer"

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

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchArticles() {
            try {
                const result = await getPublishedArticles()
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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    }

    return (
        <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className="flex-1 pt-24">
                <section className="w-full py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center space-y-4 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
                                School News & Updates
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Latest Articles
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                                Stay updated with the latest news, events, and achievements from Janchetana School
                            </p>
                        </motion.div>

                        {isLoading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3].map((i) => (
                                    <Card key={i} className="animate-pulse">
                                        <CardHeader>
                                            <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                                            <div className="h-4 bg-muted rounded w-1/2" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="h-20 bg-muted rounded" />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : articles.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
                                <h3 className="text-xl font-semibold mb-2">No articles yet</h3>
                                <p className="text-muted-foreground max-w-md">
                                    Check back soon for the latest news and updates from our school.
                                </p>
                            </div>
                        ) : (
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                {articles.map((article) => (
                                    <motion.div key={article.id} variants={item}>
                                        <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
                                            <CardHeader className="pb-3">
                                                <div className="flex items-start justify-between gap-2 mb-2">
                                                    <Badge variant="outline" className="text-xs">
                                                        Published
                                                    </Badge>
                                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                                </div>
                                                <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                                                    {article.title}
                                                </CardTitle>
                                                <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                                                    {article.teacher && (
                                                        <div className="flex items-center gap-1">
                                                            <User className="h-3 w-3" />
                                                            <span>{article.teacher.name}</span>
                                                        </div>
                                                    )}
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        <span>{format(new Date(article.createdAt), "MMM d, yyyy")}</span>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="flex-1">
                                                <p className="text-muted-foreground line-clamp-4 text-sm leading-relaxed">
                                                    {article.content}
                                                </p>
                                            </CardContent>
                                            <CardFooter className="pt-4 border-t">
                                                <Button
                                                    asChild
                                                    variant="ghost"
                                                    className="w-full group/btn justify-between"
                                                >
                                                    <Link href={`/articles/${article.slug}`}>
                                                        Read More
                                                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                    </Link>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

