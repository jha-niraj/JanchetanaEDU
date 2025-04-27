"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { GraduationCap, Users, Briefcase, Quote } from "lucide-react"

export default function Dashboard() {
    // Mock data - in a real app, this would come from your database
    const stats = [
        { title: "Teachers", value: 42, icon: <GraduationCap className="h-6 w-6" /> },
        { title: "Students", value: 1250, icon: <Users className="h-6 w-6" /> },
        { title: "Workers", value: 28, icon: <Briefcase className="h-6 w-6" /> },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    }

    // Thought of the day
    const thought = {
        quote: "Education is not the filling of a pail, but the lighting of a fire.",
        author: "William Butler Yeats",
    }

    return (
        <section>
            <div className="space-y-6 p-6">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <motion.div className="grid gap-6 md:grid-cols-3" variants={container} initial="hidden" animate="show">
                    {stats.map((stat) => (
                        <motion.div key={stat.title} variants={item}>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                                    <div className="text-muted-foreground">{stat.icon}</div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold">{stat.value}</div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
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
                </motion.div>
            </div>
        </section>
    )
}
