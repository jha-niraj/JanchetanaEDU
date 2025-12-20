'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export interface Event {
    id: string
    title: string
    description: string
    date: Date
    location?: string | null
    eventType: 'SCHOOL' | 'ALUMNI'
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}

interface EventData {
    title: string
    description: string
    date: Date
    location?: string
    eventType: 'SCHOOL' | 'ALUMNI'
    isActive?: boolean
}

interface EventResponse<T> {
    success: boolean
    event?: T
    error?: string
}

interface EventsResponse {
    success: boolean
    events?: Event[]
    error?: string
}

export async function getEvents(eventType?: 'SCHOOL' | 'ALUMNI'): Promise<EventsResponse> {
    try {
        const where = eventType ? { eventType, isActive: true } : { isActive: true }
        const events = await prisma.event.findMany({
            where,
            orderBy: {
                date: 'asc'
            }
        })

        return { success: true, events: events as Event[] }
    } catch (err) {
        const error = err as Error
        console.error("Failed to fetch events:", error)
        return { success: false, error: "Failed to fetch events" }
    }
}

export async function getAllEvents(): Promise<EventsResponse> {
    try {
        const events = await prisma.event.findMany({
            orderBy: [
                { eventType: 'asc' },
                { date: 'asc' }
            ]
        })

        return { success: true, events: events as Event[] }
    } catch (err) {
        const error = err as Error
        console.error("Failed to fetch events:", error)
        return { success: false, error: "Failed to fetch events" }
    }
}

export async function getEventById(id: string): Promise<EventResponse<Event>> {
    try {
        const event = await prisma.event.findUnique({
            where: { id }
        })

        if (!event) {
            return { success: false, error: "Event not found" }
        }

        return { success: true, event: event as Event }
    } catch (err) {
        const error = err as Error
        console.error("Failed to fetch event:", error)
        return { success: false, error: "Failed to fetch event" }
    }
}

export async function createEvent(eventData: EventData): Promise<EventResponse<Event>> {
    try {
        if (!eventData.title || !eventData.description || !eventData.date) {
            return { success: false, error: "Title, description, and date are required" }
        }

        const event = await prisma.event.create({
            data: {
                title: eventData.title,
                description: eventData.description,
                date: eventData.date,
                location: eventData.location || null,
                eventType: eventData.eventType,
                isActive: eventData.isActive ?? true,
            }
        })

        revalidatePath('/alumni')
        revalidatePath('/schoolevents')
        revalidatePath('/admin/alumni/events')
        revalidatePath('/admin/schoolevents')

        return { success: true, event: event as Event }
    } catch (err) {
        const error = err as Error
        console.error("Failed to create event:", error)
        return { success: false, error: "Failed to create event" }
    }
}

export async function updateEvent(id: string, eventData: Partial<EventData>): Promise<EventResponse<Event>> {
    try {
        const existingEvent = await prisma.event.findUnique({
            where: { id }
        })

        if (!existingEvent) {
            return { success: false, error: "Event not found" }
        }

        const event = await prisma.event.update({
            where: { id },
            data: {
                ...eventData,
                date: eventData.date || existingEvent.date,
            }
        })

        revalidatePath('/alumni')
        revalidatePath('/schoolevents')
        revalidatePath('/admin/alumni/events')
        revalidatePath('/admin/schoolevents')

        return { success: true, event: event as Event }
    } catch (err) {
        const error = err as Error
        console.error("Failed to update event:", error)
        return { success: false, error: "Failed to update event" }
    }
}

export async function deleteEvent(id: string): Promise<{ success: boolean; error?: string }> {
    try {
        const existingEvent = await prisma.event.findUnique({
            where: { id }
        })

        if (!existingEvent) {
            return { success: false, error: "Event not found" }
        }

        await prisma.event.delete({
            where: { id }
        })

        revalidatePath('/alumni')
        revalidatePath('/schoolevents')
        revalidatePath('/admin/alumni/events')
        revalidatePath('/admin/schoolevents')

        return { success: true }
    } catch (err) {
        const error = err as Error
        console.error("Failed to delete event:", error)
        return { success: false, error: "Failed to delete event" }
    }
}

