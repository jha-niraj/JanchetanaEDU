"use client"

import { useState, useEffect, useTransition } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Card, CardContent, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    getAllNotices, createNotice, updateNotice, deleteNotice
} from "@/actions/notice.action"
import { useRouter } from "next/navigation"
import {
    Loader2, Bell, Trash2, Edit, Plus
} from "lucide-react"
import { format } from "date-fns"
import {
    Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle
} from "@/components/ui/dialog"
import { toast } from "sonner"

interface Notice {
    id: string
    title: string
    content: string
    isActive: boolean
    priority: number
    createdAt: Date
    updatedAt: Date
}

export default function NoticesPage() {
    const [notices, setNotices] = useState<Notice[]>([])
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [selectedNoticeId, setSelectedNoticeId] = useState<string | null>(null)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const [currentTab, setCurrentTab] = useState("create")

    const [newNotice, setNewNotice] = useState({
        title: "",
        content: "",
        priority: 0,
    })

    const selectedNotice = notices.find(n => n.id === selectedNoticeId)

    // Fetch notices on mount
    useEffect(() => {
        async function fetchNotices() {
            const result = await getAllNotices()
            if (result.success) {
                setNotices(result.notices || [])
            } else {
                toast("Error", {
                    description: result.error || "Failed to fetch notices.",
                })
            }
        }
        fetchNotices()
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setNewNotice({
            ...newNotice,
            [id]: id === "priority" ? parseInt(value) || 0 : value,
        })
    }

    const handleCreateNotice = () => {
        if (!newNotice.title.trim() || !newNotice.content.trim()) {
            toast("Validation Error", {
                description: "Title and content are required.",
            })
            return
        }

        startTransition(async () => {
            try {
                const result = await createNotice(newNotice)

                if (result.success) {
                    if (result.notice) {
                        setNotices([result.notice, ...notices])
                    }
                    setNewNotice({
                        title: "",
                        content: "",
                        priority: 0,
                    })
                    setCurrentTab("notices")
                    toast("Notice Created", {
                        description: "The notice has been created successfully.",
                    })
                    router.refresh()
                } else {
                    toast("Error", {
                        description: result.error || "Failed to create notice.",
                    })
                }
            } catch (error) {
                console.error("Create notice error:", error)
                toast("Error", {
                    description: "Something went wrong. Please try again.",
                })
            }
        })
    }

    const handleUpdateNotice = () => {
        if (!selectedNotice || !newNotice.title.trim() || !newNotice.content.trim()) {
            toast("Validation Error", {
                description: "Title and content are required.",
            })
            return
        }

        startTransition(async () => {
            try {
                const result = await updateNotice(selectedNotice.id, {
                    title: newNotice.title,
                    content: newNotice.content,
                    priority: newNotice.priority,
                })

                if (result.success) {
                    if (result.notice) {
                        setNotices(notices.map(n => n.id === selectedNotice.id ? result.notice! : n))
                    }
                    setIsEditDialogOpen(false)
                    setSelectedNoticeId(null)
                    setNewNotice({
                        title: "",
                        content: "",
                        priority: 0,
                    })
                    toast("Notice Updated", {
                        description: "The notice has been updated successfully.",
                    })
                    router.refresh()
                } else {
                    toast("Error", {
                        description: result.error || "Failed to update notice.",
                    })
                }
            } catch (error) {
                console.error("Update notice error:", error)
                toast("Error", {
                    description: "Something went wrong. Please try again.",
                })
            }
        })
    }

    const handleDeleteNotice = () => {
        if (!selectedNoticeId) return

        startTransition(async () => {
            try {
                const result = await deleteNotice(selectedNoticeId)

                if (result.success) {
                    setNotices(notices.filter((notice) => notice.id !== selectedNoticeId))
                    toast("Notice Deleted", {
                        description: "The notice has been removed.",
                    })
                    setSelectedNoticeId(null)
                    setIsDeleteDialogOpen(false)
                    router.refresh()
                } else {
                    toast("Error", {
                        description: result.error || "Failed to delete notice.",
                    })
                }
            } catch (error) {
                console.error("Delete notice error:", error)
                toast("Error", {
                    description: "Something went wrong. Please try again.",
                })
            }
        })
    }

    const handleEditClick = (notice: Notice) => {
        setSelectedNoticeId(notice.id)
        setNewNotice({
            title: notice.title,
            content: notice.content,
            priority: notice.priority,
        })
        setIsEditDialogOpen(true)
    }

    const handleToggleActive = (notice: Notice) => {
        startTransition(async () => {
            try {
                const result = await updateNotice(notice.id, {
                    isActive: !notice.isActive,
                })

                if (result.success && result.notice) {
                    setNotices(notices.map(n => n.id === notice.id ? result.notice! : n))
                    toast(notice.isActive ? "Notice Deactivated" : "Notice Activated", {
                        description: `The notice has been ${notice.isActive ? 'deactivated' : 'activated'}.`,
                    })
                    router.refresh()
                }
            } catch (error) {
                console.error("Toggle notice error:", error)
                toast("Error", {
                    description: "Something went wrong. Please try again.",
                })
            }
        })
    }

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
        <section className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Notice Management</h1>
            </div>
            <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="create">Create New Notice</TabsTrigger>
                    <TabsTrigger value="notices">View Notices</TabsTrigger>
                </TabsList>
                <TabsContent value="create">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Create New Notice</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Notice Title</Label>
                                    <Input
                                        id="title"
                                        placeholder="Enter notice title..."
                                        value={newNotice.title}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="content">Notice Content</Label>
                                    <Textarea
                                        id="content"
                                        placeholder="Enter notice content..."
                                        className="min-h-[200px]"
                                        value={newNotice.content}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="priority">Priority (Higher number = higher priority)</Label>
                                    <Input
                                        id="priority"
                                        type="number"
                                        placeholder="0"
                                        value={newNotice.priority}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end space-x-2">
                                <Button
                                    onClick={handleCreateNotice}
                                    disabled={isPending}
                                >
                                    {
                                        isPending ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Creating...
                                            </>
                                        ) : (
                                            <>
                                                <Plus className="mr-2 h-4 w-4" />
                                                Create Notice
                                            </>
                                        )
                                    }
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </TabsContent>
                <TabsContent value="notices">
                    {
                        notices.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <Bell className="h-16 w-16 text-muted-foreground mb-4" />
                                <h3 className="text-xl font-semibold mb-2">No notices found</h3>
                                <p className="text-muted-foreground text-center max-w-md mb-6">
                                    Create your first notice to display on the homepage marquee.
                                </p>
                                <Button onClick={() => setCurrentTab("create")}>
                                    Create Your First Notice
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
                                    {
                                        notices.map((notice) => (
                                            <motion.div
                                                key={notice.id}
                                                variants={item}
                                                exit={{ opacity: 0, y: -20 }}
                                                layout
                                            >
                                                <Card className="overflow-hidden">
                                                    <CardHeader className="pb-3">
                                                        <div className="flex justify-between items-start">
                                                            <div className="flex-1">
                                                                <CardTitle className="text-lg">{notice.title}</CardTitle>
                                                                <div className="flex items-center mt-2 space-x-3">
                                                                    <Badge variant={notice.isActive ? "default" : "outline"}>
                                                                        {notice.isActive ? "Active" : "Inactive"}
                                                                    </Badge>
                                                                    <Badge variant="outline">
                                                                        Priority: {notice.priority}
                                                                    </Badge>
                                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                                        {format(new Date(notice.createdAt), "MMM d, yyyy")}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CardHeader>
                                                    <CardContent className="pb-4">
                                                        <p className="text-sm text-muted-foreground line-clamp-3">
                                                            {notice.content}
                                                        </p>
                                                    </CardContent>
                                                    <CardFooter className="bg-muted/50 p-3 flex justify-end gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => handleToggleActive(notice)}
                                                        >
                                                            {notice.isActive ? "Deactivate" : "Activate"}
                                                        </Button>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => handleEditClick(notice)}
                                                        >
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </Button>
                                                        <AlertDialog
                                                            open={isDeleteDialogOpen && selectedNoticeId === notice.id}
                                                            onOpenChange={(open) => {
                                                                if (!open) setSelectedNoticeId(null)
                                                                setIsDeleteDialogOpen(open)
                                                            }}
                                                        >
                                                            <AlertDialogTrigger asChild>
                                                                <Button
                                                                    variant="destructive"
                                                                    size="sm"
                                                                    onClick={() => {
                                                                        setSelectedNoticeId(notice.id)
                                                                        setIsDeleteDialogOpen(true)
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
                                                                        This will permanently remove this notice from the database.
                                                                        This action cannot be undone.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={handleDeleteNotice}
                                                                        disabled={isPending}
                                                                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                                    >
                                                                        {
                                                                            isPending ? (
                                                                                <>
                                                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                                    Deleting...
                                                                                </>
                                                                            ) : (
                                                                                <>Delete</>
                                                                            )
                                                                        }
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </CardFooter>
                                                </Card>
                                            </motion.div>
                                        ))
                                    }
                                </AnimatePresence>
                            </motion.div>
                        )
                    }
                </TabsContent>
            </Tabs>
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Edit Notice</DialogTitle>
                        <DialogDescription>
                            Update the notice details below.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="edit-title">Notice Title</Label>
                            <Input
                                id="title"
                                placeholder="Enter notice title..."
                                value={newNotice.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-content">Notice Content</Label>
                            <Textarea
                                id="content"
                                placeholder="Enter notice content..."
                                className="min-h-[200px]"
                                value={newNotice.content}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-priority">Priority</Label>
                            <Input
                                id="priority"
                                type="number"
                                placeholder="0"
                                value={newNotice.priority}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setIsEditDialogOpen(false)
                                setSelectedNoticeId(null)
                                setNewNotice({
                                    title: "",
                                    content: "",
                                    priority: 0,
                                })
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleUpdateNotice}
                            disabled={isPending}
                        >
                            {
                                isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Updating...
                                    </>
                                ) : (
                                    "Update Notice"
                                )
                            }
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </section>
    )
}