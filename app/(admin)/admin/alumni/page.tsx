"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
    Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Users, Mail, Heart, DollarSign, Calendar,
    ArrowRight, UserCheck
} from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
import {
    getAllAlumniRegistrations, getAllNewsletterSubscriptions
} from "@/actions/alumni.action"
import {
    getAllVolunteerRequests, getAllMentorshipRequests, getAllDonationRequests
} from "@/actions/alumni-requests.action"
import { getAllEvents } from "@/actions/event.action"

export default function AlumniDashboard() {
    const [stats, setStats] = useState({
        totalRegistrations: 0,
        totalNewsletters: 0,
        totalVolunteerRequests: 0,
        totalMentorshipRequests: 0,
        totalDonationRequests: 0,
        totalEvents: 0,
    })
    interface RecentData {
        registrations: Array<{ id: string; firstName: string; lastName: string; email: string; createdAt: Date }>
        newsletters: Array<{ id: string; firstName: string; lastName: string; email: string; createdAt: Date }>
        volunteerRequests: Array<{ id: string; firstName: string; lastName: string; status: string }>
        mentorshipRequests: Array<{ id: string; firstName: string; lastName: string; status: string }>
        donationRequests: Array<{ id: string; firstName: string; lastName: string; amount?: string | null; status: string }>
        events: Array<{ id: string; title: string; date: Date }>
    }

    const [recentData, setRecentData] = useState<RecentData>({
        registrations: [],
        newsletters: [],
        volunteerRequests: [],
        mentorshipRequests: [],
        donationRequests: [],
        events: [],
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const [regResult, newsResult, volResult, mentResult, donResult, eventsResult] = await Promise.all([
                    getAllAlumniRegistrations(),
                    getAllNewsletterSubscriptions(),
                    getAllVolunteerRequests(),
                    getAllMentorshipRequests(),
                    getAllDonationRequests(),
                    getAllEvents(),
                ])

                const registrations = regResult.success ? (regResult.registrations || []) as RecentData['registrations'] : []
                const newsletters = newsResult.success ? (newsResult.subscriptions || []) as RecentData['newsletters'] : []
                const volunteerRequests = volResult.success ? (volResult.requests || []) as RecentData['volunteerRequests'] : []
                const mentorshipRequests = mentResult.success ? (mentResult.requests || []) as RecentData['mentorshipRequests'] : []
                const donationRequests = donResult.success ? (donResult.requests || []) as RecentData['donationRequests'] : []
                const events = eventsResult.success ? (eventsResult.events || []).filter((e: { eventType: string }) => e.eventType === 'ALUMNI') as RecentData['events'] : []

                setStats({
                    totalRegistrations: registrations.length,
                    totalNewsletters: newsletters.length,
                    totalVolunteerRequests: volunteerRequests.length,
                    totalMentorshipRequests: mentorshipRequests.length,
                    totalDonationRequests: donationRequests.length,
                    totalEvents: events.length,
                })

                setRecentData({
                    registrations: registrations.slice(0, 2),
                    newsletters: newsletters.slice(0, 2),
                    volunteerRequests: volunteerRequests.slice(0, 2),
                    mentorshipRequests: mentorshipRequests.slice(0, 2),
                    donationRequests: donationRequests.slice(0, 2),
                    events: events.slice(0, 2),
                })
            } catch (error) {
                console.error("Error fetching dashboard data:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    const statCards = [
        { title: "Alumni Registrations", value: stats.totalRegistrations, icon: Users, color: "text-blue-600", bg: "bg-blue-50", link: "/admin/alumni/registrations" },
        { title: "Newsletter Subscribers", value: stats.totalNewsletters, icon: Mail, color: "text-green-600", bg: "bg-green-50", link: "/admin/alumni/newsletter" },
        { title: "Volunteer Requests", value: stats.totalVolunteerRequests, icon: Heart, color: "text-purple-600", bg: "bg-purple-50", link: "/admin/alumni/volunteer" },
        { title: "Mentorship Requests", value: stats.totalMentorshipRequests, icon: UserCheck, color: "text-orange-600", bg: "bg-orange-50", link: "/admin/alumni/mentorship" },
        { title: "Donation Requests", value: stats.totalDonationRequests, icon: DollarSign, color: "text-teal-600", bg: "bg-teal-50", link: "/admin/alumni/donate" },
        { title: "Alumni Events", value: stats.totalEvents, icon: Calendar, color: "text-red-600", bg: "bg-red-50", link: "/admin/alumni/events" },
    ]

    if (isLoading) {
        return (
            <div className="container mx-auto py-8 px-4">
                <div className="text-center py-12">Loading Alumni dashboard...</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Alumni Dashboard</h1>
                <p className="text-muted-foreground">Overview of all alumni-related activities and data</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {
                    statCards.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={stat.link}>
                                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                                        <div className={`${stat.bg} p-2 rounded-lg`}>
                                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{stat.value}</div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))
                }
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Recent Registrations</CardTitle>
                        <Link href="/admin/alumni/registrations">
                            <Button variant="ghost" size="sm">
                                View All <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        {
                            recentData.registrations.length > 0 ? (
                                <div className="space-y-3">
                                    {
                                        recentData.registrations.map((reg) => (
                                            <div key={reg.id} className="flex items-center justify-between text-sm">
                                                <div>
                                                    <p className="font-medium">{reg.firstName} {reg.lastName}</p>
                                                    <p className="text-muted-foreground text-xs">{reg.email}</p>
                                                </div>
                                                <Badge variant="outline" className="text-xs">
                                                    {format(new Date(reg.createdAt), "MMM d")}
                                                </Badge>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p className="text-sm text-muted-foreground">No recent registrations</p>
                            )
                        }
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Recent Subscriptions</CardTitle>
                        <Link href="/admin/alumni/newsletter">
                            <Button variant="ghost" size="sm">
                                View All <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        {
                            recentData.newsletters.length > 0 ? (
                                <div className="space-y-3">
                                    {
                                        recentData.newsletters.map((sub) => (
                                            <div key={sub.id} className="flex items-center justify-between text-sm">
                                                <div>
                                                    <p className="font-medium">{sub.firstName} {sub.lastName}</p>
                                                    <p className="text-muted-foreground text-xs">{sub.email}</p>
                                                </div>
                                                <Badge variant="outline" className="text-xs">
                                                    {format(new Date(sub.createdAt), "MMM d")}
                                                </Badge>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p className="text-sm text-muted-foreground">No recent subscriptions</p>
                            )
                        }
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Recent Volunteer Requests</CardTitle>
                        <Link href="/admin/alumni/volunteer">
                            <Button variant="ghost" size="sm">
                                View All <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        {
                            recentData.volunteerRequests.length > 0 ? (
                                <div className="space-y-3">
                                    {
                                        recentData.volunteerRequests.map((req) => (
                                            <div key={req.id} className="flex items-center justify-between text-sm">
                                                <div>
                                                    <p className="font-medium">{req.firstName} {req.lastName}</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Badge variant={req.status === 'pending' ? 'secondary' : req.status === 'approved' ? 'default' : 'destructive'} className="text-xs">
                                                            {req.status}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p className="text-sm text-muted-foreground">No recent requests</p>
                            )
                        }
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Recent Mentorship Requests</CardTitle>
                        <Link href="/admin/alumni/mentorship">
                            <Button variant="ghost" size="sm">
                                View All <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        {
                            recentData.mentorshipRequests.length > 0 ? (
                                <div className="space-y-3">
                                    {
                                        recentData.mentorshipRequests.map((req) => (
                                            <div key={req.id} className="flex items-center justify-between text-sm">
                                                <div>
                                                    <p className="font-medium">{req.firstName} {req.lastName}</p>
                                                    <Badge variant={req.status === 'pending' ? 'secondary' : req.status === 'approved' ? 'default' : 'destructive'} className="text-xs mt-1">
                                                        {req.status}
                                                    </Badge>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p className="text-sm text-muted-foreground">No recent requests</p>
                            )
                        }
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Recent Donation Requests</CardTitle>
                        <Link href="/admin/alumni/donate">
                            <Button variant="ghost" size="sm">
                                View All <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        {
                            recentData.donationRequests.length > 0 ? (
                                <div className="space-y-3">
                                    {
                                        recentData.donationRequests.map((req) => (
                                            <div key={req.id} className="flex items-center justify-between text-sm">
                                                <div>
                                                    <p className="font-medium">{req.firstName} {req.lastName}</p>
                                                    <p className="text-muted-foreground text-xs">
                                                        {req.amount ? `NPR ${req.amount}` : 'Amount not specified'}
                                                    </p>
                                                </div>
                                                <Badge variant={req.status === 'pending' ? 'secondary' : req.status === 'approved' ? 'default' : 'destructive'} className="text-xs">
                                                    {req.status}
                                                </Badge>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p className="text-sm text-muted-foreground">No recent requests</p>
                            )
                        }
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Recent Alumni Events</CardTitle>
                        <Link href="/admin/alumni/events">
                            <Button variant="ghost" size="sm">
                                View All <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        {
                            recentData.events.length > 0 ? (
                                <div className="space-y-3">
                                    {
                                        recentData.events.map((event) => (
                                            <div key={event.id} className="text-sm">
                                                <p className="font-medium line-clamp-1">{event.title}</p>
                                                <p className="text-muted-foreground text-xs mt-1">
                                                    {format(new Date(event.date), "MMM d, yyyy")}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p className="text-sm text-muted-foreground">No recent events</p>
                            )
                        }
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}