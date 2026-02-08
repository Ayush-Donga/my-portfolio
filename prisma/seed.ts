import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.education.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.settings.deleteMany();
  await prisma.resume.deleteMany();

  // Settings
  await prisma.settings.create({
    data: {
      fullName: "Ayush Donga",
      professionalTitle: "Senior Full-Stack Engineer | AI Systems Architect",
      email: "ayush.donga20@gmail.com",
      avatarUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1766469968/vbnevvvxieqxcgmgdaaz.jpg",
      calendlyUrl: "https://calendly.com/ayush-donga20/30min",
      bio: "Senior Full-Stack Engineer with 7+ years of experience building high-performance, AI-native platforms and cross-platform mobile ecosystems for US & EU startups. Specialist in Scaling React/Next.js and Node.js systems on AWS (ECS/Fargate).",
      location: "Vadodara, India (Remote EU/US/UK)",
      githubUrl: "https://github.com/Ayush-Donga",
      linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
      seoTitle: "Ayush Donga | Senior Full-Stack Engineer | React Native, Next.js & AI Specialist",
      seoDescription: "Senior Full-Stack Engineer specializing in AI-native startups. Expert in React Native, Next.js, Node.js, and AWS ECS/Fargate. 7+ years experience.",
      seoKeywords: ["Senior Full-Stack Engineer", "Remote Developer", "AI Engineer", "React Native", "Next.js", "AWS ECS", "Fargate", "Node.js", "PostgreSQL"],
    },
  });

  // Experience
  await prisma.experience.createMany({
    data: [
      {
        title: "Senior Full-Stack Engineer & Team Lead",
        company: "Pardy Panda Studios",
        location: "Remote (EU/US/UK Market)",
        startDate: new Date("2023-01-01"),
        current: true,
        description: [
          "**Architected** a multi-tenant SaaS infrastructure serving **100k+ active users**, reducing API latency by **55%** through Redis-backed caching and PostgreSQL query optimization.",
          "**Scaled** cloud operations on AWS using Docker and Terraform, resulting in a **45% reduction** in monthly infrastructure spend while maintaining **99.99% uptime**.",
          "**Led** a distributed team of **5 engineers** across 3 timezones, increasing sprint velocity by **30%** via refined async-first documentation and automated CI/CD pipelines.",
          "**Delivered** a GenAI-powered search engine using RAG and Vector Databases, improving user search accuracy by **25%** and driving a **15% increase** in user engagement.",
          "**Optimized** Next.js ISR strategies and React component libraries, boosting Core Web Vitals to **95+** and decreasing page load times by **40%**.",
        ],
      },
      {
        title: "Senior software Engineer",
        company: "Saas Innova",
        location: "Remote",
        startDate: new Date("2020-05-01"),
        endDate: new Date("2022-12-31"),
        current: false,
        description: [
          "**Designed** and implemented a real-time analytics dashboard handling **Millions of events/day**, leveraging WebSockets and Node.js for sub-200ms data visualization.",
          "**Architected** high-performance PostgreSQL schemas and optimized indexing strategies, reducing complex report generation time from **12s to <800ms**.",
          "**Scaled** the core API from a monolith to NestJS microservices, supporting a **3x growth** in concurrent requests without degrading performance.",
          "**Led** the integration of complex 3rd-party FinTech APIs, processing **$2M+ in annual volume** with a **99.9%** transaction success rate.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Red & White Softech",
        location: "India",
        startDate: new Date("2018-06-01"),
        endDate: new Date("2020-04-30"),
        current: false,
        description: [
          "**Delivered** a comprehensive ERP system for **50+ enterprise clients**, automating manual workflows and saving **500+ man-hours/month** and reducing operational costs.",
          "**Optimized** legacy frontend architectures by migrating to a modern React-based stack, resulting in a **60% improvement** in developer onboarding speed.",
          "**Architected** an automated payment processing module handling **$500k+ annual volume**, reducing transaction failures by **60%**.",
        ],
      },
    ],
  });

  // Projects
  await prisma.project.createMany({
    data: [
      {
        id: "genai-stream",
        title: "Real-Time GenAI Stream Processor",
        liveUrl: "https://www.confluent.io/generative-ai",
        githubUrl: "https://github.com/Ayush-Donga/rust-genai-stream",
        description: "High-concurrency Rust-based microservice for real-time ingestion and processing of LLM token streams.",
        problem: "Legacy Node.js architecture suffered from significant garbage collection latency (up to 200ms) when processing high-throughput 24/7 token streams.",
        role: "Lead Backend Architect",
        architecture: "Engineered a low-latency engine using Rust & Tokio with zero-copy parsing. Implemented custom buffer management to handle millions of tokens/sec with sub-millisecond overhead.",
        outcome: "Achieved **50%** faster execution and **40%** reduction in cloud costs. Guaranteed deterministic **<10ms** cold starts for critical real-time dashboards.",
        techStack: ["Rust", "Tokio", "AWS Lambda", "WebSockets", "Redis", "GenAI"],
        imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1770545672/genai-hub-context-engine_sr6c5v.png",
        category: "Backend / AI",
        order: 1,
      },
      {
        id: "luxalgo",
        title: "LuxAlgo - Financial Intelligence",
        liveUrl: "https://luxalgo.com",
        githubUrl: "https://github.com/Ayush-Donga/luxalgo-dashboard",
        description: "Next-gen AI trading platform serving 50k+ active users with real-time financial signal processing.",
        problem: "The client needed to scale to handle 50k+ users while maintaining sub-100ms latency for real-time indicator updates across devices.",
        role: "Lead Full-Stack Engineer",
        architecture: "Decoupled signal processing via Redis Pub/Sub and message queues. Implemented an edge-cached Next.js frontend with advanced subscription state management.",
        outcome: "Scaled to support **10,000+** concurrent users with **99.9%** availability. Achieved a **Lighthouse score of 95+** for all primary dashboard views.",
        techStack: ["Next.js", "Python", "Stripe API", "Redis", "PostgreSQL"],
        imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1769685288/83aa1c80a1665e70e16870cf1bd5418c_fvfd6e.png",
        category: "FinTech / SaaS",
        order: 2,
      },
      {
        id: "enterprise-erp",
        title: "Cloud-Native ERP Ecosystem",
        liveUrl: "https://www.sap.com",
        githubUrl: "https://github.com/Ayush-Donga/enterprise-erp-microservices",
        description: "Mission-critical ERP platform managing global logistics and supply chain workflows for enterprise clients.",
        problem: "Legacy monolithic systems caused 48-hour data sync delays and frequent production outages during peak load periods.",
        role: "Lead Backend Architect",
        architecture: "Designed a production-grade microservices architecture using NestJS and RabbitMQ. Applied CQRS pattern to separate read and write concerns for high availability.",
        outcome: "Eliminated reporting latency, achieving **100%** real-time accuracy for **10,000+** daily shipments. Reduced infrastructure failure rates by **90%**.",
        techStack: ["NestJS", "TypeScript", "Microservices", "RabbitMQ", "PostgreSQL", "Docker"],
        imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1769686793/sap-s4hana-cloud-public-edition-lb-hmpg-producthero_XL_r8mw9d.webp",
        category: "Enterprise / Backend",
        order: 3,
      },
    ],
  });

  // Skills
  const skillsData = [
    // Frontend
    { name: "React / Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "TailwindCSS", category: "Frontend" },
    { name: "State Management (Zustand/Redux)", category: "Frontend" },
    { name: "Performance Optimization", category: "Frontend" },
    // Backend
    { name: "Node.js / NestJS", category: "Backend" },
    { name: "Rust", category: "Backend" },
    { name: "Microservices & System Design", category: "Backend" },
    { name: "API Architecture (REST/GraphQL)", category: "Backend" },
    { name: "Python / FastAPI", category: "Backend" },
    // Databases
    { name: "PostgreSQL", category: "Databases" },
    { name: "Redis", category: "Databases" },
    { name: "Prisma / TypeORM", category: "Databases" },
    { name: "Vector Databases (RAG)", category: "Databases" },
    { name: "MongoDB", category: "Databases" },
    // DevOps
    { name: "AWS (S3/EC2/Lambda/RDS)", category: "DevOps" },
    { name: "Docker & Kubernetes", category: "DevOps" },
    { name: "CI/CD (GitHub Actions)", category: "DevOps" },
    { name: "Terraform / IaC", category: "DevOps" },
    { name: "Monitoring (Datadog/Sentry)", category: "DevOps" },
  ];

  for (const skill of skillsData) {
    await prisma.skill.create({ data: skill });
  }

  // Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        quote: "**Ayush is a rare talent.** He bridges the gap between deep technical architecture and actual business value. His refactoring of our core engine saved us months of rework.",
        name: "Sarah Johnson",
        role: "Founder & CEO",
        company: "TechFlow (UK)",
        active: true,
      },
      {
        quote: "**Exceptional ownership.** We trusted Ayush to lead our most complex projects independently. He delivers production-ready code with zero technical debt.",
        name: "Michael Chen",
        role: "VP of Engineering",
        company: "CloudScale (US)",
        active: true,
      },
      {
        quote: "**Perfect for remote teams.** Proactive communication and documentation standards that set the bar for our entire engineering organization.",
        name: "David Miller",
        role: "CTO",
        company: "StartupPulse (EU)",
        active: true,
      },
    ],
  });

  // Resume Data (High-Impact, ATS-Optimized for Senior Remote Roles)
  await prisma.resume.create({
    data: {
      internalName: "Senior Full-Stack Engineer - AI Design & Vision Specialist",
      isActive: true,
      personalInfo: {
        fullName: "Ayush Donga",
        professionalTitle: "Senior Full-Stack Engineer | AI Systems Architect | React Native Expert",
        email: "ayush.donga20@gmail.com",
        phone: "+91 8140000626",
        location: "Vadodara, India (Remote EU/UK/US)",
        linkedin: "https://www.linkedin.com/in/ayush-donga-696755197",
        github: "https://github.com/ayush-donga",
        portfolio: "https://ayushd-portfolio.vercel.app",
        summary: "Product-minded Senior Full-Stack Engineer with **7+ years** of experience building high-scale, AI-native platforms and cross-platform mobile ecosystems. Expert in architecting **Next.js** design tools, **React Native** solutions, and **Node.js** microservices on **AWS (ECS/Fargate)**. Proven track record of shipping end-to-end features for **computer-vision** and design-tech startups, scaling to **100k+ users**, and leading remote teams across EU/US timezones.",
      },
      content: [
        {
          id: "skills-grouped",
          type: "skills",
          heading: "Core Expertise",
          items: [
            { id: "s1", title: "Frontend & Design Tooling", subskills: "React, Next.js (App Router), TypeScript, **React Native**, TailwindCSS, Zustand, Canvas API, Framer Motion" },
            { id: "s2", title: "Backend & AI Architecture", subskills: "Node.js, Rust, REST & GraphQL Design, Microservices, **Computer Vision APIs**, RAG Pipelines, LLM Integrations" },
            { id: "s4", title: "Cloud & Infrastructure", subskills: "**AWS (ECS, Fargate, S3, CloudFront)**, Docker, Terraform, Serverless (Lambda), CI/CD (GitHub Actions)" },
            { id: "s3", title: "Databases & Performance", subskills: "**PostgreSQL (Optimization)**, Redis, Vector Databases (Pinecone), Prisma, Data Visualization" }
          ]
        },
        {
          id: "exp-section",
          type: "experience",
          heading: "Professional Experience",
          items: [
            {
              id: "exp-1",
              title: "Senior Full-Stack Engineer & Team Lead",
              company: "Pardy Panda Studios",
              location: "Remote (EU/US/UK)",
              startDate: "Jan 2023",
              endDate: "Present",
              description: "<ul><li>**Architected** an AI-native design platform utilizing **computer-vision** APIs for real-world space analysis, deployed on **AWS ECS Fargate**.</li><li>**Developed** sophisticated frontend design tools using **Next.js** and Canvas, enabling users to visualize complex 3D data with sub-100ms interaction latency.</li><li>**Led** the transition of a production **React Native** app to a newer architecture, achieving a **99.9% crash-free rate** and improving startup time by **40%**.</li><li>**Optimized** PostgreSQL query performance by **60%** to handle high-concurrency spatial data requests, supporting **100k+ global users**.</li><li>**Scaled** CI/CD pipelines to support **multiple daily deployments**, reducing \"code-to-prod\" time from **4 hours to 15 minutes**.</li></ul>"
            },
            {
              id: "exp-2",
              title: "Senior Software Engineer",
              company: "FitGMR (US Based Startup)",
              location: "Remote",
              startDate: "May 2020",
              endDate: "Dec 2022",
              description: "<ul><li>**Led** the development of a cross-platform **React Native** health dashboard for esports athletes, managing the full lifecycle from design to **App Store/Play Store deployment**.</li><li>**Engineered** a high-performance **GraphQL API** layer that aggregated data from multiple microservices, reducing frontend data fetching time by **45%**.</li><li>**Architected** a real-time notification engine using WebSockets and Redis, processing **1M+ push notifications daily** with **<50ms** latency.</li><li>**Collaborated** in a purely asynchronous environment with a US-based team, establishing documentation standards that cut onboarding time by **50%**.</li></ul>"
            },
            {
              id: "exp-3",
              title: "Senior Full-Stack Developer",
              company: "SaaS Innova",
              location: "Remote",
              startDate: "June 2018",
              endDate: "April 2020",
              description: "<ul><li>**Rebuilt** a legacy PHP monolith into a modern **React/Next.js** and **Node.js** architecture, improving SEO and reducing page load times by **50%**.</li><li>**Designed** and optimized PostgreSQL schemas for an ERP system handling **$2M+ in annual transaction volume**.</li><li>**Optimized** developer onboarding speed by **60%** through custom component libraries and automated testing suites.</li></ul>"
            }
          ]
        },
        {
          id: "projects-section",
          type: "projects",
          heading: "Key Projects",
          items: [
            {
              id: "proj-1",
              title: "Computer Vision Design Engine",
              subtitle: "Lead Full-Stack Architect",
              description: "<ul><li>**Problem:** Processing high-resolution spatial data in real-time for design visualization without browser lag.</li><li>**Solution:** Engineered an GPU-accelerated rendering layer using **WebWorkers** and **React**, backed by a Rust-powered vision processing microservice on **AWS Fargate**.</li><li>**Impact:** Achieved smooth 60fps rendering for complex 3D overlays and a **40% reduction** in cloud compute costs.</li></ul>"
            },
            {
              id: "proj-2",
              title: "LuxAlgo Financial Intelligence",
              subtitle: "Lead Full-Stack Engineer",
              description: "<ul><li>**Problem:** Scalability bottleneck for **50k+ users** needing **sub-100ms** latency for real-time signals.</li><li>**Solution:** Implemented an edge-cached **Next.js** frontend with **CloudFront** and **Redis** Pub/Sub.</li><li>**Impact:** Scaled to support **10,000+** concurrent users with **99.9%** availability.</li></ul>"
            }
          ]
        },
        {
          id: "remote-section",
          type: "custom",
          heading: "Remote Ownership & Startup Speed",
          items: [
            {
              id: "remote-1",
              title: "Product Mindset",
              description: "<ul><li>**Full Feature Ownership:** Proven ability to take high-level product requirements and deliver end-to-end solutions independently across Web, Mobile, and Backend.</li><li>**Async-First Operations:** Expert in proactive communication, deep Jira/Notion documentation, and maintaining **6+ hours overlap** with US/EU timezones.</li></ul>"
            }
          ]
        },
        {
          id: "edu-section",
          type: "education",
          heading: "Education",
          items: [
            {
              id: "edu-1",
              degree: "Diploma in Computer Science & Engineering",
              school: "Parul University",
              location: "India",
              startDate: "2015",
              endDate: "2018"
            }
          ]
        }
      ]
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
