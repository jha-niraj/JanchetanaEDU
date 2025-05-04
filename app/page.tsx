"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Award, BookOpen, Calendar, ChevronRight, GraduationCap, Library, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArticleCarousel } from "@/components/(landingpage)/articlecarousal"
import { EventCard } from "@/components/(landingpage)/eventcard"
import { AlumniSpotlight } from "@/components/(landingpage)/aluminispotlight"
import { HeroCarousel } from "@/components/(landingpage)/herocarousal"
import { LeadershipCard } from "@/components/(landingpage)/leadershipcarousal"
import { FacilityCard } from "@/components/(landingpage)/facultycard"
import { AchievementCard } from "@/components/(landingpage)/acheivmentscard"
import SmoothScroll from "@/components/smoothscroll"

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
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<SmoothScroll>
			<section className="flex min-h-screen flex-col w-full">
				<MainNav />
				<main className="flex-1">
					<section className="w-full h-screen">
						<HeroCarousel />
					</section>
					<section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
						<div className="max-w-7xl mx-auto px-4 sm:px-6">
							<div className="grid md:grid-cols-2 gap-12 items-center">
								<motion.div
									className="space-y-6"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}
								>
									<Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-2">
										Established 1975
									</Badge>
									<h2 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome to Janchetana School</h2>
									<p className="text-muted-foreground">
										For over four decades, Janchetana School has been a beacon of educational excellence in Nepal. We
										provide a nurturing environment where students develop academically, socially, and culturally. Our
										commitment to holistic education has produced generations of successful graduates who contribute
										meaningfully to society.
									</p>
									<div className="grid grid-cols-2 gap-4 pt-4">
										<div className="flex items-center gap-2">
											<div className="bg-primary/10 p-2 rounded-full">
												<Users className="h-5 w-5 text-primary" />
											</div>
											<div>
												<h4 className="font-medium">1200+</h4>
												<p className="text-sm text-muted-foreground">Students</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<div className="bg-primary/10 p-2 rounded-full">
												<GraduationCap className="h-5 w-5 text-primary" />
											</div>
											<div>
												<h4 className="font-medium">95%</h4>
												<p className="text-sm text-muted-foreground">Graduation Rate</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<div className="bg-primary/10 p-2 rounded-full">
												<BookOpen className="h-5 w-5 text-primary" />
											</div>
											<div>
												<h4 className="font-medium">25+</h4>
												<p className="text-sm text-muted-foreground">Programs</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<div className="bg-primary/10 p-2 rounded-full">
												<Award className="h-5 w-5 text-primary" />
											</div>
											<div>
												<h4 className="font-medium">50+</h4>
												<p className="text-sm text-muted-foreground">Awards</p>
											</div>
										</div>
									</div>
								</motion.div>
								<motion.div
									className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.2 }}
								>
									<Image
										src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
										alt="School building"
										fill
										className="object-cover"
									/>
								</motion.div>
							</div>
						</div>
					</section>

					{/* Quick Links Section */}
					<section className="w-full py-16">
						<div className="max-w-7xl mx-auto px-4 sm:px-6">
							<motion.div
								className="text-center space-y-3 mb-12"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
									Navigate Our School
								</Badge>
								<h2 className="text-3xl font-bold tracking-tight">Quick Links</h2>
								<p className="text-muted-foreground max-w-2xl mx-auto">
									Discover the various aspects of our school through these quick access points
								</p>
							</motion.div>
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

					{/* School Leadership Section */}
					<section className="w-full py-16 bg-secondary/10">
						<div className="max-w-7xl mx-auto px-4 sm:px-6">
							<motion.div
								className="text-center space-y-3 mb-12"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">Our Leadership</Badge>
								<h2 className="text-3xl font-bold tracking-tight">Meet Our School Leaders</h2>
								<p className="text-muted-foreground max-w-2xl mx-auto">
									Dedicated educators guiding our school towards excellence
								</p>
							</motion.div>
							<motion.div
								className="grid grid-cols-1 md:grid-cols-3 gap-8"
								variants={staggerContainer}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							>
								<motion.div variants={fadeInUp}>
									<LeadershipCard
										name="Dr. Rajendra Sharma"
										position="Principal"
										bio="With over 25 years of experience in education, Dr. Sharma has transformed our school into a center of academic excellence."
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<LeadershipCard
										name="Mrs. Anita Gurung"
										position="Vice Principal"
										bio="Mrs. Gurung oversees curriculum development and ensures our teaching standards remain at the highest level."
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<LeadershipCard
										name="Mr. Deepak Thapa"
										position="Head of Administration"
										bio="Mr. Thapa manages the school's operations and facilities, creating an optimal learning environment for all students."
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
							</motion.div>
						</div>
					</section>

					{/* Featured Articles Section */}
					<section className="w-full py-16">
						<div className="max-w-7xl mx-auto px-4 sm:px-6">
							<motion.div
								className="text-center space-y-3 mb-12"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">School News</Badge>
								<h2 className="text-3xl font-bold tracking-tight">Featured Articles</h2>
								<p className="text-muted-foreground max-w-2xl mx-auto">
									Stay updated with the latest happenings and achievements at our school
								</p>
							</motion.div>
							<ArticleCarousel />
						</div>
					</section>

					{/* School Facilities Section */}
					<section className="w-full py-16 bg-gradient-to-b from-primary/5 to-transparent">
						<div className="max-w-7xl mx-auto px-4 sm:px-6">
							<motion.div
								className="text-center space-y-3 mb-12"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">Our Campus</Badge>
								<h2 className="text-3xl font-bold tracking-tight">School Facilities</h2>
								<p className="text-muted-foreground max-w-2xl mx-auto">
									Modern facilities designed to enhance the learning experience
								</p>
							</motion.div>
							<motion.div
								className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
								variants={staggerContainer}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							>
								<motion.div variants={fadeInUp}>
									<FacilityCard
										title="Science Laboratories"
										description="State-of-the-art labs for physics, chemistry, and biology with modern equipment for hands-on learning."
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<FacilityCard
										title="Computer Center"
										description="Fully equipped computer labs with high-speed internet and the latest software for digital literacy."
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<FacilityCard
										title="Library"
										description="Extensive collection of books, journals, and digital resources to foster a love for reading and research."
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<FacilityCard
										title="Sports Complex"
										description="Multi-purpose sports facilities including basketball courts, football field, and indoor games area."
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<FacilityCard
										title="Auditorium"
										description="Modern auditorium for school events, performances, and community gatherings."
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<FacilityCard
										title="Art Studio"
										description="Creative space for visual arts, crafts, and design projects to nurture artistic talents."
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
							</motion.div>
						</div>
					</section>

					{/* Academic Excellence Section */}
					<section className="w-full py-16">
						<div className="max-w-7xl mx-auto px-4 sm:px-6">
							<motion.div
								className="text-center space-y-3 mb-12"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">Excellence</Badge>
								<h2 className="text-3xl font-bold tracking-tight">Academic Achievements</h2>
								<p className="text-muted-foreground max-w-2xl mx-auto">
									Celebrating the outstanding accomplishments of our students and faculty
								</p>
							</motion.div>
							<motion.div
								className="grid grid-cols-1 md:grid-cols-2 gap-8"
								variants={staggerContainer}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							>
								<motion.div variants={fadeInUp}>
									<AchievementCard
										title="National Science Olympiad"
										description="Our students secured top positions in the National Science Olympiad, demonstrating exceptional scientific aptitude."
										year="2023"
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<AchievementCard
										title="Regional Debate Championship"
										description="Janchetana School debate team won the Regional Debate Championship, showcasing outstanding critical thinking and public speaking skills."
										year="2023"
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<AchievementCard
										title="Mathematics Competition"
										description="Our students received gold medals in the National Mathematics Competition, reflecting our strong STEM education."
										year="2022"
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<AchievementCard
										title="Arts & Literature Festival"
										description="Students won multiple awards at the National Arts & Literature Festival for their creative writing and artistic expressions."
										year="2022"
										imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
									/>
								</motion.div>
							</motion.div>
						</div>
					</section>

					{/* Upcoming Activities Section */}
					<section className="w-full py-16 bg-secondary/10">
						<div className="max-w-7xl mx-auto px-4 sm:px-6">
							<motion.div
								className="text-center space-y-3 mb-12"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
									Mark Your Calendar
								</Badge>
								<h2 className="text-3xl font-bold tracking-tight">Upcoming Activities</h2>
								<p className="text-muted-foreground max-w-2xl mx-auto">
									Join us for these exciting events and activities happening at our school
								</p>
							</motion.div>
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
					<section className="w-full py-16">
						<div className="max-w-7xl mx-auto px-4 sm:px-6">
							<motion.div
								className="text-center space-y-3 mb-12"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">Success Stories</Badge>
								<h2 className="text-3xl font-bold tracking-tight">Alumni Spotlight</h2>
								<p className="text-muted-foreground max-w-2xl mx-auto">
									Meet our distinguished alumni who are making a difference in the world
								</p>
							</motion.div>
							<motion.div
								className="max-w-4xl mx-auto"
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<AlumniSpotlight
									name="Dr. Aarav Poudel"
									graduationYear="2008"
									achievement="Leading Researcher in Sustainable Energy"
									quote="The foundation I received at Janchetana School gave me the confidence to pursue my dreams in science and make a difference in the world. The mentorship from dedicated teachers and the hands-on learning experiences prepared me for the challenges of academic research."
									imageSrc="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
								/>
							</motion.div>
						</div>
					</section>

					{/* Call to Action Section */}
					<section className="w-full py-16 bg-primary/5">
						<div className="max-w-7xl mx-auto px-4 sm:px-6">
							<motion.div
								className="rounded-2xl bg-gradient-to-r from-primary/80 to-primary p-8 md:p-12 shadow-xl text-white"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								<div className="grid md:grid-cols-2 gap-8 items-center">
									<div className="space-y-4 text-white dark:text-black">
										<h2 className="text-3xl font-bold tracking-tight">Begin Your Journey With Us</h2>
										<p className=" max-w-md">
											Join our vibrant community of learners and discover the opportunities that await you at Janchetana
											School.
										</p>
										<div className="flex flex-wrap gap-4 pt-4">
											<Link href="/admissions">
												<Button size="lg" className="dark:text-black text-white bg-white text-primary hover:bg-white/90">
													Apply for Admission
												</Button>
											</Link>
											<Link href="/contactus">
												<Button size="lg" variant="outline" className="dark:text-white text-black border-white hover:bg-white/10">
													Schedule a Visit
												</Button>
											</Link>
										</div>
									</div>
									<div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg hidden md:block">
										<Image
											src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
											alt="Students in classroom"
											fill
											className="object-cover"
										/>
									</div>
								</div>
							</motion.div>
						</div>
					</section>
				</main>
				<Footer />
			</section>
		</SmoothScroll>
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
