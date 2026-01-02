import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="pt-20 pb-10 border-t border-border bg-card/50 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2 space-y-6">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Ayush Donga
                        </Link>
                        <p className="text-muted-foreground max-w-sm leading-relaxed text-lg">
                            Senior Full Stack Engineer architecting scalable, production-ready SaaS platforms. Expert in high-performance systems and driving business growth through technical excellence.
                        </p>
                        <div className="flex gap-4 pt-2">
                           <Link href="https://github.com/ayush-donga" target="_blank" className="p-2 bg-background border border-border rounded-full hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-1">
                                <Github className="w-5 h-5" />
                           </Link>
                           <Link href="https://linkedin.com/in/ayush-donga-696755197" target="_blank" className="p-2 bg-background border border-border rounded-full hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-1">
                                <Linkedin className="w-5 h-5" />
                           </Link>
                           <Link href="mailto:ayush.donga20@gmail.com" className="p-2 bg-background border border-border rounded-full hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-1">
                                <Mail className="w-5 h-5" />
                           </Link>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-[0.2em] text-primary">Portfolio</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#projects" className="hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link href="#skills" className="hover:text-primary transition-colors">Technical Stack</Link></li>
                            <li><Link href="#experience" className="hover:text-primary transition-colors">Experience</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-[0.2em] text-primary">Status</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                <span className="text-foreground font-medium">Available for Remote Roles</span>
                            </li>
                            <li className="text-xs leading-relaxed italic opacity-80 pt-2">
                                "Open to Full-time Remote roles in US/UK/EU timezones. Specialized in Async-communication and Scalable Architecture."
                            </li>
                            <li className="pt-2">Overlap: Germany / UK / EU / US</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-border/50">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Ayush Donga. Designed & Built for Performance.
                    </div>
                </div>
            </div>
        </footer>
    )
}
