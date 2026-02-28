"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
                    className="bg-brand-dark rounded-[3.5rem] overflow-hidden relative shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 blur-3xl rounded-full"></div>
                    <div className="relative z-10 p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-2xl">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-5xl lg:text-7xl text-white mb-8 font-display font-bold leading-[0.95]"
                            >
                                Ready for a <span className="text-brand-orange">Personalized</span> Care Plan?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-white/70 text-xl leading-relaxed mb-10 font-medium"
                            >
                                Our experts are ready to build a care path that works for you and your loved ones. Contact us for a community assessment.
                            </motion.p>
                            <div className="flex flex-wrap gap-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand-orange border border-white/5">
                                        <CalendarCheck className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-bold">Free Consultation</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand-orange border border-white/5">
                                        <PhoneCall className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-bold">24/7 On-call Support</span>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="w-full lg:w-[400px] bg-white p-10 rounded-[2.5rem] shadow-2xl border border-white/10"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-brand-dark tracking-tight">Quick Inquiry</h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full p-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-green outline-none font-medium transition-all" />
                                <input type="email" placeholder="Email Address" className="w-full p-5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-green outline-none font-medium transition-all" />
                                <button className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold shadow-2xl shadow-brand-orange/20 cursor-pointer hover:scale-[1.02] transition-all active:scale-95 text-lg">
                                    Request Call Back
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
