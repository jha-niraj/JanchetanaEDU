"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, ChevronRight, Medal, Music, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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

const athletics = [
    {
        title: "Varsity Basketball",
        description:
            "Our championship basketball program develops skilled players and emphasizes teamwork, discipline, and sportsmanship.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        season: "Winter Season (November-March)",
        achievements: "Regional Champions 2022, State Semifinalists 2023",
    },
    {
        title: "Swimming & Diving",
        description:
            "Our aquatics program offers competitive swimming and diving opportunities for students of all skill levels.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        season: "Winter Season (November-February)",
        achievements: "State Champions in 200m Freestyle Relay, Multiple Individual State Qualifiers",
    },
    {
        title: "Track & Field",
        description:
            "Our track and field program offers opportunities in running, jumping, and throwing events for athletes of all abilities.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        season: "Spring Season (March-June)",
        achievements: "Conference Champions 2023, Four State Qualifiers in Distance Events",
    },
]
const arts = [
    {
        title: "Chamber Orchestra",
        description:
            "Our select string ensemble performs challenging classical and contemporary repertoire at school and community events.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        instructor: "Ms. Jennifer Williams",
        upcoming: "Spring Concert (May 15), Community Arts Festival (June 3)",
    },
    {
        title: "Theater Program",
        description:
            "Students explore all aspects of theatrical production, from acting and directing to set design and technical theater.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        instructor: "Mr. Thomas Garcia",
        upcoming: "Spring Musical: 'Into the Woods' (April 21-23)",
    },
    {
        title: "Visual Arts Studio",
        description:
            "Students develop skills in various media including drawing, painting, sculpture, photography, and digital art.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        instructor: "Ms. Emily Chen",
        upcoming: "Student Art Exhibition (May 5-19), Senior Portfolio Showcase (June 1)",
    },
]
const clubs = [
    {
        title: "Robotics Club",
        description:
            "Students design, build, and program robots to compete in regional and national competitions, developing engineering and teamwork skills.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        meetingTime: "Tuesdays & Thursdays, 3:30-5:00 PM",
        advisor: "Mr. David Thompson",
    },
    {
        title: "Environmental Club",
        description:
            "Students work on sustainability initiatives, campus beautification, and community environmental education projects.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        meetingTime: "Fridays, 3:30-5:00 PM",
        advisor: "Dr. James Wilson",
    },
    {
        title: "Model United Nations",
        description:
            "Students simulate UN committees, representing different countries and debating global issues to develop diplomacy and public speaking skills.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        meetingTime: "Mondays, 3:30-5:00 PM",
        advisor: "Ms. Rebecca Chen",
    },
]
const testimonials = [
    {
        quote:
            "Being part of the robotics team has been the highlight of my high school experience. I've learned so much about engineering and teamwork, and it's helped me decide to pursue computer science in college.",
        name: "Michael Chen",
        grade: "Grade 12",
        activities: "Robotics Club, Math Team, Jazz Band",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        quote:
            "The theater program has been like a second family to me. I started out shy and unsure, but through acting and being part of productions, I've gained confidence that helps me in all areas of my life.",
        name: "Sophia Rodriguez",
        grade: "Grade 11",
        activities: "Theater, Choir, Student Government",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        quote:
            "Playing on the basketball team has taught me discipline, perseverance, and how to balance academics with athletics. My coaches push us to be our best on the court and in the classroom, and those lessons will stay with me forever.",
        name: "James Wilson",
        grade: "Grade 10",
        activities: "Varsity Basketball, Student Mentor, Spanish Club",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
]
const events = [
    {
        title: "Spring Arts Festival",
        date: "May 15-17, 2024",
        description:
            "A celebration of student creativity featuring art exhibitions, musical performances, theater productions, and dance recitals.",
        category: "Arts",
    },
    {
        title: "Homecoming Game & Dance",
        date: "October 12, 2024",
        description:
            "Join us for the annual homecoming football game followed by the homecoming dance. A beloved school tradition!",
        category: "Athletics",
    },
    {
        title: "Science & Technology Fair",
        date: "April 5, 2024",
        description:
            "Students showcase their innovative science projects and technological solutions to real-world problems.",
        category: "Academic",
    },
]

export default function StudentLifePage() {
    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    <section className="relative">
                        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                            <Image
                                src="/studentlife/mainimage.jpeg"
                                alt="Students enjoying campus life"
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
                                        Student Life
                                    </motion.h1>
                                    <motion.p
                                        className="text-base md:text-lg text-white/90 max-w-md mx-auto"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                    >
                                        Discover the vibrant community and diverse experiences that make Horizon Academy special
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16">
                        <motion.div
                            className="grid gap-12 md:grid-cols-2 items-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-6">
                                <motion.h2
                                    className="text-3xl font-bold tracking-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Life Beyond the Classroom
                                </motion.h2>
                                <motion.p
                                    className="text-lg text-muted-foreground"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                >
                                    At Janchetana, we believe that education extends far beyond the classroom walls. Our vibrant campus
                                    life offers countless opportunities for students to explore their interests, develop new skills, and
                                    build lasting friendships.
                                </motion.p>
                                <motion.p
                                    className="text-lg text-muted-foreground"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    From competitive sports and artistic pursuits to community service and leadership development, our
                                    diverse range of extracurricular activities ensures that every student can find their passion and
                                    thrive.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Explore Activities</Button>
                                </motion.div>
                            </div>
                            <motion.div
                                className="grid grid-cols-2 gap-4"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div variants={fadeInUp} className="rounded-lg overflow-hidden">
                                    <Image
                                        src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
                                        alt="Students in art studio"
                                        width={300}
                                        height={300}
                                        className="w-full h-auto object-cover aspect-square"
                                    />
                                </motion.div>
                                <motion.div variants={fadeInUp} className="rounded-lg overflow-hidden">
                                    <Image
                                        src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
                                        alt="Students playing basketball"
                                        width={300}
                                        height={300}
                                        className="w-full h-auto object-cover aspect-square"
                                    />
                                </motion.div>
                                <motion.div variants={fadeInUp} className="rounded-lg overflow-hidden">
                                    <Image
                                        src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
                                        alt="Students in debate competition"
                                        width={300}
                                        height={300}
                                        className="w-full h-auto object-cover aspect-square"
                                    />
                                </motion.div>
                                <motion.div variants={fadeInUp} className="rounded-lg overflow-hidden">
                                    <Image
                                        src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
                                        alt="Students in music performance"
                                        width={300}
                                        height={300}
                                        className="w-full h-auto object-cover aspect-square"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16">
                        <div className="container">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Explore Student Life</h2>
                                <p className="text-lg text-muted-foreground">
                                    Discover the diverse opportunities available to our students
                                </p>
                            </motion.div>
                            <Tabs defaultValue="athletics" className="w-full">
                                <div className="flex justify-center mb-8">
                                    <TabsList className="grid w-full max-w-2xl grid-cols-3">
                                        <TabsTrigger value="athletics">Athletics</TabsTrigger>
                                        <TabsTrigger value="arts">Arts & Culture</TabsTrigger>
                                        <TabsTrigger value="clubs">Clubs & Activities</TabsTrigger>
                                    </TabsList>
                                </div>
                                <TabsContent value="athletics">
                                    <div className="grid gap-8 md:grid-cols-2">
                                        <motion.div
                                            className="space-y-6"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                                                <Medal className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Athletic Excellence</h3>
                                            <p className="text-muted-foreground">
                                                Our athletics program is designed to develop not just physical skills, but also character,
                                                teamwork, and leadership. With state-of-the-art facilities and experienced coaches, our student
                                                athletes are supported in reaching their full potential.
                                            </p>
                                            <p className="text-muted-foreground">
                                                We offer a wide range of competitive sports for all skill levels, from varsity teams that compete
                                                at regional and state levels to intramural programs that focus on participation and enjoyment.
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {
                                                    [
                                                        "Basketball",
                                                        "Soccer",
                                                        "Swimming",
                                                        "Track & Field",
                                                        "Tennis",
                                                        "Volleyball",
                                                        "Baseball",
                                                        "Golf",
                                                    ].map((sport) => (
                                                        <Badge key={sport} variant="outline" className="bg-primary/5">
                                                            {sport}
                                                        </Badge>
                                                    ))
                                                }
                                            </div>
                                            <Button variant="outline" className="gap-1">
                                                View Athletics Calendar <Calendar className="h-4 w-4" />
                                            </Button>
                                        </motion.div>
                                        <motion.div
                                            className="grid grid-cols-1 gap-6"
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {
                                                athletics.map((item) => (
                                                    <AthleticCard key={item.title} {...item} />
                                                ))
                                            }
                                        </motion.div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="arts">
                                    <div className="grid gap-8 md:grid-cols-2">
                                        <motion.div
                                            className="space-y-6"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                                                <Music className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Arts & Culture</h3>
                                            <p className="text-muted-foreground">
                                                Our arts program provides students with opportunities to explore their creativity and develop
                                                their talents in visual arts, music, theater, and dance. With dedicated facilities and passionate
                                                instructors, students can express themselves and grow as artists.
                                            </p>
                                            <p className="text-muted-foreground">
                                                Throughout the year, we showcase student work through exhibitions, concerts, and performances that
                                                bring our community together to celebrate creativity and artistic achievement.
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {
                                                    [
                                                        "Visual Arts",
                                                        "Music",
                                                        "Theater",
                                                        "Dance",
                                                        "Photography",
                                                        "Creative Writing",
                                                        "Film Production",
                                                    ].map((art) => (
                                                        <Badge key={art} variant="outline" className="bg-primary/5">
                                                            {art}
                                                        </Badge>
                                                    ))
                                                }
                                            </div>
                                            <Button variant="outline" className="gap-1">
                                                View Arts Calendar <Calendar className="h-4 w-4" />
                                            </Button>
                                        </motion.div>
                                        <motion.div
                                            className="grid grid-cols-1 gap-6"
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {
                                                arts.map((item) => (
                                                    <ArtsCard key={item.title} {...item} />
                                                ))
                                            }
                                        </motion.div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="clubs">
                                    <div className="grid gap-8 md:grid-cols-2">
                                        <motion.div
                                            className="space-y-6"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                                                <Users className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Clubs & Activities</h3>
                                            <p className="text-muted-foreground">
                                                Our diverse range of clubs and activities allows students to explore their interests, develop new
                                                skills, and connect with peers who share their passions. From academic competitions to community
                                                service, there&apos;s something for everyone.
                                            </p>
                                            <p className="text-muted-foreground">
                                                Students are also encouraged to propose and lead new clubs, fostering leadership skills and
                                                initiative. Our faculty advisors provide guidance and support to ensure all activities are
                                                enriching and well-organized.
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {
                                                    [
                                                        "Robotics",
                                                        "Debate",
                                                        "Model UN",
                                                        "Environmental",
                                                        "Chess",
                                                        "Coding",
                                                        "Community Service",
                                                        "Student Government",
                                                    ].map((club) => (
                                                        <Badge key={club} variant="outline" className="bg-primary/5">
                                                            {club}
                                                        </Badge>
                                                    ))
                                                }
                                            </div>
                                            <Button variant="outline" className="gap-1">
                                                View All Clubs <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </motion.div>
                                        <motion.div
                                            className="grid grid-cols-1 gap-6"
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {
                                                clubs.map((item) => (
                                                    <ClubCard key={item.title} {...item} />
                                                ))
                                            }
                                        </motion.div>
                                    </div>
                                </TabsContent>
                            </Tabs>
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
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Student Voices</h2>
                            <p className="text-lg text-muted-foreground">
                                Hear what our students have to say about their experiences at Horizon Academy
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
                                testimonials.map((testimonial, index) => (
                                    <TestimonialCard key={index} {...testimonial} />
                                ))
                            }
                        </motion.div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16">
                        <div className="container">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Upcoming Campus Events</h2>
                                <p className="text-lg text-muted-foreground">Join us for these exciting events happening on campus</p>
                            </motion.div>
                            <motion.div
                                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {
                                    events.map((event, index) => (
                                        <motion.div key={index} variants={fadeInUp}>
                                            <Card className="h-full">
                                                <CardHeader>
                                                    <div className="flex justify-between items-start">
                                                        <CardTitle>{event.title}</CardTitle>
                                                        <Badge>{event.category}</Badge>
                                                    </div>
                                                    <CardDescription>{event.date}</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-muted-foreground">{event.description}</p>
                                                </CardContent>
                                                {/* <CardFooter>
                                            <Button variant="outline" size="sm" className="gap-1">
                                                Learn more <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </CardFooter> */}
                                            </Card>
                                        </motion.div>
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
                                    View All Events <Calendar className="h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16">
                        <motion.div
                            className="max-w-3xl mx-auto text-center space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight">Ready to Get Involved?</h2>
                            <p className="text-lg text-muted-foreground">
                                Explore our student activities, join a club, or attend an upcoming event to experience the vibrant
                                community at Horizon Academy.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    <Link href="/student-activities">Browse Activities</Link>
                                </Button>
                                <Button size="lg" variant="outline">
                                    View Events Calendar
                                </Button>
                            </div>
                        </motion.div>
                    </section>
                </main>
            </div>
        </SmoothScroll>
    )
}

function AthleticCard({
    title,
    description,
    image,
    season,
    achievements,
}: {
    title: string
    description: string
    image: string
    season: string
    achievements: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden h-full">
                <div className="relative h-48 w-full">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                </div>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{season}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="text-muted-foreground">{description}</p>
                    <div className="pt-2">
                        <p className="text-sm font-medium">Recent Achievements:</p>
                        <p className="text-sm text-muted-foreground">{achievements}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="gap-1">
                        Team Details <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

function ArtsCard({
    title,
    description,
    image,
    instructor,
    upcoming,
}: {
    title: string
    description: string
    image: string
    instructor: string
    upcoming: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden h-full">
                <div className="relative h-48 w-full">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                </div>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>Instructor: {instructor}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="text-muted-foreground">{description}</p>
                    <div className="pt-2">
                        <p className="text-sm font-medium">Upcoming:</p>
                        <p className="text-sm text-muted-foreground">{upcoming}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="gap-1">
                        Program Details <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

function ClubCard({
    title,
    description,
    image,
    meetingTime,
    advisor,
}: {
    title: string
    description: string
    image: string
    meetingTime: string
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
                    <CardDescription>{meetingTime}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="text-muted-foreground">{description}</p>
                    <p className="text-sm text-muted-foreground pt-2">Advisor: {advisor}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="gap-1">
                        Join Club <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

function TestimonialCard({
    quote,
    name,
    grade,
    activities,
    image,
}: {
    quote: string
    name: string
    grade: string
    activities: string
    image: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="h-full">
                <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                        <div className="mb-4">
                            <p className="italic text-muted-foreground">&quot;{quote}&quot;</p>
                        </div>
                        <div className="mt-auto pt-4 flex items-center gap-3">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden">
                                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-medium text-sm">{name}</p>
                                <p className="text-xs text-muted-foreground">{grade}</p>
                                <p className="text-xs text-muted-foreground">{activities}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}