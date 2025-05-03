"use client"

import Image from "next/image"
import { Trophy } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AchievementCardProps {
    title: string
    description: string
    year: string
    imageSrc: string
}

export function AchievementCard({ title, description, year, imageSrc }: AchievementCardProps) {
    return (
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="overflow-hidden h-full border-none shadow-md">
                <div className="relative">
                    <div className="relative h-48 w-full">
                        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                        <Badge className="bg-primary border-none mb-2">{year}</Badge>
                        <h3 className="font-bold text-xl">{title}</h3>
                    </div>
                </div>
                <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full mt-1">
                            <Trophy className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-muted-foreground">{description}</p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
