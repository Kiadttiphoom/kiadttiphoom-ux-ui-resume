"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function FloatingNav() {
    const [scrolled, setScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    // Use Global Language Context
    const { lang, setLang, dict } = useLanguage();

    const navItems = [
        { name: dict.nav.home, link: "#hero" },
        { name: dict.nav.work, link: "#work" },
        { name: dict.nav.experience, link: "#experience" },
        { name: dict.nav.skills, link: "#skills" },
        { name: dict.nav.about, link: "#about" },
        { name: dict.nav.contact, link: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleLang = (selected: "en" | "th") => {
        setLang(selected);
        setIsLangOpen(false);
    };

    return (
        <div className="fixed top-8 inset-x-0 mx-auto z-[100] flex justify-center w-full max-w-fit px-4 pointer-events-none md:pointer-events-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "flex items-center gap-1 sm:gap-2 px-4 py-3 rounded-full border transition-all duration-300 pointer-events-auto",
                    scrolled
                        ? "bg-neutral-900/80 border-neutral-800 backdrop-blur-md shadow-2xl shadow-black/50"
                        : "bg-black/20 border-white/5 backdrop-blur-sm"
                )}
            >
                <nav className="flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.link}
                            href={item.link}
                            onClick={(e) => scrollToSection(e, item.link)}
                            className="relative px-3 py-1.5 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Vertical Divider */}
                <div className="h-4 w-px bg-white/10 mx-2" />

                {/* Language Switcher */}
                <div className="relative">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="flex items-center gap-1.5 pl-2 pr-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all"
                    >
                        <Globe className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="uppercase">{lang}</span>
                        <ChevronDown className={cn("w-3 h-3 text-neutral-500 transition-transform", isLangOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                        {isLangOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute right-0 top-full mt-2 w-32 bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl overflow-hidden backdrop-blur-md"
                            >
                                <div className="p-1">
                                    <button
                                        onClick={() => toggleLang("en")}
                                        className="flex items-center justify-between w-full px-3 py-2 text-sm text-left text-neutral-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                                    >
                                        <span>English</span>
                                        {lang === "en" && <Check className="w-3 h-3 text-emerald-500" />}
                                    </button>
                                    <button
                                        onClick={() => toggleLang("th")}
                                        className="flex items-center justify-between w-full px-3 py-2 text-sm text-left text-neutral-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                                    >
                                        <span>ภาษาไทย</span>
                                        {lang === "th" && <Check className="w-3 h-3 text-emerald-500" />}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </motion.div>
        </div>
    );
}
