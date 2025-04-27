"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="outline" size="icon" className="h-9 w-9">
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <div className="flex items-center space-x-2">
            <Sun className="h-5 w-5 text-yellow-400" />
            <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
            <Moon className="h-5 w-5 text-gray-800" />
        </div>
    )
}
