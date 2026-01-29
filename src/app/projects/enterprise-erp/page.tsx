import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart3, Box, Cpu, Database, FileBarChart, Globe, Lock, Server, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function EnterpriseERPPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        {/* Abstract Data Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <Link href="/#projects" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Link>
            
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-wider border border-orange-500/20 mb-6">
                    <Lock className="w-3 h-3" />
                    Internal / Confidential
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Logistics & Operations <br />
                    <span className="text-orange-500">Super Admin Platform</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                    A mission-critical ERP system managing the entire lifecycle of global freight operations, HR, and financial reporting for a logistics giant.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-8">
                    <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-slate-800 text-slate-200">React (Micro-Frontends)</Badge>
                    <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-slate-800 text-slate-200">NestJS</Badge>
                    <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-slate-800 text-slate-200">GraphQL</Badge>
                    <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-slate-800 text-slate-200">Docker</Badge>
                    <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-slate-800 text-slate-200">Snowflake DB</Badge>
                </div>
            </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="relative -mt-10 mb-20">
          <div className="container mx-auto px-4">
              <div className="bg-background border border-border shadow-xl rounded-2xl p-8 grid md:grid-cols-3 gap-8">
                   <div className="flex flex-col gap-2 border-r border-border/50 last:border-0 pl-4 first:pl-0">
                        <span className="text-4xl font-bold text-orange-500">40%</span>
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Wait Time Reduction</span>
                        <p className="text-sm text-muted-foreground/80 mt-1">Reduced data retrieval latency from 4s to 200ms.</p>
                   </div>
                   <div className="flex flex-col gap-2 border-r border-border/50 last:border-0 pl-4">
                        <span className="text-4xl font-bold text-orange-500">Real-Time</span>
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Analytics Sync</span>
                        <p className="text-sm text-muted-foreground/80 mt-1">Replaced 48-hour legacy reporting cycle.</p>
                   </div>
                   <div className="flex flex-col gap-2 pl-4">
                        <span className="text-4xl font-bold text-orange-500">100+</span>
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Internal Users</span>
                        <p className="text-sm text-muted-foreground/80 mt-1">Daily active operations managers & C-suite.</p>
                   </div>
              </div>
          </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
              
              {/* Context */}
              <div className="mb-20">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Project Context</h3>
                  <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                      <p className="leading-relaxed mb-4">
                          The client, a mid-sized logistics firm, was facing a critical scaling bottleneck. Their operations relied on a mesh of Excel sheets, legacy Access databases, and email threads. As order volume tripled post-pandemic, shipment tracking became a nightmare, leading to lost revenue and customer dissatisfaction.
                      </p>
                      <p className="leading-relaxed">
                          I was brought in as the <strong>Lead Architect</strong> to design a ground-up solution. The goal was to create a "Single Source of Truth" - a unified dashboard where every department (Fleet, Warehousing, Finance) could collaborate in real-time.
                      </p>
                  </div>
              </div>

              {/* Architecture Diagram (Code Block Style) */}
              <div className="mb-20">
                   <h3 className="text-2xl font-bold mb-8 text-foreground">Architectural Strategy</h3>
                   <div className="grid md:grid-cols-2 gap-12 items-start">
                       <div className="space-y-6">
                           <div className="group p-6 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors">
                               <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center mb-4">
                                   <Box className="w-6 h-6" />
                               </div>
                               <h4 className="text-lg font-bold mb-2">Micro-Frontend Federation</h4>
                               <p className="text-muted-foreground text-sm leading-relaxed">
                                   We used Webpack Module Federation to split the React app into distinct domains (Logistics, HR, Finance). This allowed three separate engineering teams to deploy changes independently without breaking the main shell.
                               </p>
                           </div>
                           
                           <div className="group p-6 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors">
                               <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-lg flex items-center justify-center mb-4">
                                   <Server className="w-6 h-6" />
                               </div>
                               <h4 className="text-lg font-bold mb-2">NestJS + Clean Architecture</h4>
                               <p className="text-muted-foreground text-sm leading-relaxed">
                                   The backend followed a strict Domain-Driven Design (DDD). We utilized NestJS guards for Role-Based Access Control (RBAC), ensuring that a warehouse manager could never accidentally access payroll data.
                               </p>
                           </div>
                       </div>

                       {/* Visual Representation of Architecture */}
                       <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-2xl">
                           <div className="flex flex-col items-center space-y-4">
                               <div className="w-full p-3 bg-slate-800 rounded text-center text-xs text-slate-400 border border-slate-700">Client Browser (Container)</div>
                               <div className="h-6 w-px bg-slate-600"></div>
                               <div className="flex gap-4 w-full">
                                    <div className="flex-1 p-3 bg-blue-900/20 border border-blue-500/30 rounded text-center">
                                        <div className="text-blue-400 font-bold text-xs mb-1">Logistics MFE</div>
                                        <div className="text-[10px] text-blue-300/50">React + R.Query</div>
                                    </div>
                                    <div className="flex-1 p-3 bg-purple-900/20 border border-purple-500/30 rounded text-center">
                                        <div className="text-purple-400 font-bold text-xs mb-1">Finance MFE</div>
                                        <div className="text-[10px] text-purple-300/50">React + Recharts</div>
                                    </div>
                               </div>
                               <div className="h-6 w-px bg-slate-600"></div>
                               <div className="w-full p-4 bg-slate-800 rounded border border-slate-700">
                                   <div className="text-center text-xs text-slate-300 font-bold mb-2">API Gateway (Nginx)</div>
                                   <div className="grid grid-cols-3 gap-2">
                                       <div className="bg-slate-900 p-2 rounded text-[10px] text-slate-500 text-center">Auth Svc</div>
                                       <div className="bg-slate-900 p-2 rounded text-[10px] text-slate-500 text-center">Core API</div>
                                       <div className="bg-slate-900 p-2 rounded text-[10px] text-slate-500 text-center">Reporting</div>
                                   </div>
                               </div>
                               <div className="h-6 w-px bg-slate-600"></div>
                               <div className="flex gap-4">
                                   <div className="flex items-center gap-2 text-xs text-slate-400"><Database className="w-3 h-3"/> PostgreSQL</div>
                                   <div className="flex items-center gap-2 text-xs text-slate-400"><Cpu className="w-3 h-3"/> Redis</div>
                               </div>
                           </div>
                       </div>
                   </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="border border-border p-6 rounded-xl">
                      <h4 className="font-bold mb-3">Complex RBAC</h4>
                      <p className="text-sm text-muted-foreground">Implemented granular permission bits allowing dynamic role creation (e.g., "Junior Fleet Manager" with read-only access to specific regions).</p>
                  </div>
                  <div className="border border-border p-6 rounded-xl">
                      <h4 className="font-bold mb-3">Legacy Migration</h4>
                      <p className="text-sm text-muted-foreground">Wrote scripts to sanitize and migrate 5 years of messy Excel data into normalized PostgreSQL schemas with 99.9% data integrity.</p>
                  </div>
                  <div className="border border-border p-6 rounded-xl">
                      <h4 className="font-bold mb-3">Real-time Tracking</h4>
                      <p className="text-sm text-muted-foreground">Integrated IoT webhooks from fleet vehicles to update dashboard coordinates via WebSockets every 30 seconds.</p>
                  </div>
              </div>


          </div>
      </section>

      <Footer />
    </main>
  );
}
