"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
    Calendar, MapPin
} from "lucide-react"
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/navbar"
import { Footer } from "@/components/footer"
import SmoothScroll from "@/components/smoothscroll"
import { getEvents } from "@/actions/event.action"
import { format } from "date-fns"

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

interface SchoolEvent {
    id: string
    title: string
    description: string
    date: Date
    location?: string | null
}

export default function SchoolEventsPage() {
    const [schoolEvents, setSchoolEvents] = useState<SchoolEvent[]>([])
    const [isLoadingEvents, setIsLoadingEvents] = useState(true)

    useEffect(() => {
        async function fetchEvents() {
            try {
                const result = await getEvents('SCHOOL')
                if (result.success && result.events) {
                    setSchoolEvents(result.events as SchoolEvent[])
                }
            } catch (error) {
                console.error("Failed to fetch school events:", error)
            } finally {
                setIsLoadingEvents(false)
            }
        }
        fetchEvents()
    }, [])

    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col">
                <MainNav />
                <main className="flex-1 pt-24">
                    <section className="relative">
                        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                            <Image
                                src="/alumni/mainimage.png"
                                alt="School events"
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                            <div className="container relative z-10 flex h-full flex-col items-center justify-center text-white text-center">
                                <motion.div
                                    className="max-w-2xl space-y-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <motion.h1
                                        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                    >
                                        School Events
                                    </motion.h1>
                                    <motion.p
                                        className="text-base md:text-lg text-white/90 max-w-md mx-auto"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                    >
                                        Stay updated with all the exciting events happening at Janchetana School
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-16 bg-secondary/20 dark:bg-gray-900/30">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Badge className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
                                    Upcoming Events
                                </Badge>
                                <h2 className="text-3xl font-bold tracking-tight mb-4">School Calendar</h2>
                                <p className="text-lg text-muted-foreground">
                                    Join us for these special events designed to enrich our school community
                                </p>
                            </motion.div>

                            {
                                isLoadingEvents ? (
                                    <div className="flex items-center justify-center py-12">
                                        <div className="text-muted-foreground">Loading events...</div>
                                    </div>
                                ) : schoolEvents.length > 0 ? (
                                    <motion.div
                                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {
                                            schoolEvents.map((event) => {
                                                const eventDate = new Date(event.date)
                                                const isPast = eventDate < new Date()

                                                return (
                                                    <motion.div key={event.id} variants={fadeInUp}>
                                                        <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 group">
                                                            <CardHeader>
                                                                <div className="flex items-start justify-between gap-2 mb-2">
                                                                    <CardTitle className="text-xl line-clamp-2">{event.title}</CardTitle>
                                                                    {
                                                                        isPast && (
                                                                            <Badge variant="secondary" className="flex-shrink-0">
                                                                                Past
                                                                            </Badge>
                                                                        )
                                                                    }
                                                                </div>
                                                                <CardDescription className="flex flex-col gap-2 mt-2">
                                                                    <div className="flex items-center gap-2">
                                                                        <Calendar className="h-4 w-4 text-primary" />
                                                                        <span className="font-medium">{format(eventDate, "MMMM d, yyyy")}</span>
                                                                    </div>
                                                                    {
                                                                        event.location && (
                                                                            <div className="flex items-center gap-2">
                                                                                <MapPin className="h-4 w-4 text-primary" />
                                                                                <span>{event.location}</span>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </CardDescription>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <p className="text-muted-foreground line-clamp-4">{event.description}</p>
                                                            </CardContent>
                                                        </Card>
                                                    </motion.div>
                                                )
                                            })
                                        }
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        className="text-center py-12"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                                        <p className="text-muted-foreground">No school events scheduled at the moment. Check back soon for updates!</p>
                                    </motion.div>
                                )
                            }
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    )
}