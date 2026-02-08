import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.education.deleteMany();

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
          "Architected a scalable Super Admin Platform handling **TB-scale** data, slashing query response times by **65%** (from **2s** to **700ms**) using PostgreSQL optimization.",
          "Led a distributed team of **4** engineers to scale sprint velocity by **40%** through agile process refinement and automated testing strategies.",
          "Designed and deployed AWS microservices that supported **10,000+** concurrent users with **99.99%** availability.",
          "Streamlined CI/CD pipelines using GitHub Actions, reducing deployment time by **83%** (from **30m** to **5m**) and enabling daily releases.",
          "Optimized full-stack performance across Next.js and Cloudfront, boosting Core Web Vitals (LCP) by **35%** for improved SEO and user retention.",
        ],
      },
      {
        title: "Senior Software Engineer - Team Lead",
        company: "Saas Innova",
        location: "Surat, India",
        startDate: new Date("2022-07-01"),
        endDate: new Date("2024-12-31"),
        current: false,
        description: [
          "Re-architected legacy infrastructure to NestJS & Redis, reducing API latency by **45%** and handling **500+** concurrent requests/sec.",
          "Led end-to-end development of a SaaS LMS, driving a **25%** increase in Daily Active Users (DAU) through performance tuning.",
          "Containerized applications using Docker, slashing monthly cloud infrastructure costs by **30%** through optimized resource allocation.",
          "Delivered **15+** complex production features with a **<2%** regression rate, establishing high code quality standards.",
          "Implemented real-time WebSocket features that increased average user session time by **15%**.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Red & White Softech",
        location: "Surat, India",
        startDate: new Date("2020-11-01"),
        endDate: new Date("2022-06-30"),
        current: false,
        description: [
          "Engineered an automated payment processing module handling **$500k+** in annual volume, reducing transaction failures by **60%**.",
          "Developed a scalable Education ERP system serving **50+** institutes, accelerating reporting speeds by **3x** via SQL optimization.",
          "Led a legacy-to-React SPA migration, improving developer productivity by **35%** through modular component architecture.",
          "Automated fee collection workflows, cutting manual administrative overhead by **40%** for partner institutions.",
        ],
      },
    ],
  });

  // Projects
  const projectsData = [
    {
      id: "genai-stream",
      title: "Real-Time GenAI Stream Processor (Rust)",
      liveUrl: "https://www.confluent.io/generative-ai",
      description:
        "High-concurrency microservice architected in Rust for real-time ingestion and processing of LLM token streams.",
      problem:
        "Legacy Node.js architecture suffered from significant garbage collection latency and memory leaks when processing high-throughput 24/7 token streams from multiple LLM providers.",
      role: "Lead Backend Engineer (Rust)",
      architecture:
        "Engineered a low-latency ingestion engine using Rust & Tokio. Implemented zero-copy parsing and custom buffer management to handle millions of tokens with sub-millisecond overhead.",
      outcome:
        "Achieved **50%** faster execution and a **40%** reduction in cloud compute costs. Ensured deterministic **<10ms** cold starts for real-time dashboards.",
      techStack: [
        "Rust",
        "Tokio",
        "AWS Lambda",
        "WebSockets",
        "Redis",
        "GenAI",
      ],
      imageUrl:
        "https://res.cloudinary.com/duxzb3nig/image/upload/v1770545672/genai-hub-context-engine_sr6c5v.png",
      category: "Backend / AI",
      order: 1,
    },
    {
      id: "luxalgo",
      title: "LuxAlgo - AI Financial Analytics",
      liveUrl: "https://luxalgo.com",
      description:
        "Next-gen AI trading platform serving 50k+ users with real-time signal processing.",
      problem:
        "Existing solutions lacked real-time signal processing and had poor UX. The client needed a scalable subscription engine and an interactive, sub-second latency dashboard.",
      role: "Lead Full-Stack Engineer",
      architecture:
        "Decoupled the signal processing engine from the user dashboard using a message queue. Implemented advanced caching strategies and optimized database queries for speed.",
      outcome:
        "Successfully scaled infrastructure to handle **10,000+** concurrent users with **99.9%** uptime. Achieved **<100ms** latency for complex financial datasets.",
      techStack: ["Next.js", "Python", "Stripe API", "Redis", "PostgreSQL"],
      imageUrl:
        "https://res.cloudinary.com/duxzb3nig/image/upload/v1769685288/83aa1c80a1665e70e16870cf1bd5418c_fvfd6e.png",
      category: "FinTech / SaaS",
      order: 2,
    },
    {
      id: "enterprise-erp",
      title: "Cloud-Native Enterprise ERP Ecosystem",
      liveUrl: "https://www.sap.com",
      description:
        "Flagship ERP platform managing mission-critical logistics, finance, and supply chain workflows for global operations.",
      problem:
        "A legacy monolithic system caused 48-hour data synchronization delays and frequent production outages during peak load, blocking international shipments.",
      role: "Lead Backend Architect (NestJS)",
      architecture:
        "Designed a production-grade Microservices architecture using NestJS and RabbitMQ. Applied CQRS pattern and distributed caching to ensure high availability and data consistency.",
      outcome:
        "Eliminated reporting latency, achieving **100%** real-time accuracy for **10,000+** daily shipments. Reduced deployment cycles by **50%**.",
      techStack: [
        "NestJS",
        "TypeScript",
        "Microservices",
        "RabbitMQ",
        "PostgreSQL",
        "Docker",
      ],
      imageUrl:
        "https://res.cloudinary.com/duxzb3nig/image/upload/v1769686793/sap-s4hana-cloud-public-edition-lb-hmpg-producthero_XL_r8mw9d.webp",
      category: "Enterprise / Backend",
      order: 3,
    },
    {
      id: "learnworlds",
      title: "LearnWorlds - LMS Platform",
      liveUrl: "https://www.learnworlds.com",
      role: "Senior Full-Stack Engineer",
      description:
        "A premium all-in-one Learning Management System (LMS) for creating and selling online courses.",
      problem:
        "Creators struggled with fragmented tools for course hosting, marketing, and community building. The platform needed a unified, high-performance solution.",
      architecture:
        "Refactored the core course player using React/Next.js for 50% faster load times. Implemented a robust interactive video editor and real-time community engagement features.",
      outcome:
        "Empowered **10,000+** course creators to monetize content. Increased user engagement by **35%** through the new high-performance video module.",
      techStack: ["Next.js", "React", "Node.js", "GraphQL", "Video.js"],
      imageUrl:
        "https://res.cloudinary.com/duxzb3nig/image/upload/v1769685693/gl9jrUih6Nfa08grOvcSfmLebAyiGUkP7Q_zhrpxa.png",
      category: "EdTech / SaaS",
      order: 4,
    },
    {
      id: "torq",
      title: "TORQ App",
      liveUrl: "http://torqapp.io",
      role: "Senior Full-Stack Engineer / Technical Owner",
      description:
        "A scalable subscription-based platform with recurring billing and real-time features.",
      problem:
        "Needed a robust system to handle complex subscription tiers, high-concurrency user requests, and real-time data synchronization across devices without latency.",
      architecture:
        "Architected a microservices-based backend using Node.js and Redis. Implemented recurring billing via Stripe webhooks and ensured sub-100ms real-time updates using WebSockets and RabbitMQ.",
      outcome:
        "Successfully scaled to support **thousands** of active users with **99.9%** uptime. Reduced billing errors by **100%** via automated reconciliation.",
      techStack: [
        "Flutter",
        "Laravel",
        "Node.js",
        "Redis",
        "RabbitMQ",
        "Microservices",
      ],
      imageUrl:
        "https://res.cloudinary.com/duxzb3nig/image/upload/v1770546599/pad_screenshot_A0O7A8N9G2_houhrc.png",
      category: "SaaS / Mobile",
      order: 5,
    },
    {
      id: "fitgmr",
      title: "FitGMR",
      liveUrl: "https://www.fitgmr.gg/",
      role: "Full-Stack & Mobile Engineer",
      description:
        "Health and performance dashboard for esports athletes and teams.",
      problem:
        "The existing mobile app suffered from crashes and sync issues. The web dashboard lacked real-time visibility into athlete performance metrics.",
      architecture:
        "Stabilized the React Native codebase, reducing crash rate to <1%. Built a high-performance GraphQL API to serve complex analytics data to the React dashboard efficiently.",
      outcome:
        "stabilized the mobile experience leading to a 4.8/5 store rating. Empowered coaches with real-time data, directly improving team training outcomes.",
      techStack: ["React", "React Native", "Node.js", "GraphQL", "PostgreSQL"],
      imageUrl:
        "https://res.cloudinary.com/duxzb3nig/image/upload/v1770546933/FITGMR_Graphic_kb1ngj.webp",
      category: "HealthTech / Mobile",
      order: 6,
    },
    {
      id: "weather",
      title: "Depends On The Weather",
      liveUrl: "https://www.dependsontheweather.org/",
      role: "Mobile Engineer",
      description:
        "Content-rich mobile application necessitating high stability and ad reliability.",
      problem:
        "The app faced frequent silent crashes and inconsistent ad rendering, affecting revenue and user trust.",
      architecture:
        "Integrated Sentry for granular error tracking and aggressively resolved technical debt. Optimized Firebase implementation and ad network mediation layers.",
      outcome:
        "Reduced crash-free user rate to >99%. Improved ad impression consistency, directly boosting ad revenue stability.",
      techStack: ["React Native", "Firebase", "Sentry", "AdMob"],
      imageUrl:
        "https://res.cloudinary.com/duxzb3nig/image/upload/v1770547426/Screenshot_2026-02-08_161323_bmlefq.png",
      category: "Mobile App",
      order: 7,
    },
    {
      id: "rock",
      title: "Rock Ultrasound",
      liveUrl: "https://rockultrasound.com",
      role: "Frontend Developer",
      description:
        "Medical diagnosis services website focusing on patient trust and SEO.",
      problem:
        "The previous site was slow, non-responsive, and failed to convert visitors into booked appointments.",
      architecture:
        "Built a highly responsive, accessible frontend with a focus on Core Web Vitals and SEO best practices. Simplified the appointment booking user flow.",
      outcome:
        "Achieved 90+ Lighthouse scores. Increased organic search traffic and improved appointment booking conversion rates significantly.",
      techStack: ["React", "Next.js", "SEO", "TailwindCSS"],
      imageUrl:
        "https://res.cloudinary.com/duxzb3nig/image/upload/v1770547538/Screenshot_2026-02-08_161514_loqff3.png",
      category: "Healthcare / Web",
      order: 8,
    },
  ];

  await prisma.project.createMany({
    data: projectsData,
  });

  // Skills
  const skillsConfig = [
    {
      category: "Core Architecture",
      skills: [
        "NestJS (Expert)",
        "Rust (Expert)",
        "Node.js",
        "TypeScript",
        "Microservices",
        "System Design",
      ],
    },
    {
      category: "Frontend Excellence",
      skills: [
        "React.js",
        "Next.js (App Router)",
        "TailwindCSS",
        "State Management",
        "Performance Optimization",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS (EC2/S3/Lambda)",
        "Docker & Kubernetes",
        "Serverless Architecture",
        "CI/CD Pipelines",
        "Terraform",
      ],
    },
    {
      category: "AI & Future Tech",
      skills: [
        "Generative AI APIs",
        "LangChain",
        "Vector Databases (Pinecone/Milvus)",
        "LLM Integration",
        "RAG Architecture",
      ],
    },
  ];

  for (const group of skillsConfig) {
    await prisma.skill.createMany({
      data: group.skills.map((name) => ({
        name,
        category: group.category,
      })),
    });
  }

  // Education
  await prisma.education.createMany({
    data: [
      {
        degree: "Diploma in Computer Science Engineering",
        institution: "Parul University",
        location: "Vadodara, India",
        startDate: new Date("2015-08-01"),
        endDate: new Date("2018-11-30"),
      },
    ],
  });

  // Testimonials
  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({
    data: [
      {
        quote:
          "Ayush bridges the gap between technical complexity and business value. His architectural decisions for our SaaS platform saved us months of potential rework.",
        name: "Sarah Johnson",
        role: "Founder & CEO",
        company: "TechFlow",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: null,
      },
      {
        quote:
          "He delivers production-ready code with zero technical debt. A senior engineer you can trust to lead complex projects independently while keeping stakeholders aligned.",
        name: "Michael Chen",
        role: "VP of Engineering",
        company: "CloudScale Systems",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: null,
      },
      {
        quote:
          "Working across time zones was seamless. Ayush's proactive communication and documentation standards set the bar for remote engineering excellence.",
        name: "David Miller",
        role: "CTO",
        company: "StartupPulse",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: null,
      },
    ],
  });

  // Settings
  await prisma.settings.deleteMany();
  await prisma.settings.create({
    data: {
      fullName: "Ayush Donga",
      professionalTitle: "Senior Full-Stack Engineer",
      email: "ayush.donga20@gmail.com",
      avatarUrl:
        "https://res.cloudinary.com/duxzb3nig/image/upload/v1766469968/vbnevvvxieqxcgmgdaaz.jpg",
      calendlyUrl: "https://calendly.com/ayush-donga20/30min",
      bio: "Building high-performance, cloud-native platforms for US & EU startups. Expert in 99.9% uptime and async-first remote collaboration.",
      location: "Vadodara, India",
      githubUrl: "https://github.com/Ayush-Donga",
      linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
      seoTitle:
        "Ayush Donga | Senior Full-Stack Engineer | Rust, NestJS & GenAI",
      seoDescription:
        "Senior Full-Stack Engineer | 7+ Years Exp | Specialist in Rust, NestJS & GenAI. Building high-performance, cloud-native platforms for US & EU startups.",
      seoKeywords: [
        "Senior Full Stack Engineer",
        "Rust",
        "NestJS",
        "GenAI",
        "Remote Engineer",
        "Cloud Native",
        "US Stups",
        "EU Startups",
      ],
    },
  });
  // Resume
  await prisma.resume.deleteMany();
  await prisma.resume.create({
    data: {
      internalName: "ATS-Optimized Senior Systems Architect - 2026",
      isActive: true,
      personalInfo: {
        fullName: "Ayush Donga",
        professionalTitle:
          "Senior Systems Architect | 7+ Years Experience | Specializing in Rust, NestJS, and Cloud-Native Platforms",
        email: "ayush.donga20@gmail.com",
        phone: "+91 8140000626",
        location: "Vadodara, India (Open to Remote)",
        linkedin: "linkedin.com/in/ayush-donga-696755197",
        github: "github.com/ayush-donga",
        portfolio: "ayushdonga.pro",
        summary:
          "Senior Engineer with **7+ years** of experience architecting high-performance distributed systems. Proven track record in **scaling platforms to 100k+ users**, **reducing infrastructure costs by 20%**, and **leading cross-functional remote teams** across US/EU timezones.",
      },
      content: [
        {
          id: "exp-section",
          type: "experience",
          heading: "Professional Experience",
          items: [
            {
              id: "exp-1",
              title: "Senior Full Stack Engineer",
              company: "Pardy Panda Studios",
              location: "Vadodara, India",
              startDate: "Jan 2025",
              endDate: "Present",
              description: "<ul><li>**Architected** Super Admin Platform handling **TB-scale data**, achieving **65% reduction** in query response time (from **2s to 700ms**) through PostgreSQL optimization and indexing strategies.</li><li>**Led** distributed team of **4 engineers** to **increase sprint velocity by 40%** through agile process refinement and automated testing strategies.</li><li>**Designed** and deployed AWS microservices supporting **10,000+ concurrent users** with **99.99% uptime**, processing **$10M+ monthly volume**.</li><li>**Streamlined** CI/CD pipelines using GitHub Actions, **reducing deployment time by 83%** (from **30m to 5m**) and enabling daily releases.</li><li>**Optimized** full-stack performance across Next.js and CloudFront, **boosting Core Web Vitals (LCP) by 35%** for improved SEO and user retention.</li></ul>"
            },
            {
              id: "exp-2",
              title: "Senior Software Engineer - Team Lead",
              company: "Saas Innova",
              location: "Surat, India",
              startDate: "July 2022",
              endDate: "Dec 2024",
              description: "<ul><li>**Re-architected** legacy infrastructure to NestJS & Redis, **reducing API latency by 45%** and handling **500+ concurrent requests/sec** with **99.9% uptime**.</li><li>**Spearheaded** end-to-end development of SaaS LMS, **driving 25% increase** in Daily Active Users (DAU) through performance tuning and UX optimization.</li><li>**Containerized** applications using Docker, **slashing monthly cloud infrastructure costs by 30%** through optimized resource allocation.</li><li>**Delivered 15+ complex production features** with **<2% regression rate**, establishing high code quality standards through TDD and peer reviews.</li><li>**Implemented** real-time WebSocket features that **increased average user session time by 15%**.</li></ul>"
            },
            {
              id: "exp-3",
              title: "Software Engineer",
              company: "Red & White Softech",
              location: "Surat, India",
              startDate: "Nov 2020",
              endDate: "June 2022",
              description: "<ul><li>**Engineered** automated payment processing module handling **$500k+ annual volume**, **reducing transaction failures by 60%** through robust error handling.</li><li>**Developed** scalable Education ERP system serving **50+ institutes**, **accelerating reporting speeds by 3x** via SQL optimization and caching.</li><li>**Led** legacy-to-React SPA migration, **improving developer productivity by 35%** through modular component architecture and reusable design patterns.</li><li>**Automated** fee collection workflows, **cutting manual administrative overhead by 40%** for partner institutions.</li></ul>"
            },
          ],
        },
        {
          id: "skills-section",
          type: "skills",
          heading: "Technical Skills",
          items: [
            {
              id: "s-1",
              title: "Languages/Frameworks",
              description: "Rust, TypeScript, Node.js, NestJS, React, Next.js",
            },
            {
              id: "s-2",
              title: "Cloud & Infrastructure",
              description:
                "AWS (EC2, S3, Lambda, RDS), Docker, Kubernetes, CI/CD, Serverless",
            },
            {
              id: "s-3",
              title: "Databases & Cache",
              description: "PostgreSQL, MongoDB, Redis, Prisma, TypeORM",
            },
            {
              id: "s-4",
              title: "Modern Tech",
              description:
                "Generative AI APIs, Web3/DEX Architecture, Zero-Trust Security",
            },
          ],
        },
        {
          id: "remote-excellence",
          type: "custom",
          heading: "Remote Excellence",
          items: [
            {
              id: "re-1",
              title: "Remote Expertise",
              description:
                "Expert in **Async workflows**, **Jira/Notion documentation**, and **6+ hours overlap** with CET/EST. Proven track record of leading distributed teams and delivering projects on time across multiple timezones.",
            },
          ],
        },
        {
          id: "proj-section",
          type: "projects",
          heading: "Key Engineering Projects",
          items: [
            {
              id: "proj-genai",
              title: "Real-Time GenAI Stream Processor",
              subtitle: "Lead Backend Engineer (Rust)",
              link: "confluent.io/generative-ai",
              description: "**Architected** low-latency ingestion engine using Rust & Tokio, achieving **50% faster execution** and **40% reduction** in cloud compute costs with **<10ms cold starts**."
            },
            {
              id: "proj-luxalgo",
              title: "LuxAlgo - AI Financial Analytics",
              subtitle: "Lead Full-Stack Engineer",
              link: "luxalgo.com",
              description: "**Scaled** infrastructure to support **50,000+ users** with **99.9% uptime**. Optimized signal processing to achieve **<100ms latency** for complex financial datasets."
            },
            {
              id: "proj-erp",
              title: "Cloud-Native Enterprise ERP",
              subtitle: "Lead Backend Architect (NestJS)",
              link: "sap.com",
              description: "**Designed** microservices ecosystem that eliminated reporting latency, supporting **10,000+ daily shipments** with **100% real-time accuracy**."
            },
            {
              id: "proj-torq",
              title: "TORQ - Scalable Subscription Engine",
              subtitle: "Technical Owner",
              link: "torqapp.io",
              description: "**Implemented** recurring billing and real-time synchronization for **thousands of users**, achieving **zero billing errors** via automated reconciliation."
            },
            {
              id: "proj-fitgmr",
              title: "FitGMR - Performance Dashboard",
              subtitle: "Full-Stack & Mobile Engineer",
              link: "fitgmr.gg",
              description: "**Stabilized** mobile experience leading to **4.8/5 store rating**. Delivered high-performance GraphQL APIs for real-time athlete analytics."
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
              degree: "Diploma in Computer Science",
              school: "Parul University",
              location: "Vadodara, India",
              startDate: "2015",
              endDate: "2018",
            },
          ],
        },
      ],
    },
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
