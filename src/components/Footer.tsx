import React from 'react'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="py-8 border-t border-border bg-card/30 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Ayush Donga. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm">
                    <Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}
