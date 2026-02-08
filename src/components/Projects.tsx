'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Code2, ArrowUpRight, TrendingUp, CheckCircle2, Layers, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  liveUrl: string | null
  githubUrl: string | null
  imageUrl: string | null
  category: string | null
  problem?: string | null
  role?: string | null
  outcome?: string | null
  architecture?: string | null
  keyDecisions?: string | null
}

interface ProjectsProps {
  projects: Project[]
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                    <Code2 className="w-3 h-3" />
                    Production-Grade Work
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Case Studies</span></h2>
                <p className="text-muted-foreground mr-auto ml-auto max-w-2xl text-lg leading-relaxed">
                    A deep dive into how I solve complex engineering problems, architect scalable solutions, and drive business impact.
                </p>
            </motion.div>
            
            <div className="space-y-32">
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className={`flex flex-col lg:flex-row gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Image / Visual Side */}
                        <div className="w-full lg:w-1/2 group relative lg:sticky lg:top-24">
                            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-muted group-hover:border-primary/20 transition-colors">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                {project.imageUrl ? (
                                    project.liveUrl ? (
                                        <Link href={project.liveUrl} target={project.liveUrl.startsWith('/') ? "_self" : "_blank"} className="block cursor-pointer">
                                            <img 
                                                src={project.imageUrl} 
                                                alt={project.title} 
                                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                                            />
                                        </Link>
                                    ) : (
                                        <img 
                                            src={project.imageUrl} 
                                            alt={project.title} 
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                                        />
                                    )
                                ) : (
                                    project.liveUrl ? (
                                        <Link href={project.liveUrl} target={project.liveUrl.startsWith('/') ? "_self" : "_blank"} className="block cursor-pointer h-full w-full">
                                            <div className="aspect-video flex flex-col gap-3 items-center justify-center h-full w-full bg-gradient-to-br from-gray-50 to-gray-200 dark:from-slate-900 dark:to-slate-800 border border-border/50 relative overflow-hidden group-hover:border-primary/20 transition-all group-hover:scale-105">
                                                 <div className="p-4 rounded-full bg-background shadow-sm">
                                                    <Code2 className="w-8 h-8 text-primary/40" />
                                                 </div>
                                                 <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">View Project</span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="aspect-video flex items-center justify-center h-full w-full bg-gradient-to-br from-gray-50 to-gray-200 dark:from-slate-900 dark:to-slate-800 border border-border/50 relative overflow-hidden">
                                             <Code2 className="w-16 h-16 text-muted-foreground/10" />
                                        </div>
                                    )
                                )}
                            </div>
                            
                            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                                {project.liveUrl && (
                                    <Button asChild variant="default" className="rounded-full">
                                        <Link 
                                            href={project.liveUrl} 
                                            target={project.liveUrl.startsWith('/') ? "_self" : "_blank"}
                                        >
                                            {project.liveUrl.startsWith('/') ? 'View Case Study' : 'View Live Project'} 
                                            {project.liveUrl.startsWith('/') ? <ArrowUpRight className="ml-2 w-4 h-4 rotate-45" /> : <ArrowUpRight className="ml-2 w-4 h-4" />}
                                        </Link>
                                    </Button>
                                )}
                                {project.githubUrl && (
                                    <Button asChild variant="outline" className="rounded-full">
                                        <Link href={project.githubUrl} target="_blank">View Code <Github className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-primary font-mono text-xl font-bold opacity-50">0{index + 1}</span>
                                    <div className="h-px bg-primary/30 w-12"></div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{project.role || 'Lead Engineer'}</span>
                                </div>
                                <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
                                <p className="text-xl text-primary font-medium leading-relaxed italic">
                                    "{project.description}"
                                </p>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <Badge key={tech} variant="outline" className="px-3 py-1 border-primary/20 text-foreground text-xs uppercase tracking-wide">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            {/* Case Study Sections */}
                            <div className="space-y-6 pt-6 border-t border-border/50">
                                {project.problem && (
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-red-500/90">
                                            <AlertCircle className="w-5 h-5" />
                                            <h4 className="font-bold text-sm uppercase tracking-widest">The Problem</h4>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                                    </div>
                                )}
                                
                                {project.architecture && (
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-blue-500/90">
                                            <Layers className="w-5 h-5" />
                                            <h4 className="font-bold text-sm uppercase tracking-widest">Technical Solution</h4>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{project.architecture}</p>
                                    </div>
                                )}
                                
                                {project.outcome && (
                                    <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl space-y-3">
                                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                                            <TrendingUp className="w-5 h-5" />
                                            <h4 className="font-bold text-sm uppercase tracking-widest">Business Impact</h4>
                                        </div>
                                        <p className="text-foreground/90 leading-relaxed font-medium">{project.outcome}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
