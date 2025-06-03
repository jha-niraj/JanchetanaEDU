"use client"

import type React from "react"
import { useState, useTransition } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Clock, MessageSquare, User, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SmoothScroll from "@/components/smoothscroll"
import { addContactInquiry } from "@/actions/contact.action"
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

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

const academicContacts = [
    {
        name: "Dr. Sarah Johnson",
        title: "Principal",
        email: "sjohnson@horizonacademy.edu",
        phone: "(555) 123-4570",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        name: "Michael Chen",
        title: "Vice Principal, Academics",
        email: "mchen@horizonacademy.edu",
        phone: "(555) 123-4571",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        name: "Dr. Emily Rodriguez",
        title: "Curriculum Director",
        email: "erodriguez@horizonacademy.edu",
        phone: "(555) 123-4572",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
]
const admissionsContacts = [
    {
        name: "Jennifer Williams",
        title: "Director of Admissions",
        email: "jwilliams@horizonacademy.edu",
        phone: "(555) 123-4573",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        name: "David Thompson",
        title: "Admissions Counselor (Grades K-8)",
        email: "dthompson@horizonacademy.edu",
        phone: "(555) 123-4574",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        name: "Lisa Martinez",
        title: "Admissions Counselor (Grades 9-12)",
        email: "lmartinez@horizonacademy.edu",
        phone: "(555) 123-4575",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
]
const athleticsContacts = [
    {
        name: "Robert Martinez",
        title: "Athletic Director",
        email: "rmartinez@horizonacademy.edu",
        phone: "(555) 123-4576",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        name: "James Wilson",
        title: "Head Coach, Basketball",
        email: "jwilson@horizonacademy.edu",
        phone: "(555) 123-4577",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        name: "Sophia Lee",
        title: "Head Coach, Swimming",
        email: "slee@horizonacademy.edu",
        phone: "(555) 123-4578",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
]
const supportContacts = [
    {
        name: "Thomas Garcia",
        title: "Technology Support",
        email: "tgarcia@horizonacademy.edu",
        phone: "(555) 123-4579",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        name: "Dr. Amara Okafor",
        title: "School Counselor",
        email: "aokafor@horizonacademy.edu",
        phone: "(555) 123-4580",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
    {
        name: "Richard Kim",
        title: "Facilities Manager",
        email: "rkim@horizonacademy.edu",
        phone: "(555) 123-4581",
        image: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
    },
]
const faqs = [
    {
        question: "What are the school hours?",
        answer:
            "School hours are from 8:00 AM to 3:30 PM, Monday through Friday. Students may arrive as early as 7:30 AM, and after-school programs run until 5:30 PM.",
    },
    {
        question: "How do I apply for admission?",
        answer:
            "The admission process begins with submitting an online application through our website. After reviewing your application, we'll invite qualified candidates for an assessment and interview. For detailed information, please visit our Admissions page.",
    },
    {
        question: "Are there transportation services available?",
        answer:
            "Yes, we offer bus transportation for students living within a 15-mile radius of the school. Transportation fees are included in the tuition. For students outside this area, we can help coordinate carpooling options.",
    },
    {
        question: "What is the average class size?",
        answer:
            "We maintain small class sizes to ensure personalized attention. Our average class size is 18 students in elementary grades and 22 students in middle and high school grades.",
    },
    {
        question: "Do you offer financial aid or scholarships?",
        answer:
            "Yes, we offer need-based financial aid and merit scholarships. Approximately 25% of our students receive some form of financial assistance. Applications for financial aid should be submitted along with your admission application.",
    },
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        message: "",
    });
    const [isPending, startTransition] = useTransition();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        startTransition(async () => {
            const form = new FormData();
            form.append("name", formData.name);
            form.append("phoneNumber", formData.phoneNumber);
            if (formData.message) form.append("message", formData.message);

            const result = await addContactInquiry(form);

            if (result.success) {
                setShowSuccessDialog(true);
                setFormData({ name: "", phoneNumber: "", message: "" });
            } else {
                setError(result.error || "Failed to submit inquiry.");
            }
        });
    };

    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    <section className="relative">
                        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                            <Image
                                src="/admissions/mainimage.jpeg"
                                alt="School campus"
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
                                        Contact Us
                                    </motion.h1>
                                    <motion.p
                                        className="text-base md:text-lg text-white/90 max-w-md mx-auto"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                    >
                                        We&apos;re here to answer your questions and help you connect with our community
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-12 md:py-16">
                        <motion.div
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInUp}>
                                <Card className="h-full">
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <Phone className="h-5 w-5 text-primary" />
                                            </div>
                                            <CardTitle>Call Us</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">Main Office: (555) 123-4567</p>
                                        <p className="text-muted-foreground">Admissions: (555) 123-4568</p>
                                        <p className="text-muted-foreground">Student Services: (555) 123-4569</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                <Card className="h-full">
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <Mail className="h-5 w-5 text-primary" />
                                            </div>
                                            <CardTitle>Email Us</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">General Inquiries: info@horizonacademy.edu</p>
                                        <p className="text-muted-foreground">Admissions: admissions@horizonacademy.edu</p>
                                        <p className="text-muted-foreground">Support: support@horizonacademy.edu</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                <Card className="h-full">
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <MapPin className="h-5 w-5 text-primary" />
                                            </div>
                                            <CardTitle>Visit Us</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">123 Education Lane</p>
                                        <p className="text-muted-foreground">Learning City, LC 12345</p>
                                        <p className="text-muted-foreground">United States</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                <Card className="h-full">
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <Clock className="h-5 w-5 text-primary" />
                                            </div>
                                            <CardTitle>Office Hours</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">Sunday - Friday: 8:00 AM - 4:30 PM</p>
                                        <p className="text-muted-foreground">Saturday: 9:00 AM - 12:00 PM (Admissions Only)</p>
                                    </CardContent>
                                </Card>
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
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
                                <p className="text-lg text-muted-foreground">
                                    Have a question or need more information? We&apos;re here to help.
                                </p>
                            </motion.div>
                            <div className="grid gap-8 md:grid-cols-2">
                                <motion.div
                                    className="w-full max-w-md mx-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card className="shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                                        <CardHeader>
                                            <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">Get in Touch</CardTitle>
                                            <p className="text-gray-500 dark:text-gray-400">Fill out the form below, and we’ll contact you soon.</p>
                                        </CardHeader>
                                        <CardContent>
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                                                        Name
                                                    </Label>
                                                    <div className="relative">
                                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                        <Input
                                                            id="name"
                                                            type="text"
                                                            placeholder="Your name"
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                                                            disabled={isPending}
                                                            aria-label="Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phoneNumber" className="text-gray-700 dark:text-gray-300">
                                                        Phone Number
                                                    </Label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                        <Input
                                                            id="phoneNumber"
                                                            type="tel"
                                                            placeholder="+1234567890"
                                                            value={formData.phoneNumber}
                                                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                                            className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                                                            disabled={isPending}
                                                            aria-label="Phone Number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                                                        Message (Optional)
                                                    </Label>
                                                    <div className="relative">
                                                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                        <Textarea
                                                            id="message"
                                                            placeholder="Your message or questions"
                                                            value={formData.message}
                                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                            className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                                                            disabled={isPending}
                                                            aria-label="Message"
                                                        />
                                                    </div>
                                                </div>
                                                {
                                                    error && (
                                                        <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                                                    )
                                                }
                                                <Button
                                                    type="submit"
                                                    className="w-full cursor-pointer bg-black text-white dark:bg-white dark:text-black transition-colors"
                                                    disabled={isPending}
                                                >
                                                    {
                                                        isPending ? (
                                                            <span className="flex items-center">
                                                                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                                </svg>
                                                                Submitting...
                                                            </span>
                                                        ) : (
                                                            "Submit Inquiry"
                                                        )
                                                    }
                                                </Button>
                                            </form>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card className="h-full">
                                        <CardHeader>
                                            <CardTitle>Find Us</CardTitle>
                                            <CardDescription>Our campus is conveniently located in the heart of Learning City.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <div className="relative h-[400px] w-full">
                                                <Image
                                                    src="/landingpage/hero/2.jpeg"
                                                    alt="Campus map"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex flex-col items-start gap-2">
                                            <p className="text-sm text-muted-foreground">
                                                <MapPin className="h-4 w-4 inline mr-1" />
                                                123 Education Lane, Learning City, LC 12345
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Nearby landmarks: Central Park, City Library, Main Street Shopping Center
                                            </p>
                                            <Button variant="outline" size="sm" className="mt-2">
                                                Get Directions
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="max-w-7xl mx-auto py-12 md:py-16">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Department Contacts</h2>
                            <p className="text-lg text-muted-foreground">
                                Connect directly with specific departments for specialized assistance
                            </p>
                        </motion.div>
                        <Tabs defaultValue="academics" className="w-full">
                            <div className="flex justify-center mb-8">
                                <TabsList className="grid w-full max-w-2xl grid-cols-4">
                                    <TabsTrigger value="academics">Academics</TabsTrigger>
                                    <TabsTrigger value="admissions">Admissions</TabsTrigger>
                                    <TabsTrigger value="athletics">Athletics</TabsTrigger>
                                    <TabsTrigger value="support">Support</TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value="academics">
                                <motion.div
                                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {
                                        academicContacts.map((contact, index) => (
                                            <ContactCard key={index} {...contact} />
                                        ))
                                    }
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="admissions">
                                <motion.div
                                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {
                                        admissionsContacts.map((contact, index) => (
                                            <ContactCard key={index} {...contact} />
                                        ))
                                    }
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="athletics">
                                <motion.div
                                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {
                                        athleticsContacts.map((contact, index) => (
                                            <ContactCard key={index} {...contact} />
                                        ))
                                    }
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="support">
                                <motion.div
                                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {
                                        supportContacts.map((contact, index) => (
                                            <ContactCard key={index} {...contact} />
                                        ))
                                    }
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </section> */}
                    <section className="w-full py-12 md:py-16 bg-secondary/20 dark:bg-gray-900/30">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                                <p className="text-lg text-muted-foreground">
                                    Find quick answers to common questions about Horizon Academy
                                </p>
                            </motion.div>
                            <motion.div
                                className="max-w-3xl mx-auto grid gap-6"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {
                                    faqs.map((faq, index) => (
                                        <motion.div key={index} variants={fadeInUp}>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-muted-foreground">{faq.answer}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        </div>
                    </section>
                </main>
                <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                    <AlertDialogContent className="bg-white dark:bg-gray-800 border-0 shadow-xl">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                <CheckCircle className="h-5 w-5" />
                                Inquiry Submitted
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-gray-600 dark:text-gray-300">
                                Thank you for reaching out to Janchetana. We will contact you soon to address your inquiry.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <Button
                                className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                                onClick={() => setShowSuccessDialog(false)}
                            >
                                Close
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </SmoothScroll>
    )
}

function ContactCard({
    name,
    title,
    email,
    phone,
    image,
}: {
    name: string
    title: string
    email: string
    phone: string
    image: string
}) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
                    </div>
                    <div>
                        <CardTitle className="text-base">{name}</CardTitle>
                        <CardDescription>{title}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{phone}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="ghost" size="sm" className="gap-1">
                        <Mail className="h-4 w-4" />
                        Contact
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}