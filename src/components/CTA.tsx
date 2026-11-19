'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Rocket } from 'lucide-react'

interface CTAProps {
    calendlyUrl?: string | null
}

export const CTA = ({ calendlyUrl }: CTAProps) => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* High-end minimalist grid overlay instead of blobs */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Ready to scale <span className="text-primary">your SaaS infrastructure?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Currently considering new remote opportunities. Available for immediate start or with 2-week notice period.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-semibold border border-emerald-500/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Open to Senior Remote Engineering Roles
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="rounded-full px-8 h-12 text-base bg-foreground text-background hover:bg-foreground/90 shadow-md font-medium transition-all" asChild>
                            <Link 
                                href={calendlyUrl || "https://calendly.com/ayush-donga20/30min"} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Schedule strategy call with Ayush Donga on Calendly"
                            >
                                <Rocket className="mr-2 h-4 w-4" aria-hidden="true" /> Schedule Strategy Call
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-border hover:bg-muted font-medium transition-all" asChild>
                            <Link href="mailto:ayush.donga@gmail.com">
                                Send an Email
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
