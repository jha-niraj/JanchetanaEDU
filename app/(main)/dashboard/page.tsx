"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Quote, Users } from "lucide-react"

// Stats data
const stats = [
    { title: "Teachers", value: 42, icon: <GraduationCap className="h-6 w-6" /> },
    { title: "Students", value: 1250, icon: <Users className="h-6 w-6" /> },
    { title: "Workers", value: 28, icon: <Briefcase className="h-6 w-6" /> },
]

// Quote of the day
const thought = {
    quote: "Education is not the filling of a pail, but the lighting of a fire.",
    author: "William Butler Yeats",
}

export default function Dashboard() {
    return (
        <section className="p-6 space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

            <div className="grid gap-6 md:grid-cols-3">
                {stats.map((stat) => (
                    <Card key={stat.title} className="transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <div className="text-muted-foreground">{stat.icon}</div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-2 pb-2 bg-muted/50">
                    <Quote className="h-5 w-5 text-muted-foreground" />
                    <CardTitle className="text-lg">Thought of the Day</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <blockquote className="border-l-4 pl-4 italic">&quot;{thought.quote}&quot;</blockquote>
                    <p className="mt-2 text-right text-sm text-muted-foreground">— {thought.author}</p>
                </CardContent>
            </Card>
        </section>
    )
}