"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

// Note: projects array moved inside function to access dictionary

function ProjectCard({ project, index }: { project: any; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-full [perspective:1000px]"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="group relative h-full flex flex-col justify-between p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-md overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/30"
            >
                {/* Clickable Overlay (Only for single-link projects) */}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-50 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-3xl"
                    >
                        <span className="sr-only">View {project.title}</span>
                    </a>
                )}

                {/* 3D Content Layer - Floats above background */}
                <div
                    className="[transform:translateZ(30px)] transition-transform duration-500 group-hover:[transform:translateZ(50px)] pointer-events-none"
                >
                    <div className="flex items-start justify-between mb-8">
                        <div className="p-3 bg-neutral-800/80 rounded-2xl border border-neutral-700 text-white shadow-lg group-hover:bg-white group-hover:text-black transition-colors duration-300">
                            <ArrowUpRight className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold font-mono text-neutral-400 uppercase tracking-widest bg-black/40 px-4 py-1.5 rounded-full border border-neutral-800 backdrop-blur-sm shadow-sm">
                            {project.role}
                        </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-neutral-200 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-neutral-400 leading-relaxed mb-6 text-sm font-medium">
                        {project.description}
                    </p>

                    {/* Dual Links for POS (Pointer Events Allowed) */}
                    {project.links && (
                        <div className="flex flex-wrap gap-3 mb-6 pointer-events-auto relative z-[60]">
                            {project.links.map((l: any, i: number) => (
                                <a
                                    key={i}
                                    href={l.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-neutral-200 transition-colors shadow-lg shadow-black/50"
                                >
                                    {l.label} <ArrowUpRight className="w-3 h-3" />
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <div
                    className="[transform:translateZ(20px)] transition-transform duration-500 mt-auto group-hover:[transform:translateZ(40px)] relative z-[60]"
                >
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-800/50 group-hover:border-neutral-700/50 transition-colors pointer-events-auto">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-xs font-semibold text-neutral-500 px-3 py-1.5 bg-neutral-900/50 rounded-md border border-neutral-800 hover:text-white hover:border-neutral-600 transition-colors cursor-default">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Glossy sheen effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none [transform:translateZ(1px)]" />
            </motion.div>
        </motion.div>
    );
}

export function SelectedWork() {
    const { dict } = useLanguage();

    const projects = [
        {
            id: 1,
            title: dict.work.projects.pos.title,
            role: dict.work.projects.pos.role,
            description: dict.work.projects.pos.description,
            tech: ["Next.js", "Tailwind", "Real-time", "Dashboard", "UX/UI"],
            links: [
                { label: dict.work.projects.pos.admin_demo, url: "https://my-pos-app-demo.vercel.app/pos" },
                { label: dict.work.projects.pos.customer_demo, url: "https://my-pos-app-demo.vercel.app/table/1/tBRvnPNgLOqnFeG2PbRc" }
            ]
        },
        {
            id: 2,
            title: dict.work.projects.auth.title,
            role: dict.work.projects.auth.role,
            description: dict.work.projects.auth.description,
            tech: ["Next.js", "Auth.js", "Prisma", "Tailwind"],
            link: "https://nextjs-auth-starter-minimal.vercel.app/"
        },
        {
            id: 3,
            title: dict.work.projects.beauty.title,
            role: dict.work.projects.beauty.role,
            description: dict.work.projects.beauty.description,
            tech: ["React", "Tailwind", "Framer Motion", "Design"],
            link: "https://prakaidoaw-hair-nail-design.vercel.app/"
        }
    ];

    return (
        <Section id="work" className="relative bg-neutral-950/50 overflow-hidden">
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">{dict.work.title}</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neutral-800 via-white to-neutral-800 mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}
