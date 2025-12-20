"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
    Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"
import { getAllNewsletterSubscriptions } from "@/actions/alumni.action"
import { format } from "date-fns"
import {
    Mail, Calendar, GraduationCap
} from "lucide-react"
import { toast } from "sonner"

interface NewsletterSubscription {
    id: string
    firstName: string
    lastName: string
    email: string
    graduationYear: string
    createdAt: Date
}

export default function NewsletterPage() {
    const [subscriptions, setSubscriptions] = useState<NewsletterSubscription[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchSubscriptions() {
            const result = await getAllNewsletterSubscriptions()
            if (result.success) {
                setSubscriptions(result.subscriptions || [])
            } else {
                toast("Error", {
                    description: result.error || "Failed to fetch newsletter subscriptions.",
                })
            }
            setIsLoading(false)
        }
        fetchSubscriptions()
    }, [])

    if (isLoading) {
        return (
            <div className="container mx-auto py-8 px-4">
                <div className="text-center py-12">Loading newsletter subscriptions...</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Newsletter Subscriptions</h1>
                <p className="text-muted-foreground">
                    View all alumni who have subscribed to the newsletter ({subscriptions.length} total)
                </p>
            </div>
            {
                subscriptions.length === 0 ? (
                    <Card>
                        <CardContent className="py-12 text-center">
                            <Mail className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                            <p className="text-muted-foreground">No newsletter subscriptions yet.</p>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            subscriptions.map((subscription: NewsletterSubscription) => (
                                <motion.div
                                    key={subscription.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">
                                                {subscription.firstName} {subscription.lastName}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-muted-foreground break-all">{subscription.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-muted-foreground">Class of</span>
                                                <span className="font-medium">{subscription.graduationYear}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-muted-foreground">
                                                    {format(new Date(subscription.createdAt), "MMM d, yyyy")}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}