"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
    Card, CardContent, CardHeader
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SmoothScroll from "@/components/smoothscroll"
import { getEvents } from "@/actions/event.action"
import { format } from "date-fns"
import {
    Calendar, MapPin, Clock, Loader2, ArrowRight, Users, Sparkles
} from "lucide-react"

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

// const athletics = [
//     {
//         title: "Varsity Basketball",
//         description:
//             "Our championship basketball program develops skilled players and emphasizes teamwork, discipline, and sportsmanship.",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//         season: "Winter Season (November-March)",
//         achievements: "Regional Champions 2022, State Semifinalists 2023",
//     },
//     {
//         title: "Swimming & Diving",
//         description:
//             "Our aquatics program offers competitive swimming and diving opportunities for students of all skill levels.",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//         season: "Winter Season (November-February)",
//         achievements: "State Champions in 200m Freestyle Relay, Multiple Individual State Qualifiers",
//     },
//     {
//         title: "Track & Field",
//         description:
//             "Our track and field program offers opportunities in running, jumping, and throwing events for athletes of all abilities.",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//         season: "Spring Season (March-June)",
//         achievements: "Conference Champions 2023, Four State Qualifiers in Distance Events",
//     },
// ]
// const arts = [
//     {
//         title: "Chamber Orchestra",
//         description:
//             "Our select string ensemble performs challenging classical and contemporary repertoire at school and community events.",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//         instructor: "Ms. Jennifer Williams",
//         upcoming: "Spring Concert (May 15), Community Arts Festival (June 3)",
//     },
//     {
//         title: "Theater Program",
//         description:
//             "Students explore all aspects of theatrical production, from acting and directing to set design and technical theater.",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//         instructor: "Mr. Thomas Garcia",
//         upcoming: "Spring Musical: 'Into the Woods' (April 21-23)",
//     },
//     {
//         title: "Visual Arts Studio",
//         description:
//             "Students develop skills in various media including drawing, painting, sculpture, photography, and digital art.",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//         instructor: "Ms. Emily Chen",
//         upcoming: "Student Art Exhibition (May 5-19), Senior Portfolio Showcase (June 1)",
//     },
// ]
// const clubs = [
//     {
//         title: "Robotics Club",
//         description:
//             "Students design, build, and program robots to compete in regional and national competitions, developing engineering and teamwork skills.",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//         meetingTime: "Tuesdays & Thursdays, 3:30-5:00 PM",
//         advisor: "Mr. David Thompson",
//     },
//     {
//         title: "Environmental Club",
//         description:
//             "Students work on sustainability initiatives, campus beautification, and community environmental education projects.",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//         meetingTime: "Fridays, 3:30-5:00 PM",
//         advisor: "Dr. James Wilson",
//     },
//     {
//         title: "Model United Nations",
//         description:
//             "Students simulate UN committees, representing different countries and debating global issues to develop diplomacy and public speaking skills.",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//         meetingTime: "Mondays, 3:30-5:00 PM",
//         advisor: "Ms. Rebecca Chen",
//     },
// ]
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
interface StudentLifeEvent {
    id: string;
    title: string;
    description: string;
    date: Date;
    location?: string | null;
}

