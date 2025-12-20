import React from 'react'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="pt-20 pb-10 border-t border-border bg-card/50 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2 space-y-6">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Ayush Donga
                        </Link>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                            Engineering Lead specializing in building high-performance web applications and leading remote engineering teams to success.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons would go here */}
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-[0.2em] text-primary">Sitemap</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#skills" className="hover:text-primary transition-colors">Expertise</Link></li>
                            <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="#experience" className="hover:text-primary transition-colors">Journey</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-[0.2em] text-primary">Connect</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="https://linkedin.com/in/ayush-donga-696755197" target="_blank" className="hover:text-primary transition-colors">LinkedIn</Link></li>
                            <li><Link href="https://github.com/ayush-donga" target="_blank" className="hover:text-primary transition-colors">GitHub</Link></li>
                            <li><Link href="mailto:ayush.donga20@gmail.com" className="hover:text-primary transition-colors">Email Me</Link></li>
                            <li className="text-primary font-medium flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                                Currently Hiring
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-border/50">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Ayush Donga. Designed for the global web.
                    </div>
                    <div className="flex gap-8 text-xs font-semibold text-muted-foreground/50 uppercase tracking-widest">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="#about" className="hover:text-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
