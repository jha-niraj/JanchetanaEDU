"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const articles = [
    {
        id: 1,
        title: "Our Annual Science Fair Winners",
        author: "Dewanand Thakur",
        description:
            "This year's science fair showcased incredible talent and innovation from students across all grades. The winning projects demonstrated exceptional creativity and scientific rigor...",
        image: "/landingpage/sciencefair.png",
        fullContent: `Our annual Science Fair was a remarkable showcase of student innovation and scientific inquiry. The event, held in our school's main auditorium, featured over 50 projects from students across all grade levels, demonstrating the depth of scientific understanding and creativity within our student body.

The Grand Prize winner, Aisha Patel from Grade 10, developed an innovative water filtration system using locally sourced materials. Her project not only demonstrated excellent scientific methodology but also showed practical applications for communities with limited access to clean water.

Second place was awarded to Marcus Chen and Lisa Wong from Grade 11, who collaborated on a fascinating study of local biodiversity and its response to urban development. Their research included comprehensive data collection over six months and proposed several actionable conservation strategies.

The Junior Division winner, Tommy Rodriguez from Grade 8, impressed judges with his project on renewable energy, creating a small-scale wind turbine using recycled materials. His project showed exceptional promise in addressing sustainable energy solutions.

Special recognition was also given to:
• The Most Innovative Project: "Smart Garden Automation System" by Grade 9 students
• Best Environmental Impact: "Microplastic Detection in Local Water Sources" by Grade 11 team
• Outstanding Scientific Method: "Effects of Music on Plant Growth" by Grade 7 students

The success of this year's Science Fair reflects our school's commitment to STEM education and hands-on learning experiences. We're incredibly proud of all participants and their dedication to scientific exploration.`,
    },
    {
        id: 2,
        title: "Basketball Team Wins Regional Championship",
        author: "Dewanand Thakur",
        description:
            "Our school's basketball team has made history by winning the regional championship for the third consecutive year. The final game against Lincoln High was a nail-biter...",
        image: "/landingpage/basketballwinner.png",
        fullContent: `In an electrifying display of teamwork and determination, our school's basketball team clinched the Regional Championship title for the third consecutive year. The final match against Lincoln High School was nothing short of spectacular, keeping spectators on the edge of their seats until the final buzzer.

The game started with Lincoln High taking an early lead, but our team's resilience shone through as they fought back in the second quarter. Team captain James Rodriguez's leadership was evident as he rallied the team, resulting in a stunning comeback before halftime.

Key highlights of the championship game:
• MVP Performance: Sarah Williams scored a career-high 32 points
• Defensive Standout: Marcus Thompson's crucial blocks in the final minutes
• Team Record: Shot 85% from the free-throw line
• Attendance: Over 1,000 supporters filled the gymnasium

The victory was especially meaningful for our seniors, who have been part of all three championship wins. Coach Thompson praised the team's dedication, noting that they had practiced extensively, often staying late after school and coming in on weekends.

The win qualifies our team for the State Championships next month. The team's success has inspired younger students, with junior varsity sign-ups reaching record numbers this season.

Special recognition goes to:
• The cheerleading squad for their unwavering support
• Our dedicated coaching staff
• The parent volunteer committee
• The school band for creating an electric atmosphere

This victory represents more than just a trophy; it's a testament to our school's values of perseverance, teamwork, and excellence.`,
    },
    {
        id: 3,
        title: "Student Art Exhibition Opens to Community",
        author: "Dewanand Thakur",
        description:
            "The annual student art exhibition opened its doors to the public last weekend, showcasing over 200 pieces from talented young artists across all grade levels...",
        image: "/landingpage/artwinner.png",
        fullContent: `The annual Student Art Exhibition transformed our school's gallery space into a vibrant showcase of creativity and artistic expression. This year's exhibition, themed "Perspectives of Tomorrow," featured an impressive collection of over 200 artworks from students across all grade levels.

The exhibition showcased a diverse range of mediums and styles:
• Oil and acrylic paintings
• Digital art and photography
• Sculpture and ceramics
• Mixed media installations
• Textile and fiber arts
• Charcoal and pencil drawings

Notable highlights included:
• A collaborative mural project by the Grade 10 art class, depicting our local community's history
• An interactive digital installation by the Grade 12 multimedia arts students
• A series of environmental awareness sculptures created from recycled materials
• A collection of portraits celebrating cultural diversity within our school

The exhibition's opening night was attended by over 300 people, including:
• Local art gallery curators
• Community leaders
• Art college representatives
• Parents and family members
• Local media

Several students received special recognition:
• Best in Show: Lisa Chen's "Reflections of Change"
• Innovation Award: Marcus Singh's digital art series
• People's Choice: Sarah Thompson's ceramic collection
• Outstanding Junior Artist: Emily Rodriguez, Grade 7

The exhibition will remain open to the public for two weeks, with guided tours available during school hours. Many pieces are available for purchase, with proceeds supporting our school's art program and scholarship fund.

This successful event highlights our school's commitment to nurturing creativity and providing platforms for student expression. The quality of work displayed demonstrates the exceptional talent and dedication of our young artists and the excellence of our art department's instruction.`,
    }
]

