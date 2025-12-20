"use client"

import Link from "next/link"
import { BookOpen, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

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
        <footer className="bg-white dark:bg-neutral-950 border border-t">
            <motion.div
                className="max-w-7xl mx-auto py-6 md:py-16 px-4 sm:px-6"
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 text-white shadow-xl shadow-teal-500/20">
                                <BookOpen className="h-7 w-7" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl leading-tight bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">Janchetana</span>
                                <span className="text-xs text-muted-foreground leading-tight font-semibold">School of Excellence</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            Empowering students with knowledge, skills, and values to excel in a rapidly changing world since 1975.
                        </p>
                        <div className="flex space-x-2 pt-2">
                            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 hover:scale-110" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 hover:scale-110" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 hover:scale-110" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 hover:scale-110" aria-label="YouTube">
                                <Youtube className="h-5 w-5" />
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-2">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/aboutus" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 inline-flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/academics" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 inline-flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Academics
                                </Link>
                            </li>
                            <li>
                                <Link href="/admissions" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 inline-flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Admissions
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-2">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/alumni" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 inline-flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Alumni Network
                                </Link>
                            </li>
                            <li>
                                <Link href="/contactus" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 inline-flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-2">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 text-sm group">
                                <div className="mt-0.5 p-1.5 rounded-lg bg-teal-50 dark:bg-teal-900/20 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                                    <MapPin className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                                </div>
                                <span className="text-muted-foreground leading-relaxed pt-0.5">Shivraj municipality -08, Laxmanpur Kapilvastu, Nepal</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm group">
                                <div className="p-1.5 rounded-lg bg-teal-50 dark:bg-teal-900/20 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                                    <Phone className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                                </div>
                                <span className="text-muted-foreground">+977 9847370585</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm group">
                                <div className="p-1.5 rounded-lg bg-teal-50 dark:bg-teal-900/20 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                                    <Mail className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                                </div>
                                <span className="text-muted-foreground break-all">janchetanacsschool@gmail.com</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <div className="border-t-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 py-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-center px-4 sm:px-6">
                    <p className="text-sm text-muted-foreground font-medium">
                        &copy; {new Date().getFullYear()} Janchetana School. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
