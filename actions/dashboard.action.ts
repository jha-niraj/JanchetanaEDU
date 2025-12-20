'use server'

import { prisma } from "@/lib/prisma";

export interface DashboardStats {
    teacherCount: number;
    articleCount: number;
    noticeCount: number;
    admissionInquiryCount: number;
    schoolEventCount: number;
    alumniEventCount: number;
    latestArticles: {
        id: string;
        title: string;
        content: string;
        status: string;
        createdAt: Date;
    }[];
    latestNotices: {
        id: string;
        title: string;
        content: string;
        isActive: boolean;
        createdAt: Date;
    }[];
    latestAdmissionInquiries: {
        id: string;
        parentName: string;
        phoneNumber: string;
        admissionType: string;
        createdAt: Date;
    }[];
    latestSchoolEvents: {
        id: string;
        title: string;
        date: Date;
        location: string | null;
        createdAt: Date;
    }[];
}

export async function getDashboardStats(): Promise<DashboardStats> {
    try {
        // Get counts
        const [
            teacherCount,
            articleCount,
            noticeCount,
            admissionInquiryCount,
            schoolEventCount,
            alumniEventCount
        ] = await Promise.all([
            prisma.teacher.count(),
            prisma.article.count(),
            prisma.notice.count(),
            prisma.admissionInquiry.count(),
            prisma.event.count({ where: { eventType: 'SCHOOL' } }),
            prisma.event.count({ where: { eventType: 'ALUMNI' } })
        ]);

        // Get latest items
        const [
            latestArticles,
            latestNotices,
            latestAdmissionInquiries,
            latestSchoolEvents
        ] = await Promise.all([
            prisma.article.findMany({
                take: 3,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    title: true,
                    content: true,
                    status: true,
                    createdAt: true,
                }
            }),
            prisma.notice.findMany({
                take: 3,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    title: true,
                    content: true,
                    isActive: true,
                    createdAt: true,
                }
            }),
            prisma.admissionInquiry.findMany({
                take: 3,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    parentName: true,
                    phoneNumber: true,
                    admissionType: true,
                    createdAt: true,
                }
            }),
            prisma.event.findMany({
                take: 3,
                where: { eventType: 'SCHOOL' },
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    title: true,
                    date: true,
                    location: true,
                    createdAt: true,
                }
            })
        ]);

        return {
            teacherCount,
            articleCount,
            noticeCount,
            admissionInquiryCount,
            schoolEventCount,
            alumniEventCount,
            latestArticles,
            latestNotices,
            latestAdmissionInquiries,
            latestSchoolEvents,
        };
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        throw new Error('Failed to fetch dashboard stats');
    }
}