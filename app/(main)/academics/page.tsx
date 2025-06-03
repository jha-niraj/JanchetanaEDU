"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, ChevronRight, Clock, GraduationCap, Play, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import SmoothScroll from "@/components/smoothscroll"

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

const academicPrograms = [
    {
        title: "Elementary Program",
        description:
            "A foundational curriculum that nurtures curiosity and builds core academic skills through hands-on, project-based learning experiences.",
        grades: "Grades K-5",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        title: "Middle School Program",
        description:
            "A transitional curriculum that balances academic rigor with social-emotional development, preparing students for the challenges of high school.",
        grades: "Grades 6-8",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        title: "High School Program",
        description:
            "A comprehensive college preparatory curriculum that offers advanced coursework, specialized electives, and opportunities for independent research.",
        grades: "Grades 9-12",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        title: "Advanced Placement",
        description:
            "College-level courses that allow students to earn university credit while still in high school, with offerings in over 15 subject areas.",
        grades: "Grades 10-12",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        title: "STEM Focus Program",
        description:
            "An intensive track for students interested in science, technology, engineering, and mathematics, featuring specialized coursework and research opportunities.",
        grades: "Grades 6-12",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        title: "Arts Immersion Program",
        description:
            "A specialized track for artistically inclined students, offering advanced instruction in visual arts, music, theater, and dance alongside academic coursework.",
        grades: "Grades 6-12",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
]
const campusTourLocations = [
    {
        title: "Science Wing",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        title: "Library",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        title: "Athletic Complex",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        title: "Arts Center",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
]
const clubs = [
    {
        title: "Robotics Club",
        description:
            "Design, build, and program robots to compete in regional and national competitions. Learn engineering principles and teamwork.",
        schedule: "Tuesdays & Thursdays, 3:30-5:00 PM",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        advisor: "Mr. David Thompson",
    },
    {
        title: "Debate Team",
        description:
            "Develop public speaking, critical thinking, and research skills while competing in debate tournaments on current events and philosophical topics.",
        schedule: "Mondays & Wednesdays, 3:30-5:00 PM",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        advisor: "Ms. Rebecca Chen",
    },
    {
        title: "Environmental Club",
        description:
            "Work on sustainability initiatives, campus beautification, and community environmental education projects.",
        schedule: "Fridays, 3:30-5:00 PM",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        advisor: "Dr. James Wilson",
    },
]
const sports = [
    {
        title: "Varsity Basketball",
        description:
            "Compete at the highest level of interscholastic basketball, developing athletic skills, teamwork, and sportsmanship.",
        schedule: "Practice: Mon-Fri, 3:30-5:30 PM | Games: Tuesdays & Fridays",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        advisor: "Coach Robert Martinez",
    },
    {
        title: "Swim Team",
        description:
            "Train and compete in various swimming events at local, regional, and state levels. All skill levels welcome.",
        schedule: "Practice: Mon-Fri, 6:00-7:30 AM | Meets: Saturdays",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        advisor: "Coach Sarah Johnson",
    },
    {
        title: "Track & Field",
        description:
            "Participate in running, jumping, and throwing events while building endurance, strength, and athletic technique.",
        schedule: "Practice: Mon-Thurs, 3:30-5:00 PM | Meets: Fridays",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        advisor: "Coach Michael Brown",
    },
]
const arts = [
    {
        title: "Chamber Orchestra",
        description:
            "Perform classical and contemporary pieces in a small ensemble setting. Open to string, woodwind, brass, and percussion players.",
        schedule: "Rehearsals: Tuesdays & Thursdays, 3:30-5:00 PM",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        advisor: "Ms. Jennifer Williams",
    },
    {
        title: "Drama Club",
        description:
            "Produce and perform in two major theatrical productions each year, with opportunities for acting, directing, and technical theater.",
        schedule: "Rehearsals: Mon, Wed, Fri, 3:30-5:30 PM (production dependent)",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        advisor: "Mr. Thomas Garcia",
    },
    {
        title: "Visual Arts Studio",
        description:
            "Create artwork in various media including painting, sculpture, photography, and digital art. Participate in the annual student art exhibition.",
        schedule: "Open Studio: Mon-Thurs, 3:30-5:00 PM",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        advisor: "Ms. Emily Chen",
    },
]
const calendarEvents = [
    {
        title: "First Day of School",
        date: "September 5, 2023",
        description: "Welcome back! Classes begin for all students. Early dismissal at 1:30 PM.",
        type: "Academic",
    },
    {
        title: "Fall Break",
        date: "October 9-13, 2023",
        description: "No classes. School offices remain open except on October 9 (Columbus Day).",
        type: "Holiday",
    },
    {
        title: "Parent-Teacher Conferences",
        date: "November 20-21, 2023",
        description: "Early dismissal at 12:30 PM. Conferences scheduled from 1:00-7:00 PM.",
        type: "Academic",
    },
    {
        title: "Winter Concert",
        date: "December 15, 2023",
        description: "Annual performance by choir, orchestra, and band. Main auditorium at 7:00 PM.",
        type: "Event",
    },
    {
        title: "Winter Break",
        date: "December 22, 2023 - January 5, 2024",
        description: "No classes. School offices closed December 25-26 and January 1-2.",
        type: "Holiday",
    },
    {
        title: "Final Exams (High School)",
        date: "January 22-26, 2024",
        description: "Semester exams for grades 9-12. Special schedule to be announced.",
        type: "Academic",
    },
    {
        title: "Spring Break",
        date: "March 18-22, 2024",
        description: "No classes. School offices remain open with limited hours.",
        type: "Holiday",
    },
    {
        title: "Graduation Ceremony",
        date: "May 31, 2024",
        description: "Commencement for the Class of 2024. Main auditorium at 2:00 PM.",
        type: "Event",
    },
]
const facultySpotlight = [
    {
        name: "Dr. Elizabeth Morgan",
        department: "Science Department Chair",
        image: "/academics/physicsteacher.jpeg",
        bio: "Dr. Morgan has been teaching physics and astronomy at Horizon Academy for 15 years. Her innovative approach to science education has inspired countless students to pursue STEM careers.",
        education: "Ph.D. in Physics, MIT",
    },
    {
        name: "Mr. James Wilson",
        department: "English Literature",
        image: "/academics/computerengineer.jpeg",
        bio: "An award-winning educator with a passion for classic and contemporary literature. Mr. Wilson's creative teaching methods bring literary works to life for his students.",
        education: "M.A. in English Literature, Columbia University",
    }
]

export default function AcademicsPage() {
    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    <section className="w-full">
                        <div className="relative h-[300px] md:h-screen w-full overflow-hidden">
                            <Image
                                src="/studentlife/3.jpeg"
                                alt="Students learning in classroom"
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
                                        Academic Excellence
                                    </motion.h1>
                                    <motion.p
                                        className="text-base md:text-lg text-white/90 max-w-md mx-auto"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                    >
                                        Discover our comprehensive curriculum, innovative teaching methods, and enriching student activities
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Academic Programs</h2>
                            <p className="text-lg text-muted-foreground">
                                Our comprehensive curriculum is designed to challenge, inspire, and prepare students for future success
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
                                academicPrograms.map((program) => (
                                    <AcademicProgramCard key={program.title} {...program} />
                                ))
                            }
                        </motion.div>
                    </section>
                    <section className="w-full py-12 md:py-16 bg-secondary/20 dark:bg-gray-900/30">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Virtual Campus Tour</h2>
                                <p className="text-lg text-muted-foreground">
                                    Explore our campus facilities and learning environments from anywhere
                                </p>
                            </motion.div>
                            <div className="grid gap-8 md:grid-cols-2">
                                <motion.div
                                    className="space-y-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="relative aspect-video rounded-lg overflow-hidden">
                                        <Image
                                            src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
                                            alt="Campus Overview"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        size="lg"
                                                        variant="outline"
                                                        className="gap-2 text-white border-white/50 bg-black/30 hover:bg-black/40 hover:text-white"
                                                    >
                                                        <Play className="h-5 w-5" />
                                                        Watch Tour Video
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-3xl w-full aspect-video p-0 bg-black">
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src="https://www.youtube.com/embed/zO7hOocMW9s?si=vCDsFd6pRJW4OGoy&start=3"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen
                                                        className="rounded-md"
                                                    ></iframe>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Explore Our Campus</h3>
                                        <p className="text-muted-foreground mb-4">
                                            Take a guided virtual tour of our state-of-the-art facilities, classrooms, laboratories, and
                                            recreational spaces. Experience the environment where our students learn, grow, and thrive.
                                        </p>
                                        {/* <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Start Full Tour</Button> */}
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="grid grid-cols-2 gap-4"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {
                                        campusTourLocations.map((location) => (
                                            <TourLocationCard key={location.title} {...location} />
                                        ))
                                    }
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Student Activities</h2>
                            <p className="text-lg text-muted-foreground">
                                Enriching experiences beyond the classroom that develop well-rounded individuals
                            </p>
                        </motion.div>
                        <Tabs defaultValue="clubs" className="w-full">
                            <div className="flex justify-center mb-8">
                                <TabsList className="grid w-full max-w-2xl grid-cols-3">
                                    <TabsTrigger value="clubs">Clubs & Organizations</TabsTrigger>
                                    <TabsTrigger value="sports">Sports</TabsTrigger>
                                    <TabsTrigger value="arts">Arts & Culture</TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value="clubs">
                                <motion.div
                                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {
                                        clubs.map((club) => (
                                            <ActivityCard key={club.title} {...club} />
                                        ))
                                    }
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="sports">
                                <motion.div
                                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {
                                        sports.map((sport) => (
                                            <ActivityCard key={sport.title} {...sport} />
                                        ))
                                    }
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="arts">
                                <motion.div
                                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {
                                        arts.map((art) => (
                                            <ActivityCard key={art.title} {...art} />
                                        ))
                                    }
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </section>
                    <section className="w-full py-12 md:py-16 bg-secondary/20 dark:bg-gray-900/30">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Academic Calendar</h2>
                                <p className="text-lg text-muted-foreground">Key dates and events for the current academic year</p>
                            </motion.div>
                            <motion.div
                                className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {
                                    calendarEvents.map((event, index) => (
                                        <CalendarEventCard key={index} {...event} />
                                    ))
                                }
                            </motion.div>
                            <motion.div
                                className="flex justify-center mt-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <Button variant="outline" className="gap-1">
                                    View Full Calendar <Calendar className="h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Faculty Spotlight</h2>
                            <p className="text-lg text-muted-foreground">
                                Meet some of our exceptional educators who inspire and guide our students
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
                                facultySpotlight.map((faculty) => (
                                    <FacultyCard key={faculty.name} {...faculty} />
                                ))
                            }
                        </motion.div>
                    </section>
                    <section className="w-full py-12 md:py-16 bg-primary/10 dark:bg-primary/5">
                        <div className="container">
                            <motion.div
                                className="max-w-3xl mx-auto text-center space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight">Have Questions About Our Programs?</h2>
                                <p className="text-lg text-muted-foreground">
                                    Our academic advisors are here to help you navigate our offerings and find the perfect fit for your
                                    educational journey.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 pt-4">
                                    <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        <Link href="/contactus">Contact an Advisor</Link>
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        Download Curriculum Guide
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </main>
            </div>
        </SmoothScroll>
    )
}

