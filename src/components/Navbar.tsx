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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Ayush Donga
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild>
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-foreground" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
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
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </div>
      )}
    </nav>
  )
}
