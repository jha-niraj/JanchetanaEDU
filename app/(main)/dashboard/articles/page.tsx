"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ArticlesPage() {
    return (
        <section>
            <div className="space-y-6 p-6">
                <h1 className="text-3xl font-bold tracking-tight">Article Writing</h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Create New Article</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" placeholder="Enter article title" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea id="content" placeholder="Write your article content here..." className="min-h-[200px]" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end space-x-2">
                            <Button variant="outline">Save Draft</Button>
                            <Button>Publish</Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}