"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const heroImages = [
    {
        src: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        alt: "School campus main building",
    },
    {
        src: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        alt: "Students in classroom",
    },
    {
        src: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        alt: "School library",
    },
    {
        src: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        alt: "Sports activities",
    },
    {
        src: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        alt: "Cultural program",
    },
    {
        src: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        alt: "Science laboratory",
    },
]

export function HeroCarousel() {
    const [current, setCurrent] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrent((current) => (current === heroImages.length - 1 ? 0 : current + 1))
    }, [])

    useEffect(() => {
        // Always keep autoplay running
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [nextSlide])

    return (
        <div className="relative w-full h-full overflow-hidden">
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

            <div className="z-30 absolute inset-0 flex items-center justify-center text-white text-center">
                <motion.div
                    className="max-w-3xl space-y-6 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
                        <Badge className="px-3 py-1 text-sm bg-primary/80 text- dark:text-black border-primary/20 mb-4">
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
                        Building Tomorrow&apos;s Leaders.
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
                        <Button size="lg" asChild className="bg-primary dark:text-black text-white cursor-pointer hover:bg-primary/90">
                            <Link href="/admissions">Apply for Admission</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

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