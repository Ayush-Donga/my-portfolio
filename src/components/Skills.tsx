'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

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
            staggerChildren: 0.1 
        } 
    }
};

const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export const Skills = ({ skills }: SkillsProps) => {
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section id="skills" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold mb-4">Technical <span className="text-primary">Expertise</span></h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A comprehensive toolset developed over 6+ years of full-stack development.
                </p>
            </motion.div>
            
            <motion.div 
                variants={containerVars}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {Object.entries(categories).map(([category, items]) => (
                    <motion.div 
                        key={category} 
                        variants={itemVars}
                        className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all hover:-translate-y-1"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-card-foreground flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <Badge 
                                    key={skill.id} 
                                    variant="secondary" 
                                    className="px-3 py-1.5 text-sm bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                >
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  )
}
