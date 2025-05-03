"use client"

import Link from "next/link"
import { BookOpen, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export function Footer() {
    return (
        <footer className="bg-secondary/20 border-t dark:bg-gray-900 dark:border-gray-800">
            <motion.div
                className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6"
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
                                <BookOpen className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-tight">Janchetana</span>
                                <span className="text-xs text-muted-foreground leading-tight">School of Excellence</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Empowering students with knowledge, skills, and values to excel in a rapidly changing world since 1975.
                        </p>
                        <div className="flex space-x-3">
                            <Button variant="ghost" size="icon" aria-label="Facebook">
                                <Facebook className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" aria-label="Twitter">
                                <Twitter className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" aria-label="Instagram">
                                <Instagram className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" aria-label="YouTube">
                                <Youtube className="h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/academics" className="text-muted-foreground hover:text-primary">
                                    Academics
                                </Link>
                            </li>
                            <li>
                                <Link href="/admissions" className="text-muted-foreground hover:text-primary">
                                    Admissions
                                </Link>
                            </li>
                            <li>
                                <Link href="/calendar" className="text-muted-foreground hover:text-primary">
                                    School Calendar
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-muted-foreground hover:text-primary">
                                    News & Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-muted-foreground hover:text-primary">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="mb-4 text-sm font-semibold">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/e-library" className="text-muted-foreground hover:text-primary">
                                    E-Library
                                </Link>
                            </li>
                            <li>
                                <Link href="/student-portal" className="text-muted-foreground hover:text-primary">
                                    Student Portal
                                </Link>
                            </li>
                            <li>
                                <Link href="/parent-portal" className="text-muted-foreground hover:text-primary">
                                    Parent Portal
                                </Link>
                            </li>
                            <li>
                                <Link href="/alumni" className="text-muted-foreground hover:text-primary">
                                    Alumni Network
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="text-muted-foreground hover:text-primary">
                                    Technical Support
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h3 className="text-sm font-semibold">Contact Us</h3>
                        <div className="flex items-start space-x-3 text-sm">
                            <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                            <span className="text-muted-foreground">Kathmandu, Nepal</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">+977 1 4123456</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">info@janchetana.edu.np</span>
                        </div>
                        <div className="pt-2">
                            <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
                            <div className="flex space-x-2">
                                <Input placeholder="Your email" className="max-w-[180px]" />
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <div className="border-t py-6 dark:border-gray-800">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left px-4 sm:px-6">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Janchetana School. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                        <Link href="/privacy" className="hover:underline">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:underline">
                            Terms of Use
                        </Link>
                        <Link href="/accessibility" className="hover:underline">
                            Accessibility
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
