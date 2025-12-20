"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
    Calendar, ChevronRight, GraduationCap, Heart, MapPin, Users, Book, Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SmoothScroll from "@/components/smoothscroll"
import { AlumniRegistrationForm } from "./_components/alumniregistrationform"
import { NewsletterSubscriptionForm } from "./_components/newslettersubscritpion"
import { VolunteerSheet } from "./_components/volunteersheet"
import { MentorshipSheet } from "./_components/mentorshipsheet"
import { DonateSheet } from "./_components/donatesheet"
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

const benefits = [
    {
        title: "Networking Opportunities",
        description:
            "Connect with fellow alumni through events, reunions, and our online directory. Build professional relationships and expand your network across industries and regions.",
        icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
        title: "Career Resources",
        description:
            "Access job boards, career counseling, and professional development workshops exclusively for alumni. Receive guidance at any stage of your career journey.",
        icon: <GraduationCap className="h-5 w-5 text-primary" />,
    },
    {
        title: "Campus Privileges",
        description:
            "Enjoy special access to campus facilities, including the library, athletic facilities, and cultural events. Take advantage of discounted tickets to school performances and games.",
        icon: <MapPin className="h-5 w-5 text-primary" />,
    },
    {
        title: "Mentorship Programs",
        description:
            "Share your expertise with current students or connect with experienced alumni in your field. Our mentorship programs foster meaningful relationships and professional growth.",
        icon: <Heart className="h-5 w-5 text-primary" />,
    },
    {
        title: "Continuing Education",
        description:
            "Participate in lifelong learning opportunities through workshops, lectures, and courses offered exclusively to alumni at discounted rates.",
        icon: <Book className="h-5 w-5 text-primary" />,
    },
    {
        title: "Alumni Recognition",
        description:
            "Be recognized for your achievements and contributions through our alumni awards program, featured profiles, and special events celebrating alumni accomplishments.",
        icon: <Award className="h-5 w-5 text-primary" />,
    },
]
const notableAlumni = [
    {
        name: "Omkar Chauhan",
        graduationYear: "2021",
        profession: "Chemical Engineer",
        // achievement:
        //     "Leading researcher in renewable energy solutions, recipient of the National Science Foundation's Early Career Award, and author of over 30 peer-reviewed publications.",
        image: "/alumni/omkarchauhan.jpeg",
    },
    {
        name: "Ram Prasad",
        graduationYear: "2021",
        profession: "Computer Engineer",
        // achievement:
        //     "Founder and CEO of InnovateTech, a pioneering software company valued at $500 million. Named one of Forbes' 'Most Influential Women in Tech' for three consecutive years.",
        image: "/alumni/ramprasad.jpeg",
    },
    {
        name: "Satya Kumar Chaudhary",
        graduationYear: "2021",
        profession: "Computer Engineer",
        // achievement:
        //     "Founder of Global Health Initiative, providing medical care to underserved communities in over 15 countries. Recipient of the International Humanitarian Award in 2022.",
        image: "/alumni/satyakumar.jpeg",
    },
    {
        name: "Shyam Sundar",
        graduationYear: "2021",
        profession: "Computer Engineer",
        // achievement:
        //     "Founder of Global Health Initiative, providing medical care to underserved communities in over 15 countries. Recipient of the International Humanitarian Award in 2022.",
        image: "/alumni/shyamsundar.jpeg",
    },
    {
        name: "Dinesh Kumar Chaudhary",
        graduationYear: "2021",
        profession: "Computer Operator(Police)",
        // achievement:
        //     "Founder of Global Health Initiative, providing medical care to underserved communities in over 15 countries. Recipient of the International Humanitarian Award in 2022.",
        image: "/alumni/dipeshkumar.jpeg",
    },
    {
        name: "Pradeep Kumar",
        graduationYear: "2021",
        profession: "Computer Engineer",
        // achievement:
        //     "Founder of Global Health Initiative, providing medical care to underserved communities in over 15 countries. Recipient of the International Humanitarian Award in 2022.",
        image: "/alumni/pradeepkumar.jpeg",
    }
]
interface AlumniEvent {
    id: string
    title: string
    description: string
    date: Date
    location?: string | null
}

