'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
    {
        quote: "Ayush is an exceptional developer who doesn't just write code but understands the business requirements perfectly. His leadership skills were vital for our project's success.",
        author: "Sarah Johnson",
        role: "Product Manager, TechFlow",
        avatar: "SJ"
    },
    {
        quote: "Working with Ayush was a breeze. He delivered a complex MERN application ahead of schedule and with zero technical debt. Highly recommended for remote leadership roles.",
        author: "Michael Chen",
        role: "CTO, CloudScale Systems",
        avatar: "MC"
    },
    {
        quote: "The architectural decisions Ayush made for our SaaS platform saved us months of rework. He's a true professional who global teams can rely on.",
        author: "David Miller",
        role: "Founder, StartupPulse",
        avatar: "DM"
    }
]

const clientLogos = [
    "TechFlow", "CloudScale", "StartupPulse", "NexGen", "DataLogic", "SkyNet"
]

export const Reviews = () => {
    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">What Partners <span className="text-primary">Say</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Honest feedback from project managers and business owners I've collaborated with worldwide.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card p-8 rounded-2xl border border-border/50 relative group hover:shadow-xl transition-all"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/5 group-hover:text-primary/10 transition-colors" />
                            <p className="text-muted-foreground italic mb-6 relative z-10">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-sm tracking-wide">{t.author}</div>
                                    <div className="text-xs text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Client Logo Cloud */}
                <div className="pt-10 border-t border-border/50">
                    <p className="text-center text-xs font-semibold text-muted-foreground/50 uppercase tracking-[0.2em] mb-10">Trusted By Forward-Thinking Teams</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {clientLogos.map(logo => (
                            <span key={logo} className="text-xl md:text-2xl font-black font-sans tracking-tighter hover:text-primary cursor-default">{logo}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
