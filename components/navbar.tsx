"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import {
    Menu, BookOpen, User, GraduationCap, Users, Heart, Phone,
    Sun, Moon, Sparkles, Code
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const navigationLinks = [
    { href: "/aboutus", label: "About", icon: User },
    { href: "/academics", label: "Academics", icon: GraduationCap },
    { href: "/studentlife", label: "Student Life", icon: Heart },
    // { href: "/elibrary", label: "E-Library", icon: Library },
    { href: "/alumni", label: "Alumni", icon: Users },
    { href: "/contactus", label: "Contact", icon: Phone },
]

const socialLinks = [
    { href: "https://github.com", icon: Code, label: "Resources" },
    { href: "https://twitter.com", icon: BookOpen, label: "News" },
    { href: "https://linkedin.com", icon: Users, label: "Community" },
]

export function MainNav() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname.startsWith(href)
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="w-full h-24 flex items-center justify-center fixed top-0 z-50">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={cn(
                    "w-[96%] max-w-7xl mx-auto rounded-2xl transition-all duration-300",
                    scrolled
                        ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg dark:shadow-gray-800/30"
                        : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md",
                )}
            >
                <div className="px-6">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <BookOpen className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">
                                    <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                        Janchetana
                                    </span>
                                    <span className="text-xs font-normal block bg-gradient-to-r from-teal-500 to-cyan-800 bg-clip-text text-transparent">
                                        School of Excellence
                                    </span>
                                </h1>
                            </div>
                        </Link>
                        <div className="hidden lg:flex items-center gap-4">
                            {
                                navigationLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive(link.href)
                                            ? "text-teal-600 dark:text-teal-400"
                                            : "text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                                            }`}
                                    >
                                        <link.icon className="h-4 w-4" />
                                        {link.label}
                                        {
                                            isActive(link.href) && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400"
                                                    initial={false}
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )
                                        }
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="hidden lg:flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={toggleTheme}
                            >
                                {
                                    mounted && theme === 'light' ? (
                                        <Sun className="h-5 w-5 text-yellow-500" />
                                    ) : (
                                        <Moon className="h-5 w-5 text-slate-400" />
                                    )
                                }
                            </Button>
                            {/* <Link href="/auth">
                                <Button className="cursor-pointer bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-md hover:shadow-lg transition-all duration-300">
                                    Login / Sign Up
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link> */}
                        </div>
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="sm" className="lg:hidden">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 p-0">
                                <div className="flex flex-col h-full">
                                    <SheetHeader className="p-6 border-b border-gray-200 dark:border-gray-800">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="relative">
                                                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                                        <BookOpen className="h-6 w-6 text-white" />
                                                    </div>
                                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                                                        <Sparkles className="h-2 w-2 text-white" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <SheetTitle className="text-lg font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                                        Janchetana
                                                    </SheetTitle>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">School of Excellence</p>
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                                onClick={toggleTheme}
                                            >
                                                {
                                                    mounted && theme === 'light' ? (
                                                        <Sun className="h-4 w-4 text-yellow-500" />
                                                    ) : (
                                                        <Moon className="h-4 w-4 text-slate-400" />
                                                    )
                                                }
                                            </Button>
                                        </div>
                                    </SheetHeader>
                                    <div className="flex-1 p-6">
                                        <div className="space-y-2">
                                            {
                                                navigationLinks.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isActive(link.href)
                                                            ? "text-teal-600 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800"
                                                            : "text-gray-600 dark:text-gray-300 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                                                            }`}
                                                    >
                                                        <link.icon className="h-4 w-4" />
                                                        {link.label}
                                                        {
                                                            isActive(link.href) && (
                                                                <Badge className="ml-auto bg-teal-500 text-white">Active</Badge>
                                                            )
                                                        }
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                        <div className="mt-8 space-y-4">
                                            <Badge
                                                variant="secondary"
                                                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-none w-full justify-center py-2"
                                            >
                                                <Sparkles className="h-3 w-3 mr-1" />
                                                School of Excellence
                                            </Badge>
                                            {/* <Link href="/auth" onClick={() => setIsOpen(false)}>
                                                <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600">
                                                    Login / Sign Up
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </Link> */}
                                        </div>
                                        <div className="mt-8">
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">Quick Links</h3>
                                            <div className="flex gap-3">
                                                {
                                                    socialLinks.map((social) => (
                                                        <Link
                                                            key={social.href}
                                                            href={social.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-600 transition-colors duration-300"
                                                        >
                                                            <social.icon className="h-5 w-5" />
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                                        <div className="text-center">
                                            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Janchetana School</p>
                                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Nurturing Excellence in Education</p>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </motion.nav>
        </div>
    )
}