"use client"

import { useState, useEffect, useTransition } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    getAllVolunteerRequests, updateVolunteerRequestStatus,
    getAllVolunteerOpportunities, createVolunteerOpportunity, deleteVolunteerOpportunity
} from "@/actions/alumni-requests.action"
import { format } from "date-fns"
import { Heart, Mail, Phone, Calendar, Loader2, Plus, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"

export default function VolunteerPage() {
    const [requests, setRequests] = useState<Array<{ id: string; firstName: string; lastName: string; email: string; phone?: string | null; subject?: string | null; message?: string | null; status: string; createdAt: Date; opportunity?: { title: string } | null }>>([])
    const [opportunities, setOpportunities] = useState<Array<{ id: string; title: string; description: string; subject?: string | null; isActive: boolean }>>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isPending, startTransition] = useTransition()
    const [currentTab, setCurrentTab] = useState("requests")
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [selectedOpportunityId, setSelectedOpportunityId] = useState<string | null>(null)
    const router = useRouter()

    const [newOpportunity, setNewOpportunity] = useState({
        title: "",
        description: "",
        subject: "",
    })

    useEffect(() => {
        async function fetchData() {
            const [reqResult, oppResult] = await Promise.all([
                getAllVolunteerRequests(),
                getAllVolunteerOpportunities(),
            ])
            if (reqResult.success) {
                setRequests(reqResult.requests || [])
            }
            if (oppResult.success) {
                setOpportunities(oppResult.opportunities || [])
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])

    const handleStatusUpdate = (id: string, status: string) => {
        startTransition(async () => {
            const result = await updateVolunteerRequestStatus(id, status)
            if (result.success) {
                setRequests(requests.map(req => req.id === id ? { ...req, status } : req))
                toast("Status Updated", {
                    description: "The request status has been updated.",
                })
                router.refresh()
            } else {
                toast("Error", {
                    description: result.error || "Failed to update status.",
                })
            }
        })
    }

    const handleCreateOpportunity = () => {
        if (!newOpportunity.title.trim() || !newOpportunity.description.trim()) {
            toast("Validation Error", {
                description: "Title and description are required.",
            })
            return
        }

        startTransition(async () => {
            const result = await createVolunteerOpportunity(newOpportunity)
            if (result.success) {
                if (result.opportunity) {
                    setOpportunities([result.opportunity, ...opportunities])
                }
                setNewOpportunity({ title: "", description: "", subject: "" })
                toast("Opportunity Created", {
                    description: "The volunteer opportunity has been created.",
                })
                router.refresh()
            } else {
                toast("Error", {
                    description: result.error || "Failed to create opportunity.",
                })
            }
        })
    }

    const handleDeleteOpportunity = () => {
        if (!selectedOpportunityId) return

        startTransition(async () => {
            const result = await deleteVolunteerOpportunity(selectedOpportunityId)
            if (result.success) {
                setOpportunities(opportunities.filter(opp => opp.id !== selectedOpportunityId))
                toast("Opportunity Deleted", {
                    description: "The opportunity has been removed.",
                })
                setSelectedOpportunityId(null)
                setIsDeleteDialogOpen(false)
                router.refresh()
            } else {
                toast("Error", {
                    description: result.error || "Failed to delete opportunity.",
                })
            }
        })
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'approved':
                return <Badge className="bg-green-500">Approved</Badge>
            case 'rejected':
                return <Badge variant="destructive">Rejected</Badge>
            default:
                return <Badge variant="secondary">Pending</Badge>
        }
    }

    if (isLoading) {
        return (
            <div className="container mx-auto py-8 px-4">
                <div className="text-center py-12">Loading...</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Volunteer Management</h1>
                <p className="text-muted-foreground">Manage volunteer opportunities and requests</p>
            </div>

            <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="requests">Requests ({requests.length})</TabsTrigger>
                    <TabsTrigger value="opportunities">Opportunities ({opportunities.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="requests" className="mt-6">
                    {requests.length === 0 ? (
                        <Card>
                            <CardContent className="py-12 text-center">
                                <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <p className="text-muted-foreground">No volunteer requests yet.</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid gap-4">
                            {requests.map((request) => (
                                <motion.div
                                    key={request.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <CardTitle className="text-lg mb-2">
                                                        {request.firstName} {request.lastName}
                                                    </CardTitle>
                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-1">
                                                            <Mail className="h-4 w-4" />
                                                            <span>{request.email}</span>
                                                        </div>
                                                        {request.phone && (
                                                            <div className="flex items-center gap-1">
                                                                <Phone className="h-4 w-4" />
                                                                <span>{request.phone}</span>
                                                            </div>
                                                        )}
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="h-4 w-4" />
                                                            <span>{format(new Date(request.createdAt), "MMM d, yyyy")}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {getStatusBadge(request.status)}
                                                    <Select
                                                        value={request.status}
                                                        onValueChange={(value) => handleStatusUpdate(request.id, value)}
                                                        disabled={isPending}
                                                    >
                                                        <SelectTrigger className="w-32">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="pending">Pending</SelectItem>
                                                            <SelectItem value="approved">Approved</SelectItem>
                                                            <SelectItem value="rejected">Rejected</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            {request.opportunity && (
                                                <div className="text-sm">
                                                    <span className="text-muted-foreground">Opportunity:</span>
                                                    <span className="font-medium ml-2">{request.opportunity.title}</span>
                                                </div>
                                            )}
                                            {request.subject && (
                                                <div className="text-sm">
                                                    <span className="text-muted-foreground">Subject/Area:</span>
                                                    <span className="font-medium ml-2">{request.subject}</span>
                                                </div>
                                            )}
                                            {request.message && (
                                                <div className="text-sm">
                                                    <span className="text-muted-foreground">Message:</span>
                                                    <p className="mt-1">{request.message}</p>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="opportunities" className="mt-6">
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Create New Opportunity</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title *</Label>
                                <Input
                                    id="title"
                                    value={newOpportunity.title}
                                    onChange={(e) => setNewOpportunity({ ...newOpportunity, title: e.target.value })}
                                    placeholder="e.g. Career Day Speaker"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description *</Label>
                                <Textarea
                                    id="description"
                                    value={newOpportunity.description}
                                    onChange={(e) => setNewOpportunity({ ...newOpportunity, description: e.target.value })}
                                    placeholder="Describe the volunteer opportunity..."
                                    className="min-h-[100px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject/Area (Optional)</Label>
                                <Input
                                    id="subject"
                                    value={newOpportunity.subject}
                                    onChange={(e) => setNewOpportunity({ ...newOpportunity, subject: e.target.value })}
                                    placeholder="e.g. Technology, Business, Science"
                                />
                            </div>
                            <Button onClick={handleCreateOpportunity} disabled={isPending} className="w-full">
                                {isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Creating...
                                    </>
                                ) : (
                                    <>
                                        <Plus className="mr-2 h-4 w-4" />
                                        Create Opportunity
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {opportunities.length === 0 ? (
                        <Card>
                            <CardContent className="py-12 text-center">
                                <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <p className="text-muted-foreground">No volunteer opportunities created yet.</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid gap-4">
                            {opportunities.map((opportunity) => (
                                <motion.div
                                    key={opportunity.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                                                    {opportunity.subject && (
                                                        <p className="text-sm text-muted-foreground mt-1">
                                                            Subject: {opportunity.subject}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant={opportunity.isActive ? "default" : "secondary"}>
                                                        {opportunity.isActive ? "Active" : "Inactive"}
                                                    </Badge>
                                                    <AlertDialog open={isDeleteDialogOpen && selectedOpportunityId === opportunity.id} onOpenChange={(open) => {
                                                        setIsDeleteDialogOpen(open)
                                                        if (!open) setSelectedOpportunityId(null)
                                                    }}>
                                                        <AlertDialogTrigger asChild>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => {
                                                                    setSelectedOpportunityId(opportunity.id)
                                                                    setIsDeleteDialogOpen(true)
                                                                }}
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    This will permanently delete this opportunity.
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                <AlertDialogAction onClick={handleDeleteOpportunity} disabled={isPending}>
                                                                    {isPending ? (
                                                                        <>
                                                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                            Deleting...
                                                                        </>
                                                                    ) : (
                                                                        "Delete"
                                                                    )}
                                                                </AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    )
}

