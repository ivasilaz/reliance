"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Heart, Zap, Truck, GraduationCap } from 'lucide-react';

const services = [
    {
        title: "Youth & Children",
        desc: "Specialized group homes, emergency placement, and CANS assessments. Investing in the next generation's futures with safety and compassion.",
        color: "bg-brand-green text-white",
        span: "lg:col-span-2",
        tag: "Priority Service",
        icon: <ShieldCheck className="w-8 h-8" />,
        href: "/youth-programs"
    },
    {
        title: "Core Care Support",
        desc: "Respite, AM/PM day services, and on-call nursing support tailored to your family's unique needs.",
        color: "bg-white border border-slate-100",
        span: "lg:col-span-1",
        icon: <Heart className="text-brand-green w-8 h-8" />,
        href: "/services/core-care"
    },
    {
        title: "Growth & Recovery",
        desc: "Vocational rehabilitation and therapeutic animal interactions building paths to independence.",
        color: "bg-brand-yellow/5 border-2 border-brand-yellow/10",
        span: "lg:col-span-1",
        icon: <Zap className="text-brand-yellow w-8 h-8" />,
        href: "/services/growth-recovery"
    },
    {
        title: "Strategic Logistics",
        desc: "Safe, reliable non-medical transportation for appointments and community participation.",
        color: "bg-brand-orange/5 border-2 border-brand-orange/10",
        span: "lg:col-span-1",
        icon: <Truck className="text-brand-orange w-8 h-8" />,
        href: "/services/logistics"
    },
    {
        title: "Staff Training",
        desc: "Expert CPI & PFS certified training ensuring the highest protocols of safety and professional care.",
        color: "bg-slate-50",
        span: "lg:col-span-1",
        icon: <GraduationCap className="text-slate-400 w-8 h-8" />,
        href: "/about/training"
    },
];

export default function ServiceGrid() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section className="py-24 bg-brand-light">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16"
                >
                    <h2 className="text-4xl lg:text-6xl mb-6 font-display font-bold tracking-tight text-brand-dark">Our Strategic Service Pillars</h2>
                    <p className="text-lg text-slate-500 font-medium">Comprehensive care solutions designed for every stage of life, mobility, and growth.</p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className={`group p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between ${s.span} ${s.color}`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`p-4 rounded-2xl ${s.title === 'Youth & Children' ? 'bg-white/10' : 'bg-slate-50'}`}>
                                        {s.icon}
                                    </div>
                                    {s.tag && (
                                        <span className="inline-block px-4 py-1.5 bg-white/20 text-[10px] font-black uppercase tracking-widest rounded-full">
                                            {s.tag}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-3xl lg:text-4xl mb-6 font-display font-bold">{s.title}</h3>
                                <p className="opacity-90 leading-relaxed text-lg mb-8 font-medium">{s.desc}</p>
                            </div>
                            <Link href={s.href} className="font-bold flex items-center gap-2 group-hover:gap-4 transition-all w-fit">
                                Learn More
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
