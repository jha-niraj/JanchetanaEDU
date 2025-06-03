"use client"

import Image from "next/image"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface LeadershipCardProps {
    name: string
    position: string
    bio: string
    imageSrc: string
}

export function LeadershipCard({ name, position, bio, imageSrc }: LeadershipCardProps) {
    return (
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="overflow-hidden h-full border-none shadow-md">
                <div className="relative h-full w-full">
                    <Image 
                        src={imageSrc || "/placeholder.svg"} 
                        alt={name} 
                        className="object-cover h-96 w-full"
                        height={200}
                        width={200}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="font-bold text-xl">{name}</h3>
                        <p className="text-white/80">{position}</p>
                    </div>
                </div>
                <CardContent className="p-5">
                    <p className="text-muted-foreground mb-4">{bio}</p>
                    {/* <Button variant="outline" size="sm" className="gap-1">
                        <Mail className="h-4 w-4" />
                        Contact
                    </Button> */}
                </CardContent>
            </Card>
        </motion.div>
    )
}