"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Section } from "./ui/section";

const steps = [
    { num: "01", title: "Problem", desc: "Understand the core user need." },
    { num: "02", title: "UX Decision", desc: "Plan flows and logic." },
    { num: "03", title: "UI Design", desc: "Craft the visual hierarchy." },
    { num: "04", title: "Iterate", desc: "Refine based on feedback." },
];

export function Process() {
    return (
        <Section className="border-y border-neutral-900">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((step, index) => (
                        <div key={index} className="relative pl-6 border-l border-neutral-800">
                            <span className="block text-xs font-mono text-neutral-600 mb-2">{step.num}</span>
                            <h4 className="text-lg font-medium text-white mb-1">{step.title}</h4>
                            <p className="text-sm text-neutral-500">{step.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
