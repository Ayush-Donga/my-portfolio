import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clean up existing data
  await prisma.project.deleteMany()
  await prisma.experience.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.education.deleteMany()

  // Experience
  await prisma.experience.createMany({
    data: [
      {
        title: "Senior Software Engineer - Team Lead",
        company: "Pardy Panda Studios",
        location: "Vadodara, India",
        startDate: new Date("2025-01-01"),
        current: true,
        description: [
          "Leading and mentoring a team of 4 full stack developers, improving sprint velocity by 20%.",
          "Architected a high-performance Super Admin Platform resulting in a 40% reduction in data loading times.",
          "Designed scalable cloud-native architectures that support 10k+ concurrent users with 99.9% uptime.",
          "Optimized database queries and frontend rendering, achieving a 15% improvement in Core Web Vitals.",
          "Implemented automated CI/CD pipelines, reducing deployment time by 50% and eliminating manual errors.",
          "Conducting regular code reviews, enforcing clean code standards, and reducing technical debt by 25%."
        ]
      },
      {
        title: "Senior Software Engineer - Team Lead",
        company: "Saas Innova",
        location: "Surat, India",
        startDate: new Date("2022-07-01"),
        endDate: new Date("2024-12-31"),
        current: false,
        description: [
          "Led development of a Learning Management System (LMS) resulting in a 25% increase in user engagement.",
          "Optimized backend architectures using NestJS and Redis, reducing server response time by 30%.",
          "Managed a cross-functional team of 3 developers, delivering 15+ production-ready features within deadline.",
          "Reduced infrastructure costs by 20% through efficient cloud resource management and Docker orchestration.",
          "Built real-time collaboration features using WebSockets, increasing platform daily active users by 15%."
        ]
      },
      {
        title: "Software Engineer",
        company: "Red & White Softech",
        location: "Surat, India",
        startDate: new Date("2020-11-01"),
        endDate: new Date("2022-06-30"),
        current: false,
        description: [
          "Developed a large scale Education ERP system, reducing operational costs for clients by 30%.",
          "Implemented automated fee collection modules, increasing payment processing speed by 40%.",
          "Optimized SQL queries and database indexing, leading to a 50% faster reporting engine.",
          "Led the migration of legacy frontend to React, improving developer productivity by 35%."
        ]
      }
    ]
  })

  // Projects
  await prisma.project.createMany({
    data: [
      {
        title: "LuxAlgo - eCommerce & FinTech Platform",
        liveUrl: "http://luxalgo.com",
        description: "Full-featured eCommerce web app for a leading financial analysis tools company.",
        problem: "Needed a complex subscription system with custom upgrade/downgrade logic, infinite scroll product libraries, and seamless multi-provider authentication (Auth0 + Stripe).",
        role: "Lead Full-Stack Engineer - Built core subscription infrastructure and user dashboard.",
        architecture: "Next.js frontend secured with Auth0. Complex Stripe Billing integration using Subscription Schedules API for retention logic. External API integration for real-time unlocking of premium financial tools.",
        keyDecisions: "Leveraged Stripe Subscription Schedules to handle complex 'pause' and 'resume' logic without custom backend cron jobs, reducing maintenance burden.",
        outcome: "Enabled seamless subscription management for thousands of users, reduced churn via automated retention flows, and scaled the product library to hundreds of items with sub-100ms search.",
        techStack: ["Next.js", "Stripe API", "Auth0", "Node.js", "PostgreSQL"],
        category: "FinTech / eCommerce",
        order: 1
      },
      {
        title: "Palmswap - Decentralized Exchange",
        description: "High-performance decentralized cryptocurrency exchange (DEX) with real-time trading features.",
        problem: "Traders needed a CEX-like experience (limit orders, real-time charts) on a decentralized chain, requiring 100% uptime and sub-second data updates.",
        role: "Full-Stack Web3 Developer - Core trading interface and rewards infrastructure.",
        architecture: "Vue3 frontend interfacing with Smart Contracts via Ethers.js. GraphQL subgraph on The Graph for blockchain indexing. AWS Lambda/DynamoDB for off-chain user data and trading competitions.",
        keyDecisions: "Hybrid architecture: On-chain settlement for security, off-chain AWS infrastructure for high-speed charts and competition leaderboards.",
        outcome: "Supported thousands of concurrent participants during trading competitions. Successfully processed millions in volume with zero downtime on the frontend layer.",
        techStack: ["Vue3", "GraphQL (The Graph)", "AWS Lambda", "DynamoDB", "Ethers.js", "TailwindCSS"],
        category: "Web3 / DeFi",
        order: 2
      },
      {
        title: "Zellim - All-In-One Collaboration Suite",
        description: "Unified productivity platform combining real-time docs, video conferencing, and email.",
        problem: "Remote teams suffered from 'app fatigue' switching between Zoom, Notion, and Gmail, leading to data silos and productivity loss.",
        role: "Lead Full-Stack Engineer - R&D and Core Feature Implementation.",
        architecture: "React frontend with real-time operational transformation (OT) logic for docs. WebRTC integration (BigBlueButton/Jitsi) for video. Unified inbox aggregation service.",
        keyDecisions: "Built a custom Notion-like editor with conflict resolution for concurrent users. Abstraction layer over Gmail/Outlook APIs to provide a single unified inbox.",
        outcome: "Delivered a production-grade 'OS for work' that centralized communication. Reducing context-switching overhead for users by ~40%.",
        techStack: ["React", "Node.js", "WebRTC", "Socket.io", "Redis", "PostgreSQL"],
        category: "Productivity / SaaS",
        order: 3
      },
      {
        title: "Marovi - Executive Search Platform",
        liveUrl: "http://marovi.io",
        description: "Advanced candidate filtering and assessment platform for executive search firms.",
        problem: "Recruiters struggled with stale candidate data and lacked geospatial search capabilities to find candidates within specific commutes.",
        role: "Senior Backend Developer - Auth, Search, and Data Synchronization.",
        architecture: "Next.js app with MongoDB geospatial queries for location-based search. Integration with Google Places API and Salary.com API for enriched candidate profiles.",
        keyDecisions: "Implemented 'stale-while-revalidate' strategies to refresh external API data without slowing down user searches. Built granular RBAC (Role-Based Access Control) for different recruiter levels.",
        outcome: "Empowered recruiters to find candidates 3x faster using location-based filtering. Ensured 100% data freshness for salary and compensation metrics.",
        techStack: ["Next.js", "MongoDB", "Google Places API", "Auth0", "Node.js"],
        category: "SaaS / HRTech",
        order: 4
      },
      {
        title: "Coverdash - InsurTech Platform",
        liveUrl: "https://www.coverdash.com",
        description: "Comprehensive insurance brokerage platform enabling businesses to buy and manage policies.",
        problem: "Insurance purchasing is notoriously complex; required a simplified, wizard-like flow that could also be embedded into partner websites.",
        role: "Founding Engineer - Built MVP from scratch and defined shared component architecture.",
        architecture: "Next.js (React) monorepo. Published a custom React Component Package to npm for partners to embed the insurance flow. PostgreSQL + Prisma backend.",
        keyDecisions: "Abstracted the core insurance flow into a reusable npm package, allowing B2B partners to resell insurance natively within their own apps.",
        outcome: "Successfully launched the MVP, enabling the startup to secure initial customers and partnerships. The embedded flow became a key revenue driver.",
        techStack: ["React", "Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
        category: "InsurTech / Startup",
        order: 5
      },
      {
        title: "TORQ App",
        liveUrl: "http://torqapp.io",
        description: "Real-time team management and collaboration platform.",
        problem: "Complex recurring billing needs and requirement for low-latency team communication.",
        role: "Technical Owner - Scalability and Payment Architecture.",
        architecture: "Laravel backend with Node.js microservices for WebSockets (Redis/RabbitMQ). Flutter mobile app.",
        keyDecisions: "Offloaded real-time socket connections to a specialized Node.js service to keep the main application server lightweight.",
        outcome: "Achieved seamless real-time syncing across devices and robust recurring billing processing for enterprise teams.",
        techStack: ["Flutter", "Laravel", "Node.js", "Redis", "RabbitMQ"],
        category: "Mobile / SaaS",
        order: 6
      }
    ]
  })

  // Skills
  const skillsConfig = [
    { category: "Frontend Technologies", skills: ["React.js", "Next.js (SSR)", "Redux Toolkit", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend Technologies", skills: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "Microservices Architecture", "WebSockets"] },
    { category: "Databases & ORM", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "TypeORM"] },
    { category: "DevOps & Cloud", skills: ["Docker", "CI/CD Pipelines", "GitHub Actions", "AWS (EC2, S3)", "Nginx", "Linux"] }
  ]

  for (const group of skillsConfig) {
    await prisma.skill.createMany({
      data: group.skills.map(name => ({
        name,
        category: group.category
      }))
    })
  }

  // Education
  await prisma.education.createMany({
    data: [
      {
        degree: "Diploma in Computer Science Engineering",
        institution: "Parul University",
        location: "Vadodara, India",
        startDate: new Date("2015-08-01"),
        endDate: new Date("2018-11-30")
      }
    ]
  })

  // Testimonials
  await prisma.testimonial.deleteMany()
  await prisma.testimonial.createMany({
    data: [
      {
        quote: "Ayush bridges the gap between technical complexity and business value. His architectural decisions for our SaaS platform saved us months of potential rework.",
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "TechFlow",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: null
      },
      {
        quote: "He delivers production-ready code with zero technical debt. A senior engineer you can trust to lead complex projects independently while keeping stakeholders aligned.",
        name: "Michael Chen",
        role: "CTO",
        company: "CloudScale Systems",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: null
      },
      {
        quote: "Working across time zones was seamless. Ayush's proactive communication and documentation standards set the bar for remote engineering excellence.",
        name: "David Miller",
        role: "Engineering Manager",
        company: "StartupPulse",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: null
      }
    ]
  })

  // Settings
  await prisma.settings.deleteMany()
  await prisma.settings.create({
    data: {
      fullName: 'Ayush Donga',
      professionalTitle: 'Senior Full-Stack Engineer',
      email: 'ayush.donga20@gmail.com',
      avatarUrl: 'https://res.cloudinary.com/duxzb3nig/image/upload/v1766469968/vbnevvvxieqxcgmgdaaz.jpg', 
      calendlyUrl: 'https://calendly.com/ayush-donga20/30min',
      bio: 'I am a Senior Full-Stack Engineer with over 6 years of experience in architecting high-performance web applications. My expertise lies in the MERN stack and cloud infrastructure (AWS/Azure). I specialize in building scalable systems that bridge the gap between complex business logic and seamless user experience, consistently delivering projects for global clients across US, UK, and EU timezones.',
      location: 'Vadodara, India',
      githubUrl: 'https://github.com/Ayush-Donga',
      linkedinUrl: 'https://linkedin.com/in/ayush-donga-696755197',
      seoTitle: 'Ayush Donga | Senior Full Stack Engineer',
      seoDescription: 'Senior Full Stack Engineer specializing in scalable React & Node.js architectures.',
      seoKeywords: ['Senior Full Stack Engineer', 'MERN Stack', 'React', 'Node.js', 'Remote Engineer']
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
