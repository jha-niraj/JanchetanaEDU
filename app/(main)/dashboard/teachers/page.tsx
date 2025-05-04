"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
    Dialog, DialogContent, DialogDescription, DialogFooter,
    DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog"
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter, 
    AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger 
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const initialTeachers = [
    { id: 1, name: "John Smith", subject: "Mathematics", email: "john.smith@school.edu", phone: "123-456-7890" },
    { id: 2, name: "Sarah Johnson", subject: "Science", email: "sarah.johnson@school.edu", phone: "234-567-8901" },
    { id: 3, name: "Michael Brown", subject: "History", email: "michael.brown@school.edu", phone: "345-678-9012" },
    { id: 4, name: "Emily Davis", subject: "English", email: "emily.davis@school.edu", phone: "456-789-0123" },
    {
        id: 5,
        name: "Robert Wilson",
        subject: "Physical Education",
        email: "robert.wilson@school.edu",
        phone: "567-890-1234",
    },
    { id: 6, name: "Jennifer Lee", subject: "Art", email: "jennifer.lee@school.edu", phone: "678-901-2345" },
]

export default function TeachersPage() {
    const [teachers, setTeachers] = useState(initialTeachers)
    const [selectedTeacher, setSelectedTeacher] = useState(null)
    const [newTeacher, setNewTeacher] = useState({
        name: "",
        subject: "",
        email: "",
        phone: "",
    })
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    const handleAddTeacher = () => {
        const id = Math.max(0, ...teachers.map((t) => t.id)) + 1
        setTeachers([...teachers, { id, ...newTeacher }])
        setNewTeacher({ name: "", subject: "", email: "", phone: "" })
        setIsAddDialogOpen(false)
    }

    const handleDeleteTeacher = () => {
        setTeachers(teachers.filter((teacher) => teacher.id !== selectedTeacher?.id))
        setSelectedTeacher(null)
        setIsDeleteDialogOpen(false)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewTeacher({ ...newTeacher, [name]: value })
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    }

    return (
        <section>
            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">Teacher Details</h1>
                    <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Teacher
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add New Teacher</DialogTitle>
                                <DialogDescription>Enter the details of the new teacher below.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" name="name" value={newTeacher.name} onChange={handleInputChange} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" name="subject" value={newTeacher.subject} onChange={handleInputChange} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" value={newTeacher.email} onChange={handleInputChange} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input id="phone" name="phone" value={newTeacher.phone} onChange={handleInputChange} />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button onClick={handleAddTeacher}>Add Teacher</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <AnimatePresence>
                        {teachers.map((teacher) => (
                            <motion.div key={teacher.id} variants={item} exit={{ opacity: 0, y: -20 }} layout>
                                <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-lg">{teacher.name}</h3>
                                            <p className="text-muted-foreground">{teacher.subject}</p>
                                            <div className="text-sm">
                                                <p>{teacher.email}</p>
                                                <p>{teacher.phone}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="bg-muted/50 p-4 flex justify-end">
                                        <AlertDialog
                                            open={isDeleteDialogOpen && selectedTeacher?.id === teacher.id}
                                            onOpenChange={(open) => {
                                                if (!open) setSelectedTeacher(null)
                                                setIsDeleteDialogOpen(open)
                                            }}
                                        >
                                            <AlertDialogTrigger asChild>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => {
                                                        setSelectedTeacher(teacher)
                                                        setIsDeleteDialogOpen(true)
                                                    }}
                                                >
                                                    <Trash2 className="h-4 w-4 mr-2" />
                                                    Remove
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This will permanently remove {teacher.name} from the database. This action cannot be undone.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={handleDeleteTeacher}>Delete</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}