import type React from "react"
import { SidebarProvider } from "@/components/(dashboard)/sidebarprovider"

export const metadata = {
    title: "School Dashboard",
    description: "Dashboard for school principal",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SidebarProvider>{children}</SidebarProvider>
        </>
    )
}
