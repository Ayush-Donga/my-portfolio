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
      professionalTitle: "Senior Full-Stack Engineer | Systems Architect",
      email: "ayush.donga20@gmail.com",
      avatarUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1766469968/vbnevvvxieqxcgmgdaaz.jpg",
      calendlyUrl: "https://calendly.com/ayush-donga20/30min",
      bio: "Senior Full-Stack Engineer with 7+ years of experience building high-performance, cloud-native platforms for US & EU startups, specializing in scaling systems to 100k+ users and reducing infrastructure costs by 40%.",
      location: "Vadodara, India (Remote EU/US/UK)",
      githubUrl: "https://github.com/Ayush-Donga",
      linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
      seoTitle: "Ayush Donga | Senior Full-Stack Engineer | Node.js, Rust & AWS Specialist",
      seoDescription: "Senior Full-Stack Engineer with 7+ years exp targeting remote roles. Specialist in high-performance distributed systems, Rust, NestJS, and Cloud-Native architectures.",
      seoKeywords: ["Senior Full-Stack Engineer", "Remote Developer", "Systems Architect", "Rust", "NestJS", "AWS", "High-Performance Systems", "FinTech", "SaaS"],
    },
  });

  // Experience
  await prisma.experience.createMany({
    data: [
      {
        title: "Senior Software Engineer - Team Lead",
        company: "Pardy Panda Studios",
        location: "Remote (EU/US Focused)",
        startDate: new Date("2025-01-01"),
        current: true,
        description: [
          "Architected a scalable Super Admin Platform managing **TB-scale** data, reducing query response times by **65%** (from **2s** to **700ms**) using PostgreSQL indexing and materialized views.",
          "Leading a distributed team of **4** engineers, increasing sprint velocity by **40%** through automated testing and refined async workflows.",
          "Designed and deployed AWS microservices supporting **10,000+** concurrent users with **99.99%** availability and zero downtime deployments.",
          "Reduced deployment time by **83%** (from **30m** to **5m**) by re-engineering CI/CD pipelines with GitHub Actions.",
          "Optimized Next.js/Cloudfront delivery, boosting Core Web Vitals (LCP) by **35%**, directly improving SEO and user retention metrics.",
        ],
      },
      {
        title: "Senior Software Engineer - Team Lead",
        company: "Saas Innova",
        location: "Remote",
        startDate: new Date("2022-07-01"),
        endDate: new Date("2024-12-31"),
        current: false,
        description: [
          "Re-architected legacy monolithic infrastructure to NestJS & Redis microservices, slashing API latency by **45%** and handling **500+** requests/sec.",
          "Spearheaded development of a SaaS LMS platform, driving a **25%** increase in Monthly Recurring Revenue (MRR) through performance optimization.",
          "Implemented Docker-based containerization, reducing monthly cloud infrastructure spend by **30%** via optimized resource allocation.",
          "Developed real-time WebSocket communication features that boosted average user session duration by **15%** for interactive learning modules.",
          "Mentored junior engineers and enforced strict TDD practices, maintaining a **<2%** production regression rate.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Red & White Softech",
        location: "India",
        startDate: new Date("2020-11-01"),
        endDate: new Date("2022-06-30"),
        current: false,
        description: [
          "Engineered an automated payment gateway integration handling **$500k+** in annual volume, reducing transaction failure rates by **60%**.",
          "Architected a scalable Education ERP system serving **50+** institutions, accelerating reporting generation by **300%** through SQL query optimization.",
          "Led a legacy-to-React migration for a flagship product, improving internal developer productivity by **35%** via reusable UI libraries.",
          "Automated administrative workflows, cutting manual data entry overhead by **40%** for partner institutions.",
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
        architecture: "Engineered a low-latency engine using Rust & Tokio with zero-copy parsing. Implemented custom buffer management to handle millions of tokens/sec with sub-millisecond overhead.\n\n```rust\n// Optimized token buffer management\npub struct TokenStream {\n    buffer: Vec<u8>,\n    capacity: usize,\n}\n\nimpl TokenStream {\n    pub async fn process_next(&mut self) -> Result<()> {\n        let token = self.decoder.decode(&self.buffer)?;\n        self.dispatcher.send(token).await?;\n        Ok(())\n    }\n}\n```",
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
        architecture: "Decoupled signal processing via Redis Pub/Sub and message queues. Implemented an edge-cached Next.js frontend with advanced subscription state management.\n\n```typescript\n// Real-time signal subscription hook\nexport const useSignals = (userId: string) => {\n  const [signals, setSignals] = useState<Signal[]>([]);\n  \n  useEffect(() => {\n    const ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL);\n    ws.onmessage = (event) => {\n      const newSignal = JSON.parse(event.data);\n      setSignals(prev => [newSignal, ...prev].slice(0, 50));\n    };\n    return () => ws.close();\n  }, [userId]);\n  \n  return signals;\n}\n```",
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
    { name: "Rust (Tokio/Serde)", category: "Backend" },
    { name: "Microservices", category: "Backend" },
    { name: "System Design", category: "Backend" },
    { name: "Python / FastAPI", category: "Backend" },
    // Databases
    { name: "PostgreSQL", category: "Databases" },
    { name: "Redis", category: "Databases" },
    { name: "Prisma / TypeORM", category: "Databases" },
    { name: "MongoDB", category: "Databases" },
    { name: "Vector Databases", category: "Databases" },
    // DevOps
    { name: "AWS (EC2/S3/Lambda/RDS)", category: "DevOps" },
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

  // Resume Data (Synchronized with new portfolio copy)
  await prisma.resume.create({
    data: {
      internalName: "Senior Full Stack - Remote 2026",
      isActive: true,
      personalInfo: {
        fullName: "Ayush Donga",
        professionalTitle: "Senior Full-Stack Engineer | 7+ Years Exp | Specialist in Rust, NestJS",
        email: "ayush.donga20@gmail.com",
        phone: "+91 8140000626",
        location: "India (Open to Remote EU/UK/US)",
        linkedin: "linkedin.com/in/ayush-donga-696755197",
        github: "github.com/ayush-donga",
        portfolio: "ayushdonga.pro",
        summary: "High-impact Senior Engineer with **6+ years** of experience. Proven track record in scaling platforms for **100k+ concurrent users**, reducing infra costs by **40%**, and leading distributed teams across global timezones.",
      },
      content: [
         {
          id: "exp-section",
          type: "experience",
          heading: "Impact-Driven Experience",
          items: [
            {
              id: "exp-1",
              title: "Senior Full Stack Engineer / Lead",
              company: "Pardy Panda Studios",
              location: "Remote",
              startDate: "Jan 2025",
              endDate: "Present",
              description: "<ul><li>**Architected** Super Admin Platform handling **TB-scale data**, achieving **65% reduction** in query response time through PostgreSQL optimization.</li><li>**Led** distributed team of **4 engineers** to increase sprint velocity by **40%** via refined async workflows.</li><li>**Designed** AWS microservices supporting **10,000+ concurrent users** with **99.99% uptime**.</li><li>**Reduced** deployment time by **83%** via GitHub Actions re-engineering.</li></ul>"
            },
            {
              id: "exp-2",
              title: "Senior Software Engineer - Team Lead",
              company: "Saas Innova",
              location: "Remote",
              startDate: "July 2022",
              endDate: "Dec 2024",
              description: "<ul><li>**Re-architected** legacy monolith to NestJS & Redis microservices, slashing API latency by **45%**.</li><li>**Spearheaded** SaaS LMS development, driving **25% increase** in MRR.</li><li>**Slashing** cloud costs by **30%** via Docker-based resource optimization.</li></ul>"
            }
          ]
        },
        {
          id: "skills-section",
          type: "skills",
          heading: "Technical Expertise",
          items: [
            { id: "s-1", title: "Languages", description: "Rust, TypeScript, Node.js, Python" },
            { id: "s-2", title: "Frameworks/Libs", description: "NestJS, React, Next.js, FastAPI, Tokio" },
            { id: "s-3", title: "Cloud/DevOps", description: "AWS, Docker, Kubernetes, GitHub Actions, Terraform" }
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
