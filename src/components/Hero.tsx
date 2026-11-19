'use client'


import React from 'react'
import { HERO_CONTENT } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroProps {
  calendlyUrl?: string | null
  bio?: string | null
  professionalTitle?: string | null
}

export const Hero = ({ calendlyUrl, bio, professionalTitle }: HeroProps) => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-b from-background to-background/50">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-primary/10 text-primary">
              Senior Full-Stack & Distributed Systems Engineer
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors border-emerald-500/20 bg-emerald-500/10 text-emerald-500 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Available for Remote (US/EU/UK • CET/EST/GMT)
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="block text-xl md:text-2xl text-primary font-medium mb-2">8+ Years of Experience | Senior Full-Stack & Distributed Systems Engineer</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{professionalTitle || 'Backend Architect & Distributed Systems'}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            {bio && !bio.includes('7+') ? bio : 'Specializing in TypeScript, Node.js, NestJS, Next.js, PostgreSQL, Redis, RabbitMQ, AWS, and Production AI/LLM Workflows. Driving async-first engineering ownership and scalable architectures across US, UK, and EU time zones (CET/EST/GMT).'}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
                size="lg" 
                asChild 
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 border-none"
            >
                <Link 
                  href={calendlyUrl || "https://calendly.com/ayush-donga20/30min"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Book a 30-minute strategy call with Ayush Donga via Calendly"
                >
                    Book a Call <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 hover:bg-muted">
                <Link href="mailto:ayush.donga@gmail.com" aria-label="Send direct email to Ayush Donga">
                  Email Me
                </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <Link 
              href="https://github.com/ayush-donga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors hover:text-primary"
              aria-label="Visit Ayush Donga's GitHub profile"
            >
                <Github className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="https://linkedin.com/in/ayush-donga-696755197" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors hover:text-primary"
              aria-label="Visit Ayush Donga's LinkedIn profile"
            >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
                 <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="mailto:ayush.donga@gmail.com" 
              className="p-2 rounded-full hover:bg-muted transition-colors hover:text-primary"
              aria-label="Send email to Ayush Donga"
            >
                <Mail className="h-6 w-6" aria-hidden="true" />
                 <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Visual Element - Impact Dashboard */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
        >
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] blur-[100px] opacity-20"></div>
             
             <div className="relative bg-slate-950/80 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl shadow-2xl flex flex-col gap-6">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
                        <span className="text-sm font-medium text-emerald-500 tracking-wider uppercase">Systems Operational</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">US/EU/UK Async Overlap (CET/EST/GMT)</span>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-2 hover:bg-white/10 transition-colors">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Scale & Reliability</div>
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">100k+</div>
                        <div className="text-xs text-muted-foreground">Active Users | 99.99% SLA</div>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-2 hover:bg-white/10 transition-colors">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Event-Driven Architecture</div>
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">RabbitMQ</div>
                        <div className="text-xs text-muted-foreground">Redis Caching & Kafka</div>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-2 hover:bg-white/10 transition-colors">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">API Performance</div>
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">&lt;100ms</div>
                        <div className="text-xs text-muted-foreground">Optimized PostgreSQL Queries</div>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-2 hover:bg-white/10 transition-colors">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Cloud & Production AI</div>
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">AWS + AI</div>
                        <div className="text-xs text-muted-foreground">OpenAI & Claude LLM Pipelines</div>
                    </div>
                </div>

                {/* Tech Stack */}
                 <div className="mt-4 pt-6 border-t border-white/5">
                    <div className="text-xs text-muted-foreground mb-4 font-mono uppercase tracking-widest text-center">Core Engineering Specialization</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md text-xs font-medium">TypeScript</span>
                        <span className="px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md text-xs font-medium">Node.js</span>
                        <span className="px-2.5 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-md text-xs font-medium">NestJS</span>
                        <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md text-xs font-medium">Next.js / React</span>
                        <span className="px-2.5 py-1 bg-slate-500/10 text-slate-300 border border-slate-500/20 rounded-md text-xs font-medium">PostgreSQL</span>
                        <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-md text-xs font-medium">RabbitMQ & Redis</span>
                        <span className="px-2.5 py-1 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-md text-xs font-medium">AWS</span>
                        <span className="px-2.5 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md text-xs font-medium">AI / LLM Workflows</span>
                    </div>
                 </div>
             </div>
        </motion.div>
      </div>
    </section>
  )
}
