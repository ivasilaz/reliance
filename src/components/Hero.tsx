"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, ArrowRight, HeartPulse } from 'lucide-react';

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center -mx-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0"
          >
            <motion.span
              variants={item}
              className="inline-block py-1.5 px-4 mb-6 text-xs font-black text-brand-green uppercase tracking-[0.1em] bg-brand-green/5 border border-brand-green/10 rounded-full"
            >
              Trusted Excellence since Day One
            </motion.span>
            <motion.h1
              variants={item}
              className="text-6xl lg:text-8xl mb-8 font-display font-bold tracking-tight text-brand-dark leading-[0.95]"
            >
              Compassionate Care that <span className="text-brand-orange">Empowers</span> Independence.
            </motion.h1>
            <motion.p
              variants={item}
              className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium"
            >
              Dedicated to providing personalized support that fosters growth, recovery, and community integration for all ages.
            </motion.p>
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/contact"
                className="bg-brand-orange hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-brand-orange/20 transition-all hover:scale-[1.03] active:scale-95 text-center"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="bg-white border-2 border-slate-100 hover:border-brand-green/20 text-brand-green px-10 py-5 rounded-2xl font-bold transition-all hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any, delay: 0.4 }}
            className="w-full lg:w-1/2 px-4"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-96 h-96 bg-brand-yellow/30 rounded-full blur-3xl -z-10"
              />
              <div className="relative z-10 w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border-8 border-white group">
                <img
                  src="/hero-care.webp"
                  alt="Reliance Care Community"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] flex items-center gap-5 z-20 border border-white"
              >
                <div className="w-14 h-14 bg-brand-green text-white rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-lg font-black text-brand-dark leading-none mb-1">100% Certified</p>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Professional Staff</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
