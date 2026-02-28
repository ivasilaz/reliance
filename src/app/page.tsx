"use client";

import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />

      {/* Why Us Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-8 bg-brand-light rounded-[2rem] shadow-sm">
                <p className="text-4xl lg:text-5xl font-black text-brand-green mb-2">88</p>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Counties Served</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 bg-brand-green text-white rounded-[2rem] lg:translate-y-8 shadow-2xl"
              >
                <p className="text-4xl lg:text-5xl font-black mb-2">15k+</p>
                <p className="text-xs font-black opacity-60 uppercase tracking-[0.2em]">Lives Impacted</p>
              </motion.div>
              <div className="p-8 bg-brand-yellow rounded-[2rem] shadow-sm">
                <p className="text-4xl lg:text-5xl font-black text-brand-dark mb-2">98%</p>
                <p className="text-xs font-black text-brand-dark/40 uppercase tracking-[0.2em]">Satisfaction</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 bg-brand-orange text-white rounded-[2rem] lg:translate-y-8 shadow-2xl shadow-brand-orange/20"
              >
                <p className="text-4xl lg:text-5xl font-black mb-2">24/7</p>
                <p className="text-xs font-black opacity-60 uppercase tracking-[0.2em]">Support</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl mb-12 font-display font-bold leading-tight tracking-tight text-brand-dark">Why Families Trust Reliance Care Solutions</h2>
              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 bg-brand-green/5 rounded-2xl flex items-center justify-center text-brand-green text-2xl font-black border border-brand-green/10 group-hover:scale-110 transition-transform">01</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-brand-dark">Specialized Youth Focus</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">Priority programs for group home services and emergency placement with CANS certified assessments.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 bg-brand-orange/5 rounded-2xl flex items-center justify-center text-brand-orange text-2xl font-black border border-brand-orange/10 group-hover:scale-110 transition-transform">02</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-brand-dark">Authoritative Training</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">All staff are CPI & PFS certified, ensuring the highest safety protocols and professional standards in Ohio.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
