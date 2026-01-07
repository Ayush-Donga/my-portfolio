'use client'


import React from 'react'
import { HERO_CONTENT } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroProps {
  calendlyUrl?: string | null
}

export const Hero = ({ calendlyUrl }: HeroProps) => {
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
            className="flex items-center gap-4"
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary/10 text-primary">
              {HERO_CONTENT.badge}
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-emerald-500/20 bg-emerald-500/10 text-emerald-500 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {HERO_CONTENT.availability}
            </div>
          </motion.div>
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            Senior Full-Stack Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Building High-Performance SaaS & Cloud-Native Platforms</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            I help US/EU founders scale complex web applications. No fluff, just production-ready code and ownership.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" asChild className="rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                <Link href={calendlyUrl || "https://calendly.com/"} target="_blank">
                    Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 hover:bg-muted">
                <Link href="mailto:ayush.donga20@gmail.com">Email Me</Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <Link href="https://github.com/ayush-donga" target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors hover:text-primary">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/ayush-donga-696755197" target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors hover:text-primary">
                <Linkedin className="h-6 w-6" />
                 <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:ayush.donga20@gmail.com" className="p-2 rounded-full hover:bg-muted transition-colors hover:text-primary">
                <Mail className="h-6 w-6" />
                 <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Visual Element */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
        >
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[100px] opacity-20"></div>
             <div className="relative bg-card/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-xl shadow-xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <div className="font-bold text-lg">Senior</div>
                    <div className="text-[10px] opacity-80 uppercase tracking-widest text-center">Expertise</div>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500 group-hover:bg-red-400 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 group-hover:bg-yellow-400 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 group-hover:bg-green-400 transition-colors"></div>
                </div>
                <div className="space-y-4 font-mono text-sm">
                    <p className="text-muted-foreground"><span className="text-purple-400">const</span> <span className="text-blue-400">lead</span> = <span className="text-yellow-400">new</span> <span className="text-green-400">SeniorFullStack</span>({'{'}</p>
                    <div className="pl-6 space-y-2 border-l-2 border-border/50">
                        <p><span className="text-blue-300">name</span>: <span className="text-orange-300">"Ayush Donga"</span>,</p>
                        <p><span className="text-blue-300">focus</span>: <span className="text-orange-300">"Scalable Architecture"</span>,</p>
                        <p><span className="text-blue-300">stack</span>: [</p>
                        <p className="pl-4 text-green-300">"Next.js", "React", "Node.js", "AWS", "Docker",</p>
                        <p className="pl-4 text-green-300">"PostgreSQL", "Redis", "TypeScript"</p>
                        <p>],</p>
                        <p><span className="text-blue-300">location</span>: <span className="text-orange-300">"Remote ( Germany / UK / EU / US)"</span>,</p>
                        <p><span className="text-blue-300">style</span>: <span className="text-orange-300">"Async-First & Proactive"</span></p>
                    </div>
                    <p className="text-muted-foreground">{'}'});</p>
                    
                    <p className="text-muted-foreground mt-4"><span className="text-purple-400">await</span> lead.<span className="text-blue-400">buildProductionReady</span>();</p>
                </div>
             </div>
        </motion.div>
      </div>
    </section>
  )
}
