'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export interface Notice {
    id: string
    title: string
    content: string
    isActive: boolean
    priority: number
    createdAt: Date
    updatedAt: Date
}

export async function getActiveNotices(): Promise<{ success: boolean; notices?: Notice[]; error?: string }> {
    try {
        const notices = await prisma.notice.findMany({
            where: {
                isActive: true
            },
            orderBy: [
                { priority: 'desc' },
                { createdAt: 'desc' }
            ]
        })

        return { success: true, notices }
    } catch (err) {
        const error = err as Error
        console.error("Failed to fetch notices:", error)
        return { success: false, error: "Failed to fetch notices" }
    }
}

export async function getAllNotices(): Promise<{ success: boolean; notices?: Notice[]; error?: string }> {
    try {
        const notices = await prisma.notice.findMany({
            orderBy: [
                { priority: 'desc' },
                { createdAt: 'desc' }
            ]
        })

        return { success: true, notices }
    } catch (err) {
        const error = err as Error
        console.error("Failed to fetch notices:", error)
        return { success: false, error: "Failed to fetch notices" }
    }
}

export async function createNotice(data: { title: string; content: string; priority?: number }): Promise<{ success: boolean; notice?: Notice; error?: string }> {
    try {
        if (!data.title || !data.content) {
            return { success: false, error: "Title and content are required" }
        }

        const notice = await prisma.notice.create({
            data: {
                title: data.title,
                content: data.content,
                priority: data.priority || 0,
                isActive: true
            }
        })

        revalidatePath('/')
        return { success: true, notice }
    } catch (err) {
        const error = err as Error
        console.error("Failed to create notice:", error)
        return { success: false, error: "Failed to create notice" }
    }
}

export async function updateNotice(id: string, data: { title?: string; content?: string; isActive?: boolean; priority?: number }): Promise<{ success: boolean; notice?: Notice; error?: string }> {
    try {
        const notice = await prisma.notice.update({
            where: { id },
            data
        })

        revalidatePath('/')
        return { success: true, notice }
    } catch (err) {
        const error = err as Error
        console.error("Failed to update notice:", error)
        return { success: false, error: "Failed to update notice" }
    }
}

export async function deleteNotice(id: string): Promise<{ success: boolean; error?: string }> {
    try {
        await prisma.notice.delete({
            where: { id }
        })

        revalidatePath('/')
        return { success: true }
    } catch (err) {
        const error = err as Error
        console.error("Failed to delete notice:", error)
        return { success: false, error: "Failed to delete notice" }
    }
}

