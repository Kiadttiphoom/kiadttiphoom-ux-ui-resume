"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Experience() {
    const { dict } = useLanguage();
    return (
        <Section id="experience" className="bg-[#050505] relative overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">{dict.experience.title}</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neutral-800 via-white to-neutral-800 mx-auto" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Glowing Vertical Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent md:-translate-x-px" />

                    {/* Experience Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col md:flex-row items-start mb-16 group"
                    >
                        {/* Timeline Dot (Mobile: Left, Desktop: Center) */}
                        <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-neutral-600 rounded-full z-10 top-6 md:top-6 group-hover:border-white group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_#050505]">
                            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
                        </div>

                        {/* Date Badge (Desktop: Left Side) */}
                        <div className="pl-20 md:pl-0 md:pr-16 md:w-1/2 md:text-right mb-4 md:mb-0 md:pt-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-400 text-sm font-mono group-hover:border-neutral-600 transition-colors">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{dict.experience.date}</span>
                            </div>
                        </div>

                        {/* Content Card (Desktop: Right Side) */}
                        <div className="pl-16 md:pl-16 md:w-1/2">
                            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 backdrop-blur-sm hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 group-hover:translate-x-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-neutral-800 rounded-lg text-white shadow-inner">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{dict.experience.role}</h3>
                                        <p className="text-neutral-400 font-medium">{dict.experience.company}</p>
                                    </div>
                                </div>

                                <ul className="space-y-3 text-neutral-400 text-sm mt-5 leading-relaxed list-disc list-outside ml-4 marker:text-neutral-600">
                                    <li className="pl-1"><span className="text-white font-medium">{dict.experience.labels.fullstack}</span> {dict.experience.desc_list[0]}</li>
                                    <li className="pl-1"><span className="text-white font-medium">{dict.experience.labels.architecture}</span> {dict.experience.desc_list[1]}</li>
                                    <li className="pl-1"><span className="text-white font-medium">{dict.experience.labels.api}</span> {dict.experience.desc_list[2]}</li>
                                    <li className="pl-1"><span className="text-white font-medium">{dict.experience.labels.security}</span> {dict.experience.desc_list[3]}</li>
                                    <li className="pl-1"><span className="text-white font-medium">{dict.experience.labels.db}</span> {dict.experience.desc_list[4]}</li>
                                    <li className="pl-1"><span className="text-white font-medium">{dict.experience.labels.payment}</span> {dict.experience.desc_list[5]}</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
