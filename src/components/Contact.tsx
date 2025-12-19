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
    <section id="contact" className="py-20 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
             <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Let's Work <span className="text-primary">Together</span></h2>
                <p className="text-muted-foreground">
                    Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
                </p>
             </div>

            <Card className="max-w-md mx-auto backdrop-blur-sm bg-card/60 border-border/50">
                <CardHeader>
                    <CardTitle>Send me a message</CardTitle>
                    <CardDescription>I usually respond within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                    {status === 'success' ? (
                        <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in">
                            <div className="flex justify-center">
                                <CheckCircle className="w-16 h-16 text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold">Message Sent!</h3>
                            <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                            <Button variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {status === 'error' && errorMessage && (
                                <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                                    {errorMessage}
                                </div>
                            )}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input 
                                    id="name"
                                    name="name" 
                                    required 
                                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="john@example.com" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea 
                                    id="message"
                                    name="message" 
                                    required
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                                    placeholder="Tell me about your project..." 
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={status === 'loading'}>
                                {status === 'loading' ? 'Sending...' : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    </section>
  )
}
