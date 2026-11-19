'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-[100] bg-background/70 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-80 transition-opacity">
              Ayush Donga
            </Link>
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              AVAILABLE NOW
            </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <div className="h-4 w-px bg-border/50 mx-2"></div>
          <ThemeToggle />
          <Button variant="ghost" className="text-sm font-medium" asChild>
            <Link href="/resume">Resume</Link>
          </Button>
          <Button size="sm" className="rounded-full shadow-md hover:shadow-lg transition-all" asChild>
            <Link href="#contact">Book Intro Call</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground p-2 rounded-md hover:bg-muted/50 transition-colors" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-base font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50 last:border-0"
              onClick={toggleMobileMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium">Theme</span>
            <ThemeToggle />
          </div>
          <Button className="w-full" asChild>
            <Link href="/resume" onClick={toggleMobileMenu}>View Resume</Link>
          </Button>
        </div>
      )}
    </nav>
  )
}
