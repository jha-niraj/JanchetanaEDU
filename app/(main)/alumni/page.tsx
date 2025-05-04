"use client"

import type React from "react"

import { Label } from "@/components/ui/label"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ChevronRight, GraduationCap, Heart, Mail, MapPin, Users, Book, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
        name: "Dr. James Wilson",
        graduationYear: "2008",
        profession: "Environmental Scientist",
        achievement:
            "Leading researcher in renewable energy solutions, recipient of the National Science Foundation's Early Career Award, and author of over 30 peer-reviewed publications.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        name: "Sarah Johnson",
        graduationYear: "1995",
        profession: "Tech Entrepreneur",
        achievement:
            "Founder and CEO of InnovateTech, a pioneering software company valued at $500 million. Named one of Forbes' 'Most Influential Women in Tech' for three consecutive years.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        name: "Michael Chen",
        graduationYear: "2010",
        profession: "Humanitarian",
        achievement:
            "Founder of Global Health Initiative, providing medical care to underserved communities in over 15 countries. Recipient of the International Humanitarian Award in 2022.",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
]
const events = [
    {
        title: "Annual Alumni Reunion",
        date: "June 10-12, 2024",
        location: "Horizon Academy Campus",
        description:
            "Join fellow graduates for a weekend of reconnecting, campus tours, class dinners, and special events celebrating milestone reunion years.",
    },
    {
        title: "Alumni Career Fair",
        date: "October 15, 2024",
        location: "Virtual Event",
        description:
            "Connect with current students as an industry representative, or participate as an alumnus seeking new opportunities in your field.",
    },
    {
        title: "Homecoming Weekend",
        date: "November 5-7, 2024",
        location: "Horizon Academy Campus",
        description:
            "Return to campus for the traditional homecoming football game, alumni tailgate, and special recognition of distinguished alumni during halftime.",
    },
]

export default function AlumniPage() {
    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    <section className="relative">
                        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                            <Image
                                src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
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
                                    Welcome to Our Alumni Community
                                </motion.h2>
                                <motion.p
                                    className="text-lg text-muted-foreground"
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
                                    className="text-lg text-muted-foreground"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    Whether you graduated recently or decades ago, you remain an important part of our community. We invite
                                    you to stay connected, participate in alumni events, mentor current students, and contribute to the
                                    continued growth and success of Horizon Academy.
                                </motion.p>
                                <motion.div
                                    className="flex flex-wrap gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Join Alumni Network</Button>
                                    <Button variant="outline">Update Your Information</Button>
                                </motion.div>
                            </div>
                            <motion.div
                                className="relative h-[400px] rounded-lg overflow-hidden"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
                                    alt="Alumni networking"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
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
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Alumni Benefits</h2>
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
                    <section className="max-w-7xl mx-auto py-12 md:py-16">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Notable Alumni</h2>
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
                        <motion.div
                            className="flex justify-center mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Button variant="outline" className="gap-1">
                                View More Alumni Stories <ChevronRight className="h-4 w-4" />
                            </Button>
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
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Upcoming Alumni Events</h2>
                                <p className="text-lg text-muted-foreground">
                                    Join us for these special events designed to reconnect and celebrate our alumni community
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
                                    events.map((event, index) => (
                                        <EventCard key={index} {...event} />
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
                            className="text-center max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Get Involved</h2>
                            <p className="text-lg text-muted-foreground">
                                There are many ways to give back and stay connected with the Horizon Academy community
                            </p>
                        </motion.div>
                        <Tabs defaultValue="volunteer" className="w-full">
                            <div className="flex justify-center mb-8">
                                <TabsList className="grid w-full max-w-2xl grid-cols-3">
                                    <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
                                    <TabsTrigger value="mentor">Mentor</TabsTrigger>
                                    <TabsTrigger value="donate">Donate</TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value="volunteer">
                                <motion.div
                                    className="grid gap-8 md:grid-cols-2 items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold">Volunteer Opportunities</h3>
                                        <p className="text-muted-foreground">
                                            Share your time and expertise with the Horizon Academy community. Volunteer opportunities include:
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Speaking at career days and special events</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Helping organize alumni events and reunions</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Serving on alumni advisory committees</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Supporting school events and fundraisers</span>
                                            </li>
                                        </ul>
                                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                            Explore Volunteer Opportunities
                                        </Button>
                                    </div>
                                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                                        <Image
                                            src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
                                            alt="Alumni volunteering"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="mentor">
                                <motion.div
                                    className="grid gap-8 md:grid-cols-2 items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold">Mentor a Student</h3>
                                        <p className="text-muted-foreground">
                                            Make a meaningful impact by mentoring current students. Our mentorship program connects alumni with
                                            students who share similar interests or career aspirations. As a mentor, you can:
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Provide career guidance and insights</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Share your college and professional experiences</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Help students develop professional skills</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Offer job shadowing or internship opportunities</span>
                                            </li>
                                        </ul>
                                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                            Join Mentorship Program
                                        </Button>
                                    </div>
                                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                                        <Image
                                            src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
                                            alt="Alumni mentoring"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="donate">
                                <motion.div
                                    className="grid gap-8 md:grid-cols-2 items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold">Support Future Generations</h3>
                                        <p className="text-muted-foreground">
                                            Your contributions help ensure that current and future students receive the same quality education
                                            and opportunities that you experienced. Donations support:
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Scholarships for deserving students</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Facility improvements and technology upgrades</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Enhanced academic and extracurricular programs</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>Professional development for faculty and staff</span>
                                            </li>
                                        </ul>
                                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Make a Donation</Button>
                                    </div>
                                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                                        <Image
                                            src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
                                            alt="Scholarship presentation"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
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
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Connected</h2>
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
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Subscribe to Alumni Newsletter</CardTitle>
                                        <CardDescription>
                                            Receive quarterly updates on alumni events, school news, and opportunities to get involved.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="first-name">First name</Label>
                                                    <Input id="first-name" placeholder="John" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="last-name">Last name</Label>
                                                    <Input id="last-name" placeholder="Doe" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" type="email" placeholder="john.doe@example.com" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="graduation-year">Graduation Year</Label>
                                                <Input id="graduation-year" placeholder="e.g. 2010" />
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                            <motion.div
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
                            </motion.div>
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
    achievement: string
    image: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden h-full">
                <div className="relative h-64 w-full">
                    <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
                </div>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>{name}</CardTitle>
                            <CardDescription>Class of {graduationYear}</CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-primary/5">
                            {profession}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{achievement}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="gap-1">
                        Read Full Profile <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter>
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
            <Card className="h-full">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>{location}</span>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                        Register
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                        Details <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}