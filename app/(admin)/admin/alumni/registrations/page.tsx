"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
    Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllAlumniRegistrations } from "@/actions/alumni.action"
import { format } from "date-fns"
import {
    Loader2, Users, Mail, Phone, Calendar, GraduationCap, Briefcase, Building, MapPin, Globe, CheckCircle, XCircle, Eye, Book
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog"
import { toast } from "sonner"

interface AlumniRegistration {
    id: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    graduationYear: string
    course?: string | null
    profession?: string | null
    company?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    bio?: string | null
    socialLinks?: {
        linkedin?: string
        twitter?: string
        facebook?: string
    } | null
    interests?: string | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
}

export default function AlumniRegistrationsPage() {
    const [registrations, setRegistrations] = useState<AlumniRegistration[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedRegistration, setSelectedRegistration] = useState<AlumniRegistration | null>(null)
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

    useEffect(() => {
        async function fetchRegistrations() {
            setIsLoading(true)
            const result = await getAllAlumniRegistrations()
            if (result.success && result.registrations) {
                setRegistrations(result.registrations as AlumniRegistration[])
            } else {
                toast("Error", {
                    description: result.error || "Failed to fetch alumni registrations.",
                })
            }
            setIsLoading(false)
        }
        fetchRegistrations()
    }, [])

    const handleViewRegistration = (registration: AlumniRegistration) => {
        setSelectedRegistration(registration)
        setIsViewDialogOpen(true)
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
        <motion.section
            initial="hidden"
            animate="show"
            variants={container}
            className="space-y-6 p-6"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Alumni Registrations</h1>
                    <p className="text-muted-foreground mt-1">View all alumni who have registered for the network</p>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                    {registrations.length} Total
                </Badge>
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center h-60">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="ml-4 text-xl text-muted-foreground">Loading registrations...</p>
                </div>
            ) : registrations.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                    <Users className="h-16 w-16 mb-4 text-primary/60" />
                    <h3 className="text-2xl font-bold mb-2">No Alumni Registrations Yet</h3>
                    <p className="text-lg text-center max-w-xl">
                        Alumni can register through the main alumni page. Registrations will appear here once submitted.
                    </p>
                </div>
            ) : (
                <ScrollArea className="h-[calc(100vh-200px)]">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pr-4"
                    >
                        <AnimatePresence>
                            {registrations.map((registration) => (
                                <motion.div key={registration.id} variants={item} layout>
                                    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <CardTitle className="line-clamp-1 text-lg">
                                                    {registration.firstName} {registration.lastName}
                                                </CardTitle>
                                                <Badge
                                                    variant={registration.isVerified ? "default" : "secondary"}
                                                    className="ml-2"
                                                >
                                                    {registration.isVerified ? (
                                                        <CheckCircle className="h-3 w-3 mr-1" />
                                                    ) : (
                                                        <XCircle className="h-3 w-3 mr-1" />
                                                    )}
                                                    {registration.isVerified ? "Verified" : "Pending"}
                                                </Badge>
                                            </div>
                                            <div className="flex flex-col gap-1 mt-2 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-4 w-4" />
                                                    <span className="truncate">{registration.email}</span>
                                                </div>
                                                {registration.phone && (
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="h-4 w-4" />
                                                        <span>{registration.phone}</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2">
                                                    <GraduationCap className="h-4 w-4" />
                                                    <span>Class of {registration.graduationYear}</span>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow space-y-2">
                                            {registration.profession && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-muted-foreground">{registration.profession}</span>
                                                </div>
                                            )}
                                            {registration.company && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Building className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-muted-foreground">{registration.company}</span>
                                                </div>
                                            )}
                                            {registration.city && registration.country && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-muted-foreground">
                                                        {registration.city}, {registration.country}
                                                    </span>
                                                </div>
                                            )}
                                            {registration.course && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Book className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-muted-foreground">{registration.course}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t">
                                                <Calendar className="h-4 w-4" />
                                                <span>Registered {format(new Date(registration.createdAt), "MMM d, yyyy")}</span>
                                            </div>
                                        </CardContent>
                                        <div className="px-6 pb-4">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => handleViewRegistration(registration)}
                                            >
                                                <Eye className="h-4 w-4 mr-2" />
                                                View Details
                                            </Button>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </ScrollArea>
            )}

            <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
                <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Alumni Registration Details</DialogTitle>
                        <DialogDescription>
                            Complete information about {selectedRegistration?.firstName} {selectedRegistration?.lastName}&apos;s registration.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedRegistration && (
                        <div className="space-y-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">First Name</p>
                                    <p className="text-base font-semibold">{selectedRegistration.firstName}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Last Name</p>
                                    <p className="text-base font-semibold">{selectedRegistration.lastName}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Email</p>
                                <p className="text-base">{selectedRegistration.email}</p>
                            </div>
                            {selectedRegistration.phone && (
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                                    <p className="text-base">{selectedRegistration.phone}</p>
                                </div>
                            )}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Graduation Year</p>
                                    <p className="text-base">{selectedRegistration.graduationYear}</p>
                                </div>
                                {selectedRegistration.course && (
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Course</p>
                                        <p className="text-base">{selectedRegistration.course}</p>
                                    </div>
                                )}
                            </div>
                            {selectedRegistration.profession && (
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Profession</p>
                                    <p className="text-base">{selectedRegistration.profession}</p>
                                </div>
                            )}
                            {selectedRegistration.company && (
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Company</p>
                                    <p className="text-base">{selectedRegistration.company}</p>
                                </div>
                            )}
                            {selectedRegistration.address && (
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                                    <p className="text-base">{selectedRegistration.address}</p>
                                </div>
                            )}
                            <div className="grid grid-cols-2 gap-4">
                                {selectedRegistration.city && (
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">City</p>
                                        <p className="text-base">{selectedRegistration.city}</p>
                                    </div>
                                )}
                                {selectedRegistration.country && (
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Country</p>
                                        <p className="text-base">{selectedRegistration.country}</p>
                                    </div>
                                )}
                            </div>
                            {selectedRegistration.bio && (
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Bio</p>
                                    <p className="text-base whitespace-pre-wrap">{selectedRegistration.bio}</p>
                                </div>
                            )}
                            {selectedRegistration.interests && (
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Interests</p>
                                    <p className="text-base">{selectedRegistration.interests}</p>
                                </div>
                            )}
                            {selectedRegistration.socialLinks && (
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground mb-2">Social Links</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedRegistration.socialLinks.linkedin && (
                                            <a
                                                href={selectedRegistration.socialLinks.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                                            >
                                                <Globe className="h-4 w-4" />
                                                LinkedIn
                                            </a>
                                        )}
                                        {selectedRegistration.socialLinks.twitter && (
                                            <a
                                                href={selectedRegistration.socialLinks.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                                            >
                                                <Globe className="h-4 w-4" />
                                                Twitter
                                            </a>
                                        )}
                                        {selectedRegistration.socialLinks.facebook && (
                                            <a
                                                href={selectedRegistration.socialLinks.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                                            >
                                                <Globe className="h-4 w-4" />
                                                Facebook
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Verification Status</p>
                                    <Badge
                                        variant={selectedRegistration.isVerified ? "default" : "secondary"}
                                        className="mt-1"
                                    >
                                        {selectedRegistration.isVerified ? (
                                            <>
                                                <CheckCircle className="h-3 w-3 mr-1" />
                                                Verified
                                            </>
                                        ) : (
                                            <>
                                                <XCircle className="h-3 w-3 mr-1" />
                                                Pending
                                            </>
                                        )}
                                    </Badge>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Registered On</p>
                                    <p className="text-base">{format(new Date(selectedRegistration.createdAt), "PPP p")}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </motion.section>
    )
}

