"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
    BookText, Home, Menu, Users, X, GraduationCap, Bell, Calendar, UserPlus
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useState, useEffect } from "react"

const navItems = [
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/teachers", label: "Teachers", icon: Users },
    { href: "/admin/articles", label: "Articles", icon: BookText }, 
    { href: "/admin/notices", label: "Notices", icon: Bell },
    { href: "/admin/admissioninquiry", label: "Admission Inquiries", icon: UserPlus },
    { href: "/admin/alumni", label: "Alumni", icon: Users },
    { href: "/admin/schoolevents", label: "School Events", icon: Calendar },
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
        <nav className="flex-1 space-y-1 p-4">
            {
                navItems.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => !isDesktop && setIsOpen(false)}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 group",
                                "hover:bg-primary/10 hover:text-primary",
                                isActive
                                    ? "bg-primary/10 text-primary shadow-sm border-l-4 border-primary"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Icon className={cn(
                                "h-5 w-5 transition-transform group-hover:scale-110",
                                isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                            )} />
                            <span>{item.label}</span>
                        </Link>
                    )
                })
            }
        </nav>
    )

    if (isDesktop) {
        return (
            <div className="flex h-screen w-60 flex-col fixed left-0 top-0 border-r bg-gradient-to-b from-background to-muted/20 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-lg">
                <div className="flex h-20 items-center border-b px-6 bg-gradient-to-r from-primary/5 to-primary/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center shadow-md">
                            <GraduationCap className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Admin Panel
                            </h1>
                            <p className="text-xs text-muted-foreground">Janchetana School</p>
                        </div>
                    </div>
                </div>
                <NavContent />
                <div className="mt-auto p-4 border-t">
                    <div className="text-xs text-muted-foreground text-center">
                        <p>© 2024 Janchetana School</p>
                        <p className="mt-1">All rights reserved</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex h-16 items-center px-4 border-b md:hidden bg-gradient-to-r from-primary/5 to-primary/10">
                <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
                <div className="flex items-center gap-2 ml-4">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        Admin Panel
                    </h1>
                </div>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent
                    side="left"
                    className="w-[300px] p-0 border-r bg-gradient-to-b from-background to-muted/20"
                >
                    <div className="flex h-20 items-center border-b px-6 bg-gradient-to-r from-primary/5 to-primary/10">
                        <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center shadow-md">
                                <GraduationCap className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                    Admin Panel
                                </h1>
                                <p className="text-xs text-muted-foreground">Janchetana School</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-primary/10"
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