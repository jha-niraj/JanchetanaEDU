"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import {
    Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs";
import {
    AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle
} from "@/components/ui/alert-dialog";
import {
    Phone, Users, CheckCircle, User, GraduationCap, BookOpen
} from "lucide-react";
import { addAdmissionInquiry } from "@/actions/admission.action";
import SmoothScroll from "@/components/smoothscroll";

export default function AdmissionsPage() {
    const [formData, setFormData] = useState({
        parentName: "",
        phoneNumber: "",
        numberOfChildren: 1,
        desiredClasses: [] as string[],
        streams: [] as string[], // For classes 9-12
    });
    const [isPending, startTransition] = useTransition();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [activeTab, setActiveTab] = useState("nursery-8");

    const nurseryTo8Classes = [
        "Nursery",
        "LKG",
        "UKG",
        "Grade 1",
        "Grade 2",
        "Grade 3",
        "Grade 4",
        "Grade 5",
        "Grade 6",
        "Grade 7",
        "Grade 8",
    ];

    const grade9To12Classes = [
        "Grade 9",
        "Grade 10",
        "Grade 11",
        "Grade 12",
    ];

    const streams = [
        "General",
        "Technical Computer Science",
    ];

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.parentName || formData.parentName.length < 2) {
            newErrors.parentName = "Parent name must be at least 2 characters";
        }

        if (!formData.phoneNumber || !/^\+?[1-9]\d{1,14}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Please enter a valid phone number (e.g., +1234567890)";
        }

        if (formData.numberOfChildren < 1) {
            newErrors.numberOfChildren = "Please select at least one child";
        }

        if (
            formData.desiredClasses.length !== formData.numberOfChildren ||
            formData.desiredClasses.some((cls) => !cls)
        ) {
            newErrors.desiredClasses = "Please select a class for each child";
        }

        // For grades 9-12, also validate streams
        if (activeTab === "grade-9-12") {
            if (
                formData.streams.length !== formData.numberOfChildren ||
                formData.streams.some((stream) => !stream)
            ) {
                newErrors.streams = "Please select a stream for each child";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        if (!validateForm()) {
            return;
        }

        startTransition(async () => {
            const form = new FormData();
            form.append("parentName", formData.parentName);
            form.append("phoneNumber", formData.phoneNumber);
            form.append("numberOfChildren", formData.numberOfChildren.toString());
            form.append("admissionType", activeTab);

            formData.desiredClasses.forEach((cls) => form.append("desiredClasses", cls));

            // Add streams for grades 9-12
            if (activeTab === "grade-9-12") {
                formData.streams.forEach((stream) => form.append("streams", stream));
            }

            const result = await addAdmissionInquiry(form);

            if (result.success) {
                setShowSuccessDialog(true);
                setFormData({
                    parentName: "",
                    phoneNumber: "",
                    numberOfChildren: 1,
                    desiredClasses: [],
                    streams: []
                });
            } else {
                setErrors({ submit: result.error || "Failed to submit inquiry." });
            }
        });
    };

    const handleClassChange = (index: number, value: string) => {
        const newClasses = [...formData.desiredClasses];
        newClasses[index] = value;
        setFormData({ ...formData, desiredClasses: newClasses });
    };

    const handleStreamChange = (index: number, value: string) => {
        const newStreams = [...formData.streams];
        newStreams[index] = value;
        setFormData({ ...formData, streams: newStreams });
    };

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        // Reset form when switching tabs
        setFormData({
            parentName: "",
            phoneNumber: "",
            numberOfChildren: 1,
            desiredClasses: [],
            streams: []
        });
        setErrors({});
    };

    const handleChildrenCountChange = (num: number) => {
        setFormData({
            ...formData,
            numberOfChildren: num,
            desiredClasses: new Array(num).fill(""),
            streams: activeTab === "grade-9-12" ? new Array(num).fill("") : []
        });
    };

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900">
                <section className="relative">
                    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                        <Image
                            src="/admissions/mainimage.jpeg"
                            alt="School campus"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-cyan-800/20" />
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
                                    Join Janchetana
                                </motion.h1>
                                <motion.p
                                    className="text-base md:text-lg text-white/90 max-w-md mx-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    Start your child&apos;s educational journey with us. Submit an inquiry, and we&apos;ll contact you soon.
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section className="max-w-4xl mx-auto py-12">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="w-full shadow-2xl border-0 backdrop-blur-sm">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl text-gray-800 dark:text-gray-100 flex items-center gap-2">
                                        <GraduationCap className="h-6 w-6 text-teal-600" />
                                        Admission Inquiry
                                    </CardTitle>
                                    <p className="text-gray-600 dark:text-gray-400">Choose your admission category and fill out the form below</p>
                                </CardHeader>
                                <CardContent>
                                    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                                        <TabsList className="grid w-full grid-cols-2 mb-6 bg-teal-50 dark:bg-gray-700">
                                            <TabsTrigger
                                                value="nursery-8"
                                                className="flex items-center gap-2 data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                                            >
                                                <BookOpen className="h-4 w-4" />
                                                Nursery - Class 8
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="grade-9-12"
                                                className="flex items-center gap-2 data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                                            >
                                                <GraduationCap className="h-4 w-4" />
                                                Grade 9 - 12
                                            </TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="nursery-8" className="space-y-6">
                                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border-l-4 border-teal-500">
                                                <h3 className="font-semibold text-teal-800 dark:text-teal-200 mb-1">Foundation Education</h3>
                                                <p className="text-sm text-teal-700 dark:text-teal-300">Simple admission process for early childhood and elementary education (Nursery to Class 8)</p>
                                            </div>
                                            {renderForm(nurseryTo8Classes, false)}
                                        </TabsContent>
                                        <TabsContent value="grade-9-12" className="space-y-6">
                                            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border-l-4 border-cyan-500">
                                                <h3 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-1">Secondary Education</h3>
                                                <p className="text-sm text-cyan-700 dark:text-cyan-300">Choose between General studies or Technical Computer Science stream (Grade 9 to 12)</p>
                                            </div>
                                            {renderForm(grade9To12Classes, true)}
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>
                <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                    <AlertDialogContent className="bg-white dark:bg-gray-800 border-0 shadow-xl">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                                <CheckCircle className="h-5 w-5" />
                                Inquiry Submitted Successfully
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-gray-600 dark:text-gray-300">
                                Thank you for your interest in Janchetana. We will contact you soon to discuss your child&apos;s admission process.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <Button
                                className="bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
                                onClick={() => setShowSuccessDialog(false)}
                            >
                                Close
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </SmoothScroll>
    );

    function renderForm(classes: string[], includeStreams: boolean) {
        return (
            <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="parentName" className="text-gray-700 dark:text-gray-300 font-medium">
                            Parent/Guardian Name
                        </Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                id="parentName"
                                type="text"
                                placeholder="Enter parent's full name"
                                value={formData.parentName}
                                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-teal-500 focus:border-teal-500 h-11"
                                disabled={isPending}
                                aria-label="Parent Name"
                            />
                            {
                                errors.parentName && (
                                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.parentName}</p>
                                )
                            }
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phoneNumber" className="text-gray-700 dark:text-gray-300 font-medium">
                            Contact Number
                        </Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                id="phoneNumber"
                                type="tel"
                                placeholder="+977-9800000000"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-teal-500 focus:border-teal-500 h-11"
                                disabled={isPending}
                                aria-label="Phone Number"
                            />
                            {
                                errors.phoneNumber && (
                                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.phoneNumber}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="numberOfChildren" className="text-gray-700 dark:text-gray-300 font-medium">
                        Number of Children for Admission
                    </Label>
                    <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Select
                            value={formData.numberOfChildren.toString()}
                            onValueChange={(value) => handleChildrenCountChange(parseInt(value, 10))}
                            disabled={isPending}
                        >
                            <SelectTrigger className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 h-11">
                                <SelectValue placeholder="Select number of children" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    [1, 2, 3, 4, 5].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>
                                            {num} {num === 1 ? 'Child' : 'Children'}
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                        {
                            errors.numberOfChildren && (
                                <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.numberOfChildren}</p>
                            )
                        }
                    </div>
                </div>
                {
                    Array.from({ length: formData.numberOfChildren }).map((_, index) => (
                        <div key={index} className="space-y-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border">
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                Child {index + 1} Details
                            </h4>
                            <div className={includeStreams ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}>
                                <div className="space-y-2">
                                    <Label className="text-gray-700 dark:text-gray-300 font-medium">
                                        Desired Class
                                    </Label>
                                    <Select
                                        value={formData.desiredClasses[index] || ""}
                                        onValueChange={(value) => handleClassChange(index, value)}
                                        disabled={isPending}
                                    >
                                        <SelectTrigger className="bg-white dark:bg-gray-600 border-gray-200 dark:border-gray-500 h-11">
                                            <SelectValue placeholder="Select class" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                classes.map((cls) => (
                                                    <SelectItem key={cls} value={cls}>
                                                        {cls}
                                                    </SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                </div>
                                {
                                    includeStreams && (
                                        <div className="space-y-2">
                                            <Label className="text-gray-700 dark:text-gray-300 font-medium">
                                                Stream Selection
                                            </Label>
                                            <Select
                                                value={formData.streams[index] || ""}
                                                onValueChange={(value) => handleStreamChange(index, value)}
                                                disabled={isPending}
                                            >
                                                <SelectTrigger className="bg-white dark:bg-gray-600 border-gray-200 dark:border-gray-500 h-11">
                                                    <SelectValue placeholder="Select stream" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        streams.map((stream) => (
                                                            <SelectItem key={stream} value={stream}>
                                                                {stream}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
                {
                    errors.desiredClasses && (
                        <p className="text-red-500 dark:text-red-400 text-sm">{errors.desiredClasses}</p>
                    )
                }
                {
                    errors.streams && (
                        <p className="text-red-500 dark:text-red-400 text-sm">{errors.streams}</p>
                    )
                }
                {
                    errors.submit && (
                        <p className="text-red-500 dark:text-red-400 text-sm">{errors.submit}</p>
                    )
                }
                <Button
                    type="submit"
                    className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors disabled:opacity-50"
                    disabled={isPending}
                >
                    {
                        isPending ? (
                            <span className="flex items-center">
                                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                </svg>
                                Submitting Inquiry...
                            </span>
                        ) : (
                            "Submit Admission Inquiry"
                        )
                    }
                </Button>
            </form>
        );
    }
}