'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, PenTool, Code, Zap, Globe } from 'lucide-react'

const steps = [
    {
        icon: Search,
        title: "Discovery",
        desc: "Understanding your vision, business goals, and project requirements to establish a solid foundation."
    },
    {
        icon: PenTool,
        title: "Architecture",
        desc: "Designing a scalable architecture and user-friendly UX that aligns with modern web standards."
    },
    {
        icon: Code,
        title: "Development",
        desc: "High-quality, modular coding using Next.js/React with continuous feedback loops."
    },
    {
        icon: Zap,
        title: "Deployment",
        desc: "Rigorous testing and optimization before launching on global infrastructure like AWS or Vercel."
    }
]

export const Process = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-16 items-center">
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Streamlined <span className="text-primary">Process</span> For Digital Success</h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                I don't just build websites; I build solutions. My workflow is designed to ensure transparency, speed, and absolute quality for clients across all timezones.
                            </p>
                            <div className="flex items-center gap-3 text-sm font-semibold text-primary bg-primary/5 w-fit px-4 py-2 rounded-full">
                                <Globe className="w-4 h-4" />
                                <span>Global Async Compatibility</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg relative overflow-hidden group"
                            >
                                <div className="absolute -right-4 -bottom-4 text-8xl font-black text-primary/5 select-none group-hover:text-primary/10 transition-colors">0{i+1}</div>
                                <step.icon className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
