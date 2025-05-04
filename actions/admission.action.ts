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
});

export async function addAdmissionInquiry(formData: FormData) {
    try {
        const data = {
            parentName: formData.get("parentName") as string,
            phoneNumber: formData.get("phoneNumber") as string,
            numberOfChildren: parseInt(formData.get("numberOfChildren") as string, 10),
            desiredClasses: formData.getAll("desiredClasses") as string[],
        };

        const validatedData = admissionSchema.parse(data);

        const inquiry = await prisma.admissionInquiry.create({
            data: {
                parentName: validatedData.parentName,
                phoneNumber: validatedData.phoneNumber,
                numberOfChildren: validatedData.numberOfChildren,
                desiredClasses: validatedData.desiredClasses,
            },
        });

        return { success: true, inquiry };
    } catch (error) {
        if (error instanceof z.ZodError) {
            const zodError = error as z.ZodError;
            return { success: false, error: zodError.errors.map((e: z.ZodIssue) => e.message).join(", ") };
        }
        console.error("Error adding admission inquiry:", error);
        return { success: false, error: "Failed to submit inquiry. Please try again." };
    }
}