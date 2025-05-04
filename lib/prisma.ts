import { PrismaClient } from "@/app/generated/prisma";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        // Add logging to help debug issues
        log: ['query', 'error', 'warn'],
        errorFormat: 'pretty',
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// For Edge environments or serverless environments like Vercel
export const getServerSidePrisma = () => {
    return new PrismaClient({
        // Add logging to help debug issues
        log: ['query', 'error', 'warn'],
        errorFormat: 'pretty',
        // This is crucial for some serverless environments
        datasources: {
            db: {
                url: process.env.DATABASE_URL,
            },
        },
    });
};