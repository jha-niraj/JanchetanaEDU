"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import {
    Card, CardContent
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getArticleBySlug } from "@/actions/article.action"
import {
    Calendar, User, ArrowLeft, Share2
} from "lucide-react"
import { format } from "date-fns"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"

interface Article {
    id: string
    title: string
    slug: string
    content: string
    status: string
    createdAt: Date
    updatedAt: Date
    teacher?: {
        id: string
        name: string
    } | null
}

export default function ArticleDetailPage() {
    const params = useParams()
    const slug = params.slug as string
    const [article, setArticle] = useState<Article | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchArticle() {
            try {
                const result = await getArticleBySlug(slug)
                if (result.success && result.article) {
                    setArticle(result.article as Article)
                } else {
                    setError(result.error || "Article not found")
                }
            } catch (error) {
                console.error("Failed to fetch article:", error)
                setError("Failed to load article")
            } finally {
                setIsLoading(false)
            }
        }
        if (slug) {
            fetchArticle()
        }
    }, [slug])

    const handleShare = () => {
        if (navigator.share && article) {
            navigator.share({
                title: article.title,
                text: article.content.substring(0, 200),
                url: window.location.href,
            })
        }
        toast.success("Article copied to clipboard successfully")
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col">
                <main className="flex-1 pt-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <Skeleton className="h-10 w-3/4 mb-4" />
                        <Skeleton className="h-6 w-1/2 mb-8" />
                        <Skeleton className="h-64 w-full mb-4" />
                        <Skeleton className="h-64 w-full" />
                    </div>
                </main>
            </div>
        )
    }

    if (error || !article) {
        return (
            <div className="min-h-screen flex flex-col">
                <main className="flex-1 pt-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
                                <p className="text-muted-foreground mb-6">{error || "The article you're looking for doesn't exist."}</p>
                                <Button asChild>
                                    <Link href="/articles">
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Back to Articles
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 pt-24">
                <article className="w-full py-12 md:py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Button
                                variant="ghost"
                                asChild
                                className="mb-6"
                            >
                                <Link href="/articles">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Articles
                                </Link>
                            </Button>
                            <Card className="border-2">
                                <CardContent className="pt-8 pb-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <Badge variant="outline" className="text-sm">
                                            Published
                                        </Badge>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            {
                                                article.teacher && (
                                                    <div className="flex items-center gap-2">
                                                        <User className="h-4 w-4" />
                                                        <span>{article.teacher.name}</span>
                                                    </div>
                                                )
                                            }
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>{format(new Date(article.createdAt), "MMMM d, yyyy")}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                        {article.title}
                                    </h1>

                                    <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                                        <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                                            {
                                                article.content.split('\n\n').map((paragraph, index) => (
                                                    <p key={index} className="mb-4 text-base">
                                                        {paragraph}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 pt-6 border-t">
                                        <Button
                                            variant="outline"
                                            onClick={handleShare}
                                            className="flex items-center gap-2"
                                        >
                                            <Share2 className="h-4 w-4" />
                                            Share Article
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            asChild
                                        >
                                            <Link href="/articles">
                                                View All Articles
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </article>
            </main>
        </div>
    )
}