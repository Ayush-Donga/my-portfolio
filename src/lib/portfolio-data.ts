
import { Code, Database, Globe, Layers, Layout, Server, Settings, Smartphone, Terminal, Cpu, Cloud } from "lucide-react";

// --- HERO SECTION ---
export const HERO_CONTENT = {
  badge: "Senior Full-Stack Engineer | 7+ Years Exp.",
  title: "Scaling Next.js, Node & Rust Apps from 0 to 1",
  subtitle: "I help US & European startups build high-performance platforms with 99.9% uptime. 7+ years of experience leading teams and delivering production-grade architecture.",
  availability: "Available for Remote & Contract Roles (EU/UK/US)",
  ctaPrimary: "View Case Studies",
  ctaSecondary: "Discuss Your Project",
};

// --- ABOUT SECTION ---
export const ABOUT_CONTENT = {
  heading: "Engineering with Ownership & Business Impact",
  p1: "I am a Senior Full-Stack Engineer focused on solving complex business problems through robust technical solutions. I don't just write code; I own the entire development lifecycle—from architectural decision-making and database design to CI/CD pipelines and production monitoring.",
  p2: "Having worked with distributed teams across the US, UK, and EU, I operate with a remote-first mindset. I prioritize asynchronous communication, clear documentation, and independent problem-solving to deliver reliable software without the need for constant hand-holding.",
};

// --- SKILLS SECTION ---
export type SkillCategory = {
  title: string;
  icon: any;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    skills: [
      "React.js (Deep Patterns)",
      "Next.js (App Router/SSR)",
      "TypeScript",
      "TailwindCSS",
      "Redux Toolkit / Zustand",
      "Performance Optimization"
    ]
  },
  {
    title: "Backend & Systems",
    icon: Server,
    skills: [
      "Node.js & Express",
      "Microservices Architecture",
      "NestJS",
      "Serverless / Lambdas",
      "GraphQL / Apollo",
      "System Design"
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      "PostgreSQL (Complex Queries)",
      "MongoDB / NoSQL",
      "Redis (Caching/Queues)",
      "Prisma ORM",
      "Database Modeling"
    ]
  },
  {
    title: "Architecture & Real-Time",
    icon: Layers,
    skills: [
      "WebSockets (Socket.io)",
      "Event-Driven Architecture",
      "RabbitMQ / Message Queues",
      "Real-time Data Sync",
      "Scalable Infrastructure"
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      "React Native",
      "Flutter (Dart)",
      "iOS & Android Deployment",
      "Mobile State Management",
      "Native Modules"
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Docker & Containerization",
      "CI/CD Pipelines (GitHub Actions)",
      "Nginx / Reverse Proxies",
      "Monitoring (Sentry/Datadog)"
    ]
  }
];

