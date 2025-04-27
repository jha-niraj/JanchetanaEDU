import type React from "react"
import { MainNav } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
        <section>
            <MainNav />
            {children}
            <Footer />
        </section>
    )
}
