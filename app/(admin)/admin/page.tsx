"use client";

import { useState, useEffect } from "react";
import { 
    Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import { 
    GraduationCap, Quote, BookOpen, CalendarDays, ArrowUpRight, 
    Bell, UserPlus, Calendar, Users
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
    getDashboardStats, type DashboardStats 
} from "@/actions/dashboard.action";

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState<DashboardStats>({
        teacherCount: 0,
        articleCount: 0,
        noticeCount: 0,
        admissionInquiryCount: 0,
        schoolEventCount: 0,
        alumniEventCount: 0,
        latestArticles: [],
        latestNotices: [],
        latestAdmissionInquiries: [],
        latestSchoolEvents: [],
    });
    const router = useRouter();

    const [thought] = useState({
        quote: "Education is not the filling of a pail, but the lighting of a fire.",
        author: "William Butler Yeats",
    });

    useEffect(() => {
        async function fetchStats() {
            try {
                const data = await getDashboardStats();
                setStats(data);
            } catch (error) {
                console.error("Failed to fetch dashboard stats:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchStats();
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

    // Stats data
    const statItems = [
        { 
            title: "Teachers", 
            value: stats.teacherCount, 
            icon: <GraduationCap className="h-6 w-6" />,
            color: "text-blue-600",
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
            href: "/admin/teachers"
        },
        { 
            title: "Articles", 
            value: stats.articleCount, 
            icon: <BookOpen className="h-6 w-6" />,
            color: "text-green-600",
            bgColor: "bg-green-100 dark:bg-green-900/30",
            href: "/admin/articles"
        },
        { 
            title: "Notices", 
            value: stats.noticeCount, 
            icon: <Bell className="h-6 w-6" />,
            color: "text-orange-600",
            bgColor: "bg-orange-100 dark:bg-orange-900/30",
            href: "/admin/notices"
        },
        { 
            title: "Admission Inquiries", 
            value: stats.admissionInquiryCount, 
            icon: <UserPlus className="h-6 w-6" />,
            color: "text-purple-600",
            bgColor: "bg-purple-100 dark:bg-purple-900/30",
            href: "/admin/admissioninquiry"
        },
        { 
            title: "School Events", 
            value: stats.schoolEventCount, 
            icon: <Calendar className="h-6 w-6" />,
            color: "text-pink-600",
            bgColor: "bg-pink-100 dark:bg-pink-900/30",
            href: "/admin/schoolevents"
        },
        { 
            title: "Alumni Events", 
            value: stats.alumniEventCount, 
            icon: <Users className="h-6 w-6" />,
            color: "text-indigo-600",
            bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
            href: "/admin/alumni/events"
        },
    ];

    return (
        <section className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <motion.h1
                    className="text-3xl font-bold tracking-tight"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Dashboard
                </motion.h1>
                <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <CalendarDays className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{format(new Date(), "EEEE, MMMM d, yyyy")}</span>
                </motion.div>
            </div>
            <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {
                    statItems.map((stat) => (
                        <motion.div 
                            key={stat.title} 
                            variants={item}
                            className="cursor-pointer"
                            onClick={() => router.push(stat.href)}
                        >
                            <Card className="transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-primary/50">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                                    <div className={`${stat.bgColor} ${stat.color} p-2 rounded-lg`}>
                                        {stat.icon}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    {
                                        isLoading ? (
                                            <Skeleton className="h-10 w-20" />
                                        ) : (
                                            <div className="text-3xl font-bold">{stat.value}</div>
                                        )
                                    }
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))
                }
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <motion.div variants={item} initial="hidden" animate="show">
                    <Card className="overflow-hidden h-full">
                        <CardHeader className="flex flex-row items-center gap-2 pb-2 bg-muted/50">
                            <Quote className="h-5 w-5 text-muted-foreground" />
                            <CardTitle className="text-lg">Thought of the Day</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            {
                                isLoading ? (
                                    <div className="space-y-4">
                                        <Skeleton className="h-20 w-full" />
                                        <Skeleton className="h-4 w-1/3 ml-auto" />
                                    </div>
                                ) : (
                                    <>
                                        <blockquote className="border-l-4 pl-4 italic">&quot;{thought.quote}&quot;</blockquote>
                                        <p className="mt-2 text-right text-sm text-muted-foreground">— {thought.author}</p>
                                    </>
                                )
                            }
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Latest Articles */}
                <motion.div variants={item} initial="hidden" animate="show" transition={{ delay: 0.1 }}>
                    <Card className="overflow-hidden h-full">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 bg-muted/50">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-muted-foreground" />
                                <CardTitle className="text-lg">Latest Articles</CardTitle>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs text-muted-foreground"
                                onClick={() => router.push('/admin/articles')}
                            >
                                View All <ArrowUpRight className="h-3 w-3 ml-1" />
                            </Button>
                        </CardHeader>
                        <CardContent className="p-6">
                            {
                                isLoading ? (
                                    <div className="space-y-3">
                                        <Skeleton className="h-6 w-3/4" />
                                        <Skeleton className="h-4 w-1/4" />
                                        <Skeleton className="h-16 w-full" />
                                    </div>
                                ) : stats.latestArticles.length > 0 ? (
                                    <div className="space-y-4">
                                        {
                                            stats.latestArticles.slice(0, 1).map((article) => (
                                                <div key={article.id} className="space-y-3">
                                                    <h3 className="font-semibold text-lg line-clamp-2">{article.title}</h3>
                                                    <div className="flex space-x-2 items-center">
                                                        <Badge variant={article.status === 'published' ? 'default' : 'outline'}>
                                                            {article.status === 'published' ? 'Published' : 'Draft'}
                                                        </Badge>
                                                        <span className="text-xs text-muted-foreground">
                                                            {format(new Date(article.createdAt), "MMM d, yyyy")}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                                        {article.content}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-6 text-center">
                                        <BookOpen className="h-8 w-8 text-muted-foreground mb-2" />
                                        <p className="text-muted-foreground">No articles found</p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="mt-4"
                                            onClick={() => router.push('/admin/articles')}
                                        >
                                            Create First Article
                                        </Button>
                                    </div>
                                )
                            }
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Latest Notices */}
                <motion.div variants={item} initial="hidden" animate="show" transition={{ delay: 0.2 }}>
                    <Card className="overflow-hidden h-full">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 bg-muted/50">
                            <div className="flex items-center gap-2">
                                <Bell className="h-5 w-5 text-muted-foreground" />
                                <CardTitle className="text-lg">Latest Notices</CardTitle>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs text-muted-foreground"
                                onClick={() => router.push('/admin/notices')}
                            >
                                View All <ArrowUpRight className="h-3 w-3 ml-1" />
                            </Button>
                        </CardHeader>
                        <CardContent className="p-6">
                            {
                                isLoading ? (
                                    <div className="space-y-3">
                                        <Skeleton className="h-6 w-3/4" />
                                        <Skeleton className="h-4 w-1/4" />
                                        <Skeleton className="h-16 w-full" />
                                    </div>
                                ) : stats.latestNotices.length > 0 ? (
                                    <div className="space-y-4">
                                        {
                                            stats.latestNotices.slice(0, 1).map((notice) => (
                                                <div key={notice.id} className="space-y-3">
                                                    <h3 className="font-semibold text-lg line-clamp-2">{notice.title}</h3>
                                                    <div className="flex space-x-2 items-center">
                                                        <Badge variant={notice.isActive ? 'default' : 'outline'}>
                                                            {notice.isActive ? 'Active' : 'Inactive'}
                                                        </Badge>
                                                        <span className="text-xs text-muted-foreground">
                                                            {format(new Date(notice.createdAt), "MMM d, yyyy")}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                                        {notice.content}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-6 text-center">
                                        <Bell className="h-8 w-8 text-muted-foreground mb-2" />
                                        <p className="text-muted-foreground">No notices found</p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="mt-4"
                                            onClick={() => router.push('/admin/notices')}
                                        >
                                            Create First Notice
                                        </Button>
                                    </div>
                                )
                            }
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Latest Admission Inquiries */}
                <motion.div variants={item} initial="hidden" animate="show" transition={{ delay: 0.3 }}>
                    <Card className="overflow-hidden h-full">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 bg-muted/50">
                            <div className="flex items-center gap-2">
                                <UserPlus className="h-5 w-5 text-muted-foreground" />
                                <CardTitle className="text-lg">Latest Admission Inquiries</CardTitle>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs text-muted-foreground"
                                onClick={() => router.push('/admin/admissioninquiry')}
                            >
                                View All <ArrowUpRight className="h-3 w-3 ml-1" />
                            </Button>
                        </CardHeader>
                        <CardContent className="p-6">
                            {
                                isLoading ? (
                                    <div className="space-y-3">
                                        <Skeleton className="h-6 w-3/4" />
                                        <Skeleton className="h-4 w-1/4" />
                                        <Skeleton className="h-16 w-full" />
                                    </div>
                                ) : stats.latestAdmissionInquiries.length > 0 ? (
                                    <div className="space-y-4">
                                        {
                                            stats.latestAdmissionInquiries.slice(0, 1).map((inquiry) => (
                                                <div key={inquiry.id} className="space-y-3">
                                                    <h3 className="font-semibold text-lg">{inquiry.parentName}</h3>
                                                    <div className="flex space-x-2 items-center">
                                                        <Badge variant="outline">
                                                            {inquiry.admissionType === 'NURSERY_8' ? 'Nursery-8' : 'Grade 9-12'}
                                                        </Badge>
                                                        <span className="text-xs text-muted-foreground">
                                                            {format(new Date(inquiry.createdAt), "MMM d, yyyy")}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Phone: {inquiry.phoneNumber}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-6 text-center">
                                        <UserPlus className="h-8 w-8 text-muted-foreground mb-2" />
                                        <p className="text-muted-foreground">No admission inquiries</p>
                                    </div>
                                )
                            }
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Latest School Events */}
                <motion.div variants={item} initial="hidden" animate="show" transition={{ delay: 0.4 }}>
                    <Card className="overflow-hidden h-full">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 bg-muted/50">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-muted-foreground" />
                                <CardTitle className="text-lg">Latest School Events</CardTitle>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs text-muted-foreground"
                                onClick={() => router.push('/admin/schoolevents')}
                            >
                                View All <ArrowUpRight className="h-3 w-3 ml-1" />
                            </Button>
                        </CardHeader>
                        <CardContent className="p-6">
                            {
                                isLoading ? (
                                    <div className="space-y-3">
                                        <Skeleton className="h-6 w-3/4" />
                                        <Skeleton className="h-4 w-1/4" />
                                        <Skeleton className="h-16 w-full" />
                                    </div>
                                ) : stats.latestSchoolEvents.length > 0 ? (
                                    <div className="space-y-4">
                                        {
                                            stats.latestSchoolEvents.slice(0, 1).map((event) => (
                                                <div key={event.id} className="space-y-3">
                                                    <h3 className="font-semibold text-lg line-clamp-2">{event.title}</h3>
                                                    <div className="flex flex-col space-y-1">
                                                        <span className="text-xs text-muted-foreground">
                                                            {format(new Date(event.date), "MMM d, yyyy")}
                                                        </span>
                                                        {event.location && (
                                                            <span className="text-xs text-muted-foreground">
                                                                Location: {event.location}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-6 text-center">
                                        <Calendar className="h-8 w-8 text-muted-foreground mb-2" />
                                        <p className="text-muted-foreground">No school events</p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="mt-4"
                                            onClick={() => router.push('/admin/schoolevents')}
                                        >
                                            Create First Event
                                        </Button>
                                    </div>
                                )
                            }
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}