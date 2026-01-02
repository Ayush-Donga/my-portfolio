'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, Globe, User } from 'lucide-react'
import Link from 'next/link'

interface AboutProps {
  avatarUrl?: string | null
}

export const About = ({ avatarUrl }: AboutProps) => {
  return (
    <section id="about-me" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual / Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="relative z-10">
               {avatarUrl ? (
                  <div className="relative rounded-full overflow-hidden aspect-square max-w-[380px] mx-auto shadow-2xl border-[12px] border-white dark:border-white/5 group ring-1 ring-black/5">
                    <img 
                      src={avatarUrl} 
                      alt="Ayush Donga" 
                      className="w-full h-full object-cover transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60"></div>
                  </div>
               ) : (
                  <div className="aspect-square max-w-[380px] mx-auto rounded-full bg-muted flex items-center justify-center border border-border/50">
                    <User className="w-20 h-20 text-muted-foreground/20" />
                  </div>
               )}
               
               {/* Decorative rings */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/20 rounded-full -z-10 animate-[spin_10s_linear_infinite]"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-primary/10 rounded-full -z-10 animate-[spin_20s_linear_infinite_reverse]"></div>
            </div>

            {/* Floating stats or badge next to photo */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-2 -left-2 lg:left-0 z-20 bg-card/80 backdrop-blur-xl border border-border/50 p-6 rounded-2xl shadow-xl hidden sm:block"
            >
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    6+
                 </div>
                 <div>
                    <h4 className="font-bold text-sm">Years Experience</h4>
                    <p className="text-xs text-muted-foreground">in Full Stack Engineering</p>
                 </div>
              </div>
            </motion.div>

            {/* Background blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                <Globe className="w-3 h-3" />
                Global Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Engineering with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 italic">Ownership & Impact</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a <strong>Senior Full Stack Engineer</strong> who treats code as a business asset. I don't just build features; I architect <strong>scalable, production-ready systems</strong> that drive growth and user satisfaction.
              </p>
              <p>
                With deep expertise in <strong>API Design, Database Optimization, and System Architecture</strong>, I solve complex problems before they become technical debts. My focus is on writing maintainable, tested, and performant code that scales.
              </p>
              
              {/* Remote Work Highlight Statement */}
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-xl my-8">
                 <p className="text-foreground font-medium text-base italic">
                    "Open to Full-time Remote roles in US/UK/EU timezones. Specialized in Async-communication and Scalable Architecture."
                 </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-border/50">
                 <div className="space-y-2">
                    <h4 className="font-bold text-foreground flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-primary"></span>
                       Remote-Native
                    </h4>
                    <p className="text-sm">Years of experience with <strong>US & EU</strong> teams. Synchronous overlap with EST & CET.</p>
                 </div>
                 <div className="space-y-2">
                    <h4 className="font-bold text-foreground flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-primary"></span>
                       Ownership Mindset
                    </h4>
                    <p className="text-sm">Full lifecycle responsibility, from RFC to deployment and post-launch monitoring.</p>
                 </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                <Link href="/resume">
                  <Download className="w-4 h-4 mr-2" /> Download CV (ATS-Optimized)
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
