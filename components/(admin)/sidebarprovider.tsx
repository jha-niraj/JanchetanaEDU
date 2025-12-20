"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { Sidebar } from "./adminsidebar"

type SidebarContextType = {
    isOpen: boolean
    toggle: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function useSidebar() {
    const context = useContext(SidebarContext)
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider")
    }
    return context
}

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <SidebarContext.Provider value={{ isOpen, toggle }}>
            <div className="flex h-screen overflow-hidden">
                <div className={`sticky top-0 h-screen ${isOpen ? "w-64" : "w-0"} transition-all duration-200 ease-in-out z-30`}>
                    <Sidebar />
                </div>
                <div className="flex-1 overflow-auto">
                    {children}
                </div>
            </div>
        </SidebarContext.Provider>
    )
}