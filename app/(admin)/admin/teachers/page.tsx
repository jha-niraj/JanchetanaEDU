"use client";

import { useState, useEffect, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Plus, Trash2, Pencil, User, Mail, Phone, BookOpen, Loader2, GraduationCap, Upload, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
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
import { 
    addTeacher, updateTeacher, deleteTeacher, getTeachers 
} from "@/actions/teacher.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Teacher {
    id: string;
    name: string;
    subject: string;
    email: string;
    phone: string;
    image: string;
}

export default function TeachersPage() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const [uniqueSubjects, setUniqueSubjects] = useState<string[]>([]);
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [newTeacher, setNewTeacher] = useState({
        name: "",
        subject: "",
        email: "",
        phone: "",
        image: null as File | null,
    });
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    // Fetch teachers and update unique subjects
    useEffect(() => {
        async function fetchTeachers() {
            const result = await getTeachers();
            if (result.success) {
                const teachersList = result.teachers || [];
                setTeachers(teachersList);

                // Get unique subjects and sort them
                const subjects = Array.from(new Set(
                    teachersList.map(teacher => teacher.subject.trim())
                )).sort();
                setUniqueSubjects(subjects);
            } else {
                toast("Error", {
                    description: result.error || "Failed to fetch teachers.",
                });
            }
        }
        fetchTeachers();
    }, []);

    // Filter teachers when subject is selected
    useEffect(() => {
        if (selectedSubject) {
            const filtered = teachers.filter(
                teacher => teacher.subject.toLowerCase() === selectedSubject.toLowerCase()
            );
            setFilteredTeachers(filtered);
        } else {
            setFilteredTeachers(teachers);
        }
    }, [selectedSubject, teachers]);

    const handleSubjectFilter = (subject: string) => {
        setSelectedSubject(selectedSubject === subject ? null : subject);
    };

    const resetForm = () => {
        setNewTeacher({ name: "", subject: "", email: "", phone: "", image: null });
        setSelectedImage(null);
        setPreviewUrl(null);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean = false) => {
        const file = e.target.files?.[0];
        if (file) {
            if (isEdit) {
                setSelectedImage(file);
            } else {
                setNewTeacher({ ...newTeacher, image: file });
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddTeacher = () => {
        startTransition(async () => {
            try {
                const teacherData = {
                    ...newTeacher,
                    image: newTeacher.image || undefined,
                };
                const result = await addTeacher(teacherData);
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
                const teacherData = {
                    ...selectedTeacher,
                    image: selectedImage || undefined,
                };
                const result = await updateTeacher(selectedTeacher.id, teacherData);
                if (result.success) {
                    setTeachers(
                        teachers.map((teacher) =>
                            teacher.id === selectedTeacher?.id ? result.teacher : teacher
                        ) as Teacher[]
                    );
                    setIsEditDialogOpen(false);
                    setSelectedImage(null);
                    setPreviewUrl(null);
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
        <section className="min-h-screen bg-background">
            <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container py-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Teacher Management</h1>
                            <p className="text-sm text-muted-foreground">
                                Manage and organize your teaching staff
                            </p>
                        </div>
                        <Dialog open={isAddDialogOpen} onOpenChange={(open) => {
                            setIsAddDialogOpen(open);
                            if (!open) resetForm();
                        }}>
                            <DialogTrigger asChild>
                                <Button size="sm" className="w-full md:w-auto">
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
                                        <Label>Profile Picture</Label>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-muted">
                                                {previewUrl ? (
                                                    <Image
                                                        src={previewUrl}
                                                        alt="Preview"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-muted">
                                                        <User className="h-12 w-12 text-muted-foreground" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    id="teacher-image"
                                                    onChange={(e) => handleImageChange(e)}
                                                />
                                                <Label
                                                    htmlFor="teacher-image"
                                                    className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                                >
                                                    <Upload className="mr-2 h-4 w-4" />
                                                    Upload Image
                                                </Label>
                                            </div>
                                        </div>
                                    </div>
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
                                        {isPending ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Adding...
                                            </>
                                        ) : (
                                            <>Add Teacher</>
                                        )}
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    {
                        uniqueSubjects.length > 0 && (
                            <div className="mt-4 border-t pt-4">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className="text-sm font-medium text-muted-foreground">
                                        Filter by Subject:
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-2">
                                        {
                                            uniqueSubjects.map((subject) => (
                                                <Badge
                                                    key={subject}
                                                    variant={selectedSubject?.toLowerCase() === subject.toLowerCase() ? "default" : "secondary"}
                                                    className="cursor-pointer transition-colors hover:bg-primary/80 hover:text-black"
                                                    onClick={() => handleSubjectFilter(subject)}
                                                >
                                                    {subject}
                                                    {
                                                        selectedSubject?.toLowerCase() === subject.toLowerCase() && (
                                                            <X
                                                                className="ml-1 h-3 w-3 hover:text-destructive"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedSubject(null);
                                                                }}
                                                            />
                                                        )
                                                    }
                                                </Badge>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="container py-6">
                {
                    filteredTeachers.length === 0 ? (
                        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center animate-in fade-in-50">
                            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                                <GraduationCap className="h-10 w-10 text-muted-foreground mb-4" />
                                <h3 className="text-lg font-semibold">
                                    {
                                        selectedSubject
                                            ? `No teachers found for ${selectedSubject}`
                                            : "No teachers found"
                                    }
                                </h3>
                                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                                    {
                                        selectedSubject
                                            ? `There are no teachers assigned to teach ${selectedSubject}.`
                                            : "There are no teachers in the system yet. Add your first teacher to get started."
                                    }
                                </p>
                                <Button onClick={() => setIsAddDialogOpen(true)} size="sm">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Your First Teacher
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            <AnimatePresence>
                                {
                                    filteredTeachers.map((teacher) => (
                                        <motion.div
                                            key={teacher.id}
                                            variants={item}
                                            exit={{ opacity: 0, y: -20 }}
                                            layout
                                            className="group"
                                        >
                                            <Card className="overflow-hidden hover:shadow-md transition-all duration-200 group-hover:border-primary/20">
                                                <CardContent className="p-0">
                                                    <div className="flex flex-col">
                                                        <div className="relative p-6 pb-4 flex flex-col items-center bg-muted/30">
                                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
                                                                <Image
                                                                    src={teacher.image}
                                                                    alt={teacher.name}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                            <h3 className="mt-4 text-xl font-semibold tracking-tight">{teacher.name}</h3>
                                                            <div className="flex items-center mt-1 text-muted-foreground">
                                                                <BookOpen className="h-4 w-4 mr-2" />
                                                                <span className="text-base">{teacher.subject}</span>
                                                            </div>
                                                        </div>
                                                        <div className="p-4 space-y-3 border-t bg-card">
                                                            <div className="flex items-center gap-3 text-sm">
                                                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                                                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-xs text-muted-foreground">Email</p>
                                                                    <p className="truncate">{teacher.email}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-sm">
                                                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                                                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-xs text-muted-foreground">Phone</p>
                                                                    <p className="truncate">{teacher.phone}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                                <CardFooter className="flex justify-end gap-2 p-3 border-t bg-muted/30">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => {
                                                            setSelectedTeacher(teacher);
                                                            setPreviewUrl(null);
                                                            setIsEditDialogOpen(true);
                                                        }}
                                                        className="h-8 px-3 text-sm"
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
                                                                variant="ghost"
                                                                size="sm"
                                                                className="h-8 px-3 text-sm hover:bg-destructive hover:text-destructive-foreground"
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
                                    <Label>Profile Picture</Label>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-muted">
                                            {
                                                previewUrl ? (
                                                    <Image
                                                        src={previewUrl}
                                                        alt="Preview"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={selectedTeacher.image}
                                                        alt={selectedTeacher.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                )
                                            }
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                id="edit-teacher-image"
                                                onChange={(e) => handleImageChange(e, true)}
                                            />
                                            <Label
                                                htmlFor="edit-teacher-image"
                                                className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                            >
                                                <Upload className="mr-2 h-4 w-4" />
                                                Change Image
                                            </Label>
                                        </div>
                                    </div>
                                </div>
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