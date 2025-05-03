"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const heroImages = [
    {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "School campus main building",
    },
    {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Students in classroom",
    },
    {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "School library",
    },
    {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Sports activities",
    },
    {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Cultural program",
    },
    {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Science laboratory",
    },
]

export function HeroCarousel() {
    const [current, setCurrent] = useState(0)
    const [autoplay, setAutoplay] = useState(true)

    const nextSlide = useCallback(() => {
        setCurrent((current) => (current === heroImages.length - 1 ? 0 : current + 1))
    }, [])

    const prevSlide = useCallback(() => {
        setCurrent((current) => (current === 0 ? heroImages.length - 1 : current - 1))
    }, [])

    useEffect(() => {
        if (!autoplay) return

        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [autoplay, nextSlide])

    return (
        <div
            className="relative w-full h-full overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={heroImages[current].src || "/placeholder.svg"}
                        alt={heroImages[current].alt}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-center">
                <motion.div
                    className="max-w-3xl space-y-6 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
                        <Badge className="px-3 py-1 text-sm bg-primary/80 text-white border-primary/20 mb-4">
                            Nurturing Minds, Shaping Futures
                        </Badge>
                    </motion.div>
                    <motion.h1
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Empowering Minds. <br />
                        Building Tomorrow's Leaders.
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-white/90 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Join a vibrant community of learners at Janchetana School, where tradition meets innovation in education.
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90">
                            <Link href="/admissions">Apply for Admission</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                            <Link href="/virtual-tour">Take a Virtual Tour</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-black/20 text-white hover:bg-black/40"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-black/20 text-white hover:bg-black/40"
                    onClick={nextSlide}
                >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Next slide</span>
                </Button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 rounded-full transition-all ${index === current ? "w-8 bg-primary" : "w-2 bg-white/50"}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
