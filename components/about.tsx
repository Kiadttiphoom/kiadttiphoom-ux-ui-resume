"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Quote, Sparkles, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function About() {
    const { dict } = useLanguage();

    return (
        <Section id="about" className="relative bg-neutral-950 overflow-hidden py-24">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neutral-800/10 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Philosophy & Intro */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            {dict.about.status}
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
                        >
                            {dict.about.title_line1} <br />
                            <span className="text-neutral-500">{dict.about.title_line2}</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative pl-6 border-l-2 border-white/20 mb-12"
                        >
                            <Quote className="absolute -top-3 -left-3 w-6 h-6 text-neutral-700 bg-[#050505]" />
                            <p className="text-xl text-neutral-300 italic font-light leading-relaxed">
                                "{dict.about.quote}"
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-amber-400" />
                                {dict.about.philosophy_title}
                            </h3>
                            <p className="text-neutral-400 leading-relaxed mb-4">
                                {dict.about.philosophy_desc1}
                            </p>
                            <p className="text-neutral-400 leading-relaxed">
                                {dict.about.philosophy_desc2}
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Education & Stats */}
                    <div className="lg:pt-20 space-y-8">
                        {/* Education Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm hover:border-neutral-700 transition-colors"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-neutral-800 rounded-xl text-white">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-white/5 text-neutral-400 text-xs font-mono">2023</span>
                            </div>
                            <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">{dict.about.education_title}</h4>
                            <h3 className="text-xl font-bold text-white mb-2">{dict.about.university}</h3>
                            <p className="text-neutral-400">{dict.about.degree}</p>
                            <div className="mt-4 inline-block px-3 py-1 bg-green-500/10 text-green-400 text-sm font-bold rounded-md">
                                {dict.about.gpa_label} 3.64 (Honors)
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-6 rounded-3xl bg-neutral-900/30 border border-neutral-800 flex flex-col items-center justify-center text-center hover:bg-neutral-900/50 transition-colors"
                            >
                                <span className="text-4xl font-bold text-white mb-1">2+</span>
                                <span className="text-xs text-neutral-500 uppercase tracking-wider">{dict.about.stats_exp}</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-6 rounded-3xl bg-neutral-900/30 border border-neutral-800 flex flex-col items-center justify-center text-center hover:bg-neutral-900/50 transition-colors"
                            >
                                <span className="text-4xl font-bold text-white mb-1">5+</span>
                                <span className="text-xs text-neutral-500 uppercase tracking-wider">{dict.about.stats_proj}</span>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
