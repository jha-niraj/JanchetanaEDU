"use client"

import { useState, useEffect, useTransition } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getAllMentorshipRequests, updateMentorshipRequestStatus, type MentorshipRequest } from "@/actions/alumni-requests.action"
import { format } from "date-fns"
import { UserCheck, Mail, Phone, Calendar, GraduationCap, Briefcase, MessageSquare } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function MentorshipPage() {
    const [requests, setRequests] = useState<MentorshipRequest[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    useEffect(() => {
        async function fetchRequests() {
            const result = await getAllMentorshipRequests()
            if (result.success) {
                setRequests(result.requests || [])
            } else {
                toast("Error", {
                    description: result.error || "Failed to fetch mentorship requests.",
                })
            }
            setIsLoading(false)
        }
        fetchRequests()
    }, [])

    const handleStatusUpdate = (id: string, status: string) => {
        startTransition(async () => {
            const result = await updateMentorshipRequestStatus(id, status)
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
                <div className="text-center py-12">Loading mentorship requests...</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Mentorship Requests</h1>
                <p className="text-muted-foreground">Manage mentorship program requests from alumni</p>
            </div>

            {requests.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <UserCheck className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No mentorship requests yet.</p>
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
                                    {request.graduationYear && (
                                        <div className="flex items-center gap-2 text-sm">
                                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-muted-foreground">Graduation Year:</span>
                                            <span className="font-medium">{request.graduationYear}</span>
                                        </div>
                                    )}
                                    {request.currentRole && (
                                        <div className="flex items-center gap-2 text-sm">
                                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-muted-foreground">Current Role:</span>
                                            <span className="font-medium">{request.currentRole}</span>
                                        </div>
                                    )}
                                    {request.interests && (
                                        <div className="text-sm">
                                            <span className="text-muted-foreground">Interests/Expertise:</span>
                                            <p className="mt-1">{request.interests}</p>
                                        </div>
                                    )}
                                    {request.message && (
                                        <div className="text-sm">
                                            <div className="flex items-center gap-2 mb-1">
                                                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-muted-foreground">Message:</span>
                                            </div>
                                            <p className="pl-6">{request.message}</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    )
}

