"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Mail, Github } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";

export function Contact() {
    const { dict } = useLanguage();

    return (
        <Section id="contact" className="bg-[#050505] relative overflow-hidden pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Left: Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800 backdrop-blur-sm"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {dict.contact.title}
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                            {dict.contact.desc}
                        </p>
                        <a
                            href="mailto:kiadttiphoom29@gmail.com"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all duration-300 w-full md:w-auto"
                        >
                            <Mail className="w-5 h-5" />
                            {dict.contact.btn_email}
                        </a>
                    </motion.div>

                    {/* Right: Contact Details & Socials */}
                    <div className="flex flex-col gap-8 md:pt-4">
                        <div>
                            <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4 border-l-2 border-neutral-800 pl-4">{dict.contact.connect_label}</h3>
                            <div className="flex gap-4">
                                {/* Social icons remain unchanged */}
                                <a
                                    href="https://www.facebook.com/kiadttiphoombooiad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 group"
                                >
                                    <div className="relative w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300 scale-90 group-hover:scale-110">
                                        <Image src="/icon/facebook.png" alt="Facebook" fill className="object-contain" />
                                    </div>
                                </a>
                                <a
                                    href="https://line.me/ti/p/EDnlnAn7wm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 group"
                                >
                                    <div className="relative w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300 scale-90 group-hover:scale-110">
                                        <Image src="/icon/line.png" alt="Line" fill className="object-contain" />
                                    </div>
                                </a>
                                <a
                                    href="https://www.instagram.com/xvofn__29?igsh=a2o2dG0xbWprdWN3&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 group"
                                >
                                    <div className="relative w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300 scale-90 group-hover:scale-110">
                                        <Image src="/icon/Instagram.png" alt="Instagram" fill className="object-contain" />
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/Kiadttiphoom"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 group"
                                >
                                    <div className="relative w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300 scale-90 group-hover:scale-110">
                                        <Image src="/icon/github.png" alt="Github" fill className="object-contain" />
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-neutral-900 text-neutral-600 text-sm flex justify-between items-center">
                            <span>&copy; {new Date().getFullYear()} {dict.contact.rights}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </Section >
    );
}
