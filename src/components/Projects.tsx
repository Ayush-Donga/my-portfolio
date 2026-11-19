'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Github, Code2, ArrowUpRight, TrendingUp, CheckCircle2, Layers, 
  AlertCircle, Server, Database, Cpu, ArrowRight, Activity, 
  Workflow, Network, FileText, Sparkles, ShieldCheck, Box, Zap
} from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  liveUrl: string | null
  githubUrl: string | null
  imageUrl: string | null
  category: string | null
  problem?: string | null
  role?: string | null
  outcome?: string | null
  architecture?: string | null
  keyDecisions?: string | null
  order?: number
}

interface ProjectsProps {
  projects: Project[]
}

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "medqdoc",
    title: "MedQDoc — Enterprise Quality & Document Management SaaS",
    description: "Regulated enterprise document lifecycle management platform with real-time auditability, role-based workflows, and asynchronous compliance pipelines.",
    role: "Lead Backend Architect",
    category: "Regulated Enterprise SaaS",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "RabbitMQ", "Redis", "ONLYOFFICE", "Docker"],
    problem: "Regulated healthcare and manufacturing organizations faced severe compliance violations, version desynchronization, and audit risks across tens of thousands of controlled documents. Legacy document processors generated synchronous PDF conversions on the main event loop, causing major latency spikes (**p99 > 8s**) and server out-of-memory crashes during peak operational hours.",
    architecture: "Architected a modular **NestJS** backend utilizing Domain-Driven Design (DDD) to isolate document authoring, approval workflows, and audit logging into decoupled service boundaries. Integrated **ONLYOFFICE Document Server** via secure WebSocket proxies for concurrent, collaborative editing. Offloaded heavy document rendering, watermarking, and PDF conversions to asynchronous **RabbitMQ** worker queues backed by **Redis** caching. Enforced granular **Role-Based Access Control (RBAC)** and immutable append-only audit trail tables in **PostgreSQL** with cryptographically verifiable checksums.",
    outcome: "Eliminated **100%** of document version discrepancies across **50,000+ controlled compliance files**. Reduced p99 API response times from **8.4s to <120ms** by delegating heavy rendering jobs to RabbitMQ background workers. Guaranteed **100% audit-readiness** for ISO/FDA compliance inspections with tamper-evident revision histories.",
    keyDecisions: "Adopted RabbitMQ over Kafka due to native AMQP routing and immediate per-message acknowledgment needed for critical document approval lifecycles. Selected append-only PostgreSQL ledger tables over document stores to guarantee ACID compliance for regulated audit records.",
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    order: 1
  },
  {
    id: "ch-erp",
    title: "CH ERP — Multi-Module Enterprise Jewellery Platform",
    description: "Mission-critical enterprise ERP managing multi-warehouse inventory, live commodity valuation, sales ledgers, and procurement workflows.",
    role: "Lead Full-Stack Architect",
    category: "Enterprise ERP & Supply Chain",
    techStack: ["Next.js", "React.js", "TypeScript", "NestJS", "Prisma ORM", "PostgreSQL", "Zustand", "Zod"],
    problem: "High-value jewellery retail and manufacturing operations involve dynamic commodity spot rate fluctuations (gold/diamond prices), multi-warehouse batch tracking, and strict financial reconciliation. The legacy monolith suffered from transaction deadlocks during concurrent point-of-sale checkouts, with complex multi-warehouse reporting queries taking over **15 seconds** to complete.",
    architecture: "Engineered a high-performance **Next.js** frontend and **NestJS** backend architecture with end-to-end type safety using **TypeScript, Prisma ORM, and Zod** validation contracts. Designed a normalized **PostgreSQL** schema with composite indexing and optimistic concurrency locking to prevent inventory race conditions during peak checkout bursts. Implemented **Redis** caching for real-time commodity spot rates and frequent catalog queries. Structured frontend state management with **Zustand** to handle complex multi-step order configurations without unnecessary re-renders.",
    outcome: "Slashed complex multi-warehouse reporting latency from **15s to <350ms** through optimized composite indexing and read-heavy caching. Cut **database CPU load by 40%** and **p95 API latency by 55%**. Eliminated inventory overselling errors across **20+ warehouse locations** while automating daily sales ledger reconciliations.",
    keyDecisions: "Implemented optimistic locking on inventory batch rows to prevent overselling high-value commodities without blocking concurrent read operations. Utilized Zustand slice patterns to isolate checkout state from catalog browsing for optimal DOM performance.",
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    order: 2
  },
  {
    id: "avisita",
    title: "Avisita — Enterprise Travel & Hospitality SaaS",
    description: "High-concurrency global accommodation booking platform aggregating 15+ external supplier APIs with event-driven CRM automation.",
    role: "Senior Full-Stack & Backend Architect",
    category: "High-Concurrency Travel Tech",
    techStack: ["React.js", "TypeScript", "NestJS", "GraphQL", "PostgreSQL", "Redis", "RabbitMQ"],
    problem: "Travel booking platforms face extreme burst traffic during seasonal promotions, requiring real-time rate aggregation across **15+ external supplier APIs**. Legacy synchronous REST aggregation caused slow checkout experiences (**p95 > 6s**), high rate disparity errors, and transaction timeouts during inventory reservation spikes.",
    architecture: "Designed a hybrid **GraphQL and NestJS** backend service layer that aggregates and normalizes external supplier inventory in parallel. Implemented distributed **Redis caching** with sliding-window expiration to store room availability and dynamic rate calculations. Architected an asynchronous event-driven booking pipeline using **RabbitMQ** to process reservation confirmations, supplier webhooks, invoice generation, and customer notification emails in decoupled background workers.",
    outcome: "Maintained **99.99% system uptime** during high-concurrency seasonal booking peaks handling **10,000+ simultaneous sessions**. Slashed rate aggregation latency by **65%** via GraphQL parallel resolvers and Redis edge-caching. Automated **100%** of booking confirmation and CRM notification workflows with zero lost transactions.",
    keyDecisions: "Selected GraphQL for supplier rate aggregation to allow clients to request only the exact lodging attributes needed, decreasing network payload by 45%. Utilized RabbitMQ topic exchanges to decouple supplier booking webhooks from customer notification services.",
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    order: 3
  },
  {
    id: "ai-invoice-engine",
    title: "AI-Powered Invoice Processing Engine",
    description: "Autonomous financial intelligence pipeline extracting structured records from multi-format vendor invoices with automated accounting reconciliation.",
    role: "Lead Systems & AI Engineer",
    category: "Production AI & Automation",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "OpenAI APIs", "Claude APIs", "Redis", "Docker"],
    problem: "Finance and accounting teams spent over **300+ man-hours per month** manually reviewing, transcribing, and validating diverse multi-format vendor invoices (scanned PDFs, unstructured images, varied tax layouts). Traditional OCR tools produced high error rates, requiring continuous human intervention and resulting in delayed supplier payments.",
    architecture: "Engineered an automated ingestion pipeline using **Node.js and TypeScript** that pre-processes incoming documents, extracts raw text and spatial layout structures, and orchestrates LLM calls across **OpenAI (GPT-4o) and Anthropic Claude APIs**. Implemented strict **JSON schema-driven structured outputs** with automated validation against purchase order databases in **PostgreSQL**. Utilized **Redis BullMQ** queues for asynchronous document processing, rate-limit management, and automatic retries for transient API failures.",
    outcome: "Automated **85% of manual invoice entry workflows**, reducing invoice processing turnaround from **48 hours to under 30 seconds**. Achieved **99.2% extraction accuracy** on multi-page tabular invoices, freeing up over **300 accounting hours per month**.",
    keyDecisions: "Implemented dual-model fallback: using GPT-4o for complex spatial table parsing and Claude 3.5 Sonnet for dense legal and tax clause extraction. Used BullMQ on Redis for resilient backoff retries when provider rate limits are approached.",
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
    order: 4
  }
];

