"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    Calendar, ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card, CardContent, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import {
    Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs"
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

// const academicPrograms = [
//     {
//         title: "Early Childhood Development (ECD)",
//         description:
//             "Foundation stage focusing on early learning experiences for young children aged 3-5 years. Our ECD program emphasizes play-based learning, social skills development, and preparation for formal education through creative activities and structured play.",
//         grades: "Ages 3-5",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//     },
//     {
//         title: "Primary Education (Classes 1-5)",
//         description:
//             "Building strong foundation in core subjects including Nepali, English, Mathematics, Science, and Social Studies. Our primary education focuses on developing basic literacy, numeracy, and critical thinking skills through interactive teaching methods.",
//         grades: "Classes 1-5",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//     },
//     {
//         title: "Lower Secondary Education (Classes 6-8)", 
//         description:
//             "Expanded curriculum covering all core subjects with introduction to specialized topics. Students develop analytical skills and prepare for secondary education through comprehensive subject knowledge and practical learning experiences.",
//         grades: "Classes 6-8",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//     },
//     {
//         title: "Secondary Education (Classes 9-10)",
//         description:
//             "Comprehensive secondary education following national curriculum standards. Students complete their School Leaving Certificate (SLC) preparation with strong foundation in all major subjects, preparing them for higher secondary education.",
//         grades: "Classes 9-10", 
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//     },
//     {
//         title: "Higher Secondary - Science Stream with Optional Mathematics",
//         description:
//             "Advanced science education with Physics, Chemistry, Biology, and optional Mathematics. Perfect for students aiming for careers in engineering, medicine, research, and other STEM fields. Comprehensive preparation for university entrance exams.",
//         grades: "Classes 11-12",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//     },
//     {
//         title: "Higher Secondary - General Stream with Optional English & Health Education",
//         description:
//             "Flexible higher secondary program with optional English and Health & Physical Education. Ideal for students pursuing careers in humanities, social sciences, management, or seeking diverse academic pathways to higher education.",
//         grades: "Classes 11-12",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//     },
// ]
// const campusTourLocations = [
//     {
//         title: "Science Wing",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//     },
//     {
//         title: "Library",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//     },
//     {
//         title: "Athletic Complex",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//     },
//     {
//         title: "Arts Center",
//         image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
//     },
// ]
const educationTourActivities = [
    {
        title: "Historical Sites Visit",
        schedule: "Quarterly field trips",
        image: "/academics/1_1.jpeg",
        advisor: "Social Studies Department",
    },
    {
        title: "Museum Exploration",
        schedule: "Monthly educational visits",
        image: "/academics/1_2.jpeg",
        advisor: "Cultural Studies Team",
    },
    {
        title: "Science Park Tours",
        schedule: "Bi-annual trips",
        image: "/academics/1_3.jpeg",
        advisor: "Science Department",
    },
    {
        title: "Industrial Visits",
        schedule: "Annual trips for senior classes",
        image: "/academics/1_4.jpeg",
        advisor: "Career Guidance Team",
    },
    // {
    //     title: "Nature & Wildlife Tours",
    //     schedule: "Seasonal outdoor education",
    //     image: "/academics/1_5.jpeg",
    //     advisor: "Environmental Education",
    // },
    // {
    //     title: "University Campus Visits",
    //     schedule: "For higher secondary students",
    //     image: "/academics/1_6.jpeg",
    //     advisor: "Academic Counselor",
    // },
]
const scienceExhibitionActivities = [
    {
        title: "Physics Project Showcase",
        schedule: "Annual science fair",
        image: "/academics/2_1.jpeg",
        advisor: "Physics Department",
    },
    {
        title: "Chemistry Experiments Display",
        schedule: "Bi-annual exhibitions",
        image: "/academics/2_2.jpeg",
        advisor: "Chemistry Department",
    },
    // {
    //     title: "Biology Models & Research",
    //     schedule: "Annual bio-science fair",
    //     image: "/academics/2_3.jpeg",
    //     advisor: "Biology Department",
    // },
    // {
    //     title: "Mathematics Problem Solving",
    //     schedule: "Math olympiad preparation",
    //     image: "/academics/2_4.jpeg",
    //     advisor: "Mathematics Department",
    // },
    // {
    //     title: "Technology & Innovation Fair",
    //     schedule: "Annual tech showcase",
    //     image: "/academics/2_5.jpeg",
    //     advisor: "Computer Science Team",
    // },
]
const gamesAndSportsActivities = [
    {
        title: "Football Tournament",
        schedule: "Inter-house competitions",
        image: "/academics/3_1.jpeg",
        advisor: "Sports Department",
    },
    {
        title: "Basketball Championships",
        schedule: "Seasonal tournaments",
        image: "/academics/3_2.jpeg",
        advisor: "Basketball Coach",
    },
    {
        title: "Track & Field Events",
        schedule: "Annual sports meet",
        image: "/academics/3_3.jpeg",
        advisor: "Athletics Coach",
    },
    // {
    //     title: "Cricket Matches",
    //     schedule: "Regular practice & matches",
    //     image: "/academics/3_4.jpeg",
    //     advisor: "Cricket Coach",
    // },
    // {
    //     title: "Volleyball Competitions",
    //     schedule: "Inter-school tournaments",
    //     image: "/academics/3_5.jpeg",
    //     advisor: "Volleyball Coach",
    // },
    // {
    //     title: "Table Tennis & Badminton",
    //     schedule: "Indoor sports activities",
    //     image: "/academics/3_6.jpeg",
    //     advisor: "Indoor Sports Coordinator",
    // },
]
const extraCurricularActivities = [
    {
        title: "Cultural Dance Programs",
        schedule: "Festival celebrations",
        image: "/academics/4_1.jpeg",
        advisor: "Cultural Committee",
    },
    {
        title: "Music & Singing Competitions",
        schedule: "Monthly music events",
        image: "/academics/4_2.jpeg",
        advisor: "Music Department",
    },
    {
        title: "Drama & Theater",
        schedule: "Annual dramatic performances",
        image: "/academics/4_3.jpeg",
        advisor: "Drama Club",
    },
    {
        title: "Art & Craft Exhibitions",
        schedule: "Bi-annual art shows",
        image: "/academics/4_4.jpeg",
        advisor: "Art Department",
    },
    {
        title: "Community Service Projects",
        schedule: "Monthly community work",
        image: "/academics/4_5.jpeg",
        advisor: "Social Service Club",
    },
    {
        title: "Community Service Projects",
        schedule: "Monthly community work",
        image: "/academics/4_6.jpeg",
        advisor: "Social Service Club",
    },
    {
        title: "Community Service Projects",
        schedule: "Monthly community work",
        image: "/academics/4_7.jpeg",
        advisor: "Social Service Club",
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
        name: "Mohamad Aslam",
        department: "Science Department - Physics",
        image: "/academics/physicsteacher.jpeg",
        // bio: "Dr. Morgan has been teaching physics and astronomy at Horizon Academy for 15 years. Her innovative approach to science education has inspired countless students to pursue STEM careers.",
        // education: "Ph.D. in Physics, MIT",
    },
    {
        name: "Ram Prakash Chaudhary",
        department: "Engineer",
        image: "/academics/computerengineer.jpeg",
        // bio: "An award-winning educator with a passion for classic and contemporary literature. Mr. Wilson's creative teaching methods bring literary works to life for his students.",
        // education: "M.A. in English Literature, Columbia University",
    },
    {
        name: "Mr. Ashok kharar",
        department: "Computer Engineer",
        image: "/academics/ashokkahar.jpeg",
    },
    {
        name: "Mr. Manoj Kumar Chaudhary",
        department: "Chemistry Teacher",
        image: "/academics/manojkumar.jpeg",
    },
    {
        name: "Mr. Amrish Pandey",
        department: "Computer Engineer",
        image: "/academics/amrishpandey.jpeg",
    },
    {
        name: "Kaushal Kumar Chaudhary",
        department: "Lab Technician",
        image: "/academics/kaushalkishor.jpeg",
    },
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
                            className="text-center max-w-3xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Academic Programs</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Janchetana School offers a complete General Stream education from Early Childhood Development (ECD) through Class 12. Our comprehensive curriculum follows national standards while preparing students for success in higher education and future careers.
                            </p>
                            <div className="bg-primary/10 dark:bg-primary/5 rounded-lg p-6 text-left">
                                <h3 className="font-semibold text-lg mb-3 text-primary">Complete Educational Journey:</h3>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="font-medium mb-2">🎓 <strong>General Stream:</strong> ECD to Class 12</p>
                                        <p className="text-muted-foreground">Continuous academic progression with strong foundation in all core subjects</p>
                                    </div>
                                    <div>
                                        <p className="font-medium mb-2">📚 <strong>Higher Secondary Options (Classes 11-12):</strong></p>
                                        <ul className="text-muted-foreground space-y-1">
                                            <li>• Optional Mathematics (Science Stream)</li>
                                            <li>• Optional English</li>
                                            <li>• Health & Physical Education</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/* <motion.div
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
                        </motion.div> */}
                    </section>
                    {/* <section className="w-full py-12 md:py-16 bg-secondary/20 dark:bg-gray-900/30">
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
                    </section> */}
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
                                <TabsList className="grid w-full max-w-3xl grid-cols-4">
                                    <TabsTrigger value="clubs">Education Tour</TabsTrigger>
                                    <TabsTrigger value="sports">Science Exhibition</TabsTrigger>
                                    <TabsTrigger value="arts">Games & Sports</TabsTrigger>
                                    <TabsTrigger value="extraCurricular">Extra Curricular Activities</TabsTrigger>
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
                                        educationTourActivities.map((activity) => (
                                            <ActivityCard key={activity.title} {...activity} />
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
                                        scienceExhibitionActivities.map((activity) => (
                                            <ActivityCard key={activity.title} {...activity} />
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
                                        gamesAndSportsActivities.map((activity) => (
                                            <ActivityCard key={activity.title} {...activity} />
                                        ))
                                    }
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="extraCurricular">
                                <motion.div
                                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {
                                        extraCurricularActivities.map((activity) => (
                                            <ActivityCard key={activity.title} {...activity} />
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

// function AcademicProgramCard({
//     title,
//     description,
//     grades,
//     image,
// }: {
//     title: string
//     description: string
//     grades: string
//     image: string
// }) {
//     return (
//         <motion.div variants={fadeInUp}>
//             <Card className="overflow-hidden h-full">
//                 <div className="relative h-48 w-full">
//                     <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
//                     <div className="absolute bottom-0 left-0 m-3">
//                         <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm dark:bg-gray-800/80">
//                             {grades}
//                         </Badge>
//                     </div>
//                 </div>
//                 <CardHeader>
//                     <CardTitle>{title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p className="text-muted-foreground">{description}</p>
//                 </CardContent>
//                 {/* <CardFooter>
//                     <Button variant="ghost" size="sm" className="gap-1">
//                         Learn more <ChevronRight className="h-4 w-4" />
//                     </Button>
//                 </CardFooter> */}
//             </Card>
//         </motion.div>
//     )
// }

// function TourLocationCard({
//     title,
//     image,
// }: {
//     title: string
//     image: string
// }) {
//     return (
//         <motion.div variants={fadeInUp} className="group">
//             <div className="relative aspect-square rounded-lg overflow-hidden">
//                 <Image
//                     src={image || "/placeholder.svg"}
//                     alt={title}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
//                     <h3 className="text-white font-medium">{title}</h3>
//                 </div>
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
//                     <Button variant="outline" size="sm" className="text-white border-white/50 bg-black/30 hover:bg-black/40">
//                         View Area
//                     </Button>
//                 </div>
//             </div>
//         </motion.div>
//     )
// }

function ActivityCard({
    title,
    image
}: {
    title: string
    image: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden h-full">
                <div className="relative h-48 w-full">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                </div>
                {/* <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                </CardContent> */}
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
}: {
    name: string
    department: string
    image: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden h-full">
                <div className="relative h-64 w-full bg-gray-50 dark:bg-gray-800">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={name}
                        fill
                        className="object-contain object-center p-2"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                        <CardTitle className="flex-1">{name}</CardTitle>
                        <Badge variant="secondary" className="shrink-0 text-xs">
                            {department}
                        </Badge>
                    </div>
                </CardHeader>
                {/* <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{bio}</p>
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-primary/70" />
                        <span className="text-sm text-muted-foreground">{education}</span>
                    </div>
                </CardContent> */}
                {/* <CardFooter>
                    <Button variant="ghost" size="sm" className="gap-1">
                        View profile <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter> */}
            </Card>
        </motion.div>
    )
}