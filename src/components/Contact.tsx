'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Send, CheckCircle } from 'lucide-react'

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus('loading');
        setErrorMessage('');

        const formData = new FormData(form);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                form.reset();
                setStatus('success');
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'Failed to send message');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again.');
            console.error('Error submitting form:', error);
        }
    };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/20">
        {/* Minimalist overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
             <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Ready to <span className="text-primary">Collaborate?</span></h2>
             
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    I am currently available for <strong className="text-foreground">Senior Remote Roles</strong> (EU/UK/US) and <strong className="text-foreground">Contract Architecture Consulting</strong>.
                    <br className="mb-2" />
                    Skip the recruiter spam—let's discuss your engineering challenges directly.
                </p>
             </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Details Column */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Contact Details</h3>
                         <p className="text-muted-foreground">
                            Ready to fast-track your hiring? Book a 15-min intro call or send me an email.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Calendar Link */}
                         <a href="https://calendly.com/ayush-donga20/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all group">
                             <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <div className="font-semibold text-foreground">Book a Call</div>
                                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Schedule a meeting via Calendly (30 min)</div>
                            </div>
                        </a>

                        {/* WhatsApp Link */}
                        <a href="https://wa.me/918140000626" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <div>
                                <div className="font-semibold text-foreground">WhatsApp / Direct Chat</div>
                                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">+91 8140000626</div>
                            </div>
                        </a>

                        {/* Email Link */}
                        <a href="mailto:ayush.donga@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Send className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-semibold text-foreground">Email Me</div>
                                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">ayush.donga@gmail.com</div>
                            </div>
                        </a>
                        
                        <a 
                          href="https://linkedin.com/in/ayush-donga-696755197" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="View Ayush Donga's LinkedIn profile"
                          className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all group"
                        >
                             <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </div>
                            <div>
                                <div className="font-semibold text-foreground">LinkedIn</div>
                                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">View Professional Profile</div>
                            </div>
                        </a>

                         <a 
                          href="https://github.com/ayush-donga" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="View Ayush Donga's GitHub repositories"
                          className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all group"
                        >
                             <div className="w-12 h-12 rounded-full bg-slate-500/10 flex items-center justify-center text-slate-500 group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </div>
                            <div>
                                <div className="font-semibold text-foreground">GitHub</div>
                                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Check My Code</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Form Column */}
                <Card className="backdrop-blur-sm bg-card/60 border-border/50 shadow-lg">
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                        <CardDescription>Tell me about your project or role. I'll respond within 24 hours.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {status === 'success' ? (
                            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in">
                                <div className="flex justify-center">
                                    <CheckCircle className="w-16 h-16 text-green-500" />
                                </div>
                                <h3 className="text-xl font-semibold">Message Sent!</h3>
                                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                                <Button variant="outline" onClick={() => setStatus('idle')} className="w-full mt-4">Send Another</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {status === 'error' && errorMessage && (
                                    <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                                        {errorMessage}
                                    </div>
                                )}
                                <div className="grid md:grid-cols-2 gap-4">
                                     <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <input 
                                            id="name"
                                            name="name" 
                                            required 
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:ring-1 focus-visible:ring-primary outline-none transition-all"
                                            placeholder="John Doe" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input 
                                            id="email"
                                            name="email" 
                                            type="email" 
                                            required
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:ring-1 focus-visible:ring-primary outline-none transition-all"
                                            placeholder="john@example.com" 
                                        />
                                    </div>
                                </div>
                               
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <textarea 
                                        id="message"
                                        name="message" 
                                        required
                                        className="flex min-h-[150px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:ring-1 focus-visible:ring-primary outline-none transition-all resize-y"
                                        placeholder="Hi, we're looking for a Senior Engineer for..." 
                                    />
                                </div>
                                <div className="hidden">
                                    <label htmlFor="honey">Do not fill this out</label>
                                    <input name="honey" type="text" onChange={() => setStatus('error')} />
                                </div>

                                <Button type="submit" className="w-full" size="lg" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Sending...' : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
                                </Button>
                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    No spam. Your email is safe. I usually reply within 24 hours.
                                </p>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
  )
}
