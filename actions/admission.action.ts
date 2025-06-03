"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Validation schema
const admissionSchema = z.object({
    parentName: z.string().min(2, "Parent's name must be at least 2 characters"),
    phoneNumber: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
    numberOfChildren: z.number().min(1, "At least one child is required"),
    desiredClasses: z
        .array(z.string().min(1, "Class selection is required"))
        .min(1, "At least one class is required"),
    admissionType: z.enum(["nursery-8", "grade-9-12"], {
        required_error: "Admission type is required"
    }),
    streams: z.array(z.string()).optional(), // Optional, only for grade-9-12
});

export async function addAdmissionInquiry(formData: FormData) {
    try {
        const data = {
            parentName: formData.get("parentName") as string,
            phoneNumber: formData.get("phoneNumber") as string,
            numberOfChildren: parseInt(formData.get("numberOfChildren") as string, 10),
            desiredClasses: formData.getAll("desiredClasses") as string[],
            admissionType: formData.get("admissionType") as "nursery-8" | "grade-9-12",
            streams: formData.getAll("streams") as string[],
        };

        // Validate basic data
        const validatedData = admissionSchema.parse(data);

        // Additional validation for grade-9-12
        if (validatedData.admissionType === "grade-9-12") {
            if (!validatedData.streams || validatedData.streams.length !== validatedData.numberOfChildren) {
                return {
                    success: false,
                    error: "Stream selection is required for each child in grades 9-12"
                };
            }

            // Check if all streams are valid
            const validStreams = ["General", "Technical Computer Science"];
            const hasInvalidStream = validatedData.streams.some(stream => !validStreams.includes(stream));
            if (hasInvalidStream) {
                return {
                    success: false,
                    error: "Invalid stream selection"
                };
            }
        }

        // Validate class selections based on admission type
        const nurseryTo8Classes = [
            "Nursery", "LKG", "UKG", "Grade 1", "Grade 2", "Grade 3",
            "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8"
        ];
        const grade9To12Classes = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];

        const validClasses = validatedData.admissionType === "nursery-8"
            ? nurseryTo8Classes
            : grade9To12Classes;

        const hasInvalidClass = validatedData.desiredClasses.some(
            cls => !validClasses.includes(cls)
        );

        if (hasInvalidClass) {
            return {
                success: false,
                error: "Invalid class selection for the chosen admission type"
            };
        }

        const inquiry = await prisma.admissionInquiry.create({
            data: {
                parentName: validatedData.parentName,
                phoneNumber: validatedData.phoneNumber,
                numberOfChildren: validatedData.numberOfChildren,
                desiredClasses: validatedData.desiredClasses,
                admissionType: validatedData.admissionType,
                streams: validatedData.streams || [], // Empty array for nursery-8
            },
        });

        return { success: true, inquiry };
    } catch (error) {
        if (error instanceof z.ZodError) {
            const zodError = error as z.ZodError;
            return {
                success: false,
                error: zodError.errors.map((e: z.ZodIssue) => e.message).join(", ")
            };
        }
        console.error("Error adding admission inquiry:", error);
        return {
            success: false,
            error: "Failed to submit inquiry. Please try again."
        };
    }
}