"use client"

import { Sidebar } from "@/components/(admin)/adminsidebar"
import { useState, useEffect } from "react"
import {
    Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Lock } from "lucide-react"

const ADMIN_PASSWORD = "janchetana26"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        // Check if already authenticated in session
        const authStatus = sessionStorage.getItem("admin_authenticated")
        if (authStatus === "true") {
            setIsAuthenticated(true)
        }
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true)
            sessionStorage.setItem("admin_authenticated", "true")
            setError("")
        } else {
            setError("Incorrect password. Please try again.")
            setPassword("")
        }
    }

    if (!isAuthenticated) {
        return (
            <Dialog open={true}>
                <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
                    <DialogHeader>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full">
                            <Lock className="h-6 w-6 text-primary" />
                        </div>
                        <DialogTitle className="text-center">Admin Access Required</DialogTitle>
                        <DialogDescription className="text-center">
                            Please enter the password to access the admin dashboard.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setError("")
                                }}
                                placeholder="Enter admin password"
                                className={error ? "border-destructive" : ""}
                                autoFocus
                            />
                            {error && (
                                <p className="text-sm text-destructive">{error}</p>
                            )}
                        </div>
                        <Button type="submit" className="w-full">
                            Access Dashboard
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <Sidebar />
            <main className="min-h-screen md:pl-60 pt-16 md:pt-0">
                <div className="w-full mx-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}