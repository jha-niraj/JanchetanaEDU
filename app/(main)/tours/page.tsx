"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Clock, MapPin, Calendar, ArrowRight, Loader2
} from 'lucide-react';
import Image from 'next/image';
import SmoothScroll from '@/components/smoothscroll';
import { getEvents } from '@/actions/event.action';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';

interface TourEvent {
    id: string;
    title: string;
    description: string;
    date: Date;
    location?: string | null;
}

const ToursPage = () => {
    const [tours, setTours] = useState<TourEvent[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchTours() {
            try {
                const result = await getEvents('SCHOOL');
                if (result.success && result.events) {
                    // Filter events that might be tours (you can adjust this logic)
                    // For now, showing all school events as tours
                    setTours(result.events as TourEvent[]);
                }
            } catch (error) {
                console.error("Failed to fetch tours:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchTours();
    }, []);

    const getDefaultImage = (index: number) => {
        const images = ['/tour/1.jpeg', '/tour/2.jpeg', '/tour/3.jpeg'];
        return images[index % images.length];
    };

    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <main className="flex-1">
                    <section className="w-full relative">
                        <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden">
                            <Image
                                src="/tour/1.jpeg"
                                alt="Students on educational tour"
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />
                            <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center max-w-6xl mx-auto px-4">
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
                                        <Badge className="mb-4 px-4 py-1.5 text-sm bg-white/20 text-white border-white/30 backdrop-blur-sm">
                                            Educational Experiences
                                        </Badge>
                                    </motion.div>
                                    <motion.h1
                                        className="text-4xl font-bold text-white tracking-tight sm:text-5xl md:text-6xl drop-shadow-2xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    >
                                        Educational Tours
                                    </motion.h1>
                                    <motion.p
                                        className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    >
                                        Discover the world beyond classrooms through our exciting educational trips and field visits that bring learning to life
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
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Our Educational Adventures
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    Experience learning beyond the classroom through our carefully planned educational tours and field trips that bring subjects to life.
                                </p>
                            </motion.div>

                            {isLoading ? (
                                <div className="flex items-center justify-center py-20">
                                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                                    <span className="ml-3 text-lg text-gray-600 dark:text-gray-400">Loading tours...</span>
                                </div>
                            ) : tours.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {tours.map((tour, index) => {
                                        const eventDate = new Date(tour.date);
                                        const isPast = eventDate < new Date();
                                        const isUpcoming = !isPast;

                                        return (
                                            <motion.div
                                                key={tour.id}
                                                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                whileHover={{ y: -8, scale: 1.02 }}
                                            >
                                                {/* Image Container */}
                                                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                                                    <Image
                                                        fill
                                                        src={getDefaultImage(index)}
                                                        alt={tour.title}
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                                    
                                                    {/* Badge */}
                                                    <div className="absolute top-4 right-4">
                                                        {isUpcoming ? (
                                                            <Badge className="bg-green-500 text-white border-0 shadow-lg">
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
                                                            {tour.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 space-y-4">
                                                    {/* Description */}
                                                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                                                        {tour.description}
                                                    </p>

                                                    {/* Details */}
                                                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                        <div className="flex items-center gap-3 text-sm">
                                                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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

                                                        {tour.location && (
                                                            <div className="flex items-center gap-3 text-sm">
                                                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                                                    <MapPin className="w-5 h-5" />
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                                                                    <p className="text-gray-500 dark:text-gray-400">{tour.location}</p>
                                                                </div>
                                                            </div>
                                                        )}

                                                        <div className="flex items-center gap-3 text-sm">
                                                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
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
                                                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                                        <span className="text-sm">Learn More</span>
                                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </div>

                                                {/* Gradient Border Effect */}
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
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
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
                                        <Calendar className="w-10 h-10 text-gray-400" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No Tours Scheduled</h3>
                                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                                        Check back soon for upcoming educational tours and field trips!
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

export default ToursPage;