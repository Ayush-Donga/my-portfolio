import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Shield, Zap, ExternalLink, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Footer = () => {
    return (
        <footer className="relative pt-24 pb-12 bg-background border-t border-border/40 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-80 transition-opacity inline-block">
                            Ayush Donga
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Senior Full-Stack & Distributed Systems Engineer specializing in TypeScript, Node.js, NestJS, Next.js, PostgreSQL, Redis, RabbitMQ, AWS, and Production AI/LLM Workflows.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com/ayush-donga", label: "Visit GitHub profile" },
                                { icon: Linkedin, href: "https://linkedin.com/in/ayush-donga-696755197", label: "Visit LinkedIn profile" },
                                { icon: Mail, href: "mailto:ayush.donga@gmail.com", label: "Send direct email" }
                            ].map((social, i) => (
                                <Link 
                                    key={i} 
                                    href={social.href} 
                                    target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    className="p-2 rounded-full border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Navigation</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "About Me", href: "#about" },
                                { name: "Case Studies", href: "#projects" },
                                { name: "Technology", href: "#skills" },
                                { name: "Resume / CV", href: "/resume", badge: true }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link 
                                        href={link.href} 
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        {link.name}
                                        {link.badge && (
                                            <span className="text-[9px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded font-bold uppercase">
                                                New
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Remote Operations - Optimized Card */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Remote Operations</h4>
                         <div className="p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm relative group hover:border-primary/20 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-emerald-500 text-[10px] font-bold tracking-widest uppercase">Active for Global Hire</span>
                                    </div>
                                    <p className="text-muted-foreground text-sm max-w-xs">
                                        Distributed systems delivery across <span className="text-foreground font-medium">US</span>, <span className="text-foreground font-medium">UK</span>, and <span className="text-foreground font-medium">EU</span> timezones (CET/EST/GMT overlap).
                                    </p>
                                </div>
                                <Button 
                                    size="sm" 
                                    className="rounded-full h-10 px-6 font-bold uppercase tracking-widest text-[10px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:from-blue-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 border-none" 
                                    asChild
                                >
                                    <Link 
                                      href="https://calendly.com/ayush-donga20/30min" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      aria-label="Establish meeting sync with Ayush Donga via Calendly"
                                    >
                                        Establish Sync <ExternalLink className="ml-1.5 w-3 h-3" aria-hidden="true" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="mt-4 pt-4 border-t border-border/20">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/80 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                    Verified 8+ Years Experience | Async-First Ownership & Distributed Architecture
                                </p>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Performance & Metadata Footer Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40 gap-6">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
                        {[
                            { icon: Cpu, text: "TypeScript & Node.js Core" },
                            { icon: Shield, text: "Distributed Systems" },
                            { icon: Zap, text: "Production AI Workflows" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5 group cursor-default">
                                <item.icon className="w-4 h-4 text-primary mb-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">{item.text}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex flex-col items-center md:items-end gap-1.5 text-center md:text-right">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
                            © {new Date().getFullYear()} AYUSH DONGA <span className="mx-2 text-border">|</span> SENIOR FULL-STACK & DISTRIBUTED SYSTEMS ENGINEER
                        </p>
                        <p className="text-[9px] font-medium text-muted-foreground/50 uppercase tracking-[0.2em]">
                            Built for scale • Secured by high-entropy encryption
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
