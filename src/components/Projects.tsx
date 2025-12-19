'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NextImage from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  liveUrl: string | null
  githubUrl: string | null
  imageUrl: string | null
  category: string | null
}

interface ProjectsProps {
  projects: Project[]
}

const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.15 
        } 
    }
};

const cardVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A selection of projects demonstrating full-stack capabilities and architectural expertise.
                </p>
            </motion.div>
            
            <motion.div 
                variants={containerVars}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project) => (
                    <motion.div key={project.id} variants={cardVars} className="h-full">
                        <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-card border-border/50 overflow-hidden">
                            <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                                {project.imageUrl ? (
                                    <NextImage 
                                      src={project.imageUrl} 
                                      alt={project.title} 
                                      fill
                                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                                        <Code2 className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors duration-500 scale-110 group-hover:scale-125 transform" />
                                        <span className="absolute bottom-4 left-4 text-3xl font-black text-white/5 select-none font-mono">{project.title.substring(0,3).toUpperCase()}</span>
                                    </>
                                )}
                                
                                {project.category && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <Badge className="bg-background/80 backdrop-blur-md text-foreground border-white/10 shadow-sm">{project.category}</Badge>
                                    </div>
                                )}
                            </div>

                            <CardHeader>
                                <CardTitle className="line-clamp-1 text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.techStack.map(tech => (
                                        <Badge key={tech} variant="secondary" className="text-xs bg-secondary/50 font-normal border border-transparent hover:border-primary/20 transition-colors">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-3 pt-4 border-t border-border/50 bg-muted/5">
                                {project.githubUrl ? (
                                    <Button size="sm" variant="outline" asChild className="flex-1 hover:bg-background hover:text-primary border-border/50">
                                        <Link href={project.githubUrl} target="_blank">
                                            <Github className="w-4 h-4 mr-2" /> Code
                                        </Link>
                                    </Button>
                                ) : null}
                                {project.liveUrl ? (
                                <Button size="sm" asChild className="flex-1 shadow-md shadow-primary/10">
                                        <Link href={project.liveUrl} target="_blank">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Demo
                                        </Link>
                                </Button>
                                ) : null}
                                {!project.githubUrl && !project.liveUrl && (
                                    <Button size="sm" variant="secondary" className="w-full opacity-70 cursor-not-allowed bg-muted" disabled>
                                        Enterprise Project
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  )
}
