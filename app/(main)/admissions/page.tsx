"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Phone, Users, CheckCircle, User } from "lucide-react";
import { addAdmissionInquiry } from "@/actions/admission.action";
import SmoothScroll from "@/components/smoothscroll";

export default function AdmissionsPage() {
    const [formData, setFormData] = useState({
        parentName: "",
        phoneNumber: "",
        numberOfChildren: 1,
        desiredClasses: [] as string[],
    });
    const [isPending, startTransition] = useTransition();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const classes = [
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
        "Grade 9",
        "Grade 10",
        "Grade 11",
        "Grade 12",
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
            formData.desiredClasses.forEach((cls) => form.append("desiredClasses", cls));

            const result = await addAdmissionInquiry(form);

            if (result.success) {
                setShowSuccessDialog(true);
                setFormData({ parentName: "", phoneNumber: "", numberOfChildren: 1, desiredClasses: [] });
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

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
                <section className="relative">
                    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                            alt="School campus"
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
                <section className="max-w-7xl mx-auto py-12">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="w-full shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">Admission Inquiry</CardTitle>
                                    <p className="text-gray-500 dark:text-gray-400">Fill out the form below, and we’ll get in touch.</p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="parentName" className="text-gray-700 dark:text-gray-300">
                                                    Parent Name
                                                </Label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                    <Input
                                                        id="parentName"
                                                        type="text"
                                                        placeholder="John Doe"
                                                        value={formData.parentName}
                                                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                                        className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                                                        disabled={isPending}
                                                        aria-label="Parent Name"
                                                    />
                                                    {
                                                        errors.parentName && (
                                                            <p className="text-red-600 dark:text-red-400 text-sm">{errors.parentName}</p>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phoneNumber" className="text-gray-700 dark:text-gray-300">
                                                    Phone Number
                                                </Label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                    <Input
                                                        id="phoneNumber"
                                                        type="tel"
                                                        placeholder="+1234567890"
                                                        value={formData.phoneNumber}
                                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                                        className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                                                        disabled={isPending}
                                                        aria-label="Phone Number"
                                                    />
                                                    {
                                                        errors.phoneNumber && (
                                                            <p className="text-red-600 dark:text-red-400 text-sm">{errors.phoneNumber}</p>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="numberOfChildren" className="text-gray-700 dark:text-gray-300">
                                                Number of Children
                                            </Label>
                                            <div className="relative">
                                                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                <Select
                                                    value={formData.numberOfChildren.toString()}
                                                    onValueChange={(value) => {
                                                        const num = parseInt(value, 10);
                                                        setFormData({
                                                            ...formData,
                                                            numberOfChildren: num,
                                                            desiredClasses: new Array(num).fill(""),
                                                        });
                                                    }}
                                                    disabled={isPending}
                                                >
                                                    <SelectTrigger className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                                                        <SelectValue placeholder="Select number of children" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {
                                                            [1, 2, 3, 4, 5].map((num) => (
                                                                <SelectItem key={num} value={num.toString()}>
                                                                    {num}
                                                                </SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>
                                                {
                                                    errors.numberOfChildren && (
                                                        <p className="text-red-600 dark:text-red-400 text-sm">{errors.numberOfChildren}</p>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        {
                                            Array.from({ length: formData.numberOfChildren }).map((_, index) => (
                                                <div key={index} className="space-y-2">
                                                    <Label htmlFor={`class-${index}`} className="text-gray-700 dark:text-gray-300">
                                                        Desired Class for Child {index + 1}
                                                    </Label>
                                                    <Select
                                                        value={formData.desiredClasses[index] || ""}
                                                        onValueChange={(value) => handleClassChange(index, value)}
                                                        disabled={isPending}
                                                    >
                                                        <SelectTrigger className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
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
                                                    {
                                                        errors.desiredClasses && (
                                                            <p className="text-red-600 dark:text-red-400 text-sm">{errors.desiredClasses}</p>
                                                        )
                                                    }
                                                </div>
                                            ))
                                        }
                                        {
                                            errors.submit && (
                                                <p className="text-red-600 dark:text-red-400 text-sm">{errors.submit}</p>
                                            )
                                        }
                                        <Button
                                            type="submit"
                                            className="w-full cursor-pointer bg-black text-white dark:bg-white dark:text-black transition-colors"
                                            disabled={isPending}
                                        >
                                            {
                                                isPending ? (
                                                    <span className="flex items-center">
                                                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                        </svg>
                                                        Submitting...
                                                    </span>
                                                ) : (
                                                    "Submit Inquiry"
                                                )
                                            }
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>
                <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
                    <AlertDialogContent className="bg-white dark:bg-gray-800 border-0 shadow-xl">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                <CheckCircle className="h-5 w-5" />
                                Inquiry Submitted
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-gray-600 dark:text-gray-300">
                                Thank you for your interest in Janchetana. We will contact you soon to discuss your child’s admission.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <Button
                                className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
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
}