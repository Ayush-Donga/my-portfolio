'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import Link from 'next/link'

export const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[110]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-20 right-0 w-72 bg-card border border-border/50 rounded-2xl shadow-2xl p-6 backdrop-blur-xl"
                    >
                        <h4 className="font-bold text-lg mb-2">Message Me Directly</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Looking for a quick chat about your project? Let's connect on LinkedIn!
                        </p>
                        <Link 
                            href="https://linkedin.com/in/ayush-donga-696755197" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Connect with Ayush Donga on LinkedIn"
                            className="block w-full text-center bg-primary text-primary-foreground py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                            Open LinkedIn
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close direct contact popup" : "Open direct contact popup"}
                    className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl flex items-center justify-center relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    {isOpen ? <X className="relative z-10 w-6 h-6" /> : <MessageCircle className="relative z-10 w-6 h-6" />}
                </motion.button>
            )}
        </div>
    )
}
