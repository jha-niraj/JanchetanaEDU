"use client"

import { Clock, MapPin, Calendar, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface EventCardProps {
    date: string
    title: string
    description: string
    location: string
    time: string
    isUrgent?: boolean
}

export function EventCard({ date, title, description, location, time, isUrgent = false }: EventCardProps) {
    const [month, day] = date.split(" ")

    return (
        <motion.div
            whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Card
                className={cn(
                    "transition-all h-full overflow-hidden dark:border-gray-700",
                    isUrgent && "border-primary/50 dark:bg-gray-800/50",
                )}
            >
                <div className="relative">
                    {isUrgent && (
                        <div className="absolute top-0 right-0">
                            <Badge variant="default" className="m-3 bg-primary hover:bg-primary/90">
                                Coming Soon
                            </Badge>
                        </div>
                    )}
                    <div className="bg-secondary/30 dark:bg-gray-800/30 p-4 flex items-center gap-4 border-b">
                        <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex flex-col items-center justify-center text-center border-2 border-primary/20">
                            <span className="text-xs font-medium uppercase text-primary">{month}</span>
                            <span className="text-xl font-bold text-primary">{day}</span>
                        </div>
                        <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
                    </div>
                </div>

                <CardContent className="p-4">
                    <div className="space-y-3">
                        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
                        <div className="flex flex-col gap-2 text-xs text-muted-foreground pt-2">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-3.5 w-3.5 text-primary/70" />
                                <span>{location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-3.5 w-3.5 text-primary/70" />
                                <span>{time}</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center">
                    <Button variant="outline" size="sm" className="gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Add to Calendar</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 h-8 w-8 rounded-full">
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
