"use server"

import { revalidatePath } from "next/cache"
import { PrismaClient } from "@prisma/client"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { z } from "zod"

const prisma = new PrismaClient()

// Schema for alumni registration
const alumniRegistrationSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    graduationYear: z.string().min(4, "Valid graduation year is required"),
    course: z.string().optional(),
    profession: z.string().optional(),
    company: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    bio: z.string().optional(),
    interests: z.string().optional(),
    socialLinks: z.object({
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        facebook: z.string().optional(),
    }).optional(),
})

// Schema for newsletter subscription
const newsletterSubscriptionSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    graduationYear: z.string().min(4, "Valid graduation year is required"),
})

// Type for form submission
export type AlumniFormState = {
    errors?: {
        firstName?: string[]
        lastName?: string[]
        email?: string[]
        phone?: string[]
        graduationYear?: string[]
        course?: string[]
        profession?: string[]
        company?: string[]
        address?: string[]
        city?: string[]
        country?: string[]
        bio?: string[]
        interests?: string[]
        socialLinks?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

// Type for newsletter submission
export type NewsletterFormState = {
    errors?: {
        firstName?: string[]
        lastName?: string[]
        email?: string[]
        graduationYear?: string[]
        _form?: string[]
    }
    message?: string
    success?: boolean
}

/**
 * Submit alumni registration form
 */
export async function submitAlumniRegistration(
    _prevState: AlumniFormState,
    formData: FormData
): Promise<AlumniFormState> {
    // Extract form data
    const rawData = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        graduationYear: formData.get("graduationYear") as string,
        course: formData.get("course") as string,
        profession: formData.get("profession") as string,
        company: formData.get("company") as string,
        address: formData.get("address") as string,
        city: formData.get("city") as string,
        country: formData.get("country") as string,
        bio: formData.get("bio") as string,
        interests: formData.get("interests") as string,
        socialLinks: {
            linkedin: formData.get("linkedin") as string,
            twitter: formData.get("twitter") as string,
            facebook: formData.get("facebook") as string,
        },
    }

    // Validate form data
    const validationResult = alumniRegistrationSchema.safeParse(rawData)

    if (!validationResult.success) {
        // Return validation errors
        return {
            errors: validationResult.error.flatten().fieldErrors,
            message: "Please correct the errors in the form.",
            success: false,
        }
    }

    try {
        // Save to database
        await prisma.alumniRegistration.create({
            data: {
                ...validationResult.data,
                socialLinks: validationResult.data.socialLinks || {},
            },
        })

        // Refresh page data
        revalidatePath("/alumni")

        // Return success
        return {
            message: "Thank you for registering! Your information has been submitted for review.",
            success: true,
        }
    } catch (error) {
        console.error("Error submitting alumni registration:", error)

        // Check for unique constraint error
        if ((error as PrismaClientKnownRequestError).code === 'P2002' && 
            ((error as PrismaClientKnownRequestError).meta?.target as string[])?.includes('email')) {
            return {
                errors: {
                    email: ["This email address is already registered."],
                    _form: ["Please use a different email address."],
                },
                message: "Registration failed.",
                success: false,
            }
        }

        // Generic error
        return {
            errors: {
                _form: ["An error occurred while submitting the form. Please try again later."],
            },
            message: "Registration failed.",
            success: false,
        }
    }
}

/**
 * Submit newsletter subscription
 */
export async function subscribeToNewsletter(
    _prevState: NewsletterFormState,
    formData: FormData
): Promise<NewsletterFormState> {
    // Extract form data
    const rawData = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        graduationYear: formData.get("graduationYear") as string,
    }

    // Validate form data
    const validationResult = newsletterSubscriptionSchema.safeParse(rawData)

    if (!validationResult.success) {
        // Return validation errors
        return {
            errors: validationResult.error.flatten().fieldErrors,
            message: "Please correct the errors in the form.",
            success: false,
        }
    }

    try {
        // Save to database
        await prisma.newsletterSubscription.create({
            data: validationResult.data,
        })

        // Refresh page data
        revalidatePath("/alumni")

        // Return success
        return {
            message: "You have successfully subscribed to the alumni newsletter!",
            success: true,
        }
    } catch (error) {
        console.error("Error subscribing to newsletter:", error)

        // Check for unique constraint error
        if ((error as PrismaClientKnownRequestError).code === 'P2002' && 
            ((error as PrismaClientKnownRequestError).meta?.target as string[])?.includes('email')) {
            return {
                errors: {
                    email: ["This email address is already subscribed."],
                    _form: ["Please use a different email address."],
                },
                message: "Subscription failed.",
                success: false,
            }
        }

        // Generic error
        return {
            errors: {
                _form: ["An error occurred while subscribing. Please try again later."],
            },
            message: "Subscription failed.",
            success: false,
        }
    }
}