export default function AlumniPage() {
    const [alumniEvents, setAlumniEvents] = useState<AlumniEvent[]>([])
    const [isLoadingEvents, setIsLoadingEvents] = useState(true)

    useEffect(() => {
        async function fetchEvents() {
            try {
                const result = await getEvents('ALUMNI')
                if (result.success && result.events) {
                    setAlumniEvents(result.events as AlumniEvent[])
                }
            } catch (error) {
                console.error("Failed to fetch alumni events:", error)
            } finally {
                setIsLoadingEvents(false)
            }
        }
        fetchEvents()
    }, [])
    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    <section className="relative">
                        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                            <Image
                                src="/alumni/mainimage.png"
                                alt="Alumni gathering"
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
                                        Alumni Network
                                    </motion.h1>
                                    <motion.p
                                        className="text-base md:text-lg text-white/90 max-w-md mx-auto"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                    >
                                        Stay connected with the Horizon Academy community and fellow graduates
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6">
                        <motion.div
                            className="grid gap-12 md:grid-cols-2 items-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                                        Join Our Network
                                    </Badge>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                        Welcome to Our Alumni Community
                                    </h2>
                                </motion.div>
                                <motion.p
                                    className="text-lg text-muted-foreground leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                >
                                    The Janchetana Alumni Network connects thousands of graduates across the globe. Our alumni are
                                    leaders, innovators, and change-makers in diverse fields, carrying forward the values and excellence
                                    instilled during their time at our school.
                                </motion.p>
                                <motion.p
                                    className="text-lg text-muted-foreground leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    Whether you graduated recently or decades ago, you remain an important part of our community. We invite
                                    you to stay connected, participate in alumni events, mentor current students, and contribute to the
                                    continued growth and success of Janchetana School.
                                </motion.p>
                                <motion.div
                                    className="flex flex-wrap gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <AlumniRegistrationForm />
                                </motion.div>
                            </div>
                            <motion.div
                                className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 border-primary/10"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src="/alumni/mainimage.png"
                                    alt="Alumni networking"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </section>
                    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-secondary/30 via-secondary/20 to-transparent dark:from-gray-900/40 dark:via-gray-900/30">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                                    Benefits
                                </Badge>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Alumni Benefits</h2>
                                <p className="text-lg text-muted-foreground">
                                    Discover the advantages of staying connected with your alma mater
                                </p>
                            </motion.div>
                            <motion.div
                                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {
                                    benefits.map((benefit, index) => (
                                        <BenefitCard key={index} {...benefit} />
                                    ))
                                }
                            </motion.div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                                Success Stories
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Notable Alumni</h2>
                            <p className="text-lg text-muted-foreground">Celebrating the achievements of our distinguished graduates</p>
                        </motion.div>
                        <motion.div
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {
                                notableAlumni.map((alumni) => (
                                    <AlumniCard key={alumni.name} {...alumni} />
                                ))
                            }
                        </motion.div>
                    </section>
                    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-secondary/30 via-secondary/20 to-transparent dark:from-gray-900/40 dark:via-gray-900/30">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                                    Events
                                </Badge>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Upcoming Alumni Events</h2>
                                <p className="text-lg text-muted-foreground">
                                    Join us for these special events designed to reconnect and celebrate our alumni community
                                </p>
                            </motion.div>
                            {
                                isLoadingEvents ? (
                                    <div className="flex items-center justify-center py-12">
                                        <div className="text-muted-foreground">Loading events...</div>
                                    </div>
                                ) : alumniEvents.length > 0 ? (
                                    <>
                                        <motion.div
                                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {
                                                alumniEvents.map((event) => (
                                                    <EventCard
                                                        key={event.id}
                                                        title={event.title}
                                                        date={format(new Date(event.date), "MMMM d, yyyy")}
                                                        location={event.location || "TBA"}
                                                        description={event.description}
                                                    />
                                                ))
                                            }
                                        </motion.div>
                                    </>
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
                                        <p className="text-muted-foreground">No alumni events scheduled at the moment. Check back soon for updates!</p>
                                    </motion.div>
                                )
                            }
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                                Get Involved
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get Involved</h2>
                            <p className="text-lg text-muted-foreground">
                                There are many ways to give back and stay connected with the Janchetana School community
                            </p>
                        </motion.div>
                        <div className="grid gap-6 md:grid-cols-3">
                            <motion.div
                                className="space-y-6 p-6 rounded-lg border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Volunteer Opportunities</h3>
                                    <p className="text-muted-foreground">
                                        Share your time and expertise with the Janchetana School community.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>Speaking at career days</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>Organizing alumni events</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>Supporting school activities</span>
                                        </li>
                                    </ul>
                                    <VolunteerSheet>
                                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                            Explore Volunteer Opportunities
                                        </Button>
                                    </VolunteerSheet>
                                </div>
                            </motion.div>
                            <motion.div
                                className="space-y-6 p-6 rounded-lg border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            >
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Mentor a Student</h3>
                                    <p className="text-muted-foreground">
                                        Make a meaningful impact by mentoring current students.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>Career guidance</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>Share experiences</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>Professional development</span>
                                        </li>
                                    </ul>
                                    <MentorshipSheet>
                                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                            Join Mentorship Program
                                        </Button>
                                    </MentorshipSheet>
                                </div>
                            </motion.div>
                            <motion.div
                                className="space-y-6 p-6 rounded-lg border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Support Future Generations</h3>
                                    <p className="text-muted-foreground">
                                        Your contributions help ensure quality education for all students.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>Scholarships</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>Facility improvements</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                            <span>Program enhancements</span>
                                        </li>
                                    </ul>
                                    <DonateSheet>
                                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                            Make a Donation
                                        </Button>
                                    </DonateSheet>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-secondary/30 via-secondary/20 to-transparent dark:from-gray-900/40 dark:via-gray-900/30">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                                    Newsletter
                                </Badge>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Stay Connected</h2>
                                <p className="text-lg text-muted-foreground">
                                    Keep up with the latest alumni news, events, and opportunities
                                </p>
                            </motion.div>
                            <motion.div
                                className="max-w-md mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <NewsletterSubscriptionForm />
                            </motion.div>
                            {/* <motion.div
                                className="flex justify-center mt-8 gap-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <Button variant="outline" className="gap-1">
                                    <Mail className="h-4 w-4" />
                                    Contact Alumni Office
                                </Button>
                                <Button variant="outline" className="gap-1">
                                    Update Your Information
                                </Button>
                            </motion.div> */}
                        </div>
                    </section>
                </main>
            </div>
        </SmoothScroll>
    )
}

function BenefitCard({
    title,
    description,
    icon,
}: {
    title: string
    description: string
    icon: React.ReactNode
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="h-full">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">{icon}</div>
                        <CardTitle>{title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

function AlumniCard({
    name,
    graduationYear,
    profession,
    achievement,
    image,
}: {
    name: string
    graduationYear: string
    profession: string
    achievement?: string
    image: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[3/4] w-full">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={name}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                        quality={95}
                    />
                </div>
                <CardHeader className="flex-none">
                    <div className="flex justify-between items-start gap-2">
                        <div>
                            <CardTitle className="line-clamp-1">{name}</CardTitle>
                            <CardDescription>Class of {graduationYear}</CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-primary/5 whitespace-nowrap">
                            {profession}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{achievement}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

function EventCard({
    title,
    date,
    location,
    description,
}: {
    title: string
    date: string
    location: string
    description: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription className="flex flex-col gap-2 mt-2">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="font-medium">{date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{location}</span>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground line-clamp-4">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}