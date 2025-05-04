"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/ui/modetoggle"

const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
}

export function MainNav() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const routes = [
        {
            href: "/aboutus",
            label: "About",
            active: pathname === "/aboutus",
        },
        {
            href: "/academics",
            label: "Academics",
            active: pathname === "/academics",
        },
        {
            href: "/studentlife",
            label: "Student Life",
            active: pathname === "/studentlife",
        },
        {
            href: "/elibrary",
            label: "E-Library",
            active: pathname === "/elibrary",
        },
        {
            href: "/alumni",
            label: "Alumni",
            active: pathname === "/alumni",
        },
        {
            href: "/contactus",
            label: "Contact",
            active: pathname === "/contactus",
        },
    ]

    return (
        <motion.div
            className={cn(
                "sticky z-50 top-0 transition-all duration-300",
                scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent dark:bg-transparent",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex w-full items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center"
                >
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
                            <BookOpen className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-tight">Janchetana</span>
                            <span className="text-xs text-muted-foreground leading-tight">School of Excellence</span>
                        </div>
                    </Link>
                </motion.div>
                <motion.nav
                    className="hidden lg:flex items-center justify-center"
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex items-center space-x-6 text-sm font-medium">
                        {
                            routes.map((route) => (
                                <motion.div key={route.href} variants={itemVariants}>
                                    <Link
                                        href={route.href}
                                        className={cn(
                                            "transition-colors hover:text-primary",
                                            route.active ? "text-primary font-semibold" : "text-muted-foreground",
                                        )}
                                    >
                                        {route.label}
                                    </Link>
                                </motion.div>
                            ))
                        }
                    </div>
                </motion.nav>
                <motion.div
                    className="flex items-center justify-end space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="hidden lg:flex items-center space-x-2">
                        <Link href="/auth">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Login / Sign Up</Button>
                        </Link>
                    </div>
                    <ModeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="lg:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <Link href="/" className="flex items-center space-x-2 mb-6" onClick={() => setIsOpen(false)}>
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
                                    <BookOpen className="h-5 w-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg leading-tight">Janchetana</span>
                                    <span className="text-xs text-muted-foreground leading-tight">School of Excellence</span>
                                </div>
                            </Link>
                            <nav className="flex flex-col space-y-4">
                                {
                                    routes.map((route) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            className={cn(
                                                "text-base transition-colors hover:text-primary",
                                                route.active ? "text-primary font-semibold" : "text-muted-foreground",
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {route.label}
                                        </Link>
                                    ))
                                }
                                <div className="flex flex-col space-y-2 pt-4 mt-4 border-t">
                                    <Link href="/auth" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                            Login / Sign Up
                                        </Button>
                                    </Link>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </motion.div>
            </div>
        </motion.div>
    )
}
