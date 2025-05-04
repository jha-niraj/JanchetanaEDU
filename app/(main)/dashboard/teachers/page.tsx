"use client";

import { useState, useEffect, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Pencil, User, Mail, Phone, BookOpen, Loader2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
    Dialog, DialogContent, DialogDescription, DialogFooter,
    DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTeacher, updateTeacher, deleteTeacher, getTeachers } from "@/actions/teacher.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Teacher {
    id: string;
    name: string;
    subject: string;
    email: string;
    phone: string;
}

export default function TeachersPage() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [newTeacher, setNewTeacher] = useState({
        name: "",
        subject: "",
        email: "",
        phone: "",
    });
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    // Fetch teachers on mount
    useEffect(() => {
        async function fetchTeachers() {
            const result = await getTeachers();
            if (result.success) {
                setTeachers(result.teachers || []);
            } else {
                toast("Error", {
                    description: result.error || "Failed to fetch teachers.",
                });
            }
        }
        fetchTeachers();
    }, []);

    const resetForm = () => {
        setNewTeacher({ name: "", subject: "", email: "", phone: "" });
    };

    const handleAddTeacher = () => {
        startTransition(async () => {
            try {
                const result = await addTeacher(newTeacher);
                if (result.success) {
                    if (result.teacher) {
                        setTeachers([...teachers, result.teacher]);
                    }
                    resetForm();
                    setIsAddDialogOpen(false);
                    toast("Teacher added", {
                        description: `${newTeacher.name} has been added successfully.`,
                    });
                    router.refresh();
                } else {
                    toast("Error", {
                        description: result.error || "Failed to add teacher.",
                    });
                }
            } catch (error) {
                console.log("Error occurred while adding teacher:", error);
                toast("Error", {
                    description: "Something went wrong. Please try again.",
                });
            }
        });
    };

    const handleUpdateTeacher = () => {
        if (!selectedTeacher) return;
        startTransition(async () => {
            try {
                const result = await updateTeacher(selectedTeacher.id, selectedTeacher);
                if (result.success) {
                    setTeachers(
                        teachers.map((teacher) =>
                            teacher.id === selectedTeacher?.id ? result.teacher : teacher
                        ) as Teacher[]
                    );
                    setIsEditDialogOpen(false);
                    toast("Teacher updated", {
                        description: `${selectedTeacher.name}'s information has been updated.`,
                    });
                    router.refresh();
                } else {
                    toast("Error", {
                        description: result.error || "Failed to update teacher.",
                    });
                }
            } catch (error) {
                console.log("Error occurred while updating teacher:", error);
                toast("Error", {
                    description: "Something went wrong. Please try again.",
                });
            }
        });
    };

    const handleDeleteTeacher = () => {
        if (!selectedTeacher) return;
        startTransition(async () => {
            try {
                const result = await deleteTeacher(selectedTeacher.id);
                if (result.success) {
                    setTeachers(teachers.filter((teacher) => teacher.id !== selectedTeacher.id));
                    setSelectedTeacher(null);
                    setIsDeleteDialogOpen(false);
                    toast("Teacher removed", {
                        description: `${selectedTeacher.name} has been removed from the system.`,
                    });
                    router.refresh();
                } else {
                    toast("Error", {
                        description: result.error || "Failed to delete teacher.",
                    });
                }
            } catch (error) {
                console.log("Error occurred while deleting teacher:", error);
                toast("Error", {
                    description: "Something went wrong. Please try again.",
                });
            }
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (isEditDialogOpen) {
            setSelectedTeacher({ ...selectedTeacher!, [name]: value });
        } else {
            setNewTeacher({ ...newTeacher, [name]: value });
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

    return (
        <section>
            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">Teacher Management</h1>
                    <Dialog open={isAddDialogOpen} onOpenChange={(open) => {
                        setIsAddDialogOpen(open);
                        if (!open) resetForm();
                    }}>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Teacher
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Add New Teacher</DialogTitle>
                                <DialogDescription>Enter the details of the new teacher below.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="name"
                                            name="name"
                                            className="pl-9"
                                            placeholder="John Smith"
                                            value={newTeacher.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <div className="relative">
                                        <BookOpen className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="subject"
                                            name="subject"
                                            className="pl-9"
                                            placeholder="Mathematics"
                                            value={newTeacher.subject}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="pl-9"
                                            placeholder="john.smith@school.edu"
                                            value={newTeacher.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="phone"
                                            name="phone"
                                            className="pl-9"
                                            placeholder="123-456-7890"
                                            value={newTeacher.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} disabled={isPending}>
                                    Cancel
                                </Button>
                                <Button onClick={handleAddTeacher} disabled={isPending}>
                                    {
                                        isPending ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Adding...
                                            </>
                                        ) : (
                                            <>Add Teacher</>
                                        )
                                    }
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                {
                    teachers.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <GraduationCap className="h-16 w-16 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold mb-2">No teachers found</h3>
                            <p className="text-muted-foreground text-center max-w-md mb-6">
                                There are no teachers in the system yet. Add your first teacher to get started.
                            </p>
                            <Button onClick={() => setIsAddDialogOpen(true)}>
                                <Plus className="mr-2 h-4 w-4" />
                                Add Your First Teacher
                            </Button>
                        </div>
                    ) : (
                        <motion.div
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            <AnimatePresence>
                                {
                                    teachers.map((teacher) => (
                                        <motion.div key={teacher.id} variants={item} exit={{ opacity: 0, y: -20 }} layout>
                                            <Card className="overflow-hidden hover:shadow-md transition-shadow">
                                                <CardContent className="p-6">
                                                    <div className="space-y-2">
                                                        <h3 className="font-bold text-lg">{teacher.name}</h3>
                                                        <div className="flex items-center text-muted-foreground">
                                                            <BookOpen className="h-4 w-4 mr-2" />
                                                            <span>{teacher.subject}</span>
                                                        </div>
                                                        <div className="text-sm space-y-1">
                                                            <div className="flex items-center">
                                                                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                                                                <span>{teacher.email}</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                                                                <span>{teacher.phone}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                                <CardFooter className="bg-muted/50 p-4 flex justify-end gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => {
                                                            setSelectedTeacher(teacher);
                                                            setIsEditDialogOpen(true);
                                                        }}
                                                    >
                                                        <Pencil className="h-4 w-4 mr-2" />
                                                        Edit
                                                    </Button>
                                                    <AlertDialog
                                                        open={isDeleteDialogOpen && selectedTeacher?.id === teacher.id}
                                                        onOpenChange={(open) => {
                                                            if (!open) setSelectedTeacher(null);
                                                            setIsDeleteDialogOpen(open);
                                                        }}
                                                    >
                                                        <AlertDialogTrigger asChild>
                                                            <Button
                                                                variant="destructive"
                                                                size="sm"
                                                                onClick={() => {
                                                                    setSelectedTeacher(teacher);
                                                                    setIsDeleteDialogOpen(true);
                                                                }}
                                                            >
                                                                <Trash2 className="h-4 w-4 mr-2" />
                                                                Remove
                                                            </Button>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    This will permanently remove {teacher.name} from the database.
                                                                    This action cannot be undone.
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
                                                                <AlertDialogAction
                                                                    onClick={handleDeleteTeacher}
                                                                    disabled={isPending}
                                                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                                >
                                                                    {
                                                                        isPending ? (
                                                                            <>
                                                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                                Deleting...
                                                                            </>
                                                                        ) : (
                                                                            <>Delete</>
                                                                        )
                                                                    }
                                                                </AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </CardFooter>
                                            </Card>
                                        </motion.div>
                                    ))
                                }
                            </AnimatePresence>
                        </motion.div>
                    )
                }
            </div>
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Edit Teacher</DialogTitle>
                        <DialogDescription>Update the teacher&apos;s information below.</DialogDescription>
                    </DialogHeader>
                    {
                        selectedTeacher && (
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="edit-name">Full Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="edit-name"
                                            name="name"
                                            className="pl-9"
                                            value={selectedTeacher.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="edit-subject">Subject</Label>
                                    <div className="relative">
                                        <BookOpen className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="edit-subject"
                                            name="subject"
                                            className="pl-9"
                                            value={selectedTeacher.subject}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="edit-email">Email Address</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="edit-email"
                                            name="email"
                                            type="email"
                                            className="pl-9"
                                            value={selectedTeacher.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="edit-phone">Phone Number</Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="edit-phone"
                                            name="phone"
                                            className="pl-9"
                                            value={selectedTeacher.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} disabled={isPending}>
                            Cancel
                        </Button>
                        <Button onClick={handleUpdateTeacher} disabled={isPending}>
                            {
                                isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Updating...
                                    </>
                                ) : (
                                    <>Save Changes</>
                                )
                            }
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </section>
    );
}