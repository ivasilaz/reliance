"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white pt-24 pb-12 mt-auto">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="inline-block">
                            <img
                                src="/logos.webp"
                                alt="Reliance Care Solutions"
                                className="h-16 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-white/60 text-lg leading-relaxed font-medium">
                            Empowering lives through compassionate care and professional excellence across Ohio.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8 font-outfit">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Contact', href: '/contact' },
                                { name: 'Careers', href: '/careers' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/70 hover:text-brand-yellow font-bold transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8 font-outfit">Our Services</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Core Care', href: '/services/core-care' },
                                { name: 'Youth Programs', href: '/youth-programs' },
                                { name: 'Growth & Recovery', href: '/services/growth-recovery' },
                                { name: 'Strategic Logistics', href: '/services/logistics' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/70 hover:text-brand-green font-bold transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8 font-outfit">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <MapPin className="text-brand-orange w-5 h-5 shrink-0" />
                                <span className="text-white/70 font-medium">3454 Oak Alley Ct,<br />Toledo, OH 43606</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="text-brand-orange w-5 h-5 shrink-0" />
                                <span className="text-white/70 font-medium">(419) 123-4567</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="text-brand-orange w-5 h-5 shrink-0" />
                                <span className="text-white/70 font-medium">info@reliancecare.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                        © 2026. All signatures lead to better lives.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/30">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
