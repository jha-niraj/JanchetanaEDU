"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative h-screen">
            <div className="relative w-full h-full overflow-hidden">
                <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/vibrant-campus-life-hYrUbKFxG9Vui7HFiqtJRqtlykaTKb.png"
                    alt="School campus"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-center">
                    <motion.div
                        className="max-w-xl space-y-4 px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h1
                            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Empowering Minds. <br />
                            Shaping Futures.
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-white/90 max-w-md mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Join a community of learners and achievers at Horizon Academy.
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap justify-center gap-4 pt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <Button size="lg" asChild className="bg-white text-gray-800 hover:bg-white/90">
                                <Link href="/admissions">Apply for Admission</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
