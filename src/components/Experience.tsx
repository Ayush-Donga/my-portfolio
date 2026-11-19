'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: Date
  endDate: Date | null
  current: boolean
  description: string[]
}

interface ExperienceProps {
  experience: Experience[]
}

export const DEFAULT_EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    title: "Software Engineer III",
    company: "Pardy Panda Studios",
    location: "Vadodara / Remote",
    startDate: new Date("2025-04-01"),
    endDate: null,
    current: true,
    description: [
      "**Lead and mentor** an agile team of **2–5 developers**, guiding technical implementation, unblocking architecture bottlenecks, and supporting feature delivery.",
      "**Architect** end-to-end multi-tenant enterprise ERP systems using **Next.js, NestJS, Prisma ORM, and PostgreSQL**, establishing modular service boundaries.",
      "**Cut p95 API latency by 55%** and **database CPU load by 40%** via composite indexing, Redis-backed caching strategies, and query tuning.",
      "**Architect** robust PostgreSQL database schemas and Prisma data models to handle complex relationships across inventory, sales, purchasing, customer management, and operations.",
      "**Build** reusable frontend components using **React.js and Next.js**, supported by **Zustand** state management and structured **Zod-based** validation.",
      "**Design** RESTful API contracts and implement backend business logic for interconnected enterprise ERP modules.",
      "**Coordinate** technical execution across frontend, backend, and database layers, ensuring complete consistency between business requirements and application behavior."
    ]
  },
  {
    id: "exp-2",
    title: "Senior Software Engineer",
    company: "SaaS Innova",
    location: "Surat / Remote",
    startDate: new Date("2022-07-01"),
    endDate: new Date("2025-03-31"),
    current: false,
    description: [
      "**Owned** backend architecture and technical implementation for enterprise SaaS modules across document management, quality management, CRM, and travel technology.",
      "**Led and mentored** engineering teams of **2–5 developers**, defining service boundaries, API contracts, and database interactions for complex business applications.",
      "**Architected** high-throughput **REST and GraphQL APIs** using **NestJS and TypeScript**, powering seamless communication between frontend and distributed services.",
      "**Designed** event-driven, asynchronous background pipelines using **RabbitMQ and Redis**, decoupling microservices and processing millions of background events.",
      "**Integrated** production **LLM-powered document processing** and intelligent workflow automation into enterprise software products.",
      "**Optimized** PostgreSQL database queries, access patterns, and caching strategies, reducing complex reporting generation time from **12s to <800ms**.",
      "**Implemented** enterprise-grade security with JWT authentication and granular Role-Based Access Control (**RBAC**)."
    ]
  },
  {
    id: "exp-3",
    title: "Software Engineer",
    company: "Red & White Softtech",
    location: "Surat",
    startDate: new Date("2018-11-01"),
    endDate: new Date("2022-06-30"),
    current: false,
    description: [
      "**Developed** and maintained full-stack enterprise web applications across backend microservices, responsive web interfaces, and relational databases.",
      "**Designed and implemented** robust RESTful APIs supporting business logic, third-party integrations, and automated payment gateways handling **$500k+ annual volume**.",
      "**Architected** relational database schemas (**MySQL and PostgreSQL**) and optimized complex SQL queries for maximum throughput and ACID compliance.",
      "**Built** secure authentication, session management, and Role-Based Access Control (**RBAC**) mechanisms to protect sensitive enterprise operations.",
      "**Modernized** legacy application codebases by transitioning to **React and Node.js**, improving developer onboarding speed by **60%** and reducing defect rates.",
      "**Collaborated** with international cross-functional teams and product stakeholders to translate complex operational workflows into scalable software."
    ]
  }
];

export const Experience = ({ experience }: ExperienceProps) => {
    // Fallback to verified default experiences if database is empty or pending seed
    const dataToUse = experience && experience.length > 0 ? experience : DEFAULT_EXPERIENCES;
    // Sort by start date desc
    const sorted = [...dataToUse].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full opacity-30 pointer-events-none">
                <div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent left-1/2"></div>
             </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-3xl font-bold mb-4">Professional <span className="text-primary">Journey</span></h2>
                 <p className="text-muted-foreground mr-auto ml-auto max-w-2xl">
                    Leading teams and building scalable solutions across different domains.
                </p>
            </motion.div>
            
            <div className="space-y-12 max-w-5xl mx-auto relative pl-8 md:pl-0">
                {/* Background Decorative Line */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2 block" />
                
                {sorted.map((exp, index) => (
                    <motion.div 
                        key={exp.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[11px] md:left-1/2 w-4 h-4 bg-background rounded-full border-4 border-primary shadow-[0_0_0_4px_rgba(59,130,246,0.1)] md:-translate-x-1/2 top-8 z-10 block"></div>

                        {/* Content */}
                        <div className="flex-1">
                             <Card className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-lg bg-card group">
                                <CardHeader className="pb-4 border-b border-border/50 bg-muted/20">
                                    <div className="flex flex-col gap-1 relative z-10">
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                                            {exp.current && <span className="text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">Current</span>}
                                        </div>
                                        <div className="text-primary font-semibold text-lg flex items-center gap-2">
                                            {exp.company}
                                        </div>
                                        {/* Industry/Scale Metadata */}
                                        <div className="text-xs font-medium text-muted-foreground/80">
                                            {exp.company.includes('Pardy') ? 'Enterprise ERP & Multi-Tenant SaaS • Leading 2–5 Devs' : 
                                             exp.company.includes('Saas') ? 'Modular Microservices & Event-Driven SaaS • Led 2–5 Devs' :
                                             exp.company.includes('Red') ? 'Full-Stack Enterprise Applications & SQL Optimization' : 
                                             'Enterprise SaaS / Distributed Systems'}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6 relative z-10">
                                     <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground mb-6 uppercase tracking-wide">
                                        <div className="flex items-center gap-1.5 bg-secondary px-2.5 py-1 rounded-md">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>
                                                {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
                                                {exp.current ? ' Present' : ` ${new Date(exp.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-secondary px-2.5 py-1 rounded-md">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, idx) => {
                                            // Handle markdown-style bolding first, then auto-highlight common metrics
                                            const highlightedItem = item
                                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>')
                                                .replace(
                                                    /(\b\d+(?:\.\d+)?%|\bp95\b|\bCPU\b|\b\d+\+?\s*(?:hours|developers|engineers|devs|years|months|reduction|increase|improvement|growth|TB|requests\/sec|RPS|sessions|users|volume)|\b12s to <800ms\b|\$500k\+?)/gi, 
                                                    (match) => match.includes('<strong') ? match : `<strong class="text-foreground font-bold">${match}</strong>`
                                                );
                                            
                                            return (
                                                <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                                                    <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0 mt-0.5" />
                                                    <span dangerouslySetInnerHTML={{ __html: highlightedItem }}></span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                        
                        {/* Spacer for alternate layout */}
                        <div className="flex-1 hidden md:block"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
