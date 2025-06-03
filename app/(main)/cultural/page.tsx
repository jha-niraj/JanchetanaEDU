import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';

const CulturalPage = () => {
    const culturalActivities = [
        {
            id: 1,
            image: 'culture/1.jpeg',
            name: 'Traditional Dance Festival',
            time: '6:00 PM - 9:00 PM'
        },
        {
            id: 2,
            image: 'culture/2.jpeg',
            name: 'Music Concert Evening',
            time: '7:30 PM - 10:00 PM'
        },
        {
            id: 3,
            image: 'culture/3.jpeg',
            name: 'Art Exhibition',
            time: '10:00 AM - 5:00 PM'
        },
        {
            id: 4,
            image: 'culture/4.jpeg',
            name: 'Poetry Reading Session',
            time: '4:00 PM - 6:00 PM'
        },
        {
            id: 5,
            image: 'culture/5.jpeg',
            name: 'Cultural Heritage Workshop',
            time: '2:00 PM - 5:00 PM'
        },
        {
            id: 6,
            image: 'culture/6.jpeg',
            name: 'International Food Festival',
            time: '11:00 AM - 8:00 PM'
        },
        {
            id: 7,
            image: 'culture/7.jpeg',
            name: 'Theater Performance',
            time: '8:00 PM - 10:30 PM'
        },
        {
            id: 8,
            image: 'culture/8.jpeg',
            name: 'Folk Music Workshop',
            time: '3:00 PM - 5:30 PM'
        },
        {
            id: 9,
            image: 'culture/9.jpeg',
            name: 'Cultural Storytelling Night',
            time: '7:00 PM - 9:30 PM'
        },
        {
            id: 10,
            image: 'culture/10.jpeg',
            name: 'Traditional Craft Making',
            time: '1:00 PM - 4:00 PM'
        }
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="w-full">
                    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                        <Image
                            src="culture/1.jpeg"
                            alt="Cultural activities showcase"
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
                                    Cultural Activities
                                </motion.h1>
                                <motion.p
                                    className="text-base md:text-lg text-white/90 max-w-md mx-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    Celebrate diversity through our rich collection of cultural events, performances, and traditional celebrations
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
                                Our Cultural Events
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Experience the vibrant tapestry of our cultural heritage through these engaging activities and celebrations.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                            culturalActivities.map((activity, index) => (
                                <motion.div
                                    key={activity.id}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={activity.image}
                                            alt={activity.name}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                <span>{activity.name}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2 text-sm text-purple-600">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>{activity.time}</span>
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

export default CulturalPage;