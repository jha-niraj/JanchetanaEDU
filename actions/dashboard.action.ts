'use server'

import { prisma } from "@/lib/prisma";

export interface DashboardStats {
    teacherCount: number;
    // studentCount: number;
    // workerCount: number;
    latestArticles: {
        id: string;
        title: string;
        content: string;
        status: string;
        createdAt: Date;
    }[];
}

export async function getDashboardStats(): Promise<DashboardStats> {
    try {
        // Get teacher count
        const teacherCount = await prisma.teacher.count();

        // Get latest articles
        const latestArticles = await prisma.article.findMany({
            take: 5,
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                title: true,
                content: true,
                status: true,
                createdAt: true,
            }
        });

        return {
            teacherCount,
            latestArticles,
        };
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        throw new Error('Failed to fetch dashboard stats');
    }
}