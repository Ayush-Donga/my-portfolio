'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Linkedin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const clientLogos = [
    "TechFlow", "CloudScale", "StartupPulse", "NexGen", "DataLogic", "SkyNet"
]

interface Testimonial {
    id: string
    name: string
    role: string
    company: string
    quote: string
    avatar?: string | null
    linkedinUrl?: string | null
    logoUrl?: string | null
}

interface ReviewsProps {
    testimonials?: Testimonial[]
}

export const Reviews = ({ testimonials = [] }: ReviewsProps) => {
    
    if (testimonials.length === 0) return null;

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
                    <p className="text-muted-foreground mr-auto ml-auto max-w-2xl">
                        Honest feedback from project managers and business owners I've collaborated with worldwide.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card p-8 rounded-2xl border border-border/50 relative group hover:shadow-xl transition-all"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/5 group-hover:text-primary/10 transition-colors" />
                            <div 
                                className="text-muted-foreground italic mb-6 relative z-10 leading-relaxed" 
                                dangerouslySetInnerHTML={{ __html: `"${t.quote.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>')}"` }}
                            />
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase overflow-hidden border border-primary/20">
                                        {t.avatar ? (
                                            <img src={t.avatar} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                                        ) : (
                                            t.name.split(' ').map(n => n[0]).join('')
                                        )}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="font-bold text-sm tracking-wide">{t.name}</div>
                                            {t.linkedinUrl && (
                                                <Link 
                                                  href={t.linkedinUrl} 
                                                  target="_blank" 
                                                  rel="noopener noreferrer"
                                                  aria-label={`View ${t.name}'s LinkedIn profile`}
                                                  className="text-muted-foreground hover:text-[#0077B5] transition-colors"
                                                >
                                                    <Linkedin className="w-3 h-3" aria-hidden="true" />
                                                </Link>
                                            )}
                                        </div>
                                        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                                            {t.role}, {t.company}
                                            {t.logoUrl && (
                                                <img src={t.logoUrl} alt={t.company} loading="lazy" className="h-3 w-auto opacity-50 grayscale hover:grayscale-0 transition-all" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Client Logo Cloud - Removed for professional minimalism */}
            </div>
        </section>
    )
}
