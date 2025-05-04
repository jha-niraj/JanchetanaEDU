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
        const [teacherCount, latestArticles] = await Promise.all([
            prisma.teacher.count(),
            prisma.article.findMany({
                where: { status: 'published' },
                orderBy: { createdAt: 'desc' },
                take: 1,
                select: {
                    id: true,
                    title: true,
                    content: true,
                    status: true,
                    createdAt: true,
                },
            }),
        ]);

        return {
            teacherCount,
            latestArticles
        };
    } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
        throw new Error("Failed to fetch dashboard stats");
    } finally {
        await prisma.$disconnect();
    }
}