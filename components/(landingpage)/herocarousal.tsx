"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { getActiveNotices } from "@/actions/notice.action"

const heroImages = [
    {
        src: "/landingpage/hero/1.jpeg",
        alt: "School campus main building",
        title: "Welcome to Excellence",
        subtitle: "Where Learning Begins"
    },
    {
        src: "/landingpage/hero/2.jpeg",
        alt: "Students in classroom",
        title: "Interactive Learning",
        subtitle: "Engaging Every Mind"
    },
    {
        src: "/landingpage/hero/3.jpeg",
        alt: "School library",
        title: "Knowledge Hub",
        subtitle: "Resources for Growth"
    },
    {
        src: "/landingpage/hero/4.jpeg",
        alt: "Sports activities",
        title: "Holistic Development",
        subtitle: "Beyond Academics"
    }
]

export function HeroCarousel() {
    const [current, setCurrent] = useState(0)
    const [notices, setNotices] = useState<{ id: string; title: string; content: string }[]>([])
    const [isHovering, setIsHovering] = useState(false)
    const [selectedNotice, setSelectedNotice] = useState<{ id: string; title: string; content: string } | null>(null)
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    const nextSlide = useCallback(() => {
        setCurrent((current) => (current === heroImages.length - 1 ? 0 : current + 1))
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [nextSlide])

    useEffect(() => {
        async function fetchNotices() {
            const result = await getActiveNotices()
            if (result.success && result.notices) {
                setNotices(result.notices.map(n => ({ id: n.id, title: n.title, content: n.content })))
            }
        }
        fetchNotices()
    }, [])

    const handleNoticeClick = (notice: { id: string; title: string; content: string }) => {
        setSelectedNotice(notice)
        setIsSheetOpen(true)
    }

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative w-16 h-16 flex items-center justify-center">
                                <div className="absolute inset-0 bg-blue-100 rounded-full border-2 border-red-500 flex items-center justify-center">
                                    <Image
                                        src="/mainlogo.png"
                                        alt="School Logo"
                                        width={60}
                                        height={60}
                                        className="object-contain rounded-full"
                                        quality={90}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 text-center">
                            <h1 className="text-xl md:text-2xl font-bold text-blue-800 mb-1">
                                श्री जनचेतना सामुदायिक माध्यमिक विद्यालय
                            </h1>
                            <p className="text-xs md:text-sm text-gray-600 mb-1">
                                शिवराज नगरपालिका-०८, लक्ष्मणपुर, कपिलवस्तु
                            </p>
                            <h2 className="text-lg md:text-xl font-bold text-red-600">
                                SHREE JANCHETANA COMMUNITY SECONDARY SCHOOL
                            </h2>
                            <p className="text-xs md:text-sm text-red-500">
                                Shivraj Municipality-08, Laxmanpur, Kapilvastu
                            </p>
                        </div>
                        <div className="flex items-center">
                            <Image
                                src="/nepalflag.gif"
                                alt="Nepal Flag"
                                width={60}
                                height={45}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
                {
                    notices.length > 0 && (
                        <div
                            className="bg-red-600 text-white py-2 overflow-hidden relative"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div className="flex items-center">
                                <div className="flex items-center gap-2 px-4 bg-red-700 rounded-r-full py-1 z-10 flex-shrink-0">
                                    <span className="text-xs font-bold">नयाँ</span>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex gap-8 whitespace-nowrap">
                                        <div
                                            className={`flex gap-8 ${isHovering ? '' : 'animate-marquee'}`}
                                            style={{
                                                animationPlayState: isHovering ? 'paused' : 'running'
                                            }}
                                        >
                                            {/* Duplicate content for seamless loop */}
                                            {
                                                [...notices, ...notices].map((notice, index) => (
                                                    <div
                                                        key={`${notice.id}-${index}`}
                                                        className="flex items-center gap-2 flex-shrink-0 cursor-pointer hover:underline"
                                                        onClick={() => handleNoticeClick(notice)}
                                                    >
                                                        <span className="text-sm font-medium">{notice.title}:</span>
                                                        <span className="text-sm">{notice.content}</span>
                                                        <span className="text-red-400 mx-4">•</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="absolute inset-0 pt-48">
                {
                    heroImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="absolute inset-0"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{
                                opacity: index === current ? 1 : 0,
                                scale: index === current ? 1 : 1.1
                            }}
                            transition={{
                                opacity: { duration: 1.2, ease: "easeInOut" },
                                scale: { duration: 8, ease: "linear" }
                            }}
                        >
                            <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                priority={index === 0}
                                className="object-cover"
                                quality={90}
                            />
                        </motion.div>
                    ))
                }
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-0 z-30 flex items-center justify-center pt-48">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Badge className="px-4 py-2 text-sm font-medium bg-teal-600/90 hover:bg-teal-600 text-white border-0 backdrop-blur-sm shadow-lg">
                                ✨ Nurturing Minds, Shaping Futures
                            </Badge>
                        </motion.div>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`subtitle-${current}`}
                                className="text-teal-200 text-lg font-medium tracking-wide"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                            >
                                {heroImages[current].subtitle}
                            </motion.p>
                        </AnimatePresence>
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                            style={{
                                background: "linear-gradient(135deg, #ffffff 0%, #5eead4 50%, #14b8a6 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Empowering Minds.
                            <br />
                            <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                                Building Tomorrow&apos;s Leaders.
                            </span>
                        </motion.h1>
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={`title-${current}`}
                                className="text-2xl sm:text-3xl font-semibold text-teal-100 drop-shadow-lg"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.8 }}
                            >
                                {heroImages[current].title}
                            </motion.h2>
                        </AnimatePresence>
                        <motion.p
                            className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Join a vibrant community of learners at Janchetana School, where tradition meets innovation in education.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <Button
                                size="lg"
                                asChild
                                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                            >
                                <Link href="/admissions">Apply for Admission</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="bg-white/10 hover:bg-white/20 hover:text-white text-teal-100 border-teal-300/50 hover:border-teal-200 font-semibold px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300"
                            >
                                <Link href="/aboutus">Learn More</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                {
                    heroImages.map((_, index) => (
                        <button
                            key={index}
                            className={`relative h-2 rounded-full transition-all duration-500 hover:scale-110 ${index === current
                                ? "w-12 bg-gradient-to-r from-teal-400 to-cyan-400 shadow-lg"
                                : "w-2 bg-white/50 hover:bg-white/80"
                                }`}
                            onClick={() => setCurrent(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {
                                index === current && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full"
                                        layoutId="activeIndicator"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )
                            }
                        </button>
                    ))
                }
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
                <motion.div
                    className="h-full bg-gradient-to-r from-teal-400 to-cyan-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                    key={current}
                />
            </div>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent side="right" className="sm:max-w-2xl overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle className="text-2xl font-bold">{selectedNotice?.title}</SheetTitle>
                        <SheetDescription>
                            Notice Details
                        </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-4">
                        <div className="prose prose-sm max-w-none">
                            <p className="text-muted-foreground whitespace-pre-wrap">
                                {selectedNotice?.content}
                            </p>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}