
import { Code, Database, Globe, Layers, Layout, Server, Settings, Smartphone, Terminal, Cpu, Cloud } from "lucide-react";

// --- HERO SECTION ---
export const HERO_CONTENT = {
  badge: "Senior Full-Stack Engineer",
  title: "Senior Full-Stack Engineer | 7+ Years Exp | Specialist in Rust, NestJS & GenAI",
  subtitle: "Building high-performance, cloud-native platforms for US & EU startups. Expert in 99.9% uptime and async-first remote collaboration.",
  availability: "Available for Remote (CET/EST)",
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
    title: "Core Architecture",
    icon: Server,
    skills: [
      "NestJS (Expert)",
      "Rust (Expert)",
      "Node.js",
      "TypeScript",
      "Microservices",
      "System Design"
    ]
  },
  {
    title: "Frontend Excellence",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js (App Router)",
      "TailwindCSS",
      "State Management",
      "Performance Optimization"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS (EC2/S3/Lambda)",
      "Docker & Kubernetes",
      "Serverless Architecture",
      "CI/CD Pipelines",
      "Terraform"
    ]
  },
  {
    title: "AI & Future Tech",
    icon: Terminal,
    skills: [
      "Generative AI APIs",
      "LangChain",
      "Vector Databases (Pinecone/Milvus)",
      "LLM Integration",
      "RAG Architecture"
    ]
  }
];

// --- PROJECTS / CASE STUDIES ---
export const PROJECT_CASE_STUDIES = [
  {
    id: "genai-stream",
    title: "GenAI Real-Time Data Engine",
    url: "https://genai-stream.railway.app",
    role: "Lead Backend Engineer (Rust)",
    summary: "High-performance microservice for ingesting and processing real-time AI model data streams.",
    problem: "Node.js predecessors struggled with latency and memory overhead when processing high-throughput token streams from multiple LLM providers concurrently, leading to dashboard lag and high cloud costs.",
    solution: "Rewrote the ingestion pipeline in Rust using Tokio for async runtime. Implemented efficient buffering and WebSocket streaming to the dashboard, optimized for AWS Lambda cold starts of <10ms.",
    impact: "Achieved 50% faster execution time compared to the previous Node.js implementation. Reduced AWS Lambda compute costs by 40% due to lower memory footprint and faster processing.",
    stack: ["Rust", "Tokio", "AWS Lambda", "WebSockets", "Redis", "GenAI"],
    imageUrl: "/projects/genai-stream.png"
  },
  {
    id: "luxalgo",
    title: "LuxAlgo - AI Financial Analytics",
    url: "https://luxalgo.com",
    role: "Lead Full-Stack Engineer",
    summary: "Next-gen AI trading platform serving 50k+ users with real-time signal processing.",
    problem: "Existing solutions lacked real-time signal processing and had poor UX. The client needed a scalable subscription engine and an interactive, sub-second latency dashboard.",
    solution: "Decoupled the signal processing engine from the user dashboard using a message queue. Implemented advanced caching strategies and optimized database queries for speed.",
    impact: "Successfully scaled infrastructure to handle 10k+ concurrent users with 99.99% uptime. Achieved sub-100ms search and data retrieval performance for complex financial datasets.",
    stack: ["Next.js", "Python", "Stripe API", "Redis", "PostgreSQL"],
    imageUrl: "/projects/luxalgo.png"
  },
  {
    id: "palmswap",
    title: "Palmswap - Hybrid DEX",
    url: "https://palmswap.org",
    role: "Lead Smart Contract & Backend Engineer",
    summary: "Decentralized Perpetual Exchange built on BSC with a hybrid infrastructure.",
    problem: "Traders needed a platform that offered the user experience of a CEX with the security/custody of a DEX, capable of handling high-frequency trading volume.",
    solution: "Architected a hybrid Web3 infrastructure. Built efficient smart contracts for trade execution and a high-speed off-chain matching engine for order management.",
    impact: "Processed $10M+ in trading volume within the first quarter. Delivered a robust Web3 architecture ensuring secure, non-custodial trading with near-instant finality.",
    stack: ["Solidity", "Node.js", "Web3.js", "BSC", "The Graph"],
    imageUrl: "/projects/palmswap.png"
  },
  {
    id: "enterprise-erp",
    title: "Super Admin Platform",
    url: "https://smart-logistics-erp.vercel.app",
    role: "Lead Backend Architect (NestJS)",
    summary: "Microservices-based ERP system handling logistics, HR, and finance for a high-volume logistics firm.",
    problem: "Legacy monolithic systems were causing 48-hour data delays and frequent crashes during peak loads. The client needed a real-time, scalable solution to manage 10k+ daily shipments.",
    solution: "Designed a modular microservices architecture using NestJS and TypeScript. Implemented event-driven communication with RabbitMQ and a centralized data warehouse.",
    impact: "Achieved a 40% reduction in data loading times for critical reports. Implemented automated pipelines resulting in 50% faster CI/CD deployment cycles.",
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
    url: "https://zellim.com",
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
    imageUrl: null
  },
  {
    id: "pidespeed",
    title: "PideSpeed",
    url: "https://pidespeed.com",
    role: "Lead Full-Stack Developer",
    summary: "Scalable food-ordering and delivery management platform.",
    problem: "Simplifying the complex order flow from customer selection to restaurant acceptance and courier assignment in real-time.",
    solution: "Developed a Node.js/Express backend handling complex order state machines. Built an Angular frontend for intuitive user ordering and real-time tracking integration.",
    impact: "Streamlined order processing time by 30%. Handled peak hour traffic without degradation in order tracking accuracy.",
    stack: ["Angular", "Node.js", "Express", "MongoDB", "Socket.io"],
    imageUrl: null
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
    imageUrl: null
  },
  {
    id: "rock",
    title: "Rock Ultrasound",
    url: "https://rockultrasound.com",
    role: "Frontend Developer",
    summary: "Medical diagnosis services website focusing on patient trust and SEO.",
    problem: "The previous site was slow, non-responsive, and failed to convert visitors into booked appointments.",
    solution: "Built a highly responsive, accessible frontend with a focus on Core Web Vitals and SEO best practices. Simplified the appointment booking user flow.",
    impact: "Achieved 90+ Lighthouse scores. Increased organic search traffic and improved appointment booking conversion rates significantly.",
    stack: ["React", "Next.js", "SEO", "TailwindCSS"],
    imageUrl: null
  }
];
