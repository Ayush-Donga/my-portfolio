'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react'
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
    <section id="experience" className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full opacity-30 pointer-events-none">
                <div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent left-1/2"></div>
             </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-3xl font-bold mb-4">Professional <span className="text-primary">Journey</span></h2>
                 <p className="text-muted-foreground mr-auto ml-auto max-w-2xl">
                    Leading teams and building scalable solutions across different domains.
                </p>
            </motion.div>
            
            <div className="space-y-12 max-w-5xl mx-auto relative">
                {/* Background Decorative Line */}
                <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block" />
                
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
                        <div className="absolute left-[28px] md:left-1/2 w-4 h-4 bg-background rounded-full border-4 border-primary shadow-[0_0_0_4px_rgba(59,130,246,0.1)] -translate-x-1/2 top-8 z-10 hidden md:block"></div>

                        {/* Content */}
                        <div className="flex-1">
                             <Card className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-lg bg-card group">
                                <CardHeader className="pb-4 border-b border-border/50 bg-muted/20">
                                    <div className="flex flex-col gap-1 relative z-10">
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                                            {exp.current && <span className="text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">Current</span>}
                                        </div>
                                        <div className="text-primary font-semibold text-lg flex items-center gap-2">
                                            {exp.company}
                                        </div>
                                        {/* Industry/Scale Metadata - Hardcoded lookup for portfolio polish */}
                                        <div className="text-xs font-medium text-muted-foreground/80">
                                            {exp.company.includes('Pardy') ? 'Mobile Gaming Studio • 30+ Team' : 
                                             exp.company.includes('Saas') ? 'SaaS Product Company • 15+ Team' :
                                             exp.company.includes('Red') ? 'Enterprise Software Agency • 100+ Team' : 
                                             'Tech Company'}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6 relative z-10">
                                     <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground mb-6 uppercase tracking-wide">
                                        <div className="flex items-center gap-1.5 bg-secondary px-2.5 py-1 rounded-md">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>
                                                {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
                                                {exp.current ? ' Present' : ` ${new Date(exp.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-secondary px-2.5 py-1 rounded-md">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, idx) => {
                                            // Highlight metrics like 25%, 30%, 4+ hours, etc.
                                            const highlightedItem = item.replace(
                                                /(\d+%|\d+\+?\s*(?:hours|developers|years|months|reduction|increase|improvement|growth))/gi, 
                                                '<strong>$1</strong>'
                                            );
                                            
                                            return (
                                                <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                                                    <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0 mt-0.5" />
                                                    <span dangerouslySetInnerHTML={{ __html: highlightedItem }}></span>
                                                </li>
                                            );
                                        })}
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
