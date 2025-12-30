'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Code2, ArrowUpRight, TrendingUp, ArrowRight } from 'lucide-react'
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
                    Selected Works
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Case Studies</span></h2>
                <p className="text-muted-foreground mr-auto ml-auto max-w-2xl text-lg leading-relaxed">
                    A selection of production-grade applications that solve real business problems. 
                    Focusing on scalability, performance, and user experience.
                </p>
            </motion.div>
            
            <div className="space-y-24">
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Image / Visual Side */}
                        <div className="w-full lg:w-3/5 group">
                            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-muted cursor-pointer">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                                {project.imageUrl ? (
                                    <img 
                                      src={project.imageUrl} 
                                      alt={project.title} 
                                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                                    />
                                ) : (
                                    <div className="aspect-video flex items-center justify-center h-full w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-950 border border-border/50 relative overflow-hidden group-hover:border-primary/20 transition-colors">
                                         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                                         <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                                         <Code2 className="w-24 h-24 text-muted-foreground/10 group-hover:text-primary/20 transition-colors duration-500 transform group-hover:scale-110 relative z-10" />
                                    </div>
                                )}
                                
                                {/* Overlay Links */}
                                <div className="absolute bottom-6 right-6 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                     {project.liveUrl && (
                                        <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                                            Visit Live <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                     )}
                                     {project.githubUrl && (
                                        <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2 bg-black/80 text-white backdrop-blur px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform border border-white/20">
                                            Github <Github className="w-4 h-4" />
                                        </Link>
                                     )}
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-2/5 space-y-6">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-primary font-mono text-sm tracking-wider">0{index + 1}</span>
                                    <div className="h-px bg-primary/30 flex-grow"></div>
                                    {project.category && (
                                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 rounded">{project.category}</span>
                                    )}
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <Badge key={tech} variant="secondary" className="px-3 py-1 bg-secondary/50 hover:bg-secondary text-secondary-foreground border-transparent transition-colors">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            {/* Metrics / Case Study Highlights */}
                            {(project.problem || project.outcome) && (
                                <div className="grid grid-cols-1 gap-4 pt-6 mt-6 border-t border-border/50">
                                    {project.outcome && (
                                        <div className="flex gap-4 items-start">
                                            <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-500 mt-1">
                                                <TrendingUp className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-foreground">Key Outcome</h4>
                                                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{project.outcome}</p>
                                            </div>
                                        </div>
                                    )}
                                     {project.role && (
                                        <div className="text-sm">
                                            <span className="font-bold text-foreground">My Role:</span> <span className="text-muted-foreground">{project.role}</span>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="pt-4 lg:hidden">
                                {project.liveUrl ? (
                                    <Button asChild variant="default" className="w-full">
                                        <Link href={project.liveUrl} target="_blank">View Live Project</Link>
                                    </Button>
                                ) : (
                                     <Button asChild variant="outline" className="w-full">
                                        <Link href={project.githubUrl || '#'} target="_blank">View Code</Link>
                                    </Button>
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