export function ArticleCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)
    const autoplayRef = useRef<NodeJS.Timeout | null>(null)
    const itemsToShow = 3
    const maxIndex = Math.max(0, articles.length - itemsToShow)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, [maxIndex])

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
    // }

    const startAutoplay = useCallback(() => {
        if (autoplayRef.current) clearInterval(autoplayRef.current)
        autoplayRef.current = setInterval(() => {
            nextSlide()
        }, 5000)
    }, [nextSlide])

    const stopAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current)
            autoplayRef.current = null
        }
    }

    useEffect(() => {
        if (autoplay) startAutoplay()
        return () => stopAutoplay()
    }, [autoplay, currentIndex, startAutoplay])

    const handleMouseEnter = () => setAutoplay(false)
    const handleMouseLeave = () => setAutoplay(true)

    const visibleArticles = articles.slice(currentIndex, currentIndex + itemsToShow)

    if (visibleArticles.length < itemsToShow) {
        visibleArticles.push(...articles.slice(0, itemsToShow - visibleArticles.length))
    }

    return (
        <>
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {/* <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background dark:bg-gray-800/80 dark:hover:bg-gray-800"
                        onClick={prevSlide}
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Previous</span>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background dark:bg-gray-800/80 dark:hover:bg-gray-800"
                        onClick={nextSlide}
                    >
                        <ArrowRight className="h-4 w-4" />
                        <span className="sr-only">Next</span>
                    </Button>
                </div> */}
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-6"
                        initial={false}
                        animate={{ x: `calc(-${currentIndex * 100}% / ${itemsToShow})` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {
                            articles.map((article) => (
                                <motion.div
                                    key={article.id}
                                    className="min-w-[calc(100%/3-1rem)] md:min-w-[calc(100%/3-1rem)]"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Card className="overflow-hidden h-full transition-all hover:shadow-md dark:border-gray-700">
                                        <div className="relative h-48 w-full">
                                            <Image
                                                src={article.image || "/placeholder.svg"}
                                                alt={article.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                                            <CardDescription>By {article.author}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="line-clamp-3 text-muted-foreground">
                                                {article.description}
                                            </p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="gap-1"
                                                onClick={() => setSelectedArticle(article)}
                                            >
                                                Read more <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </div>
                {/* <div className="flex justify-center mt-6 gap-1">
                    {
                        Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))
                    }
                </div> */}
            </div>

            <Dialog open={selectedArticle !== null} onOpenChange={() => setSelectedArticle(null)}>
                <DialogContent className="max-w-5xl max-h-[70vh] overflow-y-auto p-6">
                    <DialogHeader className="mb-4">
                        <DialogTitle className="text-2xl font-bold mb-2">{selectedArticle?.title}</DialogTitle>
                        <p className="text-muted-foreground">{selectedArticle?.author}</p>
                    </DialogHeader>
                    {/* <div className="relative h-[200px] w-full mb-4">
                        <Image
                            src={selectedArticle?.image || "/placeholder.svg"}
                            alt={selectedArticle?.title || ""}
                            fill
                            className="object-cover rounded-md"
                        />
                    </div> */}
                    <div className="space-y-3 pr-2">
                        {
                            selectedArticle?.fullContent.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-muted-foreground text-sm">
                                    {paragraph}
                                </p>
                            ))
                        }
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}