// --- PROJECTS / CASE STUDIES ---
export const PROJECT_CASE_STUDIES = [
  {
    id: "genai-stream",
    title: "GenAI Real-Time Data Engine",
    role: "Lead Backend Engineer (Rust)",
    summary: "High-performance microservice for ingesting and processing real-time AI model data streams.",
    problem: "Node.js predecessors struggled with latency and memory overhead when processing high-throughput token streams from multiple LLM providers concurrently, leading to dashboard lag and high cloud costs.",
    solution: "Rewrote the ingestion pipeline in Rust using Tokio for async runtime. Implemented efficient buffering and WebSocket streaming to the dashboard, optimized for AWS Lambda cold starts of <10ms.",
    impact: "Achieved 50% faster execution time compared to the previous Node.js implementation. Reduced AWS Lambda compute costs by 40% due to lower memory footprint and faster processing.",
    stack: ["Rust", "Tokio", "AWS Lambda", "WebSockets", "Redis", "GenAI"],
    imageUrl: "/projects/genai-stream.png"
  },
  {
    id: "enterprise-erp",
    title: "Smart Logistics ERP",
    role: "Lead Backend Architect (NestJS)",
    summary: "Microservices-based ERP system handling logistics, HR, and finance for a high-volume logistics firm.",
    problem: "Legacy monolithic systems were causing 48-hour data delays and frequent crashes during peak loads. The client needed a real-time, scalable solution to manage 10k+ daily shipments.",
    solution: "Designed a modular microservices architecture using NestJS and TypeScript. Implemented event-driven communication with RabbitMQ and a centralized data warehouse for real-time analytics.",
    impact: "Reduced data reporting latency from 2 days to real-time. Improved system reliability to 99.99% uptime and cut infrastructure costs by 30% via Docker containerization.",
    stack: ["NestJS", "TypeScript", "Microservices", "RabbitMQ", "PostgreSQL", "Docker"],
    imageUrl: "/projects/erp-dashboard.png"
  },
  {
    id: "torq",
    title: "TORQ App",
    url: "http://torqapp.io",
    role: "Senior Full-Stack Engineer / Technical Owner",
    summary: "A scalable subscription-based platform with recurring billing and real-time features.",
    problem: "Needed a robust system to handle complex subscription tiers, high-concurrency user requests, and real-time data synchronization across devices without latency.",
    solution: "Architected a microservices-based backend using Node.js and Redis. Implemented recurring billing via Stripe webhooks and ensured sub-100ms real-time updates using WebSockets and RabbitMQ.",
    impact: "Successfully scaled to support thousands of active users with 99.9% uptime. Reduced billing errors by 100% through automated reconciliation.",
    stack: ["Flutter", "Laravel", "Node.js", "Redis", "RabbitMQ", "Microservices"],
    imageUrl: "/projects/torq.png"
  },
  {
    id: "zellim",
    title: "Zellim",
    role: "Lead Full-Stack Engineer",
    summary: "An all-in-one productivity suite combining documents, video conferencing, and unified email.",
    problem: "Users were fragmented across multiple tools (Zoom, Notion, Gmail). The client wanted a unified, low-latency collaboration hub with seamless integrations.",
    solution: "Built a collaborative document editor using Operational Transformation algorithms. Integrated BigBlueButton and Jitsi for video conferencing and aggregated Google/Outlook emails into a single unified inbox view.",
    impact: "Delivered a cohesive platform that increased user retention time by 40%. Enabled teams to switch contexts 3x faster by having all tools in one tab.",
    stack: ["React", "Node.js", "WebRTC", "Socket.io", "Google API", "Outlook API"],
    imageUrl: "/projects/zellim.png"
  },
  {
    id: "fitgmr",
    title: "FitGMR",
    url: "https://www.fitgmr.gg/",
    role: "Full-Stack & Mobile Engineer",
    summary: "Health and performance dashboard for esports athletes and teams.",
    problem: "The existing mobile app suffered from crashes and sync issues. The web dashboard lacked real-time visibility into athlete performance metrics.",
    solution: "Stabilized the React Native codebase, reducing crash rate to <1%. Built a high-performance GraphQL API to serve complex analytics data to the React dashboard efficiently.",
    impact: "stabilized the mobile experience leading to a 4.8/5 store rating. Empowered coaches with real-time data, directly improving team training outcomes.",
    stack: ["React", "React Native", "Node.js", "GraphQL", "PostgreSQL"],
    imageUrl: "/projects/fitgmr.png"
  },
  {
    id: "pidespeed",
    title: "PideSpeed",
    role: "Lead Full-Stack Developer",
    summary: "Scalable food-ordering and delivery management platform.",
    problem: "Simplifying the complex order flow from customer selection to restaurant acceptance and courier assignment in real-time.",
    solution: "Developed a Node.js/Express backend handling complex order state machines. Built an Angular frontend for intuitive user ordering and real-time tracking integration.",
    impact: "Streamlined order processing time by 30%. Handled peak hour traffic without degradation in order tracking accuracy.",
    stack: ["Angular", "Node.js", "Express", "MongoDB", "Socket.io"],
    imageUrl: "/projects/pidespeed.png"
  },
  {
    id: "weather",
    title: "Depends On The Weather",
    url: "https://www.dependsontheweather.org/",
    role: "Mobile Engineer",
    summary: "Content-rich mobile application necessitating high stability and ad reliability.",
    problem: "The app faced frequent silent crashes and inconsistent ad rendering, affecting revenue and user trust.",
    solution: "Integrated Sentry for granular error tracking and aggressively resolved technical debt. Optimized Firebase implementation and ad network mediation layers.",
    impact: "Reduced crash-free user rate to >99%. Improved ad impression consistency, directly boosting ad revenue stability.",
    stack: ["React Native", "Firebase", "Sentry", "AdMob"],
    imageUrl: "/projects/weather.png"
  },
  {
    id: "rock",
    title: "Rock Ultrasound",
    role: "Frontend Developer",
    summary: "Medical diagnosis services website focusing on patient trust and SEO.",
    problem: "The previous site was slow, non-responsive, and failed to convert visitors into booked appointments.",
    solution: "Built a highly responsive, accessible frontend with a focus on Core Web Vitals and SEO best practices. Simplified the appointment booking user flow.",
    impact: "Achieved 90+ Lighthouse scores. Increased organic search traffic and improved appointment booking conversion rates significantly.",
    stack: ["React", "Next.js", "SEO", "TailwindCSS"],
    imageUrl: "/projects/rock.png"
  }
];
