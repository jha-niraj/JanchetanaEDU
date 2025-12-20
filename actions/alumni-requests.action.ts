'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

// Volunteer Opportunity
export interface VolunteerOpportunity {
    id: string
    title: string
    description: string
    subject?: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}

// Volunteer Request
export interface VolunteerRequest {
    id: string
    opportunityId?: string | null
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    subject?: string | null
    message?: string | null
    status: string
    createdAt: Date
    updatedAt: Date
}

// Mentorship Request
export interface MentorshipRequest {
    id: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    graduationYear?: string | null
    currentRole?: string | null
    interests?: string | null
    message?: string | null
    status: string
    createdAt: Date
    updatedAt: Date
}

// Donation Request
export interface DonationRequest {
    id: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    amount?: string | null
    message?: string | null
    status: string
    createdAt: Date
    updatedAt: Date
}

// Volunteer Opportunities
export async function getVolunteerOpportunities() {
    try {
        const opportunities = await prisma.volunteerOpportunity.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' }
        })
        return { success: true, opportunities }
    } catch (err) {
        return { success: false, error: "Failed to fetch volunteer opportunities" }
    }
}

export async function getAllVolunteerOpportunities() {
    try {
        const opportunities = await prisma.volunteerOpportunity.findMany({
            orderBy: { createdAt: 'desc' }
        })
        return { success: true, opportunities }
    } catch (err) {
        return { success: false, error: "Failed to fetch volunteer opportunities" }
    }
}

export async function createVolunteerOpportunity(data: { title: string; description: string; subject?: string }) {
    try {
        const opportunity = await prisma.volunteerOpportunity.create({
            data: {
                title: data.title,
                description: data.description,
                subject: data.subject || null,
            }
        })
        revalidatePath('/admin/alumni/volunteer')
        return { success: true, opportunity }
    } catch (err) {
        return { success: false, error: "Failed to create volunteer opportunity" }
    }
}

export async function deleteVolunteerOpportunity(id: string) {
    try {
        await prisma.volunteerOpportunity.delete({ where: { id } })
        revalidatePath('/admin/alumni/volunteer')
        return { success: true }
    } catch (err) {
        return { success: false, error: "Failed to delete volunteer opportunity" }
    }
}

// Volunteer Requests
export async function submitVolunteerRequest(data: {
    opportunityId?: string
    firstName: string
    lastName: string
    email: string
    phone?: string
    subject?: string
    message?: string
}) {
    try {
        const request = await prisma.volunteerRequest.create({
            data: {
                opportunityId: data.opportunityId || null,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone || null,
                subject: data.subject || null,
                message: data.message || null,
            }
        })
        revalidatePath('/admin/alumni/volunteer')
        return { success: true, request }
    } catch (err) {
        return { success: false, error: "Failed to submit volunteer request" }
    }
}

export async function getAllVolunteerRequests() {
    try {
        const requests = await prisma.volunteerRequest.findMany({
            include: {
                opportunity: true
            },
            orderBy: { createdAt: 'desc' }
        })
        return { success: true, requests }
    } catch (err) {
        return { success: false, error: "Failed to fetch volunteer requests" }
    }
}

export async function updateVolunteerRequestStatus(id: string, status: string) {
    try {
        await prisma.volunteerRequest.update({
            where: { id },
            data: { status }
        })
        revalidatePath('/admin/alumni/volunteer')
        return { success: true }
    } catch (err) {
        return { success: false, error: "Failed to update request status" }
    }
}

// Mentorship Requests
export async function submitMentorshipRequest(data: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    graduationYear?: string
    currentRole?: string
    interests?: string
    message?: string
}) {
    try {
        const request = await prisma.mentorshipRequest.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone || null,
                graduationYear: data.graduationYear || null,
                currentRole: data.currentRole || null,
                interests: data.interests || null,
                message: data.message || null,
            }
        })
        revalidatePath('/admin/alumni/mentorship')
        return { success: true, request }
    } catch (err) {
        return { success: false, error: "Failed to submit mentorship request" }
    }
}

export async function getAllMentorshipRequests() {
    try {
        const requests = await prisma.mentorshipRequest.findMany({
            orderBy: { createdAt: 'desc' }
        })
        return { success: true, requests }
    } catch (err) {
        return { success: false, error: "Failed to fetch mentorship requests" }
    }
}

export async function updateMentorshipRequestStatus(id: string, status: string) {
    try {
        await prisma.mentorshipRequest.update({
            where: { id },
            data: { status }
        })
        revalidatePath('/admin/alumni/mentorship')
        return { success: true }
    } catch (err) {
        return { success: false, error: "Failed to update request status" }
    }
}

// Donation Requests
export async function submitDonationRequest(data: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    amount?: string
    message?: string
}) {
    try {
        const request = await prisma.donationRequest.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone || null,
                amount: data.amount || null,
                message: data.message || null,
            }
        })
        revalidatePath('/admin/alumni/donate')
        return { success: true, request }
    } catch (err) {
        return { success: false, error: "Failed to submit donation request" }
    }
}

export async function getAllDonationRequests() {
    try {
        const requests = await prisma.donationRequest.findMany({
            orderBy: { createdAt: 'desc' }
        })
        return { success: true, requests }
    } catch (err) {
        return { success: false, error: "Failed to fetch donation requests" }
    }
}

export async function updateDonationRequestStatus(id: string, status: string) {
    try {
        await prisma.donationRequest.update({
            where: { id },
            data: { status }
        })
        revalidatePath('/admin/alumni/donate')
        return { success: true }
    } catch (err) {
        return { success: false, error: "Failed to update request status" }
    }
}

