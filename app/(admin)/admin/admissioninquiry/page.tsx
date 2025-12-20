"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { format } from "date-fns"
import {
    Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import {
    getAllAdmissionInquiries, type AdmissionInquiry
} from "@/actions/admission.action"
import {
    UserPlus, Phone, Calendar, Users
} from "lucide-react"
import { toast } from "sonner"
import { Skeleton } from "@/components/ui/skeleton"

export default function AdmissionInquiryPage() {
    const [inquiries, setInquiries] = useState<AdmissionInquiry[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchInquiries() {
            try {
                const result = await getAllAdmissionInquiries()
                if (result.success && result.inquiries) {
                    setInquiries(result.inquiries)
                } else {
                    toast("Error", {
                        description: result.error || "Failed to fetch admission inquiries.",
                    })
                }
            } catch (error) {
                console.error("Failed to fetch admission inquiries:", error)
                toast("Error", {
                    description: "Failed to fetch admission inquiries.",
                })
            } finally {
                setIsLoading(false)
            }
        }
        fetchInquiries()
    }, [])

    const getAdmissionTypeBadge = (type: string) => {
        return type === "NURSERY_8" ? (
            <Badge className="bg-blue-500">Nursery-8</Badge>
        ) : (
            <Badge className="bg-purple-500">Grade 9-12</Badge>
        )
    }

    return (
        <section className="p-6 space-y-6">
            <motion.div
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                        <UserPlus className="h-8 w-8 text-primary" />
                        Admission Inquiries
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        View and manage all admission inquiries from parents
                    </p>
                </div>
                <Badge variant="outline" className="text-lg px-4 py-2">
                    Total: {inquiries.length}
                </Badge>
            </motion.div>
            <Card>
                <CardHeader>
                    <CardTitle>All Admission Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                    {
                        isLoading ? (
                            <div className="space-y-4">
                                {
                                    [1, 2, 3, 4, 5].map((i) => (
                                        <Skeleton key={i} className="h-20 w-full" />
                                    ))
                                }
                            </div>
                        ) : inquiries.length > 0 ? (
                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Parent Name</TableHead>
                                            <TableHead>Phone Number</TableHead>
                                            <TableHead>Admission Type</TableHead>
                                            <TableHead>Number of Children</TableHead>
                                            <TableHead>Desired Classes</TableHead>
                                            <TableHead>Streams</TableHead>
                                            <TableHead>Submitted Date</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            inquiries.map((inquiry) => (
                                                <TableRow key={inquiry.id}>
                                                    <TableCell className="font-medium">
                                                        {inquiry.parentName}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2">
                                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                                            {inquiry.phoneNumber}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        {getAdmissionTypeBadge(inquiry.admissionType)}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2">
                                                            <Users className="h-4 w-4 text-muted-foreground" />
                                                            {inquiry.numberOfChildren}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex flex-wrap gap-1">
                                                            {
                                                                inquiry.desiredClasses.map((cls, idx) => (
                                                                    <Badge
                                                                        key={idx}
                                                                        variant="outline"
                                                                        className="text-xs"
                                                                    >
                                                                        {cls}
                                                                    </Badge>
                                                                ))
                                                            }
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            inquiry.streams && inquiry.streams.length > 0 ? (
                                                                <div className="flex flex-wrap gap-1">
                                                                    {
                                                                        inquiry.streams.map((stream, idx) => (
                                                                            <Badge
                                                                                key={idx}
                                                                                variant="secondary"
                                                                                className="text-xs"
                                                                            >
                                                                                {stream}
                                                                            </Badge>
                                                                        ))
                                                                    }
                                                                </div>
                                                            ) : (
                                                                <span className="text-muted-foreground text-sm">N/A</span>
                                                            )
                                                        }
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <Calendar className="h-4 w-4" />
                                                            {format(new Date(inquiry.createdAt), "MMM d, yyyy")}
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <UserPlus className="h-12 w-12 text-muted-foreground mb-4" />
                                <h3 className="text-lg font-semibold mb-2">No Admission Inquiries</h3>
                                <p className="text-muted-foreground">
                                    No admission inquiries have been submitted yet.
                                </p>
                            </div>
                        )
                    }
                </CardContent>
            </Card>
        </section>
    )
}