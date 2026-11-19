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
      professionalTitle: "Senior Full-Stack & Distributed Systems Engineer",
      email: "ayush.donga@gmail.com",
      avatarUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1766469968/vbnevvvxieqxcgmgdaaz.jpg",
      calendlyUrl: "https://calendly.com/ayush-donga20/30min",
      bio: "Senior Full-Stack & Distributed Systems Engineer with 8+ years of experience engineering high-performance SaaS platforms, distributed backend systems, and scalable APIs for US, UK, and EU startups (CET/EST/GMT overlap). Specialist in TypeScript, Node.js, NestJS, Next.js, PostgreSQL, Redis, RabbitMQ, AWS, and Production AI/LLM Workflows.",
      location: "Vadodara, India (Remote US/EU/UK)",
      githubUrl: "https://github.com/Ayush-Donga",
      linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
      seoTitle: "Ayush Donga | Senior Full-Stack & Distributed Systems Engineer",
      seoDescription: "Senior Full-Stack & Distributed Systems Engineer specializing in scalable SaaS platforms, event-driven architectures, and production AI workflows. 8+ years experience.",
      seoKeywords: ["Senior Full-Stack Engineer", "Distributed Systems Engineer", "Backend Architect", "Next.js", "AWS", "Node.js", "NestJS", "PostgreSQL", "RabbitMQ", "Redis", "AI Integration"],
    },
  });

  // Experience
  await prisma.experience.createMany({
    data: [
      {
        title: "Software Engineer III",
        company: "Pardy Panda Studios",
        location: "Vadodara / Remote",
        startDate: new Date("2025-04-01"),
        current: true,
        description: [
          "**Lead and mentor** an agile team of **2–5 developers**, guiding technical implementation, unblocking architecture bottlenecks, and supporting feature delivery.",
          "**Architect** end-to-end multi-tenant enterprise ERP systems using **Next.js, NestJS, Prisma ORM, and PostgreSQL**, establishing modular service boundaries.",
          "**Cut p95 API latency by 55%** and **database CPU load by 40%** via composite indexing, Redis-backed caching strategies, and query tuning.",
          "**Architect** robust PostgreSQL database schemas and Prisma data models to handle complex relationships across inventory, sales, purchasing, customer management, and operations.",
          "**Build** reusable frontend components using **React.js and Next.js**, supported by **Zustand** state management and structured **Zod-based** validation.",
          "**Design** RESTful API contracts and implement backend business logic for interconnected enterprise ERP modules.",
          "**Coordinate** technical execution across frontend, backend, and database layers, ensuring complete consistency between business requirements and application behavior."
        ],
      },
      {
        title: "Senior Software Engineer",
        company: "SaaS Innova",
        location: "Surat / Remote",
        startDate: new Date("2022-07-01"),
        endDate: new Date("2025-03-31"),
        current: false,
        description: [
          "**Owned** backend architecture and technical implementation for enterprise SaaS modules across document management, quality management, CRM, and travel technology.",
          "**Led and mentored** engineering teams of **2–5 developers**, defining service boundaries, API contracts, and database interactions for complex business applications.",
          "**Architected** high-throughput **REST and GraphQL APIs** using **NestJS and TypeScript**, powering seamless communication between frontend and distributed services.",
          "**Designed** event-driven, asynchronous background pipelines using **RabbitMQ and Redis**, decoupling microservices and processing millions of background events.",
          "**Integrated** production **LLM-powered document processing** and intelligent workflow automation into enterprise software products.",
          "**Optimized** PostgreSQL database queries, access patterns, and caching strategies, reducing complex reporting generation time from **12s to <800ms**.",
          "**Implemented** enterprise-grade security with JWT authentication and granular Role-Based Access Control (**RBAC**)."
        ],
      },
      {
        title: "Software Engineer",
        company: "Red & White Softtech",
        location: "Surat",
        startDate: new Date("2018-11-01"),
        endDate: new Date("2022-06-30"),
        current: false,
        description: [
          "**Developed** and maintained full-stack enterprise web applications across backend microservices, responsive web interfaces, and relational databases.",
          "**Designed and implemented** robust RESTful APIs supporting business logic, third-party integrations, and automated payment gateways handling **$500k+ annual volume**.",
          "**Architected** relational database schemas (**MySQL and PostgreSQL**) and optimized complex SQL queries for maximum throughput and ACID compliance.",
          "**Built** secure authentication, session management, and Role-Based Access Control (**RBAC**) mechanisms to protect sensitive enterprise operations.",
          "**Modernized** legacy application codebases by transitioning to **React and Node.js**, improving developer onboarding speed by **60%** and reducing defect rates.",
          "**Collaborated** with international cross-functional teams and product stakeholders to translate complex operational workflows into scalable software."
        ],
      },
    ],
  });

  // Projects
  await prisma.project.createMany({
    data: [
      {
        id: "medqdoc",
        title: "MedQDoc — Enterprise Quality & Document Management SaaS",
        liveUrl: null,
        githubUrl: null,
        description: "Regulated enterprise document lifecycle management platform with real-time auditability, role-based workflows, and asynchronous compliance pipelines.",
        problem: "Regulated healthcare and manufacturing organizations faced severe compliance violations, version desynchronization, and audit risks across tens of thousands of controlled documents. Legacy document processors generated synchronous PDF conversions on the main event loop, causing major latency spikes (**p99 > 8s**) and server out-of-memory crashes during peak operational hours.",
        role: "Lead Backend Architect",
        architecture: "Architected a modular **NestJS** backend utilizing Domain-Driven Design (DDD) to isolate document authoring, approval workflows, and audit logging into decoupled service boundaries. Integrated **ONLYOFFICE Document Server** via secure WebSocket proxies for concurrent, collaborative editing. Offloaded heavy document rendering, watermarking, and PDF conversions to asynchronous **RabbitMQ** worker queues backed by **Redis** caching. Enforced granular **Role-Based Access Control (RBAC)** and immutable append-only audit trail tables in **PostgreSQL** with cryptographically verifiable checksums.",
        outcome: "Eliminated **100%** of document version discrepancies across **50,000+ controlled compliance files**. Reduced p99 API response times from **8.4s to <120ms** by delegating heavy rendering jobs to RabbitMQ background workers. Guaranteed **100% audit-readiness** for ISO/FDA compliance inspections with tamper-evident revision histories.",
        keyDecisions: "Adopted RabbitMQ over Kafka due to native AMQP routing and immediate per-message acknowledgment needed for critical document approval lifecycles. Selected append-only PostgreSQL ledger tables over document stores to guarantee ACID compliance for regulated audit records.",
        techStack: ["NestJS", "TypeScript", "PostgreSQL", "RabbitMQ", "Redis", "ONLYOFFICE", "Docker"],
        imageUrl: null,
        category: "Regulated Enterprise SaaS",
        order: 1,
      },
      {
        id: "ch-erp",
        title: "CH ERP — Multi-Module Enterprise Jewellery Platform",
        liveUrl: null,
        githubUrl: null,
        description: "Mission-critical enterprise ERP managing multi-warehouse inventory, live commodity valuation, sales ledgers, and procurement workflows.",
        problem: "High-value jewellery retail and manufacturing operations involve dynamic commodity spot rate fluctuations (gold/diamond prices), multi-warehouse batch tracking, and strict financial reconciliation. The legacy monolith suffered from transaction deadlocks during concurrent point-of-sale checkouts, with complex multi-warehouse reporting queries taking over **15 seconds** to complete.",
        role: "Lead Full-Stack Architect",
        architecture: "Engineered a high-performance **Next.js** frontend and **NestJS** backend architecture with end-to-end type safety using **TypeScript, Prisma ORM, and Zod** validation contracts. Designed a normalized **PostgreSQL** schema with composite indexing and optimistic concurrency locking to prevent inventory race conditions during peak checkout bursts. Implemented **Redis** caching for real-time commodity spot rates and frequent catalog queries. Structured frontend state management with **Zustand** to handle complex multi-step order configurations without unnecessary re-renders.",
        outcome: "Slashed complex multi-warehouse reporting latency from **15s to <350ms** through optimized composite indexing and read-heavy caching. Cut **database CPU load by 40%** and **p95 API latency by 55%**. Eliminated inventory overselling errors across **20+ warehouse locations** while automating daily sales ledger reconciliations.",
        keyDecisions: "Implemented optimistic locking on inventory batch rows to prevent overselling high-value commodities without blocking concurrent read operations. Utilized Zustand slice patterns to isolate checkout state from catalog browsing for optimal DOM performance.",
        techStack: ["Next.js", "React.js", "TypeScript", "NestJS", "Prisma ORM", "PostgreSQL", "Zustand", "Zod"],
        imageUrl: null,
        category: "Enterprise ERP & Supply Chain",
        order: 2,
      },
      {
        id: "avisita",
        title: "Avisita — Enterprise Travel & Hospitality SaaS",
        liveUrl: null,
        githubUrl: null,
        description: "High-concurrency global accommodation booking platform aggregating 15+ external supplier APIs with event-driven CRM automation.",
        problem: "Travel booking platforms face extreme burst traffic during seasonal promotions, requiring real-time rate aggregation across **15+ external supplier APIs**. Legacy synchronous REST aggregation caused slow checkout experiences (**p95 > 6s**), high rate disparity errors, and transaction timeouts during inventory reservation spikes.",
        role: "Senior Full-Stack & Backend Architect",
        architecture: "Designed a hybrid **GraphQL and NestJS** backend service layer that aggregates and normalizes external supplier inventory in parallel. Implemented distributed **Redis caching** with sliding-window expiration to store room availability and dynamic rate calculations. Architected an asynchronous event-driven booking pipeline using **RabbitMQ** to process reservation confirmations, supplier webhooks, invoice generation, and customer notification emails in decoupled background workers.",
        outcome: "Maintained **99.99% system uptime** during high-concurrency seasonal booking peaks handling **10,000+ simultaneous sessions**. Slashed rate aggregation latency by **65%** via GraphQL parallel resolvers and Redis edge-caching. Automated **100%** of booking confirmation and CRM notification workflows with zero lost transactions.",
        keyDecisions: "Selected GraphQL for supplier rate aggregation to allow clients to request only the exact lodging attributes needed, decreasing network payload by 45%. Utilized RabbitMQ topic exchanges to decouple supplier booking webhooks from customer notification services.",
        techStack: ["React.js", "TypeScript", "NestJS", "GraphQL", "PostgreSQL", "Redis", "RabbitMQ"],
        imageUrl: null,
        category: "High-Concurrency Travel Tech",
        order: 3,
      },
      {
        id: "ai-invoice-engine",
        title: "AI-Powered Invoice Processing Engine",
        liveUrl: null,
        githubUrl: null,
        description: "Autonomous financial intelligence pipeline extracting structured records from multi-format vendor invoices with automated accounting reconciliation.",
        problem: "Finance and accounting teams spent over **300+ man-hours per month** manually reviewing, transcribing, and validating diverse multi-format vendor invoices (scanned PDFs, unstructured images, varied tax layouts). Traditional OCR tools produced high error rates, requiring continuous human intervention and resulting in delayed supplier payments.",
        role: "Lead Systems & AI Engineer",
        architecture: "Engineered an automated ingestion pipeline using **Node.js and TypeScript** that pre-processes incoming documents, extracts raw text and spatial layout structures, and orchestrates LLM calls across **OpenAI (GPT-4o) and Anthropic Claude APIs**. Implemented strict **JSON schema-driven structured outputs** with automated validation against purchase order databases in **PostgreSQL**. Utilized **Redis BullMQ** queues for asynchronous document processing, rate-limit management, and automatic retries for transient API failures.",
        outcome: "Automated **85% of manual invoice entry workflows**, reducing invoice processing turnaround from **48 hours to under 30 seconds**. Achieved **99.2% extraction accuracy** on multi-page tabular invoices, freeing up over **300 accounting hours per month**.",
        keyDecisions: "Implemented dual-model fallback: using GPT-4o for complex spatial table parsing and Claude 3.5 Sonnet for dense legal and tax clause extraction. Used BullMQ on Redis for resilient backoff retries when provider rate limits are approached.",
        techStack: ["Node.js", "TypeScript", "PostgreSQL", "OpenAI APIs", "Claude APIs", "Redis", "Docker"],
        imageUrl: null,
        category: "Production AI & Automation",
        order: 4,
      },
    ],
  });

  // Skills
  const skillsData = [
    { name: "React / Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "TailwindCSS", category: "Frontend" },
    { name: "State Management (Zustand/Redux)", category: "Frontend" },
    { name: "Performance Optimization", category: "Frontend" },
    { name: "Node.js / Express", category: "Backend" },
    { name: "NestJS / TypeScript", category: "Backend" },
    { name: "Microservices Architecture", category: "Backend" },
    { name: "API Design (REST/GraphQL)", category: "Backend" },
    { name: "Event-Driven (RabbitMQ / Kafka)", category: "Backend" },
    { name: "PostgreSQL (Optimization)", category: "Databases" },
    { name: "Redis / Caching", category: "Databases" },
    { name: "Prisma / TypeORM", category: "Databases" },
    { name: "MongoDB / NoSQL", category: "Databases" },
    { name: "AWS (ECS/Lambda/S3/RDS)", category: "DevOps" },
    { name: "Docker & Containerization", category: "DevOps" },
    { name: "CI/CD (GitLab / GitHub Actions)", category: "DevOps" },
    { name: "Production AI / LLM Workflows", category: "DevOps" },
  ];

  for (const skill of skillsData) {
    await prisma.skill.create({ data: skill });
  }

  // Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        quote: "**Ayush is a rare talent.** He bridges the gap between deep technical backend architecture and actual business value. His refactoring of our core engine saved us months of rework and scaled perfectly.",
        name: "Sarah Johnson",
        role: "Founder & CEO",
        company: "TechFlow (UK)",
        active: true,
      },
      {
        quote: "**Exceptional ownership.** We trusted Ayush to lead our most complex SaaS scaling challenges independently. He delivers production-ready systems with zero technical debt.",
        name: "Michael Chen",
        role: "VP of Engineering",
        company: "CloudScale (US)",
        active: true,
      },
      {
        quote: "**Perfect for remote teams.** Proactive communication and documentation standards that set the bar for our entire engineering organization. A true senior operator.",
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
      internalName: "Senior Full-Stack & Distributed Systems Engineer",
      isActive: true,
      personalInfo: {
        fullName: "Ayush Donga",
        professionalTitle: "Senior Full-Stack & Distributed Systems Engineer | Backend Architect",
        email: "ayush.donga@gmail.com",
        phone: "+91 8140000626",
        location: "Vadodara, India (Remote US/EU/UK)",
        linkedin: "https://www.linkedin.com/in/ayush-donga-696755197",
        github: "https://github.com/ayush-donga",
        portfolio: "https://ayushd-portfolio.vercel.app",
        summary: "Product-minded Senior Full-Stack & Distributed Systems Engineer with **8+ years** of experience building high-scale SaaS platforms, distributed architectures, and AI-powered systems. Expert in architecting **Next.js** applications, **NestJS/Node.js** microservices, **PostgreSQL** databases, and **RabbitMQ/Redis** event-driven messaging on **AWS**. Proven track record of owning end-to-end features, reducing cloud spend, scaling to **100k+ users**, and leading autonomous remote teams across US/EU/UK timezones.",
      },
      content: [
        {
          id: "skills-grouped",
          type: "skills",
          heading: "Core Expertise",
          items: [
            { id: "s1", title: "Backend & Systems", subskills: "**Node.js, NestJS**, REST & GraphQL API Design, Microservices, Event-Driven Architecture (RabbitMQ, Kafka), WebSockets" },
            { id: "s2", title: "Frontend & UI", subskills: "**React, Next.js (App Router)**, TypeScript, TailwindCSS, Zustand, Zod Validation, Web Performance" },
            { id: "s3", title: "Databases & Caching", subskills: "**PostgreSQL (Query Optimization)**, Redis Caching, Prisma ORM, MySQL, MongoDB" },
            { id: "s4", title: "Cloud & DevOps", subskills: "**AWS (ECS, Lambda, S3, RDS)**, GCP, Docker, CI/CD (GitLab, GitHub Actions), Linux, Nginx, PM2" },
            { id: "s5", title: "AI & Automation", subskills: "**OpenAI APIs, Anthropic Claude APIs**, LLM Integration, Document Processing, Prompt Engineering" }
          ]
        },
        {
          id: "exp-section",
          type: "experience",
          heading: "Professional Experience",
          items: [
            {
              id: "exp-1",
              title: "Software Engineer III",
              company: "Pardy Panda Studios",
              location: "Vadodara / Remote",
              startDate: "Apr 2025",
              endDate: "Present",
              description: "<ul><li>**Lead and mentor** an agile team of **2–5 developers**, guiding technical implementation, unblocking architecture bottlenecks, and supporting feature delivery.</li><li>**Architect** end-to-end multi-tenant enterprise ERP systems using **Next.js, NestJS, Prisma ORM, and PostgreSQL**, establishing modular service boundaries.</li><li>**Cut p95 API latency by 55%** and **database CPU load by 40%** via composite indexing, Redis-backed caching strategies, and query tuning.</li><li>**Architect** robust PostgreSQL database schemas and Prisma data models to handle complex relationships across inventory, sales, purchasing, customer management, and operations.</li><li>**Build** reusable frontend components using **React.js and Next.js**, supported by **Zustand** state management and structured **Zod-based** validation.</li><li>**Design** RESTful API contracts and implement backend business logic for interconnected enterprise ERP modules.</li></ul>"
            },
            {
              id: "exp-2",
              title: "Senior Software Engineer",
              company: "SaaS Innova",
              location: "Surat / Remote",
              startDate: "Jul 2022",
              endDate: "Mar 2025",
              description: "<ul><li>**Owned** backend architecture and technical implementation for enterprise SaaS modules across document management, quality management, CRM, and travel technology.</li><li>**Led and mentored** engineering teams of **2–5 developers**, defining service boundaries, API contracts, and database interactions for complex business applications.</li><li>**Architected** high-throughput **REST and GraphQL APIs** using **NestJS and TypeScript**, powering seamless communication between frontend and distributed services.</li><li>**Designed** event-driven, asynchronous background pipelines using **RabbitMQ and Redis**, decoupling microservices and processing millions of background events.</li><li>**Integrated** production **LLM-powered document processing** and intelligent workflow automation into enterprise software products.</li><li>**Optimized** PostgreSQL database queries, access patterns, and caching strategies, reducing complex reporting generation time from **12s to <800ms**.</li><li>**Implemented** enterprise-grade security with JWT authentication and granular Role-Based Access Control (**RBAC**).</li></ul>"
            },
            {
              id: "exp-3",
              title: "Software Engineer",
              company: "Red & White Softtech",
              location: "Surat",
              startDate: "Nov 2018",
              endDate: "Jun 2022",
              description: "<ul><li>**Developed** and maintained full-stack enterprise web applications across backend microservices, responsive web interfaces, and relational databases.</li><li>**Designed and implemented** robust RESTful APIs supporting business logic, third-party integrations, and automated payment gateways handling **$500k+ annual volume**.</li><li>**Architected** relational database schemas (**MySQL and PostgreSQL**) and optimized complex SQL queries for maximum throughput and ACID compliance.</li><li>**Built** secure authentication, session management, and Role-Based Access Control (**RBAC**) mechanisms to protect sensitive enterprise operations.</li><li>**Modernized** legacy application codebases by transitioning to **React and Node.js**, improving developer onboarding speed by **60%** and reducing defect rates.</li><li>**Collaborated** with international cross-functional teams and product stakeholders to translate complex operational workflows into scalable software.</li></ul>"
            }
          ]
        },
        {
          id: "projects-section",
          type: "projects",
          heading: "Key Projects & Case Studies",
          items: [
            {
              id: "proj-1",
              title: "MedQDoc — Enterprise Quality & Document Management SaaS",
              subtitle: "Lead Backend Architect (NestJS, TypeScript, PostgreSQL, RabbitMQ, Redis, ONLYOFFICE)",
              description: "<ul><li>**Problem:** Regulated healthcare and manufacturing organizations faced severe compliance risks and **p99 > 8s** latency from synchronous PDF conversions.</li><li>**Solution:** Architected a modular **NestJS** backend utilizing Domain-Driven Design, ONLYOFFICE WebSocket integration, and asynchronous **RabbitMQ/Redis** worker pipelines with append-only audit trails.</li><li>**Impact:** Eliminated **100%** of document version discrepancies across **50,000+ controlled files** and dropped p99 latency to **<120ms**.</li></ul>"
            },
            {
              id: "proj-2",
              title: "CH ERP — Multi-Module Enterprise Jewellery Platform",
              subtitle: "Lead Full-Stack Architect (Next.js, React, TypeScript, NestJS, Prisma ORM, PostgreSQL, Zustand, Zod)",
              description: "<ul><li>**Problem:** Dynamic commodity spot price volatility and multi-warehouse checkouts caused transaction deadlocks and **15s+** reporting delays.</li><li>**Solution:** Engineered a **Next.js** and **NestJS** platform with optimistic locking, composite PostgreSQL indexing, and **Redis** caching for real-time gold valuations.</li><li>**Impact:** Slashed multi-warehouse reporting latency from **15s to <350ms**, cut **DB CPU load by 40%**, and reduced **p95 API latency by 55%**.</li></ul>"
            },
            {
              id: "proj-3",
              title: "Avisita — Enterprise Travel & Hospitality SaaS",
              subtitle: "Senior Full-Stack & Backend Architect (React, TypeScript, NestJS, GraphQL, PostgreSQL, Redis, RabbitMQ)",
              description: "<ul><li>**Problem:** Synchronous aggregation across **15+ external supplier APIs** caused high booking latency (**p95 > 6s**) and transaction timeouts during peak seasons.</li><li>**Solution:** Designed a hybrid **GraphQL & NestJS** aggregation layer with Redis sliding-window caching and **RabbitMQ** event-driven reservation queues.</li><li>**Impact:** Maintained **99.99% uptime** during peaks with **10,000+ concurrent sessions** and reduced rate aggregation latency by **65%**.</li></ul>"
            },
            {
              id: "proj-4",
              title: "AI-Powered Invoice Processing Engine",
              subtitle: "Lead Systems & AI Engineer (Node.js, TypeScript, PostgreSQL, OpenAI APIs, Claude APIs, Redis)",
              description: "<ul><li>**Problem:** Manual review, transcription, and validation of multi-format vendor invoices consumed **300+ accounting hours per month**.</li><li>**Solution:** Engineered an automated **Node.js** pipeline orchestrating **OpenAI (GPT-4o) and Claude APIs** with strict JSON schemas, BullMQ queuing, and automated PostgreSQL ledger validation.</li><li>**Impact:** Automated **85%** of manual entry workflows, achieved **99.2% extraction accuracy**, and cut processing turnaround from **48 hours to under 30 seconds**.</li></ul>"
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
              description: "<ul><li>**Full Feature Ownership:** Proven ability to take high-level product requirements and deliver end-to-end solutions independently focusing on business ROI.</li><li>**Async-First Operations:** Deeply experienced in asynchronous workflows, technical writing, and maintaining **4-6 hours overlap** with US/EU timezones.</li></ul>"
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
