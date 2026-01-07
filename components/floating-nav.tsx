"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Globe, ChevronDown, Check, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function FloatingNav() {
    const [scrolled, setScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            setIsMobileMenuOpen(false); // Close mobile menu on click
        }
    };

    const toggleLang = (selected: "en" | "th") => {
        setLang(selected);
        setIsLangOpen(false);
    };

    return (
        <div className="fixed top-4 sm:top-8 inset-x-0 mx-auto z-[100] flex justify-center w-full md:max-w-fit px-4 pointer-events-none md:pointer-events-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "relative flex items-center justify-between gap-1 sm:gap-2 px-4 py-3 rounded-full border transition-all duration-300 pointer-events-auto",
                    scrolled || isMobileMenuOpen
                        ? "bg-neutral-900/90 border-neutral-800 backdrop-blur-md shadow-2xl shadow-black/50"
                        : "bg-black/20 border-white/5 backdrop-blur-sm"
                )}
            >
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.link}
                            href={item.link}
                            onClick={(e) => scrollToSection(e, item.link)}
                            className="relative px-3 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-neutral-300 hover:text-white transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    <span className="ml-2 text-sm font-semibold text-white md:hidden">
                        {isMobileMenuOpen ? "Menu" : "Kiadttiphoom"}
                    </span>
                </div>

                {/* Divider (Desktop Only) */}
                <div className="hidden md:block h-4 w-px bg-white/10 mx-2" />

                {/* Language Switcher */}
                <div className="relative hidden md:block">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="flex items-center gap-1.5 pl-2 pr-3 py-1.5 rounded-full text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all"
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

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-16 inset-x-0 mx-4 p-4 rounded-2xl bg-neutral-900/95 border border-neutral-800 backdrop-blur-xl shadow-2xl md:hidden flex flex-col gap-2 pointer-events-auto"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.link}
                                href={item.link}
                                onClick={(e) => scrollToSection(e, item.link)}
                                className="block px-4 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                            >
                                {item.name}
                            </a>
                        ))}

                        <div className="h-px bg-white/10 my-2" />

                        <div className="flex items-center justify-between px-4 py-2">
                            <span className="text-sm text-neutral-400">Language</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => toggleLang("en")}
                                    className={cn("px-3 py-1 rounded-md text-sm transition-colors", lang === "en" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-neutral-300")}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => toggleLang("th")}
                                    className={cn("px-3 py-1 rounded-md text-sm transition-colors", lang === "th" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-neutral-300")}
                                >
                                    TH
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
