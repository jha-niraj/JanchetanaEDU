"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phoneNumber: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
    message: z.string().optional(),
});

export async function addContactInquiry(formData: FormData) {
    try {
        const data = {
            name: formData.get("name") as string,
            phoneNumber: formData.get("phoneNumber") as string,
            message: formData.get("message") as string | undefined,
        };

        const validatedData = contactSchema.parse(data);

        const inquiry = await prisma.contactInquiry.create({
            data: {
                name: validatedData.name,
                phoneNumber: validatedData.phoneNumber,
                message: validatedData.message,
            },
        });

        return { success: true, inquiry };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.errors.map((e) => e.message).join(", ") };
        }
        console.error("Error adding contact inquiry:", error);
        return { success: false, error: "Failed to submit inquiry. Please try again." };
    }
}