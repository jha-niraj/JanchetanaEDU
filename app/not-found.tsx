"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4">
            <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-100 text-2xl">
                            <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            Page Not Found
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-300">
                            Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Try checking the URL or return to the homepage.
                        </p>
                        <Button
                            className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                            onClick={() => router.push("/")}
                        >
                            Back to Home
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}