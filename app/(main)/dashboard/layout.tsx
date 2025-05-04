import { SidebarProvider } from "@/components/(dashboard)/sidebarprovider"
import type React from "react"

export const metadata = {
    title: "School Dashboard",
    description: "Dashboard for school principal",
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <SidebarProvider>{children}</SidebarProvider>
}