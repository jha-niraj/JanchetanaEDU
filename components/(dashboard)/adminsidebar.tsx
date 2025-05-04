"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookText, ChevronLeft, Home, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useSidebar } from "./sidebarprovider"

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { href: "/dashboard/teachers", label: "Teacher Details", icon: <Users className="h-5 w-5" /> },
    { href: "/dashboard/articles", label: "Article Writing", icon: <BookText className="h-5 w-5" /> },
]

export function Sidebar() {
    const pathname = usePathname()
    const { isOpen, toggle } = useSidebar()

    if (!isOpen) {
        return (
            <Button
                variant="outline"
                size="icon"
                onClick={toggle}
                className="fixed left-4 top-4 z-50"
            >
                <ChevronLeft className="h-5 w-5" />
            </Button>
        )
    }

    return (
        <div className="flex h-full w-64 flex-col border-r bg-background shadow-sm">
            <div className="flex h-14 items-center justify-between border-b px-4">
                <h1 className="text-xl font-semibold">Principal Dashboard</h1>
                <Button variant="ghost" size="icon" onClick={toggle}>
                    <ChevronLeft className="h-5 w-5" />
                </Button>
            </div>

            <nav className="flex-1 space-y-1 p-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-muted text-foreground"
                                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                            )}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}