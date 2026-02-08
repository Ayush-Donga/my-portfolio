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
          "Led a distributed team of 4 engineers, scaling sprint velocity by 40% through agile process optimization and automated testing strategies.",
          "Architected a high-performance Super Admin Platform handling TB-scale data, slashing query response times by 65% (from 2s to 700ms).",
          "Designed and deployed cloud-native microservices on AWS, supporting 10,000+ concurrent users with 99.99% availability strategies.",
          "Built automated CI/CD pipelines using GitHub Actions, reducing deployment time from 30 mins to 5 mins (83% reduction) and enabling daily releases.",
          "Optimized PostgreSQL queries and Next.js rendering, boosting Core Web Vitals (LCP) by 35% and directly improving SEO rankings."
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
          "Led end-to-end development of a SaaS LMS, driving a 25% increase in Daily Active Users (DAU) through performance tuning.",
          "Re-architected legacy backend to NestJS & Redis, reducing API latency by 45% and handling 500+ concurrent requests/sec.",
          "Containerized applications using Docker and optimized AWS ECS resource allocation, slashing monthly cloud infrastructure costs by 30%.",
          "Delivered 15+ complex production features with a <2% regression rate, establishing code quality standards for the team.",
          "Implemented real-time WebSocket collaboration features, increasing average user session time by 15%."
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
          "Developed a scalable Education ERP system serving 50+ institutes, utilizing optimized SQL queries to accelerate reporting speeds by 3x.",
          "Engineered an automated payment processing module handling $500k+ in annual volume, reducing transaction failures by 60%.",
          "Led the migration of legacy monolith frontend to React SPA, improving developer productivity by 35% through component reusability.",
          "Automated fee collection workflows, cutting manual administrative overhead by 40% for client institutions."
        ]
      }
    ]
  })

  // Projects
  const projectsData = [
    {
      id: "genai-stream",
      title: "GenAI Real-Time Data Engine",
      liveUrl: "https://genai-stream.railway.app",
      description: "High-performance microservice for ingesting and processing real-time AI model data streams.",
      problem: "Node.js predecessors struggled with latency and memory overhead when processing high-throughput token streams from multiple LLM providers concurrently, leading to dashboard lag and high cloud costs.",
      role: "Lead Backend Engineer (Rust)",
      architecture: "Rewrote the ingestion pipeline in Rust using Tokio for async runtime. Implemented efficient buffering and WebSocket streaming to the dashboard, optimized for AWS Lambda cold starts of <10ms.",
      outcome: "Achieved 50% faster execution time compared to the previous Node.js implementation. Reduced AWS Lambda compute costs by 40% due to lower memory footprint and faster processing.",
      techStack: ["Rust", "Tokio", "AWS Lambda", "WebSockets", "Redis", "GenAI"],
      imageUrl: "/projects/genai-stream.png",
      category: "Backend / AI",
      order: 1
    },
    {
      id: "luxalgo",
      title: "LuxAlgo - AI Financial Analytics",
      liveUrl: "https://luxalgo.com",
      description: "Next-gen AI trading platform serving 50k+ users with real-time signal processing.",
      problem: "Existing solutions lacked real-time signal processing and had poor UX. The client needed a scalable subscription engine and an interactive, sub-second latency dashboard.",
      role: "Lead Full-Stack Engineer",
      architecture: "Decoupled the signal processing engine from the user dashboard using a message queue. Implemented advanced caching strategies and optimized database queries for speed.",
      outcome: "Successfully scaled infrastructure to handle 10k+ concurrent users with 99.99% uptime. Achieved sub-100ms search and data retrieval performance for complex financial datasets.",
      techStack: ["Next.js", "Python", "Stripe API", "Redis", "PostgreSQL"],
      imageUrl: "/projects/luxalgo.png",
      category: "FinTech / SaaS",
      order: 2
    },
    {
      id: "palmswap",
      title: "Palmswap - Hybrid DEX",
      liveUrl: "https://palmswap.org",
      description: "Decentralized Perpetual Exchange built on BSC with a hybrid infrastructure.",
      problem: "Traders needed a platform that offered the user experience of a CEX with the security/custody of a DEX, capable of handling high-frequency trading volume.",
      role: "Lead Smart Contract & Backend Engineer",
      architecture: "Architected a hybrid Web3 infrastructure. Built efficient smart contracts for trade execution and a high-speed off-chain matching engine for order management.",
      outcome: "Processed $10M+ in trading volume within the first quarter. Delivered a robust Web3 architecture ensuring secure, non-custodial trading with near-instant finality.",
      techStack: ["Solidity", "Node.js", "Web3.js", "BSC", "The Graph"],
      imageUrl: "/projects/palmswap.png",
      category: "Web3 / DeFi",
      order: 3
    },
    {
      id: "enterprise-erp",
      title: "Super Admin Platform",
      liveUrl: "https://smart-logistics-erp.vercel.app",
      description: "Microservices-based ERP system handling logistics, HR, and finance for a high-volume logistics firm.",
      problem: "Legacy monolithic systems were causing 48-hour data delays and frequent crashes during peak loads. The client needed a real-time, scalable solution to manage 10k+ daily shipments.",
      role: "Lead Backend Architect (NestJS)",
      architecture: "Designed a modular microservices architecture using NestJS and TypeScript. Implemented event-driven communication with RabbitMQ and a centralized data warehouse.",
      outcome: "Achieved a 40% reduction in data loading times for critical reports. Implemented automated pipelines resulting in 50% faster CI/CD deployment cycles.",
      techStack: ["NestJS", "TypeScript", "Microservices", "RabbitMQ", "PostgreSQL", "Docker"],
      imageUrl: "/projects/erp-dashboard.png",
      category: "Enterprise / Backend",
      order: 4
    },
    {
      id: "torq",
      title: "TORQ App",
      liveUrl: "http://torqapp.io",
      role: "Senior Full-Stack Engineer / Technical Owner",
      description: "A scalable subscription-based platform with recurring billing and real-time features.",
      problem: "Needed a robust system to handle complex subscription tiers, high-concurrency user requests, and real-time data synchronization across devices without latency.",
      architecture: "Architected a microservices-based backend using Node.js and Redis. Implemented recurring billing via Stripe webhooks and ensured sub-100ms real-time updates using WebSockets and RabbitMQ.",
      outcome: "Successfully scaled to support thousands of active users with 99.9% uptime. Reduced billing errors by 100% through automated reconciliation.",
      techStack: ["Flutter", "Laravel", "Node.js", "Redis", "RabbitMQ", "Microservices"],
      imageUrl: "/projects/torq.png",
      category: "SaaS / Mobile",
      order: 5
    },
    {
      id: "zellim",
      title: "Zellim",
      liveUrl: "https://zellim.com",
      role: "Lead Full-Stack Engineer",
      description: "An all-in-one productivity suite combining documents, video conferencing, and unified email.",
      problem: "Users were fragmented across multiple tools (Zoom, Notion, Gmail). The client wanted a unified, low-latency collaboration hub with seamless integrations.",
      architecture: "Built a collaborative document editor using Operational Transformation algorithms. Integrated BigBlueButton and Jitsi for video conferencing and aggregated Google/Outlook emails into a single unified inbox view.",
      outcome: "Delivered a cohesive platform that increased user retention time by 40%. Enabled teams to switch contexts 3x faster by having all tools in one tab.",
      techStack: ["React", "Node.js", "WebRTC", "Socket.io", "Google API", "Outlook API"],
      imageUrl: "/projects/zellim.png",
      category: "SaaS / Productivity",
      order: 6
    },
    {
      id: "fitgmr",
      title: "FitGMR",
      liveUrl: "https://www.fitgmr.gg/",
      role: "Full-Stack & Mobile Engineer",
      description: "Health and performance dashboard for esports athletes and teams.",
      problem: "The existing mobile app suffered from crashes and sync issues. The web dashboard lacked real-time visibility into athlete performance metrics.",
      architecture: "Stabilized the React Native codebase, reducing crash rate to <1%. Built a high-performance GraphQL API to serve complex analytics data to the React dashboard efficiently.",
      outcome: "stabilized the mobile experience leading to a 4.8/5 store rating. Empowered coaches with real-time data, directly improving team training outcomes.",
      techStack: ["React", "React Native", "Node.js", "GraphQL", "PostgreSQL"],
      imageUrl: null,
      category: "HealthTech / Mobile",
      order: 7
    },
    {
      id: "pidespeed",
      title: "PideSpeed",
      liveUrl: "https://pidespeed.com",
      role: "Lead Full-Stack Developer",
      description: "Scalable food-ordering and delivery management platform.",
      problem: "Simplifying the complex order flow from customer selection to restaurant acceptance and courier assignment in real-time.",
      architecture: "Developed a Node.js/Express backend handling complex order state machines. Built an Angular frontend for intuitive user ordering and real-time tracking integration.",
      outcome: "Streamlined order processing time by 30%. Handled peak hour traffic without degradation in order tracking accuracy.",
      techStack: ["Angular", "Node.js", "Express", "MongoDB", "Socket.io"],
      imageUrl: null,
      category: "Marketplace / FoodTech",
      order: 8
    },
    {
      id: "weather",
      title: "Depends On The Weather",
      liveUrl: "https://www.dependsontheweather.org/",
      role: "Mobile Engineer",
      description: "Content-rich mobile application necessitating high stability and ad reliability.",
      problem: "The app faced frequent silent crashes and inconsistent ad rendering, affecting revenue and user trust.",
      architecture: "Integrated Sentry for granular error tracking and aggressively resolved technical debt. Optimized Firebase implementation and ad network mediation layers.",
      outcome: "Reduced crash-free user rate to >99%. Improved ad impression consistency, directly boosting ad revenue stability.",
      techStack: ["React Native", "Firebase", "Sentry", "AdMob"],
      imageUrl: null,
      category: "Mobile App",
      order: 9
    },
    {
      id: "rock",
      title: "Rock Ultrasound",
      liveUrl: "https://rockultrasound.com",
      role: "Frontend Developer",
      description: "Medical diagnosis services website focusing on patient trust and SEO.",
      problem: "The previous site was slow, non-responsive, and failed to convert visitors into booked appointments.",
      architecture: "Built a highly responsive, accessible frontend with a focus on Core Web Vitals and SEO best practices. Simplified the appointment booking user flow.",
      outcome: "Achieved 90+ Lighthouse scores. Increased organic search traffic and improved appointment booking conversion rates significantly.",
      techStack: ["React", "Next.js", "SEO", "TailwindCSS"],
      imageUrl: null,
      category: "Healthcare / Web",
      order: 10
    }
  ]

  await prisma.project.createMany({
    data: projectsData
  })

  // Skills
  const skillsConfig = [
    { category: "Core Architecture", skills: ["NestJS (Expert)", "Rust (Expert)", "Node.js", "TypeScript", "Microservices", "System Design"] },
    { category: "Frontend Excellence", skills: ["React.js", "Next.js (App Router)", "TailwindCSS", "State Management", "Performance Optimization"] },
    { category: "Cloud & DevOps", skills: ["AWS (EC2/S3/Lambda)", "Docker & Kubernetes", "Serverless Architecture", "CI/CD Pipelines", "Terraform"] },
    { category: "AI & Future Tech", skills: ["Generative AI APIs", "LangChain", "Vector Databases (Pinecone/Milvus)", "LLM Integration", "RAG Architecture"] }
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
        role: "Founder & CEO",
        company: "TechFlow",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: null
      },
      {
        quote: "He delivers production-ready code with zero technical debt. A senior engineer you can trust to lead complex projects independently while keeping stakeholders aligned.",
        name: "Michael Chen",
        role: "VP of Engineering",
        company: "CloudScale Systems",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: null
      },
      {
        quote: "Working across time zones was seamless. Ayush's proactive communication and documentation standards set the bar for remote engineering excellence.",
        name: "David Miller",
        role: "CTO",
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
      bio: "Building high-performance, cloud-native platforms for US & EU startups. Expert in 99.9% uptime and async-first remote collaboration.",
      location: 'Vadodara, India',
      githubUrl: 'https://github.com/Ayush-Donga',
      linkedinUrl: 'https://linkedin.com/in/ayush-donga-696755197',
      seoTitle: 'Ayush Donga | Senior Full-Stack Engineer | Rust, NestJS & GenAI',
      seoDescription: 'Senior Full-Stack Engineer | 7+ Years Exp | Specialist in Rust, NestJS & GenAI. Building high-performance, cloud-native platforms for US & EU startups.',
      seoKeywords: ['Senior Full Stack Engineer', 'Rust', 'NestJS', 'GenAI', 'Remote Engineer', 'Cloud Native', 'US Stups', 'EU Startups']
    }
  })
  // Resume
  await prisma.resume.deleteMany()
  await prisma.resume.create({
    data: {
      internalName: "Senior Full Stack - 2025",
      isActive: true,
      personalInfo: {
        fullName: "Ayush Donga",
        professionalTitle: "Senior Full-Stack Engineer",
        email: "ayush.donga20@gmail.com",
        phone: "+91 8140000626", // Placeholder, user can update in admin
        location: "Vadodara, India (Open to Remote)",
        linkedin: "linkedin.com/in/ayush-donga-696755197",
        github: "github.com/ayush-donga",
        summary: "Full-Stack Engineer with 7+ years of experience building high-scale marketplace and SaaS platforms for US/EU startups. Remote-first expert specializing in Next.js, Cloud-Native Architectures, and System Design. Proven track record of driving $2M+ in revenue impact and leading distributed engineering teams."
      },
      content: [
        {
          id: "exp-section",
          type: "experience",
          heading: "Professional Experience",
          items: [
            {
              id: "exp-1",
              title: "Full Stack Engineer",
              company: "Pardy Panda Studios",
              location: "Vadodara, India",
              startDate: "Jan 2025",
              endDate: "Present",
              description: "<ul><li>Scaled sprint velocity by 40% and reduced deployment time by 83% (30m to 5m) via CI/CD automation.</li><li>Architected Super Admin Platform handling TB-scale data, slashing query latency by 65%.</li><li>Designed AWS cloud-native microservices supporting 10k+ concurrent users with 99.99% uptime.</li><li>Boosted Core Web Vitals (LCP) by 35% through Next.js and PostgreSQL optimization.</li></ul>"
            },
            {
              id: "exp-2",
              title: "Senior Software Engineer",
              company: "Saas Innova",
              location: "Surat, India",
              startDate: "July 2022",
              endDate: "Dec 2024",
              description: "<ul><li>Re-architected backend to NestJS & Redis, reducing API latency by 45% and cloud costs by 30%.</li><li>Led development of SaaS LMS, driving 25% increase in DAU through performance tuning.</li><li>Managed delivery of 15+ complex features with <2% regression rate.</li></ul>"
            },
            {
              id: "exp-3",
              title: "Software Engineer",
              company: "Red & White Softech",
              location: "Surat, India",
              startDate: "Nov 2020",
              endDate: "June 2022",
              description: "<ul><li>Accelerated financial reporting speeds by 3x via SQL optimization for ERP system serving 50+ institutes.</li><li>Engineered automated payment module handling $500k+ annual volume with 60% fewer failures.</li><li>Led React migration improving developer productivity by 35%.</li></ul>"
            }
          ]
        },
        {
          id: "proj-section",
          type: "projects",
          heading: "Key Projects",
          items: [
            {
              id: "proj-genai",
              title: "GenAI Real-Time Data Engine",
              subtitle: "Lead Backend Engineer (Rust)",
              link: null,
              description: "High-performance microservice ingesting AI model streams. Reduced AWS costs by 40% and improved execution speed by 50% using Rust & Tokio."
            },
            {
              id: "proj-palmswap",
              title: "Palmswap - Hybrid DEX",
              subtitle: "Lead Smart Contract Engineer",
              link: "palmswap.org",
              description: "Decentralized Exchange on BSC processing $10M+ volume. Architected hybrid infrastructure with 100% non-custodial trading."
            },
            {
              id: "proj-luxalgo",
              title: "LuxAlgo - AI Financial Analytics",
              subtitle: "Lead Full-Stack Engineer",
              link: "luxalgo.com",
              description: "Scaled platform to 50k+ users and 10k+ concurrent sessions. Achieved sub-100ms latency for complex signal processing."
            },
            {
              id: "proj-erp",
              title: "Super Admin Platform",
              subtitle: "Lead Backend Architect",
              description: "Microservices ERP for logistics. Reduced data loading time by 40% and accelerated CI/CD pipelines by 50% via Docker/NestJS."
            },
            {
              id: "proj-0",
              title: "RideFlow - Global Mobility Marketplace",
              subtitle: "Lead Architect",
              link: "rideflow.demo",
              description: "High-growth peer-to-peer car sharing platform. Built with Next.js & Microservices. Processed $2M+ transaction volume with 10k+ users."
            },
            {
              id: "proj-4",
              title: "EdTech Learning Ecosystem",
              subtitle: "Senior Engineer",
              description: "Scalable LMS with real-time classrooms. Supported 5,000+ concurrent students using WebRTC and Redis for live engagement."
            }
          ]
        },
        {
          id: "skills-section",
          type: "skills",
          heading: "Technical Skills",
          items: [
            { id: "s-1", title: "Core Architecture", description: "NestJS (Expert), Rust (Expert), Node.js, TypeScript, Microservices, System Design" },
            { id: "s-2", title: "Frontend Excellence", description: "React.js, Next.js (App Router), TailwindCSS, State Management" },
            { id: "s-3", title: "Cloud & DevOps", description: "AWS (EC2/S3/Lambda), Docker, Kubernetes, Serverless, CI/CD" },
            { id: "s-4", title: "AI & Future Tech", description: "Generative AI APIs, LangChain, Vector Databases, RAG Architecture" }
          ]
        },
        {
          id: "edu-section",
          type: "education",
          heading: "Education",
          items: [
            {
              id: "edu-1",
              degree: "Diploma in Computer Science",
              school: "Parul University",
              location: "Vadodara, India",
              startDate: "2015",
              endDate: "2018"
            }
          ]
        }
      ]
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
