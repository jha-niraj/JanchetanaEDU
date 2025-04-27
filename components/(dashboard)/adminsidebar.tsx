"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { BookText, Users, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useSidebar } from "./sidebarprovider"

export function Sidebar() {
    const pathname = usePathname()
    const { toggle } = useSidebar()

    const links = [
        { href: "/", label: "Dashboard", icon: <Users className="h-5 w-5" /> },
        { href: "/teachers", label: "Teacher Details", icon: <Users className="h-5 w-5" /> },
        { href: "/articles", label: "Article Writing", icon: <BookText className="h-5 w-5" /> },
    ]

    return (
        <div className="flex h-full w-64 flex-col border-r bg-background">
            <div className="flex h-14 items-center justify-between border-b px-4">
                <h1 className="text-xl font-semibold">Principal Dashboard</h1>
                <Button variant="ghost" size="icon" onClick={toggle} className="md:hidden">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close sidebar</span>
                </Button>
            </div>
            <nav className="flex-1 space-y-1 p-4">
                {links.map((link) => {
                    const isActive = pathname === link.href

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors relative",
                                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-indicator"
                                    className="absolute left-0 right-0 top-0 bottom-0 rounded-md bg-muted z-[-1]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                            {link.icon}
                            <span>{link.label}</span>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
