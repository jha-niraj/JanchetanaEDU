import type React from "react"
import { Footer } from "@/components/footer"
import { MainNav } from "@/components/navbar"

export const metadata = {
    title: "Janchetana EDU",
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