function AcademicProgramCard({
    title,
    description,
    grades,
    image,
}: {
    title: string
    description: string
    grades: string
    image: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden h-full">
                <div className="relative h-48 w-full">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                    <div className="absolute bottom-0 left-0 m-3">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm dark:bg-gray-800/80">
                            {grades}
                        </Badge>
                    </div>
                </div>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{description}</p>
                </CardContent>
                {/* <CardFooter>
                    <Button variant="ghost" size="sm" className="gap-1">
                        Learn more <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter> */}
            </Card>
        </motion.div>
    )
}

function TourLocationCard({
    title,
    image,
}: {
    title: string
    image: string
}) {
    return (
        <motion.div variants={fadeInUp} className="group">
            <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium">{title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <Button variant="outline" size="sm" className="text-white border-white/50 bg-black/30 hover:bg-black/40">
                        View Area
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

function ActivityCard({
    title,
    description,
    schedule,
    image,
    advisor,
}: {
    title: string
    description: string
    schedule: string
    image: string
    advisor: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden h-full">
                <div className="relative h-48 w-full">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                </div>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{description}</p>
                    <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary/70" />
                            <span className="text-muted-foreground">{schedule}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary/70" />
                            <span className="text-muted-foreground">Advisor: {advisor}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm">
                        Join Activity
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

function CalendarEventCard({
    title,
    date,
    description,
    type,
}: {
    title: string
    date: string
    description: string
    type: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="h-full">
                <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{title}</CardTitle>
                        <Badge variant={type === "Academic" ? "default" : type === "Holiday" ? "secondary" : "outline"}>
                            {type}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-primary/70" />
                        <span className="text-sm font-medium">{date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="ghost" size="sm" className="gap-1">
                        Add to calendar <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

function FacultyCard({
    name,
    department,
    image,
    bio,
    education,
}: {
    name: string
    department: string
    image: string
    bio: string
    education: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden h-full">
                <div className="relative h-64 w-full">
                    <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
                </div>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{department}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* <p className="text-muted-foreground">{bio}</p> */}
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-primary/70" />
                        <span className="text-sm text-muted-foreground">{education}</span>
                    </div>
                </CardContent>
                {/* <CardFooter>
                    <Button variant="ghost" size="sm" className="gap-1">
                        View profile <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter> */}
            </Card>
        </motion.div>
    )
}