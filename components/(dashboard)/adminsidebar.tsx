"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookText, Home, Menu, Users, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useState, useEffect } from "react"

const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { href: "/admin/teachers", label: "Teacher Details", icon: <Users className="h-5 w-5" /> },
    { href: "/admin/articles", label: "Article Writing", icon: <BookText className="h-5 w-5" /> },
]

export function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    // Close sheet on path change on mobile
    useEffect(() => {
        if (!isDesktop) {
            setIsOpen(false)
        }
    }, [pathname, isDesktop])

    const NavContent = () => (
        <nav className="flex-1 space-y-2 p-4">
            {
                navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => !isDesktop && setIsOpen(false)}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                                "hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
                                isActive
                                    ? "bg-accent text-accent-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    )
                })
            }
        </nav>
    )

    if (isDesktop) {
        return (
            <div className="flex h-[calc(100vh-4rem)] w-64 flex-col fixed left-0 top-16 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex h-16 items-center border-b px-6">
                    <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
                </div>
                <NavContent />
            </div>
        )
    }

    return (
        <>
            <div className="flex h-16 items-center px-4 border-b md:hidden">
                <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-accent"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
                <h1 className="text-xl font-semibold tracking-tight ml-4">Dashboard</h1>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent
                    side="left"
                    className="w-[280px] p-0 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                >
                    <div className="flex h-16 items-center border-b px-6">
                        <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto hover:bg-accent"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                    <NavContent />
                </SheetContent>
            </Sheet>
        </>
    )
}