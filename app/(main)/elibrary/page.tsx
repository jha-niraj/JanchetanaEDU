"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Book, BookOpen, ChevronRight, Download, FileText, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

interface Resource {
    id: string
    title: string
    author: string
    description: string
    coverImage: string
    category: string
    tags: string[]
    year: string
    featured?: boolean
}
const featuredResources: Resource[] = [
    {
        id: "1",
        title: "The Future of Education: Digital Learning Environments",
        author: "Dr. Sarah Johnson",
        description:
            "An in-depth exploration of how digital technologies are transforming educational practices and learning environments in the 21st century.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "books",
        tags: ["Education", "Technology", "Digital Learning"],
        year: "2023",
        featured: true,
    },
    {
        id: "2",
        title: "Journal of Advanced Mathematics",
        author: "International Mathematics Association",
        description:
            "A peer-reviewed journal featuring cutting-edge research in various fields of mathematics, including algebra, geometry, and analysis.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "journals",
        tags: ["Mathematics", "Research", "Academic"],
        year: "2024",
        featured: true,
    },
    {
        id: "3",
        title: "Environmental Science: A Global Perspective",
        author: "Dr. James Wilson",
        description:
            "A comprehensive textbook examining environmental challenges and sustainable solutions from a global perspective.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "books",
        tags: ["Environmental Science", "Sustainability", "Textbook"],
        year: "2022",
        featured: true,
    },
]
const resources: Resource[] = [
    ...featuredResources,
    {
        id: "4",
        title: "Introduction to World Literature",
        author: "Dr. Emily Chen",
        description:
            "A survey of major literary works from around the world, exploring themes, styles, and cultural contexts across different time periods.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "books",
        tags: ["Literature", "World Cultures", "Humanities"],
        year: "2021",
    },
    {
        id: "5",
        title: "Physics Today",
        author: "American Institute of Physics",
        description:
            "A monthly publication featuring articles on recent developments in physics research and its applications in technology and society.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "journals",
        tags: ["Physics", "Science", "Research"],
        year: "2024",
    },
    {
        id: "6",
        title: "The Impact of Social Media on Adolescent Development",
        author: "Dr. Michael Brown",
        description:
            "A research paper examining the psychological and social effects of social media use among teenagers, based on a longitudinal study.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "research",
        tags: ["Psychology", "Social Media", "Adolescent Development"],
        year: "2023",
    },
    {
        id: "7",
        title: "Interactive Human Anatomy",
        author: "Medical Education Resources",
        description:
            "A 3D interactive resource for studying human anatomy, featuring detailed models, animations, and quizzes for self-assessment.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "multimedia",
        tags: ["Anatomy", "Biology", "Interactive"],
        year: "2022",
    },
    {
        id: "8",
        title: "Advanced Calculus: Theory and Applications",
        author: "Dr. Robert Martinez",
        description:
            "A comprehensive textbook covering advanced calculus concepts, with applications in physics, engineering, and economics.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "books",
        tags: ["Mathematics", "Calculus", "Textbook"],
        year: "2020",
    },
    {
        id: "9",
        title: "Journal of Educational Psychology",
        author: "American Psychological Association",
        description:
            "A peer-reviewed journal publishing original research on educational psychology, learning processes, and teaching methods.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "journals",
        tags: ["Psychology", "Education", "Research"],
        year: "2024",
    },
    {
        id: "10",
        title: "Renewable Energy Technologies: Current Status and Future Prospects",
        author: "Dr. Lisa Thompson",
        description:
            "A research paper analyzing the development, implementation, and potential of various renewable energy technologies in addressing climate change.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "research",
        tags: ["Renewable Energy", "Climate Change", "Technology"],
        year: "2023",
    },
    {
        id: "11",
        title: "World History: Virtual Museum Tour",
        author: "Educational Media Productions",
        description:
            "A virtual tour of world-renowned museums, featuring historical artifacts and expert commentary on significant historical events and periods.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "multimedia",
        tags: ["History", "Museums", "Virtual Tour"],
        year: "2022",
    },
    {
        id: "12",
        title: "The Art of Public Speaking",
        author: "Dr. Thomas Garcia",
        description:
            "A practical guide to developing effective public speaking skills, including techniques for preparation, delivery, and audience engagement.",
        coverImage: "https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp",
        category: "books",
        tags: ["Communication", "Public Speaking", "Self-Improvement"],
        year: "2021",
    },
]

