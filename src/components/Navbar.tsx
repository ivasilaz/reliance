"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, HeartPulse } from 'lucide-react';

const services = [
    { name: 'Core Care', href: '/services/core-care', desc: 'Respite & Daily Support' },
    { name: 'Growth & Recovery', href: '/services/growth-recovery', desc: 'Vocational & Therapy' },
    { name: 'Youth Programs', href: '/services/youth-programs', desc: 'Group Homes & Emergency' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <img
                        src="/logos.webp"
                        alt="Reliance Care Solutions"
                        className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    <Link href="/" className="text-sm font-bold text-slate-600 hover:text-brand-green transition-colors">Home</Link>

                    <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="text-sm font-bold text-slate-600 hover:text-brand-green transition-colors flex items-center gap-1">
                            Services <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4"
                                >
                                    <div className="flex flex-col gap-2">
                                        {services.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className="p-3 rounded-xl hover:bg-brand-light transition-colors group"
                                            >
                                                <span className="block text-sm font-bold text-brand-dark group-hover:text-brand-green">{service.name}</span>
                                                <span className="text-[11px] text-slate-400">{service.desc}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/youth-programs" className="text-sm font-bold text-slate-600 hover:text-brand-green transition-colors">Youth Programs</Link>
                    <Link href="/about" className="text-sm font-bold text-slate-600 hover:text-brand-green transition-colors">About Us</Link>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-bold text-brand-dark hover:text-brand-green transition-colors">Log In</Link>
                    <Link
                        href="/contact"
                        className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl shadow-brand-green/10 transition-all hover:scale-105 active:scale-95"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden p-2 text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            <Link href="/" className="text-lg font-bold text-brand-dark" onClick={() => setIsOpen(false)}>Home</Link>
                            <div className="flex flex-col gap-4">
                                <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Services</span>
                                {services.map((service) => (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        className="text-lg font-bold text-brand-dark pl-4"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                            <Link href="/youth-programs" className="text-lg font-bold text-brand-dark" onClick={() => setIsOpen(false)}>Youth Programs</Link>
                            <Link href="/about" className="text-lg font-bold text-brand-dark" onClick={() => setIsOpen(false)}>About Us</Link>
                            <hr />
                            <Link
                                href="/contact"
                                className="bg-brand-orange text-white py-4 rounded-xl text-center font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
