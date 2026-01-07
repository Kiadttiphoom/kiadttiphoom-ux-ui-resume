"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";

export function Hero() {
    const { dict } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-32 sm:pb-0 overflow-hidden" id="hero">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-indigo-500/20 rounded-full blur-[80px] sm:blur-[120px] opacity-30 animate-pulse" />
            <div className="absolute bottom-0 left-0 -z-10 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-purple-500/10 rounded-full blur-[60px] sm:blur-[100px] opacity-20" />

            <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-start gap-6 sm:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-300 mb-4 sm:mb-6 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            {dict.about.status}
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 sm:mb-6 leading-[1.1]">
                            {dict.hero.greeting.split(',')[0]}
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                                {dict.hero.greeting.split(',')[1]}
                            </span>
                        </h1>

                        <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                                {dict.hero.role}
                            </span>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed"
                    >
                        {dict.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
                    >
                        <Button
                            size="lg"
                            className="rounded-full bg-white text-black hover:bg-neutral-200 px-6 sm:px-8 h-10 sm:h-12 text-sm sm:text-base font-medium transition-transform hover:scale-105"
                            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {dict.hero.cta_primary} <ArrowDown className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 text-white px-6 sm:px-8 h-10 sm:h-12 text-sm sm:text-base font-medium backdrop-blur-sm transition-transform hover:scale-105"
                        >
                            {dict.hero.cta_secondary}
                        </Button>
                    </motion.div>

                    {/* Social Links Mini */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-800/50 w-full max-w-md"
                    >
                        <a
                            href="https://github.com/Kiadttiphoom"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-3 bg-neutral-900 border border-neutral-600 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 group"
                        >
                            <div className="relative w-4 h-4 sm:w-5 sm:h-5 grayscale group-hover:grayscale-0 transition-all duration-300 scale-90 group-hover:scale-110">
                                <Image src="/icon/github.png" alt="Github" fill className="object-contain" />
                            </div>
                        </a>
                        <a
                            href="mailto:kiadttiphoom29@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-3 bg-neutral-900 border border-neutral-600 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 group"
                        >
                            <div className="relative w-4 h-4 sm:w-5 sm:h-5 grayscale group-hover:grayscale-0 transition-all duration-300 scale-90 group-hover:scale-110">
                                <Image src="/icon/mail.png" alt="Mail" fill className="object-contain" />
                            </div>
                        </a>
                        <div className="h-px flex-1 bg-neutral-800" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                >
                    {/* Floating Glow Behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10" />

                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-[280px] sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900/50 backdrop-blur-sm group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                        <Image
                            src="/image/P1.jpg"
                            alt="Kiadttiphoom"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
