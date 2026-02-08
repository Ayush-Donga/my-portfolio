import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="pt-24 pb-12 border-t border-border/50 bg-slate-950 text-slate-200">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="md:col-span-2 space-y-8">
                        <Link href="/" className="inline-block group">
                            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all">
                                Ayush Donga
                            </span>
                            <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"></div>
                        </Link>
                        <p className="text-slate-300 max-w-sm leading-relaxed text-lg font-light">
                            Senior Systems Architect lead with a focus on <span className="text-blue-400 font-semibold italic">high-demand</span> performance engineering. Specialist in <span className="text-blue-400 font-medium">Rust</span>, <span className="text-indigo-400 font-medium">NestJS Microservices</span>, and <span className="text-purple-400 font-medium">Enterprise GenAI</span>.
                        </p>
                        <div className="flex gap-5">
                           <Link 
                                href="https://github.com/ayush-donga" 
                                target="_blank" 
                                className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 transition-all hover:-translate-y-1 group"
                           >
                                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                           </Link>
                           <Link 
                                href="https://linkedin.com/in/ayush-donga-696755197" 
                                target="_blank" 
                                className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all hover:-translate-y-1 group"
                           >
                                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                           </Link>
                           <Link 
                                href="mailto:ayush.donga20@gmail.com" 
                                className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400 transition-all hover:-translate-y-1 group"
                           >
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                           </Link>
                        </div>
                    </div>
                    
                    {/* Navigation */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400/80 italic">Navigation</h4>
                        <ul className="space-y-5 text-sm">
                            <li><Link href="#about" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-colors"></span>About Me</Link></li>
                            <li><Link href="#projects" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-colors"></span>Case Studies</Link></li>
                            <li><Link href="#skills" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-colors"></span>Technology</Link></li>
                            <li><Link href="/resume" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-colors"></span>Resume / CV</Link></li>
                        </ul>
                    </div>

                    {/* Meta / Availability */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400/80 italic">Global Ops</h4>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-white text-xs font-medium tracking-wide">REMOTE-FIRST EXPERT</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-light">
                                Executing mission-critical systems with complete async autonomy. Global delivery expert across <span className="text-blue-400 font-medium">US (EST)</span>, <span className="text-indigo-400 font-medium">UK (GMT)</span>, and <span className="text-purple-400 font-medium">EU (CET)</span>.
                            </p>
                            <div className="pt-2">
                                <Link 
                                    href="https://calendly.com/ayush-donga20/30min" 
                                    target="_blank"
                                    className="text-[10px] text-blue-400 font-bold uppercase tracking-widest hover:text-blue-300 transition-colors"
                                >
                                    Schedule Sync &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
                    <div className="text-[11px] text-slate-500 uppercase tracking-widest font-light">
                        © {new Date().getFullYear()} Ayush Donga. Engineered for high-concurrency systems.
                    </div>
                    <div className="flex items-center gap-6 text-[11px] text-slate-500 uppercase tracking-widest font-light">
                        <span className="hover:text-slate-300 transition-colors cursor-default">Built with Next.js & TypeScript</span>
                        <div className="w-1 h-1 rounded-full bg-slate-800"></div>
                        <span className="hover:text-slate-300 transition-colors cursor-default">Zero-Trust Architecture</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