export default function StudentLifePage() {
    const [events, setEvents] = useState<StudentLifeEvent[]>([]);
    const [isLoadingEvents, setIsLoadingEvents] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const result = await getEvents('SCHOOL');
                if (result.success && result.events) {
                    // Get upcoming events (next 6 events)
                    const upcomingEvents = result.events
                        .filter(event => new Date(event.date) >= new Date())
                        .slice(0, 6) as StudentLifeEvent[];
                    setEvents(upcomingEvents);
                }
            } catch (error) {
                console.error("Failed to fetch events:", error);
            } finally {
                setIsLoadingEvents(false);
            }
        }
        fetchEvents();
    }, []);
    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    <section className="relative">
                        <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden">
                            <Image
                                src="/studentlife/mainimage.jpeg"
                                alt="Students enjoying campus life"
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
                            <div className="container relative z-10 flex h-full flex-col items-center justify-center text-white text-center max-w-6xl mx-auto px-4">
                                <motion.div
                                    className="max-w-3xl space-y-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                    >
                                        <Badge className="mb-4 px-4 py-1.5 text-sm bg-white/20 text-white border-white/30 backdrop-blur-sm flex items-center gap-2 mx-auto w-fit">
                                            <Users className="w-3 h-3" />
                                            Campus Life
                                        </Badge>
                                    </motion.div>
                                    <motion.h1
                                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-2xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    >
                                        Student Life
                                    </motion.h1>
                                    <motion.p
                                        className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    >
                                        Discover the vibrant community and diverse experiences that make Janchetana School special
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
                                        src="/studentlife/1.jpeg"
                                        alt="Students in art studio"
                                        width={300}
                                        height={300}
                                        className="w-full h-auto object-cover aspect-square"
                                    />
                                </motion.div>
                                <motion.div variants={fadeInUp} className="rounded-lg overflow-hidden">
                                    <Image
                                        src="/studentlife/2.jpeg"
                                        alt="Students playing basketball"
                                        width={300}
                                        height={300}
                                        className="w-full h-auto object-cover aspect-square"
                                    />
                                </motion.div>
                                <motion.div variants={fadeInUp} className="rounded-lg overflow-hidden">
                                    <Image
                                        src="/studentlife/3.jpeg"
                                        alt="Students in debate competition"
                                        width={300}
                                        height={300}
                                        className="w-full h-auto object-cover aspect-square"
                                    />
                                </motion.div>
                                <motion.div variants={fadeInUp} className="rounded-lg overflow-hidden">
                                    <Image
                                        src="/studentlife/4.jpeg"
                                        alt="Students in music performance"
                                        width={300}
                                        height={300}
                                        className="w-full h-auto object-cover aspect-square"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </section>
                    {/* <section className="max-w-7xl mx-auto py-12 md:py-16">
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
                    </section> */}
                    <section className="max-w-7xl mx-auto py-16 md:py-20 px-4">
                        <motion.div
                            className="text-center max-w-3xl mx-auto mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="px-4 py-1.5 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800 mb-4">
                                <Sparkles className="w-3 h-3 mr-2" />
                                Testimonials
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                                Student Voices
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                Hear what our students have to say about their experiences at Janchetana School
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
                    <section className="max-w-7xl mx-auto py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                        <div className="container">
                            <motion.div
                                className="text-center max-w-3xl mx-auto mb-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Badge className="px-4 py-1.5 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800 mb-4">
                                    <Calendar className="w-3 h-3 mr-2" />
                                    Campus Calendar
                                </Badge>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Upcoming Campus Events
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Join us for these exciting events happening on campus and be part of our vibrant community
                                </p>
                            </motion.div>

                            {isLoadingEvents ? (
                                <div className="flex items-center justify-center py-20">
                                    <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                                    <span className="ml-3 text-lg text-gray-600 dark:text-gray-400">Loading events...</span>
                                </div>
                            ) : events.length > 0 ? (
                                <motion.div
                                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {
                                        events.map((event) => {
                                            const eventDate = new Date(event.date);
                                            const isPast = eventDate < new Date();

                                            return (
                                                <motion.div
                                                    key={event.id}
                                                    variants={fadeInUp}
                                                    className="group"
                                                >
                                                    <Card className="h-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                                                        <div className="relative h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                                            <div className="absolute top-4 right-4">
                                                                {
                                                                    !isPast && (
                                                                        <Badge className="bg-green-500 text-white border-0 shadow-lg">
                                                                            Upcoming
                                                                        </Badge>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 drop-shadow-lg">
                                                                    {event.title}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <CardHeader className="pb-3">
                                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                                <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                                                <span className="font-semibold">
                                                                    {format(eventDate, "MMMM d, yyyy")}
                                                                </span>
                                                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                                                <span>{format(eventDate, "EEEE")}</span>
                                                            </div>
                                                            {
                                                                event.location && (
                                                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                                                                        <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                                                        <span>{event.location}</span>
                                                                    </div>
                                                                )
                                                            }
                                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                                                                <Clock className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                                                                <span>{format(eventDate, "h:mm a")}</span>
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <p className="text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                                                                {event.description}
                                                            </p>
                                                            <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium mt-4 group-hover:gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                                                <span className="text-sm">Learn More</span>
                                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            );
                                        })
                                    }
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="text-center py-20"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-6">
                                        <Calendar className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No Upcoming Events</h3>
                                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                                        Check back soon for exciting campus events and activities!
                                    </p>
                                </motion.div>
                            )
                            }
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-16 md:py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800">
                        <motion.div
                            className="max-w-4xl mx-auto text-center space-y-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div>
                                <Badge className="px-4 py-1.5 text-sm bg-white/80 dark:bg-gray-800/80 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-700 mb-4">
                                    Join Our Community
                                </Badge>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Ready to Get Involved?
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                                    Explore our student activities, join a club, or attend an upcoming event to experience the vibrant
                                    community at Janchetana School.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <Button
                                    size="lg"
                                    asChild
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                                >
                                    <Link href="/admissions">Admission</Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500 px-8 shadow-md hover:shadow-lg transition-all duration-300"
                                    asChild
                                >
                                    <Link href="/aboutus">
                                        About Us
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </section>
                </main>
            </div>
        </SmoothScroll>
    )
}

