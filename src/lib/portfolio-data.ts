
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
    title: "Real-Time GenAI Stream Processor (Rust)",
    url: "https://www.confluent.io/generative-ai",
    role: "Lead Backend Engineer (Rust)",
    summary: "High-concurrency microservice architected in Rust for real-time ingestion and processing of LLM token streams.",
    problem: "Legacy Node.js architecture suffered from significant garbage collection latency and memory leaks when processing high-throughput 24/7 token streams from multiple LLM providers.",
    solution: "Engineered a low-latency ingestion engine using Rust & Tokio. Implemented zero-copy parsing and custom buffer management to handle millions of tokens with sub-millisecond overhead.",
    impact: "Achieved 50% faster execution and a 40% reduction in cloud compute costs. Ensured deterministic <10ms cold starts on AWS Lambda for seamless real-time dashboards.",
    stack: ["Rust", "Tokio", "AWS Lambda", "WebSockets", "Redis", "GenAI"],
    imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1770545672/genai-hub-context-engine_sr6c5v.png"
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
    imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1769685288/83aa1c80a1665e70e16870cf1bd5418c_fvfd6e.png"
  },
  {
    id: "enterprise-erp",
    title: "Cloud-Native Enterprise ERP Ecosystem",
    url: "https://www.sap.com",
    role: "Lead Backend Architect (NestJS)",
    summary: "Flagship ERP platform managing mission-critical logistics, finance, and supply chain workflows for global operations.",
    problem: "A legacy monolithic system caused 48-hour data synchronization delays and frequent production outages during peak load, blocking international shipments.",
    solution: "Designed a production-grade Microservices architecture using NestJS and RabbitMQ. Applied CQRS pattern and distributed caching to ensure high availability and data consistency.",
    impact: "Eliminated reporting latency, achieving 100% real-time accuracy for 10k+ daily shipments. Reduced CI/CD deployment cycles by 50% through automated infrastructure scaling.",
    stack: ["NestJS", "TypeScript", "Microservices", "RabbitMQ", "PostgreSQL", "Docker"],
    imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1769686793/sap-s4hana-cloud-public-edition-lb-hmpg-producthero_XL_r8mw9d.webp"
  },
  {
    id: "learnworlds",
    title: "LearnWorlds - LMS Platform",
    url: "https://www.learnworlds.com",
    role: "Senior Full-Stack Engineer",
    summary: "A premium all-in-one Learning Management System (LMS) for creating and selling online courses.",
    problem: "Creators struggled with fragmented tools for course hosting, marketing, and community building. The platform needed a unified, high-performance solution.",
    solution: "Refactored the core course player using React/Next.js for 50% faster load times. Implemented a robust interactive video editor and real-time community engagement features.",
    impact: "Empowered 10k+ course creators to monetize content effectively. Increased user engagement by 35% through the new interactive video learning module.",
    stack: ["Next.js", "React", "Node.js", "GraphQL", "Video.js"],
    imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1769685693/gl9jrUih6Nfa08grOvcSfmLebAyiGUkP7Q_zhrpxa.png"
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
    imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1770546599/pad_screenshot_A0O7A8N9G2_houhrc.png"
  },
  {
    id: "fitgmr",
    title: "FitGMR",
    url: "https://www.fitgmr.gg/",
    role: "Full-Stack & Mobile Engineer",
    summary: "Health and performance dashboard for esports athletes and teams.",
    problem: "The existing mobile app suffered from crashes and sync issues. The web dashboard lacked real-time visibility into athlete performance metrics.",
    solution: "Stabilized the React Native codebase, reducing crash rate to <1%. Built a high-performance GraphQL API to serve complex analytics data to the React dashboard efficiently.",
    impact: "Stabilized the mobile experience leading to a 4.8/5 store rating. Empowered coaches with real-time data, directly improving team training outcomes.",
    stack: ["React", "React Native", "Node.js", "GraphQL", "PostgreSQL"],
    imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1770546933/FITGMR_Graphic_kb1ngj.webp"
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
    imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1770547426/Screenshot_2026-02-08_161323_bmlefq.png"
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
    imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1770547538/Screenshot_2026-02-08_161514_loqff3.png"
  }
];
