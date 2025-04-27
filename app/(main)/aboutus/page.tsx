"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Award, BookOpen, Calendar, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="relative">
                    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                        <Image
                            src="/modern-campus-overview.png"
                            alt="School campus aerial view"
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
                                    About Horizon Academy
                                </motion.h1>
                                <motion.p
                                    className="text-base md:text-lg text-white/90 max-w-md mx-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    Discover our rich history, mission, and the dedicated team behind our educational excellence
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* About Tabs Section */}
                <section className="container py-12 md:py-16">
                    <Tabs defaultValue="mission" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="grid w-full max-w-2xl grid-cols-3">
                                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                                <TabsTrigger value="history">Our History</TabsTrigger>
                                <TabsTrigger value="values">Our Values</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="mission">
                            <motion.div
                                className="max-w-3xl mx-auto text-center space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                                <p className="text-lg text-muted-foreground">
                                    At Horizon Academy, our mission is to provide a transformative educational experience that empowers
                                    students to become lifelong learners, critical thinkers, and responsible global citizens. We are
                                    committed to nurturing each student&apos;s unique potential through a balanced approach to academic
                                    excellence, character development, and personal growth.
                                </p>
                                <p className="text-lg text-muted-foreground">
                                    We strive to create an inclusive learning environment that celebrates diversity, fosters creativity,
                                    and inspires innovation. Through collaborative partnerships with families and the community, we
                                    prepare students to navigate the complexities of a rapidly changing world with confidence, compassion,
                                    and integrity.
                                </p>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="history">
                            <motion.div
                                className="max-w-3xl mx-auto text-center space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                                    <Calendar className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Our History</h2>
                                <p className="text-lg text-muted-foreground">
                                    Founded in 1985, Horizon Academy began as a small community school with just 50 students and 5
                                    teachers. Our founder, Dr. Elizabeth Morgan, envisioned a school that would combine academic rigor
                                    with a nurturing approach to education.
                                </p>
                                <p className="text-lg text-muted-foreground">
                                    Over the decades, we have grown into a premier educational institution serving over 1,200 students
                                    from diverse backgrounds. Our campus has expanded to include state-of-the-art facilities, while
                                    maintaining our commitment to small class sizes and personalized attention.
                                </p>
                                <p className="text-lg text-muted-foreground">
                                    Throughout our history, we have remained dedicated to our founding principles while adapting to meet
                                    the evolving needs of our students and the changing demands of the world they will inherit.
                                </p>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="values">
                            <motion.div
                                className="max-w-3xl mx-auto text-center space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                                    <Award className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left pt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Excellence</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                We pursue excellence in all endeavors, challenging ourselves and our students to exceed
                                                expectations and achieve their highest potential.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Integrity</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                We act with honesty, transparency, and ethical behavior in all interactions within our community
                                                and beyond.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Respect</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                We value the dignity and worth of each individual, embracing diversity and fostering an
                                                inclusive environment.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Innovation</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                We encourage creative thinking, problem-solving, and the exploration of new ideas and approaches
                                                to learning.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Community</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                We foster a sense of belonging and connection, recognizing that we are stronger when we work
                                                together.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Responsibility</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>
                                                We instill a sense of personal and social responsibility, empowering students to make positive
                                                contributions to society.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* Leadership Team Section */}
                <section className="py-12 md:py-16 bg-secondary/20 dark:bg-gray-900/30">
                    <div className="container">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Leadership Team</h2>
                            <p className="text-lg text-muted-foreground">
                                Meet the dedicated professionals who guide our institution with vision and expertise
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {leadershipTeam.map((member) => (
                                <TeamMemberCard key={member.name} {...member} />
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Campus Facilities Section */}
                <section className="container py-12 md:py-16">
                    <motion.div
                        className="text-center max-w-2xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Campus Facilities</h2>
                        <p className="text-lg text-muted-foreground">
                            Our state-of-the-art facilities provide the perfect environment for learning and growth
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {facilities.map((facility) => (
                            <FacilityCard key={facility.title} {...facility} />
                        ))}
                    </motion.div>
                </section>

                {/* Testimonials Section */}
                <section className="py-12 md:py-16 bg-secondary/20 dark:bg-gray-900/30">
                    <div className="container">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Community Says</h2>
                            <p className="text-lg text-muted-foreground">
                                Hear from students, parents, and alumni about their Horizon Academy experience
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container py-12 md:py-16">
                    <motion.div
                        className="max-w-3xl mx-auto text-center space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight">Ready to Join Our Community?</h2>
                        <p className="text-lg text-muted-foreground">
                            Schedule a campus visit, attend an open house, or apply for admission today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                                <Link href="/admissions">Apply for Admission</Link>
                            </Button>
                            <Button size="lg" variant="outline">
                                Schedule a Visit
                            </Button>
                        </div>
                    </motion.div>
                </section>
            </main>
        </div>
    )
}

