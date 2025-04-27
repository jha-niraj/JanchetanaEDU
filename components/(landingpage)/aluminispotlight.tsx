"use client"

import Image from "next/image"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AlumniSpotlightProps {
    name: string
    graduationYear: string
    achievement: string
    quote: string
    imageSrc: string
}

export function AlumniSpotlight({ name, graduationYear, achievement, quote, imageSrc }: AlumniSpotlightProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Card className="overflow-hidden dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-full w-full">
                        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="font-bold text-2xl">{name}</h3>
                                <p className="text-sm text-muted-foreground">Class of {graduationYear}</p>
                                <p className="text-base font-medium text-primary">{achievement}</p>
                            </div>
                            <div className="flex">
                                <Quote className="h-10 w-10 text-primary/20 mr-3 flex-shrink-0 mt-1" />
                                <p className="text-base italic text-muted-foreground">{quote}</p>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Read Full Story</Button>
                            <Button variant="outline">Contact Alumni</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}