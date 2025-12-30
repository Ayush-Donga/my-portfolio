'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, Globe, Terminal } from 'lucide-react'
import Link from 'next/link'

export const About = () => {
  return (
    <section id="about-me" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Engineering with <span className="text-primary">Ownership & Impact</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a <strong>Senior Full Stack Engineer</strong> who treats code as a business asset. I don't just build features; I architect <strong>scalable, production-ready systems</strong> that drive growth and user satisfaction.
              </p>
              <p>
                With deep expertise in <strong>API Design, Database Optimization, and System Architecture</strong>, I solve complex problems before they become technical debts. My focus is on writing maintainable, tested, and performant code that scales with the company.
              </p>
              <p>
                <strong>Remote-Native Collaboration:</strong> I have spent years working with distributed teams in the <strong>US & Europe</strong>. I excel in asynchronous workflows (Slack/Jira/Loom), ensuring clear documentation and proactive communication across time zones.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border/50">
                  <Globe className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Timezone Alignment</h4>
                    <p className="text-sm text-muted-foreground">4+ hrs overlap with EST & CET.</p>
                  </div>
               </div>
               <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border/50">
                  <Terminal className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Backend & APIs</h4>
                    <p className="text-sm text-muted-foreground">Secure, scalable Node.js/Postgres systems.</p>
                  </div>
               </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/resume">
                  <Download className="w-4 h-4 mr-2" /> Download Senior Resume
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Visual / Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-card border border-border/50 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Technical Leadership</h3>
                        <div className="flex flex-wrap gap-2">
                             {['API Architecture & Design', 'Scalable Microservices', 'React/Next.js Performance', 'Database Modeling', 'CI/CD Pipelines', 'Async Communication'].map(skill => (
                                <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                             ))}
                        </div>
                    </div>
                    <div>
                         <h3 className="text-xl font-bold mb-2">My value add</h3>
                         <ul className="space-y-3 text-muted-foreground text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <strong>Ownership Mindset:</strong> I take full responsibility for the lifecycle of a feature, from RFC to deployment.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <strong>Production Standards:</strong> Security, logging, and error handling are not afterthoughts.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <strong>Clear Communication:</strong> I speak "Product" as fluently as I speak "Code".
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
            
            {/* Background blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