interface ArchitectureTier {
  title: string
  subtitle: string
  tech: string
  protocol: string
  badge: string
  color: 'blue' | 'purple' | 'amber' | 'emerald'
}

interface ProjectArchitecture {
  flowSummary: string
  client: ArchitectureTier
  gateway: ArchitectureTier
  queue: ArchitectureTier
  storage: ArchitectureTier
  metrics: { label: string; value: string }[]
}

const ARCHITECTURE_DATA: Record<string, ProjectArchitecture> = {
  'medqdoc': {
    flowSummary: 'Client (Web/ONLYOFFICE) -> NestJS Modular Gateway -> RabbitMQ & Redis -> PostgreSQL Audit Store',
    client: {
      title: 'Client Web Layer',
      subtitle: 'Collaborative Document UI',
      tech: 'React.js + ONLYOFFICE',
      protocol: 'WebSockets & HTTPS',
      badge: 'Real-Time Sync',
      color: 'blue'
    },
    gateway: {
      title: 'Modular API Gateway',
      subtitle: 'DDD Service Boundaries',
      tech: 'NestJS + TypeScript',
      protocol: 'REST & GraphQL',
      badge: 'RBAC & JWT Security',
      color: 'purple'
    },
    queue: {
      title: 'Async Message Broker',
      subtitle: 'PDF & Watermark Jobs',
      tech: 'RabbitMQ + Redis',
      protocol: 'AMQP & Pub/Sub',
      badge: 'Background Workers',
      color: 'amber'
    },
    storage: {
      title: 'Compliance Data Tier',
      subtitle: 'Immutable Audit Trail',
      tech: 'PostgreSQL + ONLYOFFICE Server',
      protocol: 'ACID Transactions',
      badge: 'FDA / ISO Audited',
      color: 'emerald'
    },
    metrics: [
      { label: 'p99 Response', value: '<120ms' },
      { label: 'Controlled Files', value: '50k+' },
      { label: 'Audit Accuracy', value: '100%' }
    ]
  },
  'ch-erp': {
    flowSummary: 'Next.js App -> NestJS Core Services -> Redis Locks -> PostgreSQL / Prisma ORM',
    client: {
      title: 'Next.js 14 Frontend',
      subtitle: 'Multi-Warehouse App',
      tech: 'Next.js + Zustand + Zod',
      protocol: 'Server Actions & REST',
      badge: 'Optimistic UI',
      color: 'blue'
    },
    gateway: {
      title: 'ERP Core Engine',
      subtitle: 'Sales, Inventory & Procurement',
      tech: 'NestJS + TypeScript',
      protocol: 'Type-Safe Contracts',
      badge: 'Optimistic Locking',
      color: 'purple'
    },
    queue: {
      title: 'In-Memory Cache & Locks',
      subtitle: 'Live Commodity Spot Rates',
      tech: 'Redis Caching & Mutex',
      protocol: 'In-Memory Key/Value',
      badge: '<5ms Spot Rates',
      color: 'amber'
    },
    storage: {
      title: 'Enterprise Relational DB',
      subtitle: 'Normalized Ledger Schemas',
      tech: 'PostgreSQL + Prisma ORM',
      protocol: 'Composite Indexing',
      badge: 'Partitioned Ledgers',
      color: 'emerald'
    },
    metrics: [
      { label: 'p95 API Latency', value: '-55%' },
      { label: 'DB CPU Load', value: '-40%' },
      { label: 'Query Speed', value: '<350ms' }
    ]
  },
  'avisita': {
    flowSummary: 'React Booking UI -> NestJS Gateway -> RabbitMQ Broker -> Redis Cache & PostgreSQL',
    client: {
      title: 'Traveler & Supplier Portal',
      subtitle: 'High-Concurrency Booking',
      tech: 'React.js + TypeScript',
      protocol: 'GraphQL & REST',
      badge: 'Dynamic Search',
      color: 'blue'
    },
    gateway: {
      title: 'Aggregation Gateway',
      subtitle: '15+ External Supplier APIs',
      tech: 'NestJS Microservices',
      protocol: 'Parallel Resolvers',
      badge: 'GraphQL Fed.',
      color: 'purple'
    },
    queue: {
      title: 'Event-Driven Pipeline',
      subtitle: 'Confirmations & CRM Webhooks',
      tech: 'RabbitMQ + Redis Pub/Sub',
      protocol: 'Topic Exchanges',
      badge: 'Zero Drop Events',
      color: 'amber'
    },
    storage: {
      title: 'Booking & CRM Store',
      subtitle: 'ACID Reservation Ledgers',
      tech: 'PostgreSQL + Redis Cache',
      protocol: 'Connection Pooling',
      badge: '99.99% Uptime SLA',
      color: 'emerald'
    },
    metrics: [
      { label: 'Concurrent Sessions', value: '10k+' },
      { label: 'Rate Aggregation', value: '-65% Latency' },
      { label: 'Uptime SLA', value: '99.99%' }
    ]
  },
  'ai-invoice-engine': {
    flowSummary: 'ERP Webhooks -> Node.js Ingest -> BullMQ Redis -> OpenAI / Claude LLMs -> PostgreSQL',
    client: {
      title: 'Document Ingestion',
      subtitle: 'PDFs & Scanned Bills',
      tech: 'Webhooks & REST APIs',
      protocol: 'Multi-Part Ingest',
      badge: 'Multi-Format Input',
      color: 'blue'
    },
    gateway: {
      title: 'Orchestration Engine',
      subtitle: 'Preprocessing & Layout Parser',
      tech: 'Node.js + TypeScript',
      protocol: 'Stream Processing',
      badge: 'JSON Schema Driven',
      color: 'purple'
    },
    queue: {
      title: 'Resilient Job Queue',
      subtitle: 'Rate-Limit & Batch Manager',
      tech: 'BullMQ + Redis',
      protocol: 'Exponential Backoff',
      badge: 'Auto-Retry Queue',
      color: 'amber'
    },
    storage: {
      title: 'AI Processing & DB',
      subtitle: 'OpenAI (GPT-4o) & Claude 3.5',
      tech: 'PostgreSQL Financial DB',
      protocol: 'Automated Match Validation',
      badge: '99.2% Accuracy',
      color: 'emerald'
    },
    metrics: [
      { label: 'Manual Entry Cut', value: '85%' },
      { label: 'Processing Time', value: '<30s' },
      { label: 'Monthly Saved', value: '300+ Hrs' }
    ]
  }
}