// function AthleticCard({
//     title,
//     description,
//     image,
//     season,
//     achievements,
// }: {
//     title: string
//     description: string
//     image: string
//     season: string
//     achievements: string
// }) {
//     return (
//         <motion.div variants={fadeInUp}>
//             <Card className="overflow-hidden h-full">
//                 <div className="relative h-48 w-full">
//                     <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
//                 </div>
//                 <CardHeader>
//                     <CardTitle>{title}</CardTitle>
//                     <CardDescription>{season}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-2">
//                     <p className="text-muted-foreground">{description}</p>
//                     <div className="pt-2">
//                         <p className="text-sm font-medium">Recent Achievements:</p>
//                         <p className="text-sm text-muted-foreground">{achievements}</p>
//                     </div>
//                 </CardContent>
//                 <CardFooter>
//                     <Button variant="outline" size="sm" className="gap-1">
//                         Team Details <ChevronRight className="h-4 w-4" />
//                     </Button>
//                 </CardFooter>
//             </Card>
//         </motion.div>
//     )
// }

// function ArtsCard({
//     title,
//     description,
//     image,
//     instructor,
//     upcoming,
// }: {
//     title: string
//     description: string
//     image: string
//     instructor: string
//     upcoming: string
// }) {
//     return (
//         <motion.div variants={fadeInUp}>
//             <Card className="overflow-hidden h-full">
//                 <div className="relative h-48 w-full">
//                     <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
//                 </div>
//                 <CardHeader>
//                     <CardTitle>{title}</CardTitle>
//                     <CardDescription>Instructor: {instructor}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-2">
//                     <p className="text-muted-foreground">{description}</p>
//                     <div className="pt-2">
//                         <p className="text-sm font-medium">Upcoming:</p>
//                         <p className="text-sm text-muted-foreground">{upcoming}</p>
//                     </div>
//                 </CardContent>
//                 <CardFooter>
//                     <Button variant="outline" size="sm" className="gap-1">
//                         Program Details <ChevronRight className="h-4 w-4" />
//                     </Button>
//                 </CardFooter>
//             </Card>
//         </motion.div>
//     )
// }

// function ClubCard({
//     title,
//     description,
//     image,
//     meetingTime,
//     advisor,
// }: {
//     title: string
//     description: string
//     image: string
//     meetingTime: string
//     advisor: string
// }) {
//     return (
//         <motion.div variants={fadeInUp}>
//             <Card className="overflow-hidden h-full">
//                 <div className="relative h-48 w-full">
//                     <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
//                 </div>
//                 <CardHeader>
//                     <CardTitle>{title}</CardTitle>
//                     <CardDescription>{meetingTime}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-2">
//                     <p className="text-muted-foreground">{description}</p>
//                     <p className="text-sm text-muted-foreground pt-2">Advisor: {advisor}</p>
//                 </CardContent>
//                 <CardFooter>
//                     <Button variant="outline" size="sm" className="gap-1">
//                         Join Club <ChevronRight className="h-4 w-4" />
//                     </Button>
//                 </CardFooter>
//             </Card>
//         </motion.div>
//     )
// }

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
            <Card className="h-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <CardContent className="p-8">
                    <div className="flex flex-col h-full">
                        <div className="mb-6 relative">
                            <div className="absolute -top-2 -left-2 text-6xl text-purple-200 dark:text-purple-900/30 font-serif leading-none opacity-50">
                                &quot;
                            </div>
                            <p className="italic text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10 pl-6">
                                {quote}
                            </p>
                        </div>
                        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700 flex items-center gap-4">
                            <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-purple-200 dark:ring-purple-800 group-hover:ring-purple-400 dark:group-hover:ring-purple-600 transition-all duration-300">
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
                                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{grade}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activities}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}