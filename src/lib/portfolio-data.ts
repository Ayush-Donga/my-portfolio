
import { Code, Database, Globe, Layers, Layout, Server, Settings, Smartphone, Terminal, Cpu, Cloud } from "lucide-react";

// --- HERO SECTION ---
export const HERO_CONTENT = {
  badge: "Senior Full-Stack & Distributed Systems Engineer",
  title: "Senior Full-Stack & Distributed Systems Engineer | 8+ Years Exp | Backend Architect",
  subtitle: "Engineering high-performance, cloud-native platforms for US, UK, and EU startups (CET/EST/GMT overlap). Expert in TypeScript, Node.js, NestJS, Next.js, PostgreSQL, Redis, RabbitMQ, AWS, and Production AI/LLM Workflows.",
  availability: "Available for Remote (US/EU/UK • CET/EST/GMT)",
  ctaPrimary: "View Case Studies",
  ctaSecondary: "Discuss Your Architecture",
};

// --- ABOUT SECTION ---
export const ABOUT_CONTENT = {
  heading: "Engineering with Ownership & Business Impact",
  p1: "I am a Senior Full-Stack & Distributed Systems Engineer with 8+ years of experience focused on solving complex scaling challenges through robust architecture. I don't just write code; I own the entire lifecycle of enterprise SaaS and ERP products—from system design and API performance to event-driven messaging, database optimization, and production AI workflows.",
  p2: "Having engineered systems for distributed startups across the US, UK, and Europe, I operate with an async-first remote ownership mindset. I prioritize proactive communication, architectural documentation, and autonomous problem-solving to deliver production-grade software aligned with core business metrics.",
};

// --- SKILLS SECTION ---
export type SkillCategory = {
  title: string;
  icon: any;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Systems",
    icon: Server,
    skills: [
      "TypeScript & Node.js",
      "NestJS (Modular Architectures)",
      "REST & GraphQL APIs",
      "Microservices & Event-Driven",
      "RabbitMQ & Apache Kafka"
    ]
  },
  {
    title: "Frontend Excellence",
    icon: Layout,
    skills: [
      "React.js & Next.js",
      "TypeScript",
      "Zustand State Management",
      "Zod Schema Validation",
      "Responsive Web & Tailored UI"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS (ECS/Lambda/S3/RDS)",
      "Google Cloud Platform",
      "Docker & Containerization",
      "CI/CD Pipelines (Git/GitLab)",
      "Linux, Nginx & PM2"
    ]
  },
  {
    title: "Databases & AI",
    icon: Database,
    skills: [
      "PostgreSQL (Query Optimization)",
      "Redis Caching Strategies",
      "Prisma ORM & Schema Design",
      "OpenAI & Claude LLM APIs",
      "AI Document Processing & Prompts"
    ]
  }
];

// --- PROJECTS / CASE STUDIES ---
export const PROJECT_CASE_STUDIES = [
  {
    id: "medqdoc",
    title: "MedQDoc — Enterprise Quality & Document Management SaaS",
    url: "#",
    role: "Lead Backend Architect",
    summary: "Cloud-native enterprise document management platform built for regulated healthcare & manufacturing organizations requiring strict ISO/FDA compliance.",
    problem: "Regulated organizations faced version desynchronization, audit risks, and severe latency spikes (p99 > 8s) when running synchronous document conversions on the main event loop.",
    solution: "Architected a modular NestJS backend with Domain-Driven Design (DDD), integrated ONLYOFFICE via WebSocket proxies, and offloaded conversions to RabbitMQ worker queues backed by Redis caching.",
    impact: "Eliminated 100% of document version conflicts across 50k+ files and reduced p99 latency from 8.4s to <120ms with verifiable audit trails.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "RabbitMQ", "Redis", "ONLYOFFICE", "Docker"],
    imageUrl: null
  },
  {
    id: "ch-erp",
    title: "CH ERP — Multi-Module Enterprise Jewellery Platform",
    url: "#",
    role: "Lead Full-Stack Architect",
    summary: "Mission-critical enterprise ERP managing multi-warehouse inventory, real-time metal price valuation, sales, purchasing, and business accounting.",
    problem: "High-value commodity price fluctuations and multi-warehouse checkouts caused transaction deadlocks, with complex reporting queries taking 15+ seconds.",
    solution: "Engineered a Next.js and NestJS architecture with Prisma ORM, composite PostgreSQL indexing, Redis caching for live commodity rates, and Zustand state management.",
    impact: "Cut database CPU load by 40%, slashed p95 API latency by 55%, and dropped complex multi-warehouse reporting times from 15s to <350ms.",
    stack: ["Next.js", "React.js", "TypeScript", "NestJS", "Prisma ORM", "PostgreSQL", "Zustand", "Zod"],
    imageUrl: null
  },
  {
    id: "avisita",
    title: "Avisita — Enterprise Travel & Hospitality SaaS",
    url: "#",
    role: "Senior Full-Stack & Backend Architect",
    summary: "Global accommodation booking engine handling high-concurrency reservation workflows, 15+ supplier API aggregations, and automated CRM pipelines.",
    problem: "Synchronous REST calls to 15+ external supplier APIs caused high checkout latency (p95 > 6s), transaction timeouts, and rate disparity during peak seasonal surges.",
    solution: "Designed a hybrid GraphQL and NestJS backend layer to aggregate supplier rates in parallel with Redis sliding-window caching and RabbitMQ event queues.",
    impact: "Maintained 99.99% uptime across 10,000+ simultaneous sessions, reduced rate aggregation latency by 65%, and automated 100% of reservation workflows.",
    stack: ["React.js", "TypeScript", "NestJS", "GraphQL", "PostgreSQL", "Redis", "RabbitMQ"],
    imageUrl: null
  },
  {
    id: "ai-invoice-engine",
    title: "AI-Powered Invoice Processing Engine",
    url: "#",
    role: "Lead Systems & AI Engineer",
    summary: "Autonomous financial document extraction engine parsing multi-format vendor invoices into structured accounting ledgers with automated validation.",
    problem: "Finance teams spent 300+ hours per month manually reviewing, transcribing, and reconciling varied vendor invoices, suffering from high error rates.",
    solution: "Engineered a Node.js ingestion pipeline orchestrating OpenAI (GPT-4o) and Anthropic Claude APIs with strict JSON Schema outputs, validated against PostgreSQL ledgers via BullMQ.",
    impact: "Automated 85% of manual invoice entry workflows, achieved 99.2% extraction accuracy, and reduced document processing time from 48 hours to under 30 seconds.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "OpenAI APIs", "Claude APIs", "Redis", "Docker"],
    imageUrl: null
  }
];
