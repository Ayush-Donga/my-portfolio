'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Code, Users } from 'lucide-react'

const standards = [
    {
        icon: ShieldCheck,
        title: "Clean Architecture",
        desc: "Strict adherence to SOLID principles and design patterns for maximum maintainability."
    },
    {
        icon: Zap,
        title: "Performance First",
        desc: "Core Web Vitals optimized. Zero-latency mindset across the entire stack."
    },
    {
        icon: Code,
        title: "Type Safety",
        desc: "End-to-end type safety with TypeScript and Prisma to eliminate runtime errors."
    },
    {
        icon: Users,
        title: "Agile Leadership",
        desc: "Managing remote teams with a focus on high-velocity delivery and mental health."
    }
]

export const QualityStandards = () => {
    return (
        <section className="py-24 relative bg-card/20 border-y border-border/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Our Engineering DNA</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Standardized <br /> <span className="text-primary">Excellence.</span></h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                I don't just ship features; I ship scalable infrastructure built on industry-leading engineering standards.
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex-1 grid sm:grid-cols-2 gap-8">
                        {standards.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-5"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <s.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
