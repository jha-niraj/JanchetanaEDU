"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Calendar, Clock, MapPin, ArrowRight, Loader2, Sparkles
} from 'lucide-react';
import Image from 'next/image';
import SmoothScroll from '@/components/smoothscroll';
import { getEvents } from '@/actions/event.action';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';

interface CulturalEvent {
    id: string;
    title: string;
    description: string;
    date: Date;
    location?: string | null;
}

const CulturalPage = () => {
    const [culturalActivities, setCulturalActivities] = useState<CulturalEvent[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchCulturalActivities() {
            try {
                const result = await getEvents('SCHOOL');
                if (result.success && result.events) {
                    // Filter events that might be cultural activities
                    // For now, showing all school events as cultural activities
                    setCulturalActivities(result.events as CulturalEvent[]);
                }
            } catch (error) {
                console.error("Failed to fetch cultural activities:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCulturalActivities();
    }, []);

    const getDefaultImage = (index: number) => {
        const images = [
            '/culture/1.jpeg', '/culture/2.jpeg', '/culture/3.jpeg',
            '/culture/4.jpeg', '/culture/5.jpeg', '/culture/6.jpeg',
            '/culture/7.jpeg', '/culture/8.jpeg', '/culture/9.jpeg',
            '/culture/10.jpeg'
        ];
        return images[index % images.length];
    };

    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800">
                <main className="flex-1">
                    <section className="w-full relative">
                        <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden">
                            <Image
                                src="/culture/gathering.jpeg"
                                alt="Cultural activities showcase"
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
                            <div className="container relative z-10 flex h-full flex-col items-center justify-center text-white text-center max-w-6xl mx-auto px-4">
                                <motion.div
                                    className="max-w-3xl space-y-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                    >
                                        <Badge className="mb-4 px-4 py-1.5 text-sm bg-white/20 text-white border-white/30 backdrop-blur-sm flex items-center gap-2">
                                            <Sparkles className="w-3 h-3" />
                                            Cultural Heritage
                                        </Badge>
                                    </motion.div>
                                    <motion.h1
                                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-2xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    >
                                        Cultural Activities
                                    </motion.h1>
                                    <motion.p
                                        className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    >
                                        Celebrate diversity through our rich collection of cultural events, performances, and traditional celebrations
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    <section className="py-20 px-4">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                className="text-center mb-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                                    Our Cultural Events
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    Experience the vibrant tapestry of our cultural heritage through these engaging activities and celebrations.
                                </p>
                            </motion.div>

                            {isLoading ? (
                                <div className="flex items-center justify-center py-20">
                                    <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
                                    <span className="ml-3 text-lg text-gray-600 dark:text-gray-400">Loading cultural activities...</span>
                                </div>
                            ) : culturalActivities.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {culturalActivities.map((activity, index) => {
                                        const eventDate = new Date(activity.date);
                                        const isPast = eventDate < new Date();
                                        const isUpcoming = !isPast;

                                        return (
                                            <motion.div
                                                key={activity.id}
                                                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                whileHover={{ y: -8, scale: 1.02 }}
                                            >
                                                {/* Image Container */}
                                                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
                                                    <Image
                                                        fill
                                                        src={getDefaultImage(index)}
                                                        alt={activity.title}
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                                    
                                                    {/* Badge */}
                                                    <div className="absolute top-4 right-4">
                                                        {isUpcoming ? (
                                                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg">
                                                                Upcoming
                                                            </Badge>
                                                        ) : (
                                                            <Badge variant="secondary" className="shadow-lg">
                                                                Past Event
                                                            </Badge>
                                                        )}
                                                    </div>

                                                    {/* Title Overlay */}
                                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 drop-shadow-lg">
                                                            {activity.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 space-y-4">
                                                    {/* Description */}
                                                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                                                        {activity.description}
                                                    </p>

                                                    {/* Details */}
                                                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                        <div className="flex items-center gap-3 text-sm">
                                                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                                                <Calendar className="w-5 h-5" />
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-gray-900 dark:text-white">
                                                                    {format(eventDate, "MMMM d, yyyy")}
                                                                </p>
                                                                <p className="text-gray-500 dark:text-gray-400 text-xs">
                                                                    {format(eventDate, "EEEE")}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {activity.location && (
                                                            <div className="flex items-center gap-3 text-sm">
                                                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                                                                    <MapPin className="w-5 h-5" />
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">{activity.location}</p>
                                                                </div>
                                                            </div>
                                                        )}

                                                        <div className="flex items-center gap-3 text-sm">
                                                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                                                                <Clock className="w-5 h-5" />
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-gray-900 dark:text-white">Time</p>
                                                                <p className="text-gray-500 dark:text-gray-400">
                                                                    {format(eventDate, "h:mm a")}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Hover Arrow */}
                                                    <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                                        <span className="text-sm">Learn More</span>
                                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </div>

                                                {/* Gradient Border Effect */}
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <motion.div
                                    className="text-center py-20"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 mb-6">
                                        <Sparkles className="w-10 h-10 text-purple-500 dark:text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No Cultural Activities Scheduled</h3>
                                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                                        Check back soon for upcoming cultural events and celebrations!
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </SmoothScroll>
    );
};

export default CulturalPage;