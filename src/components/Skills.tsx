'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Code, Database, Layout, Server, Settings, Terminal } from 'lucide-react'

interface Skill {
  id: string
  category: string
  name: string
  level?: number | null
}

interface SkillsProps {
  skills: Skill[]
}

const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.05 
        } 
    }
};

const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const getIconForCategory = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('front')) return <Layout className="w-5 h-5" />;
    if (lower.includes('back')) return <Server className="w-5 h-5" />;
    if (lower.includes('data')) return <Database className="w-5 h-5" />;
    if (lower.includes('tool') || lower.includes('devops')) return <Settings className="w-5 h-5" />;
    if (lower.includes('lang')) return <Code className="w-5 h-5" />;
    return <Terminal className="w-5 h-5" />;
}

export const Skills = ({ skills }: SkillsProps) => {
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section id="skills" className="py-24 bg-card/30 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold mb-4">Technical <span className="text-primary">Expertise</span></h2>
                <p className="text-muted-foreground mr-auto ml-auto max-w-2xl">
                    A comprehensive toolset developed over 6+ years of engineering high-scale systems.
                </p>
            </motion.div>
            
            <motion.div 
                variants={containerVars}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {Object.entries(categories).map(([category, items]) => (
                    <motion.div 
                        key={category} 
                        variants={itemVars}
                        className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all hover:-translate-y-1 group"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                {getIconForCategory(category)}
                            </div>
                            <h3 className="text-lg font-bold tracking-tight">{category}</h3>
                        </div>
                        
                        <div className="space-y-4">
                            {items.map(skill => (
                                <div key={skill.id} className="space-y-1.5">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                                        {skill.level && <span className="text-xs text-muted-foreground">{skill.level}%</span>}
                                    </div>
                                    {skill.level && (
                                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  )
}
