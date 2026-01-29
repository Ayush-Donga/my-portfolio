import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Code2, Database, Globe, Layers, Layout, Lock, Server, Smartphone, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RideFlowPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-4">
            <Link href="/#projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Link>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20">
                        <Globe className="w-3 h-3" />
                        Global Marketplace
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Ride<span className="text-blue-500">Flow</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        A decentralized, peer-to-peer car sharing marketplace connecting owners with renters instantly.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 pt-4">
                        <Badge variant="outline" className="px-3 py-1.5 text-sm">Next.js 14</Badge>
                        <Badge variant="outline" className="px-3 py-1.5 text-sm">Stripe Connect</Badge>
                        <Badge variant="outline" className="px-3 py-1.5 text-sm">PostgreSQL</Badge>
                        <Badge variant="outline" className="px-3 py-1.5 text-sm">Redis</Badge>
                        <Badge variant="outline" className="px-3 py-1.5 text-sm">AWS Lambda</Badge>
                    </div>

                    <div className="flex gap-4 pt-6">
                         <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700">
                             Launch Demo App
                         </Button>
                         <Button size="lg" variant="outline" className="rounded-full px-8">
                             View Architecture
                         </Button>
                    </div>
                </div>
                
                {/* Hero Visual */}
                <div className="flex-1 relative">
                    <div className="relative z-10 bg-slate-900/50 border border-slate-800 rounded-2xl p-2 shadow-2xl backdrop-blur-sm">
                        <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden flex items-center justify-center relative">
                             {/* Abstract UI Representation */}
                             <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <div className="text-9xl font-black text-white/5">UI</div>
                             </div>
                             <div className="text-center p-8">
                                 <Smartphone className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                                 <h3 className="text-xl font-bold text-white mb-2">Mobile-First Experience</h3>
                                 <p className="text-slate-400">Seamless booking flow with biometric verification</p>
                             </div>
                        </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-xl z-20 animate-bounce-slow">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400">Avg. Response Time</div>
                                <div className="font-bold text-white">45ms</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/50 bg-muted/20">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                      <div className="text-4xl font-bold text-blue-500 mb-2">10k+</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">Active Users</div>
                  </div>
                  <div className="text-center">
                      <div className="text-4xl font-bold text-blue-500 mb-2">$2M+</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">Transaction Vol</div>
                  </div>
                  <div className="text-center">
                      <div className="text-4xl font-bold text-blue-500 mb-2">99.9%</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">Uptime</div>
                  </div>
                  <div className="text-center">
                      <div className="text-4xl font-bold text-blue-500 mb-2">4.8/5</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">User Rating</div>
                  </div>
              </div>
          </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
              
              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                  <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                          <span className="p-2 bg-red-500/10 text-red-500 rounded-lg"><Lock className="w-5 h-5" /></span>
                          The Problem
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                          Traditional car rental services are plagued by exorbitant fees, opaque pricing models, and tedious paperwork. independent car owners had no secure, regulated way to monetize their idle vehicles without risking theft or damage.
                      </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                          <span className="p-2 bg-green-500/10 text-green-500 rounded-lg"><CheckCircle2 className="w-5 h-5" /></span>
                          The Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                          RideFlow introduces a trustless, automated marketplace. We utilized Stripe Identity for instant verification and implemented a custom insurance algorithm that calculates risk-adjusted pricing in real-time, protecting both parties.
                      </p>
                  </div>
              </div>

              {/* Architecture Deep Dive */}
              <div className="mb-20">
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                      <Layers className="w-8 h-8 text-blue-500" /> System Architecture
                  </h2>
                  <div className="bg-slate-950 text-slate-200 p-8 rounded-2xl border border-slate-800 overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-4 opacity-20">
                          <Code2 className="w-32 h-32" />
                      </div>
                      
                      <div className="space-y-8 relative z-10">
                          <div>
                              <h4 className="text-xl font-bold text-blue-400 mb-2">1. Microservices Layer</h4>
                              <p className="text-slate-400">
                                  We decoupled the application into three core services: 
                                  <span className="text-white font-mono mx-1">Auth Service</span> (NextAuth + Cognito), 
                                  <span className="text-white font-mono mx-1">Booking Engine</span> (Node.js/Redis), and 
                                  <span className="text-white font-mono mx-1">Payment Ledger</span> (Stripe Connect). 
                                  This prevented the "monolith bottleneck" during holiday traffic spikes.
                              </p>
                          </div>
                          
                          <div>
                              <h4 className="text-xl font-bold text-blue-400 mb-2">2. Event-Driven Communication</h4>
                              <div className="text-slate-400">
                                  Using <span className="text-white font-mono mx-1">Apache Kafka</span> (and later simplified to RabbitMQ for cost), distinct services communicate asynchronously. When a booking is confirmed, an event triggers:
                                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                                      <li>Push notifications to the owner</li>
                                      <li>Insurance policy generation</li>
                                      <li>Smart lock code generation for the vehicle</li>
                                  </ul>
                              </div>
                          </div>

                          <div>
                              <h4 className="text-xl font-bold text-blue-400 mb-2">3. GIS & Geospatial Search</h4>
                              <p className="text-slate-400">
                                  PostGIS was utilized for high-performance geospatial queries, allowing users to find "cars within 5km" in milliseconds, even with millions of records.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Key Features Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                  {['Dynamic Pricing Engine', 'Instant ID Verification', 'Smart Keyless Entry', 'Recurring Billing', 'Real-time Chat', 'Dispute Resolution Center'].map((feature, i) => (
                      <div key={i} className="p-6 bg-background border border-border rounded-xl hover:border-blue-500/50 transition-colors group">
                          <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                              <Layout className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold mb-2">{feature}</h4>
                          <p className="text-sm text-muted-foreground">Production-ready implementation handling edge cases and specialized workflows.</p>
                      </div>
                  ))}
              </div>

          </div>
      </section>

      <Footer />
    </main>
  );
}
