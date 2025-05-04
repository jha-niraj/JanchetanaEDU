"use client";

import { useState, useEffect, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addArticle, updateArticle, deleteArticle, getArticles } from "@/actions/article.action";
import { useRouter } from "next/navigation";
import { Loader2, CalendarIcon, Edit2, BookOpen, Trash2, FileText, Send } from "lucide-react";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";

interface Article {
    id: string;
    title: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    teacher?: {
        id: string;
        name: string;
    } | null;
}

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();
    const router = useRouter();

    const [newArticle, setNewArticle] = useState({
        title: "",
        content: "",
        status: "draft",
    });

    // Fetch articles on mount
    useEffect(() => {
        async function fetchArticles() {
            const result = await getArticles();
            if (result.success) {
                setArticles(result.articles);
            } else {
                toast({
                    title: "Error",
                    description: result.error || "Failed to fetch articles.",
                    variant: "destructive",
                });
            }
        }
        fetchArticles();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setNewArticle({
            ...newArticle,
            [id]: value,
        });
    };

    const handleCreateArticle = (status: string) => {
        if (!newArticle.title.trim() || !newArticle.content.trim()) {
            toast({
                title: "Validation Error",
                description: "Title and content are required.",
                variant: "destructive",
            });
            return;
        }

        startTransition(async () => {
            try {
                const articleToSubmit = {
                    ...newArticle,
                    status,
                };

                const result = await addArticle(articleToSubmit);

                if (result.success) {
                    setArticles([result.article, ...articles]);
                    setNewArticle({
                        title: "",
                        content: "",
                        status: "draft",
                    });
                    toast({
                        title: status === "published" ? "Article Published" : "Draft Saved",
                        description: `Your article has been ${status === "published" ? "published" : "saved as a draft"}.`,
                    });
                    router.refresh();
                } else {
                    toast({
                        title: "Error",
                        description: result.error || "Failed to create article.",
                        variant: "destructive",
                    });
                }
            } catch (error) {
                toast({
                    title: "Error",
                    description: "Something went wrong. Please try again.",
                    variant: "destructive",
                });
            }
        });
    };

    const handleEditArticle = (article: Article) => {
        setSelectedArticle(article);
        setNewArticle({
            title: article.title,
            content: article.content,
            status: article.status,
        });
    };

    const handleUpdateArticle = (status: string) => {
        if (!selectedArticle) return;

        startTransition(async () => {
            try {
                const updatedArticle = {
                    ...newArticle,
                    status,
                };

                const result = await updateArticle(selectedArticle.id, updatedArticle);

                if (result.success) {
                    setArticles(
                        articles.map((article) =>
                            article.id === selectedArticle.id ? result.article : article
                        )
                    );
                    toast({
                        title: "Article Updated",
                        description: status === "published"
                            ? "Your article has been published."
                            : "Your changes have been saved.",
                    });
                    setSelectedArticle(null);
                    setNewArticle({
                        title: "",
                        content: "",
                        status: "draft",
                    });
                    router.refresh();
                } else {
                    toast({
                        title: "Error",
                        description: result.error || "Failed to update article.",
                        variant: "destructive",
                    });
                }
            } catch (error) {
                toast({
                    title: "Error",
                    description: "Something went wrong. Please try again.",
                    variant: "destructive",
                });
            }
        });
    };

    const handleDeleteArticle = () => {
        if (!selectedArticle) return;

        startTransition(async () => {
            try {
                const result = await deleteArticle(selectedArticle.id);

                if (result.success) {
                    setArticles(articles.filter((article) => article.id !== selectedArticle.id));
                    toast({
                        title: "Article Deleted",
                        description: "The article has been removed.",
                    });
                    setSelectedArticle(null);
                    setIsDeleteDialogOpen(false);
                    router.refresh();
                } else {
                    toast({
                        title: "Error",
                        description: result.error || "Failed to delete article.",
                        variant: "destructive",
                    });
                }
            } catch (error) {
                toast({
                    title: "Error",
                    description: "Something went wrong. Please try again.",
                    variant: "destructive",
                });
            }
        });
    };

    const cancelEdit = () => {
        setSelectedArticle(null);
        setNewArticle({
            title: "",
            content: "",
            status: "draft",
        });
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

    return (
        <section className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Article Management</h1>
            </div>

            <Tabs defaultValue="create" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="create">
                        {selectedArticle ? "Edit Article" : "Create New Article"}
                    </TabsTrigger>
                    <TabsTrigger value="articles">View Articles</TabsTrigger>
                </TabsList>

                <TabsContent value="create">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>{selectedArticle ? "Edit Article" : "Create New Article"}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Article Title</Label>
                                    <div className="relative">
                                        <BookOpen className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="title"
                                            placeholder="Enter a descriptive title..."
                                            className="pl-9"
                                            value={newArticle.title}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="content">Article Content</Label>
                                    <div className="relative">
                                        <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Textarea
                                            id="content"
                                            placeholder="Write your article content here..."
                                            className="min-h-[300px] pl-9 pt-8"
                                            value={newArticle.content}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <div>
                                    {selectedArticle && (
                                        <Button variant="outline" onClick={cancelEdit} disabled={isPending}>
                                            Cancel Edit
                                        </Button>
                                    )}
                                </div>
                                <div className="flex space-x-2">
                                    <Button
                                        variant="outline"
                                        onClick={() => selectedArticle
                                            ? handleUpdateArticle("draft")
                                            : handleCreateArticle("draft")}
                                        disabled={isPending}
                                    >
                                        {isPending ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Saving...
                                            </>
                                        ) : (
                                            <>Save Draft</>
                                        )}
                                    </Button>
                                    <Button
                                        onClick={() => selectedArticle
                                            ? handleUpdateArticle("published")
                                            : handleCreateArticle("published")}
                                        disabled={isPending}
                                    >
                                        {isPending ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Publishing...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                Publish
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </TabsContent>

                <TabsContent value="articles">
                    {articles.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                            <p className="text-muted-foreground text-center max-w-md mb-6">
                                There are no articles in the system yet. Create your first article to get started.
                            </p>
                            <Button onClick={() => document.querySelector('[data-value="create"]').click()}>
                                Create Your First Article
                            </Button>
                        </div>
                    ) : (
                        <motion.div
                            className="space-y-4"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            <AnimatePresence>
                                {articles.map((article) => (
                                    <motion.div
                                        key={article.id}
                                        variants={item}
                                        exit={{ opacity: 0, y: -20 }}
                                        layout
                                    >
                                        <Card className="overflow-hidden">
                                            <CardHeader className="pb-3">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <CardTitle className="text-lg">{article.title}</CardTitle>
                                                        <div className="flex items-center mt-1 space-x-3">
                                                            <Badge variant={article.status === "published" ? "default" : "outline"}>
                                                                {article.status === "published" ? "Published" : "Draft"}
                                                            </Badge>
                                                            <div className="flex items-center text-sm text-muted-foreground">
                                                                <CalendarIcon className="mr-1 h-3 w-3" />
                                                                {article.updatedAt
                                                                    ? format(new Date(article.updatedAt), "MMM d, yyyy")
                                                                    : format(new Date(article.createdAt), "MMM d, yyyy")}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="pb-4">
                                                <ScrollArea className="h-24">
                                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                                        {article.content}
                                                    </p>
                                                </ScrollArea>
                                            </CardContent>
                                            <CardFooter className="bg-muted/50 p-3 flex justify-end gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => {
                                                        handleEditArticle(article);
                                                        document.querySelector('[data-value="create"]').click();
                                                    }}
                                                >
                                                    <Edit2 className="h-4 w-4 mr-2" />
                                                    Edit
                                                </Button>
                                                <AlertDialog
                                                    open={isDeleteDialogOpen && selectedArticle?.id === article.id}
                                                    onOpenChange={(open) => {
                                                        if (!open) setSelectedArticle(null);
                                                        setIsDeleteDialogOpen(open);
                                                    }}
                                                >
                                                    <AlertDialogTrigger asChild>
                                                        <Button
                                                            variant="destructive"
                                                            size="sm"
                                                            onClick={() => {
                                                                setSelectedArticle(article);
                                                                setIsDeleteDialogOpen(true);
                                                            }}
                                                        >
                                                            <Trash2 className="h-4 w-4 mr-2" />
                                                            Delete
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This will permanently remove this article from the database.
                                                                This action cannot be undone.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction
                                                                onClick={handleDeleteArticle}
                                                                disabled={isPending}
                                                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                            >
                                                                {isPending ? (
                                                                    <>
                                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                        Deleting...
                                                                    </>
                                                                ) : (
                                                                    <>Delete</>
                                                                )}
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </TabsContent>
            </Tabs>
        </section>
    );
}