import { Sidebar } from "@/components/(dashboard)/adminsidebar"

export const metadata = {
    title: "School Dashboard",
    description: "Dashboard for school principal",
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-background">
            <Sidebar />
            <main className="min-h-[calc(100vh-4rem)] md:pl-64">
                <div className="container max-w-7xl mx-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}