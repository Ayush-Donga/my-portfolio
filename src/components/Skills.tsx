'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Code, Database, Layout, Server, Settings, Terminal, Layers, Cloud, Smartphone } from 'lucide-react'

interface Skill {
  id: string
  category: string
  name: string
  level?: number | null
}

interface SkillsProps {
  skills: Skill[]
}

const getIconForCategory = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('front')) return <Layout className="w-5 h-5" />;
    if (lower.includes('back')) return <Server className="w-5 h-5" />;
    if (lower.includes('data')) return <Database className="w-5 h-5" />;
    if (lower.includes('cloud') || lower.includes('devops')) return <Cloud className="w-5 h-5" />;
    if (lower.includes('mobile')) return <Smartphone className="w-5 h-5" />;
    if (lower.includes('arch')) return <Layers className="w-5 h-5" />;
    if (lower.includes('tool')) return <Settings className="w-5 h-5" />;
    return <Terminal className="w-5 h-5" />;
}

export const Skills = ({ skills }: SkillsProps) => {
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

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    const cat = skill.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

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
                <h2 className="text-3xl font-bold mb-4">Technical <span className="text-primary">Stack</span></h2>
                <p className="text-muted-foreground mr-auto ml-auto max-w-2xl">
                    Broad technical expertise grouped by architectural domain.
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
                        className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-sm hover:border-primary/20 transition-colors group"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                {getIconForCategory(category)}
                            </div>
                            <h3 className="text-lg font-bold tracking-tight">{category}</h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <Badge key={skill.id} variant="secondary" className="px-3 py-1 bg-secondary/30 hover:bg-secondary transition-colors">
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