// Fallback lookup if project id varies
const getArchitectureForProject = (id: string, title: string): ProjectArchitecture => {
  const lower = (id + ' ' + title).toLowerCase()
  if (lower.includes('medqdoc') || lower.includes('document')) return ARCHITECTURE_DATA['medqdoc']
  if (lower.includes('erp') || lower.includes('jewellery') || lower.includes('ch')) return ARCHITECTURE_DATA['ch-erp']
  if (lower.includes('avisita') || lower.includes('travel') || lower.includes('hospitality')) return ARCHITECTURE_DATA['avisita']
  return ARCHITECTURE_DATA['ai-invoice-engine']
}

export const Projects = ({ projects }: ProjectsProps) => {
  const rawList = projects && projects.length > 0 ? projects : DEFAULT_PROJECTS
  // Filter out any leftover placeholder projects if user has old DB rows
  const isPlaceholder = (p: Project) => {
    const l = (p.id + ' ' + p.title).toLowerCase()
    return l.includes('luxalgo') || l.includes('confluent') || l.includes('genai-stream')
  }
  const cleanList = rawList.some(p => !isPlaceholder(p)) ? rawList.filter(p => !isPlaceholder(p)) : DEFAULT_PROJECTS
  const displayProjects = cleanList.length >= 4 ? cleanList : DEFAULT_PROJECTS

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
            <Workflow className="w-3 h-3" />
            Enterprise Architecture & Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Production-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Case Studies</span>
          </h2>
          <p className="text-muted-foreground mr-auto ml-auto max-w-3xl text-lg leading-relaxed">
            Deep architectural breakdowns of real-world enterprise platforms—explaining business challenges, scalable system designs, and quantified production impact.
          </p>
        </motion.div>
        
        <div className="space-y-32">
          {displayProjects.map((project, index) => (
            <CaseStudyCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface CaseStudyCardProps {
  project: Project
  index: number
}

const CaseStudyCard = ({ project, index }: CaseStudyCardProps) => {
  const [activeTab, setActiveTab] = useState<'challenge' | 'decisions' | 'impact' | 'architecture'>('challenge')
  const [activeNode, setActiveNode] = useState<'client' | 'gateway' | 'queue' | 'storage'>('gateway')
  const arch = getArchitectureForProject(project.id, project.title)

  const highlightMetrics = (text: string | null | undefined) => {
    if (!text) return ''
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>')
      .replace(
        /(\b\d+(?:\.\d+)?%|\bp99\b|\bp95\b|\b\d+\+?\s*(?:hours|developers|engineers|years|months|reduction|increase|improvement|growth|TB|requests\/sec|RPS|sessions|users|files|operations)|\b8\.4s to <120ms\b|\b15s to <350ms\b|\b48 hours to under 30 seconds\b|\b300\+?\s*accounting hours\b|\b50,000\+?\b|\b10,000\+?\b)/gi, 
        (match) => match.includes('<strong') ? match : `<strong class="text-foreground font-bold">${match}</strong>`
      )
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Visual Side: Interactive System Architecture Diagram */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
        <div className="relative rounded-2xl border border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur-2xl p-6 overflow-hidden group">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-52 h-52 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Window / Topology Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              <span className="text-[11px] font-mono text-muted-foreground ml-2 tracking-wider uppercase">
                Architecture Topology
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Node Map
            </div>
          </div>

          {/* Interactive Topology Graph */}
          <div className="space-y-3 relative">
            {/* Connecting Vertical Data Line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500/40 via-purple-500/40 via-amber-500/40 to-emerald-500/40 hidden sm:block"></div>

            {/* Node 1: Client Layer */}
            <ArchitectureNodeCard 
              nodeKey="client"
              tier={arch.client}
              isActive={activeNode === 'client'}
              onClick={() => setActiveNode('client')}
              icon={<Code2 className="w-4 h-4 text-blue-400" />}
              accentClass="border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5"
            />

            {/* Flow Arrow */}
            <div className="flex justify-center sm:justify-start sm:pl-10 text-[10px] text-muted-foreground font-mono">
              <span className="bg-slate-900/90 px-2 py-0.5 rounded border border-white/5 flex items-center gap-1">
                HTTPS / WebSockets <ArrowRight className="w-3 h-3 text-blue-400" />
              </span>
            </div>

            {/* Node 2: Gateway & Business Logic */}
            <ArchitectureNodeCard 
              nodeKey="gateway"
              tier={arch.gateway}
              isActive={activeNode === 'gateway'}
              onClick={() => setActiveNode('gateway')}
              icon={<Server className="w-4 h-4 text-purple-400" />}
              accentClass="border-purple-500/30 hover:border-purple-500/60 bg-purple-500/5"
            />

            {/* Flow Arrow */}
            <div className="flex justify-center sm:justify-start sm:pl-10 text-[10px] text-muted-foreground font-mono">
              <span className="bg-slate-900/90 px-2 py-0.5 rounded border border-white/5 flex items-center gap-1">
                AMQP / Mutex Caches <ArrowRight className="w-3 h-3 text-purple-400" />
              </span>
            </div>

            {/* Node 3: Message Queue & Caching */}
            <ArchitectureNodeCard 
              nodeKey="queue"
              tier={arch.queue}
              isActive={activeNode === 'queue'}
              onClick={() => setActiveNode('queue')}
              icon={<Cpu className="w-4 h-4 text-amber-400" />}
              accentClass="border-amber-500/30 hover:border-amber-500/60 bg-amber-500/5"
            />

            {/* Flow Arrow */}
            <div className="flex justify-center sm:justify-start sm:pl-10 text-[10px] text-muted-foreground font-mono">
              <span className="bg-slate-900/90 px-2 py-0.5 rounded border border-white/5 flex items-center gap-1">
                ACID Transactions & Workers <ArrowRight className="w-3 h-3 text-amber-400" />
              </span>
            </div>

            {/* Node 4: Storage & AI / Workers */}
            <ArchitectureNodeCard 
              nodeKey="storage"
              tier={arch.storage}
              isActive={activeNode === 'storage'}
              onClick={() => setActiveNode('storage')}
              icon={<Database className="w-4 h-4 text-emerald-400" />}
              accentClass="border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5"
            />
          </div>

          {/* Architecture Metrics Footer Bar */}
          <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-2">
            {arch.metrics.map((m, mi) => (
              <div key={mi} className="bg-white/5 border border-white/5 rounded-xl p-2.5 text-center">
                <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {m.value}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium truncate">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Flow Caption */}
          <div className="mt-3 text-center">
            <span className="text-[10px] font-mono text-slate-400 italic">
              {arch.flowSummary}
            </span>
          </div>
        </div>
      </div>

      {/* Content Side: Interactive Deep-Dive Tabs */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-primary font-mono text-xl font-bold opacity-60">0{index + 1}</span>
            <div className="h-px bg-primary/30 w-10"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {project.role || 'Lead Architect'}
            </span>
            <span className="text-xs text-border">•</span>
            <span className="text-xs font-medium text-primary">
              {project.category || 'Enterprise Platform'}
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">{project.title}</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <Badge key={tech} variant="outline" className="px-3 py-1 border-primary/20 text-foreground text-xs uppercase tracking-wide">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Interactive Tabs Header */}
        <div className="pt-4">
          <div className="flex flex-wrap gap-2 p-1 bg-muted/40 rounded-xl border border-border/50">
            <button
              onClick={() => setActiveTab('challenge')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'challenge' 
                  ? 'bg-background text-foreground shadow-sm border border-border/50' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-400" />
              The Challenge
            </button>
            <button
              onClick={() => setActiveTab('decisions')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'decisions' 
                  ? 'bg-background text-foreground shadow-sm border border-border/50' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              Architectural Decisions
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'impact' 
                  ? 'bg-background text-foreground shadow-sm border border-border/50' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              Business Impact
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'architecture' 
                  ? 'bg-background text-foreground shadow-sm border border-border/50' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Network className="w-3.5 h-3.5 text-purple-400" />
              Topology Details
            </button>
          </div>
        </div>

        {/* Tab Content Panels with Smooth Animation */}
        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            {activeTab === 'challenge' && (
              <motion.div
                key="challenge"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 rounded-xl border border-red-500/20 bg-red-500/5 p-6"
              >
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  Scale Bottlenecks & Business Problem
                </div>
                <div 
                  className="text-foreground/90 text-sm leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: highlightMetrics(project.problem) }}
                />
              </motion.div>
            )}

            {activeTab === 'decisions' && (
              <motion.div
                key="decisions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6"
              >
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  Engineering Strategy & Technical Solutions
                </div>
                <div 
                  className="text-foreground/90 text-sm leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: highlightMetrics(project.architecture) }}
                />
                {project.keyDecisions && (
                  <div className="pt-3 border-t border-blue-500/20 text-xs text-muted-foreground italic">
                    <strong className="text-blue-300 not-italic font-semibold">Key Trade-off: </strong>
                    {project.keyDecisions}
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'impact' && (
              <motion.div
                key="impact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6"
              >
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4" />
                  Measurable Business Outcomes & ROI
                </div>
                <div 
                  className="text-foreground/90 text-sm leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: highlightMetrics(project.outcome) }}
                />
              </motion.div>
            )}

            {activeTab === 'architecture' && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-6"
              >
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm uppercase tracking-wider">
                  <Network className="w-4 h-4" />
                  Request Lifecycle & Data Tier Walkthrough
                </div>
                <div className="space-y-2.5 text-xs text-foreground/90 leading-relaxed font-mono">
                  <div className="p-2 rounded bg-background/50 border border-white/5 flex items-start gap-2">
                    <span className="text-blue-400 font-bold">1. Ingestion:</span>
                    <span>{arch.client.title} communicates over {arch.client.protocol} with {arch.client.badge}.</span>
                  </div>
                  <div className="p-2 rounded bg-background/50 border border-white/5 flex items-start gap-2">
                    <span className="text-purple-400 font-bold">2. Gateway:</span>
                    <span>{arch.gateway.title} validates contracts using {arch.gateway.badge} and enforces service isolation.</span>
                  </div>
                  <div className="p-2 rounded bg-background/50 border border-white/5 flex items-start gap-2">
                    <span className="text-amber-400 font-bold">3. Async Queue:</span>
                    <span>{arch.queue.title} absorbs burst load and delegates work to {arch.queue.badge}.</span>
                  </div>
                  <div className="p-2 rounded bg-background/50 border border-white/5 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">4. Persistence:</span>
                    <span>{arch.storage.title} commits state with {arch.storage.badge} and ACID compliance.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

interface ArchitectureNodeCardProps {
  nodeKey: string
  tier: ArchitectureTier
  isActive: boolean
  onClick: () => void
  icon: React.ReactNode
  accentClass: string
}

const ArchitectureNodeCard = ({ tier, isActive, onClick, icon, accentClass }: ArchitectureNodeCardProps) => {
  return (
    <div 
      onClick={onClick}
      className={`p-3.5 rounded-xl border transition-all cursor-pointer relative z-10 ${
        isActive 
          ? 'bg-slate-900 border-primary shadow-lg shadow-primary/10' 
          : `${accentClass} border-border/40 hover:bg-slate-900/80`
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900/90 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-sm">
            {icon}
          </div>
          <div>
            <div className="font-bold text-xs text-foreground flex items-center gap-2">
              {tier.title}
              <span className="text-[10px] text-muted-foreground font-normal font-mono hidden sm:inline">
                ({tier.tech})
              </span>
            </div>
            <div className="text-[11px] text-muted-foreground">
              {tier.subtitle}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
            {tier.protocol}
          </span>
          <span className="text-[9px] font-semibold text-primary/90">
            {tier.badge}
          </span>
        </div>
      </div>
    </div>
  )
}
