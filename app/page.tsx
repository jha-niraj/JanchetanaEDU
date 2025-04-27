"use client"

import type React from "react"
import Link from "next/link"
import { Calendar, ChevronRight, GraduationCap, Library, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/(landingpage)/herosection"
import { ArticleCarousel } from "@/components/(landingpage)/articlecarousal"
import { EventCard } from "@/components/(landingpage)/eventcard"
import { AlumniSpotlight } from "@/components/(landingpage)/aluminispotlight"
import { MainNav } from "@/components/navbar"
import { Footer } from "@/components/footer"

const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
}
const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

export default function Home() {
	return (
		<section className="flex min-h-screen flex-col w-full">
			<MainNav />
			<main className="flex-1">
				<section className="w-full h-screen">
					<HeroSection />
				</section>
				<section className="w-full py-12 md:py-16">
					<div className="max-w-7xl mx-auto">
						<motion.h2
							className="text-center text-3xl font-bold tracking-tight mb-8"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							Quick Links
						</motion.h2>
						<motion.div
							className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							<QuickLinkCard
								href="/academics"
								title="Academics"
								description="Explore our academic programs and curriculum"
								icon={<GraduationCap className="h-5 w-5 text-primary" />}
							/>
							<QuickLinkCard
								href="/e-library"
								title="E-Library"
								description="Access digital books, notes, and resources"
								icon={<Library className="h-5 w-5 text-primary" />}
							/>
							<QuickLinkCard
								href="/student-life"
								title="Student Life"
								description="Discover clubs, sports, and campus activities"
								icon={<Users className="h-5 w-5 text-primary" />}
							/>
							<QuickLinkCard
								href="/contact"
								title="Campus Map"
								description="Find your way around our campus facilities"
								icon={<MapPin className="h-5 w-5 text-primary" />}
							/>
						</motion.div>
					</div>
				</section>
				<section className="w-full py-12 md:py-16 bg-secondary/20">
					<div className="max-w-7xl mx-auto">
						<motion.h2
							className="text-center text-3xl font-bold tracking-tight mb-8"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							Featured Articles
						</motion.h2>
						<ArticleCarousel />
					</div>
				</section>
				{/* Upcoming Activities Section */}
				<section className="w-full py-12 md:py-16">
					<div className="max-w-7xl mx-auto">
						<motion.h2
							className="text-center text-3xl font-bold tracking-tight mb-8"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							Upcoming Activities
						</motion.h2>
						<motion.div
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							<motion.div variants={fadeInUp}>
								<EventCard
									date="May 15"
									title="Spring Concert"
									description="Join us for an evening of music performed by our talented students."
									location="Main Auditorium"
									time="7:00 PM"
									isUrgent={true}
								/>
							</motion.div>
							<motion.div variants={fadeInUp}>
								<EventCard
									date="May 20"
									title="Parent-Teacher Conference"
									description="Schedule meetings with teachers to discuss student progress."
									location="Classrooms"
									time="1:00 PM - 6:00 PM"
								/>
							</motion.div>
							<motion.div variants={fadeInUp}>
								<EventCard
									date="May 25"
									title="Science Fair"
									description="Students showcase their innovative science projects."
									location="Gymnasium"
									time="9:00 AM - 3:00 PM"
								/>
							</motion.div>
							<motion.div variants={fadeInUp}>
								<EventCard
									date="June 2"
									title="Field Day"
									description="A day of outdoor activities and friendly competition."
									location="Sports Field"
									time="10:00 AM - 2:00 PM"
								/>
							</motion.div>
						</motion.div>
						<motion.div
							className="mt-8 flex justify-center"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4, duration: 0.5 }}
						>
							<Button variant="outline" className="gap-1">
								View all events <Calendar className="h-4 w-4" />
							</Button>
						</motion.div>
					</div>
				</section>
				{/* Alumni Spotlight Section */}
				<section className="w-full py-12 md:py-16 bg-secondary/20">
					<div className="max-w-7xl mx-auto">
						<motion.h2
							className="text-center text-3xl font-bold tracking-tight mb-8"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							Alumni Spotlight
						</motion.h2>
						<motion.div
							className="max-w-3xl mx-auto"
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<AlumniSpotlight
								name="Dr. James Wilson"
								graduationYear="2008"
								achievement="Pioneering Research in Renewable Energy"
								quote="The foundation I received at this school gave me the confidence to pursue my dreams in science and make a difference in the world. The mentorship from dedicated teachers and the hands-on learning experiences prepared me for the challenges of academic research."
								imageSrc="/focused-researcher.png"
							/>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer />
		</section>
	)
}

function QuickLinkCard({
	href,
	title,
	description,
	icon,
}: { href: string; title: string; description: string; icon: React.ReactNode }) {
	return (
		<motion.div variants={fadeInUp}>
			<Link href={href} className="group block h-full">
				<motion.div
					className="h-full rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300"
					whileHover={{
						scale: 1.05,
						rotateY: 5,
						rotateX: 5,
						boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
					}}
					style={{ transformStyle: "preserve-3d" }}
				>
					<div className="p-6 flex flex-col h-full">
						<div className="flex flex-row items-center justify-between space-y-0 pb-2">
							<h3 className="text-xl font-medium">{title}</h3>
							<motion.div
								whileHover={{ rotate: 5, scale: 1.1 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								{icon}
							</motion.div>
						</div>
						<div className="flex-grow">
							<p className="text-sm text-muted-foreground">{description}</p>
						</div>
						<div className="pt-4">
							<div className="text-sm font-medium flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
								Learn more <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</div>
						</div>
					</div>
				</motion.div>
			</Link>
		</motion.div>
	)
}