"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 256, opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="z-30"
                        >
                            <Sidebar />
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex-1 overflow-auto">{children}</div>
            </div>
        </SidebarContext.Provider>
    )
}
