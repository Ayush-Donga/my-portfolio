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
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Ready to scale <span className="text-primary">your product?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Currently considering new remote opportunities. Available for immediate start or with 2-week notice period.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-semibold border border-emerald-500/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Open to Full-Time Remote Roles
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-none shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300" asChild>
                            <Link href={calendlyUrl || "https://calendly.com/ayush-donga20/30min"} target="_blank">
                                <Rocket className="mr-2 h-5 w-5" /> Book a Strategy Call
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg backdrop-blur-sm border-primary/20 hover:bg-primary/5" asChild>
                            <Link href="mailto:ayush.donga20@gmail.com">
                                Send an Email
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
