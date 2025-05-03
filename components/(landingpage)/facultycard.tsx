"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FacilityCardProps {
    title: string
    description: string
    imageSrc: string
}

export function FacilityCard({ title, description, imageSrc }: FacilityCardProps) {
    return (
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="overflow-hidden h-full border-none shadow-md">
                <div className="relative h-48 w-full">
                    <Image
                        src={imageSrc || "/placeholder.svg"}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <CardContent className="p-5">
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p className="text-muted-foreground mb-4">{description}</p>
                    <Button variant="ghost" size="sm" className="gap-1 p-0 h-auto">
                        Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    )
}