function TeamMemberCard({
    name,
    role,
    image,
    bio,
}: {
    name: string
    role: string
    image: string
    bio: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden h-full">
                <div className="relative h-64 w-full">
                    <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
                </div>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{role}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{bio}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="ghost" size="sm" className="gap-1">
                        Read full bio <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

function FacilityCard({
    title,
    description,
    image,
}: {
    title: string
    description: string
    image: string
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
                <CardContent>
                    <p className="text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

function TestimonialCard({
    quote,
    name,
    role,
    image,
}: {
    quote: string
    name: string
    role: string
    image: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
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
                                <p className="text-xs text-muted-foreground">{role}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

const leadershipTeam = [
    {
        name: "Dr. Sarah Johnson",
        role: "Principal",
        image: "/confident-principal.png",
        bio: "Dr. Johnson has over 20 years of experience in education and has been leading Horizon Academy since 2015. She holds a Ph.D. in Educational Leadership from Stanford University.",
    },
    {
        name: "Michael Chen",
        role: "Vice Principal, Academics",
        image: "/confident-educator.png",
        bio: "With a background in curriculum development and a passion for innovative teaching methods, Mr. Chen oversees all academic programs and faculty development.",
    },
    {
        name: "Dr. Amara Okafor",
        role: "Vice Principal, Student Affairs",
        image: "/confident-educator.png",
        bio: "Dr. Okafor focuses on creating a supportive environment for students. She has pioneered several mental health and wellness initiatives at the school.",
    },
    {
        name: "Robert Martinez",
        role: "Director of Athletics",
        image: "/confident-athletic-director.png",
        bio: "A former professional athlete, Mr. Martinez brings his expertise and passion for sports to our athletic programs. He has developed a comprehensive sports curriculum that emphasizes teamwork, discipline, and personal growth.",
    },
    {
        name: "Jennifer Williams",
        role: "Director of Arts",
        image: "/placeholder.svg?height=400&width=300&query=female arts director headshot",
        bio: "Ms. Williams is an accomplished artist and educator who has transformed our arts program into one of the most respected in the region. She believes in the power of creative expression for all students.",
    },
    {
        name: "David Thompson",
        role: "Director of Technology",
        image: "/placeholder.svg?height=400&width=300&query=male technology director headshot",
        bio: "Mr. Thompson leads our technology initiatives, ensuring that students and staff have access to cutting-edge tools and resources. He has implemented several innovative EdTech solutions across campus.",
    },
]

const facilities = [
    {
        title: "Modern Classrooms",
        description:
            "Our spacious, technology-enhanced classrooms provide the perfect environment for engaged learning with interactive smartboards and flexible seating arrangements.",
        image: "/placeholder.svg?height=300&width=500&query=modern school classroom with technology",
    },
    {
        title: "Science Laboratories",
        description:
            "State-of-the-art science labs equipped with advanced equipment allow students to conduct experiments and research in physics, chemistry, and biology.",
        image: "/placeholder.svg?height=300&width=500&query=modern school science laboratory",
    },
    {
        title: "Library & Media Center",
        description:
            "Our comprehensive library houses over 20,000 volumes and digital resources, with dedicated spaces for research, collaboration, and quiet study.",
        image: "/placeholder.svg?height=300&width=500&query=modern school library with students",
    },
    {
        title: "Athletic Facilities",
        description:
            "Including a gymnasium, swimming pool, tennis courts, and sports fields that support our diverse athletic programs and physical education curriculum.",
        image: "/placeholder.svg?height=300&width=500&query=school gymnasium and sports facilities",
    },
    {
        title: "Performing Arts Center",
        description:
            "A 500-seat auditorium with professional lighting and sound systems, music studios, and rehearsal spaces for our thriving arts programs.",
        image: "/placeholder.svg?height=300&width=500&query=school auditorium and performance space",
    },
    {
        title: "Innovation Hub",
        description:
            "A dedicated makerspace and technology center where students can explore robotics, coding, 3D printing, and other emerging technologies.",
        image: "/placeholder.svg?height=300&width=500&query=school makerspace with 3d printers and technology",
    },
]

const testimonials = [
    {
        quote:
            "The teachers at Horizon Academy don't just teach subjects; they inspire a love of learning that will last a lifetime. My daughter has flourished here in ways I never imagined possible.",
        name: "Maria Rodriguez",
        role: "Parent of 10th Grader",
        image: "/placeholder.svg?height=100&width=100&query=middle aged woman portrait",
    },
    {
        quote:
            "The personalized attention and challenging curriculum prepared me exceptionally well for university. The critical thinking skills I developed at Horizon have been invaluable in my studies and career.",
        name: "James Wilson",
        role: "Alumni, Class of 2018",
        image: "/placeholder.svg?height=100&width=100&query=young professional man portrait",
    },
    {
        quote:
            "As a transfer student, I was nervous about fitting in, but the welcoming community at Horizon made me feel at home immediately. The diverse clubs and activities helped me discover new passions.",
        name: "Aisha Patel",
        role: "Current Student, Grade 11",
        image: "/placeholder.svg?height=100&width=100&query=teenage girl student portrait",
    },
]