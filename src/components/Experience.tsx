'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: Date
  endDate: Date | null
  current: boolean
  description: string[]
}

interface ExperienceProps {
  experience: Experience[]
}

export const Experience = ({ experience }: ExperienceProps) => {
    // Sort by start date desc
    const sorted = [...experience].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
        {/* Background Decorative Line */}
        <div className="absolute left-[28px] md:left-1/2 top-32 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

        <div className="container mx-auto px-4 relative">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-3xl font-bold mb-4">Professional <span className="text-primary">Journey</span></h2>
                 <p className="text-muted-foreground max-w-2xl mx-auto">
                    Leading teams and building scalable solutions across different domains.
                </p>
            </motion.div>
            
            <div className="space-y-12 max-w-5xl mx-auto relative">
                {sorted.map((exp, index) => (
                    <motion.div 
                        key={exp.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[0_0_0_4px_rgba(59,130,246,0.1)] -translate-x-1/2 top-6 z-10 hidden md:block"></div>

                        {/* Content */}
                        <div className="flex-1">
                             <Card className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm group">
                                <CardHeader className="pb-3">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Briefcase className="w-24 h-24 rotate-12" />
                                    </div>
                                    <div className="flex flex-col gap-1 relative z-10">
                                        <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                                        <div className="text-primary font-semibold text-lg flex items-center gap-2">
                                            {exp.company}
                                            {exp.current && <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider">Current</span>}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                     <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                                        <div className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            <span>
                                                {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
                                                {exp.current ? ' Present' : ` ${new Date(exp.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                        
                        {/* Spacer for alternate layout */}
                        <div className="flex-1 hidden md:block"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