export default function ELibraryPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    // Filter resources based on search query and category
    const filteredResources = resources.filter((resource) => {
        const matchesSearch =
            resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    <section className="relative">
                        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                            <Image
                                src="https://t3.ftcdn.net/jpg/03/01/24/58/360_F_301245840_zwJpFB1MCmJkTg1tMDK9pFnCwce6dQ1T.webp"
                                alt="Digital library"
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                            <div className="container relative z-10 flex h-full flex-col items-center justify-center text-white text-center">
                                <motion.div
                                    className="max-w-2xl space-y-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <motion.h1
                                        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                    >
                                        E-Library
                                    </motion.h1>
                                    <motion.p
                                        className="text-base md:text-lg text-white/90 max-w-md mx-auto"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                    >
                                        Access our comprehensive collection of digital resources for learning and research
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-8 md:py-12">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-grow">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Search by title, author, or keyword..."
                                    className="pl-10"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-2">
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Categories</SelectItem>
                                        <SelectItem value="books">Books</SelectItem>
                                        <SelectItem value="journals">Journals</SelectItem>
                                        <SelectItem value="research">Research Papers</SelectItem>
                                        <SelectItem value="multimedia">Multimedia</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </motion.div>
                    </section>
                    <section className="w-full py-8 md:py-12 bg-secondary/20 dark:bg-gray-900/30">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Resources</h2>
                                <p className="text-muted-foreground">
                                    Explore our curated selection of high-quality educational materials
                                </p>
                            </motion.div>
                            <motion.div
                                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {
                                    featuredResources.map((resource) => (
                                        <ResourceCard key={resource.id} resource={resource} featured />
                                    ))
                                }
                            </motion.div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-8 md:py-12">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Browse by Category</h2>
                            <p className="text-muted-foreground">
                                Find resources organized by type to support your learning and research
                            </p>
                        </motion.div>
                        <Tabs defaultValue="all" className="w-full">
                            <div className="flex justify-center mb-8">
                                <TabsList className="grid w-full max-w-2xl grid-cols-5">
                                    <TabsTrigger value="all">All</TabsTrigger>
                                    <TabsTrigger value="books">Books</TabsTrigger>
                                    <TabsTrigger value="journals">Journals</TabsTrigger>
                                    <TabsTrigger value="research">Research</TabsTrigger>
                                    <TabsTrigger value="multimedia">Multimedia</TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value="all">
                                <ResourceGrid resources={filteredResources} />
                            </TabsContent>
                            <TabsContent value="books">
                                <ResourceGrid resources={filteredResources.filter((r) => r.category === "books")} />
                            </TabsContent>
                            <TabsContent value="journals">
                                <ResourceGrid resources={filteredResources.filter((r) => r.category === "journals")} />
                            </TabsContent>
                            <TabsContent value="research">
                                <ResourceGrid resources={filteredResources.filter((r) => r.category === "research")} />
                            </TabsContent>
                            <TabsContent value="multimedia">
                                <ResourceGrid resources={filteredResources.filter((r) => r.category === "multimedia")} />
                            </TabsContent>
                        </Tabs>
                    </section>
                    <section className="w-full py-8 md:py-12 bg-secondary/20 dark:bg-gray-900/30">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                className="text-center max-w-2xl mx-auto mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight mb-4">How to Access</h2>
                                <p className="text-muted-foreground">Learn how to make the most of our digital library resources</p>
                            </motion.div>
                            <motion.div
                                className="grid gap-6 md:grid-cols-3"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div variants={fadeInUp}>
                                    <Card className="h-full">
                                        <CardHeader>
                                            <div className="flex items-center gap-2">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                    <BookOpen className="h-5 w-5 text-primary" />
                                                </div>
                                                <CardTitle>Student Access</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                All enrolled students can access the e-library using their school credentials. Log in with your
                                                student ID and password to browse and download resources from anywhere, anytime.
                                            </p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button variant="outline" size="sm" className="gap-1">
                                                Student Login <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                                <motion.div variants={fadeInUp}>
                                    <Card className="h-full">
                                        <CardHeader>
                                            <div className="flex items-center gap-2">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                    <Download className="h-5 w-5 text-primary" />
                                                </div>
                                                <CardTitle>Download Options</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                Most resources are available for download in multiple formats (PDF, EPUB, etc.). Some materials
                                                may have checkout limits or time restrictions based on licensing agreements.
                                            </p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button variant="outline" size="sm" className="gap-1">
                                                Download Guide <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                                <motion.div variants={fadeInUp}>
                                    <Card className="h-full">
                                        <CardHeader>
                                            <div className="flex items-center gap-2">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                    <FileText className="h-5 w-5 text-primary" />
                                                </div>
                                                <CardTitle>Citation Tools</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                Our e-library includes built-in citation tools to help you properly reference materials in your
                                                research papers and assignments in MLA, APA, Chicago, and other formats.
                                            </p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button variant="outline" size="sm" className="gap-1">
                                                Citation Guide <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>
                    <section className="max-w-7xl mx-auto py-8 md:py-12">
                        <motion.div
                            className="max-w-3xl mx-auto text-center space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight">Need Research Help?</h2>
                            <p className="text-lg text-muted-foreground">
                                Our librarians are available to assist you with research questions, resource recommendations, and
                                navigating our digital collections.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Schedule Consultation</Button>
                                <Button variant="outline">View Research Guides</Button>
                            </div>
                        </motion.div>
                    </section>
                </main>
            </div>
        </SmoothScroll>
    )
}

function ResourceCard({ resource, featured = false }: { resource: Resource; featured?: boolean }) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className={`overflow-hidden h-full ${featured ? "border-primary/20" : ""}`}>
                <div className="relative h-48 w-full">
                    <Image src={resource.coverImage || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
                    <div className="absolute top-0 right-0 m-2">
                        <Badge variant={getCategoryBadgeVariant(resource.category)}>{getCategoryLabel(resource.category)}</Badge>
                    </div>
                </div>
                <CardHeader>
                    <CardTitle className="line-clamp-1">{resource.title}</CardTitle>
                    <CardDescription>{resource.author}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {resource.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-primary/5">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="gap-1">
                        <Book className="h-4 w-4" />
                        View Resource
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Download
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

function ResourceGrid({ resources }: { resources: Resource[] }) {
    return (
        <>
            {resources.length > 0 ? (
                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {resources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </motion.div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No resources found matching your criteria.</p>
                    <Button variant="outline" className="mt-4">
                        Clear Filters
                    </Button>
                </div>
            )}
        </>
    )
}

function getCategoryLabel(category: string): string {
    switch (category) {
        case "books":
            return "Book"
        case "journals":
            return "Journal"
        case "research":
            return "Research"
        case "multimedia":
            return "Multimedia"
        default:
            return category
    }
}

function getCategoryBadgeVariant(category: string): "default" | "secondary" | "outline" | "destructive" {
    switch (category) {
        case "books":
            return "default"
        case "journals":
            return "secondary"
        case "research":
            return "outline"
        case "multimedia":
            return "secondary"
        default:
            return "outline"
    }
}