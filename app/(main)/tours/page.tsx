import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

const ToursPage = () => {
    const educationalTours = [
        {
            id: 1,
            image: 'tour/1.jpeg',
            name: 'Historical Museum Visit',
            time: 'Full Day - 8:00 AM'
        },
        {
            id: 2,
            image: 'tour/2.jpeg',
            name: 'Science Center Excursion',
            time: 'Half Day - 9:00 AM'
        },
        {
            id: 3,
            image: 'tour/3.jpeg',
            name: 'Nature Park Field Trip',
            time: 'Full Day - 7:30 AM'
        }
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="w-full">
                    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                        <Image
                            src="/tour/1.jpeg"
                            alt="Students on educational tour"
                            className="w-full h-full object-cover"
                            height={400}
                            width={800}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-white text-center max-w-6xl mx-auto px-4">
                            <motion.div
                                className="max-w-2xl space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <motion.h1
                                    className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    Educational Tours
                                </motion.h1>
                                <motion.p
                                    className="text-base md:text-lg text-white/90 max-w-md mx-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    Discover the world beyond classrooms through our exciting educational trips and field visits
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Educational Adventures
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Experience learning beyond the classroom through our carefully planned educational tours and field trips that bring subjects to life.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                            educationalTours.map((tour, index) => (
                                <motion.div
                                    key={tour.id}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={tour.image}
                                            alt={tour.name}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                <span>{tour.name}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2 text-sm text-blue-600">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>{tour.time}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ToursPage;