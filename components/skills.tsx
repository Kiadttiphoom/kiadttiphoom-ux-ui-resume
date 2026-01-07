"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

const skillCategories = [
    {
        title: "frontend", // Changed to key for lookup
        skills: [
            { name: "Next.js", icon: "nextjs.png" },
            { name: "TypeScript", icon: "typescript.png" },
            { name: "Tailwind", icon: "tailwind.png" },
            { name: "Framer Motion", icon: "framermotion.png" },
            { name: "HTML5", icon: "html.png" },
            { name: "CSS3", icon: "css.png" },
            { name: "JavaScript", icon: "javascript.png" },
            { name: "Bootstrap", icon: "bootstrap.png" },
        ]
    },
    {
        title: "backend", // Changed to key
        skills: [
            { name: "Node.js", icon: "nodejs.png" },
            { name: "Java", icon: "java.png" },
            { name: "Spring Boot", icon: "springboot.png" },
            { name: "MVC Pattern", icon: "mvc.png" },
            { name: "Prisma", icon: "prisma.png" },
            { name: "Auth.js", icon: "authjs.png" },
            { name: "JWT", icon: "jwt.png" },
            { name: "REST API", icon: "api.png" },
        ]
    },
    {
        title: "data", // Changed to key
        skills: [
            { name: "MySQL", icon: "mysql.png" },
            { name: "SQL Server", icon: "sqlserver.png" },
            { name: "Git", icon: "git.png" },
            { name: "Postman", icon: "postman.png" },
            { name: "VS Code", icon: "vscode.png" },
            { name: "Eclipse", icon: "eclipse.png" },
        ]
    }
];

import { Marquee } from "./ui/marquee";



function SkillCard({ skill }: { skill: { name: string; icon: string } }) {
    return (
        <div className="relative flex items-center gap-3 px-6 py-3 bg-neutral-900/80 border border-neutral-800 rounded-xl hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 w-max group cursor-default backdrop-blur-md">
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                <Image
                    src={`/icon/${skill.icon}`}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" // Added glow for visibility
                />
            </div>
            <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
        </div>
    );
}

export function Skills() {
    const { dict } = useLanguage();

    return (
        <Section id="skills" className="relative overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">{dict.skills.title}</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neutral-800 via-white to-neutral-800 mx-auto" />
                    <p className="text-neutral-400 max-w-2xl mx-auto mt-6">
                        {dict.skills.subtitle}
                    </p>
                </motion.div>

                <div className="relative flex flex-col gap-8">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

                    {skillCategories.map((category, index) => (
                        <Marquee key={category.title} reverse={index % 2 === 1}>
                            {category.skills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </Marquee>
                    ))}
                </div>
            </Container >
        </Section >
    );
}
