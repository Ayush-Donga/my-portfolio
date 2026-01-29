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
          "Leading a distributed engineering team of 4, orchestrating sprint planning and improving delivery velocity by 20%.",
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
        title: "RideFlow - Global Mobility Marketplace",
        liveUrl: "/projects/rideflow",
        description: "A high-growth peer-to-peer car sharing platform. Seamlessly connects owners with renters using real-time availability and dynamic pricing algorithms.",
        problem: "The car rental market is plagued by high fees, opaque pricing, and slow verification. Owners lacked a secure way to monetize idle assets.",
        role: "Lead Architect & Full-Stack Developer",
        architecture: "Built on Next.js 14 (App Router) for SEO. Microservices for 'Search' and 'Booking' domains. Event-driven architecture using Kafka for notifications.",
        keyDecisions: "Chose a serverless architecture to handle spiky traffic during holiday seasons, reducing idle infrastructure costs by 60%.",
        outcome: "Scaled to 10k+ monthly active users. Processed $2M+ in annualized transaction volume. 4.8/5 average user rating.",
        techStack: ["Next.js", "Stripe Connect", "PostgreSQL", "Redis", "Google Maps API", "AWS"],
        imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1769686059/Screenshot_2026-01-29_165712_bwnyyr.png",
        category: "Marketplace / SaaS",                                   
        order: 1
      },
      {
        title: "LuxAlgo - AI Financial Analytics",
        liveUrl: "http://luxalgo.com",
        description: "Next-gen AI trading platform serving 50k+ users. Simplified complex financial data into actionable signals via a high-performance dashboard.",
        problem: "Existing solutions lacked real-time signal processing and had poor UX. The client needed a scalable subscription engine and an interactive, sub-second latency dashboard.",
        role: "Lead Full-Stack Engineer - Core Architecture & Billing.",
        architecture: "Next.js for the dashboard. Python/Node.js microservices for signal processing. Stripe Subscription Schedules for complex retention logic.",
        keyDecisions: "Decoupled the signal processing engine from the user dashboard using a message queue, ensuring UI responsiveness even during market volatility surges.",
        outcome: "Scaled to 50k+ active users. Reduced churn by 15% through automated retention flows. Achieved 99.99% uptime during peak market hours.",
        techStack: ["Next.js", "Python", "Stripe API", "Redis", "PostgreSQL"],
        imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1767787093/xhf6irb1h4laaj6rni5c.png",
        category: "FinTech / SaaS",
        order: 2
      },
      {
        title: "Enterprise ERP & Analytics Platform",
        liveUrl: "/projects/enterprise-erp",
        description: "A comprehensive Super Admin & Analytics Platform for a high-volume logistics and operations company.",
        problem: "The client was relying on disparate spreadsheets and legacy tools, leading to 48-hour data delays and operational inefficiencies.",
        role: "Lead Architect - System Design & Team Lead.",
        architecture: "React-based Single Page Application (SPA) with a NestJS Microservices backend. centralized Data Warehouse for real-time analytics reports.",
        keyDecisions: "Adopted a Micro-Frontend approach to allow different teams to work on Logistics, HR, and Finance modules independently.",
        outcome: "Reduced data loading times by 40%. Centralized operations into a single 'Source of Truth', cutting reporting time from 2 days to real-time.",
        techStack: ["React", "NestJS", "Microservices", "Docker", "PostgreSQL"],
        imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1769686640/9333-19720173_pqus3z.jpg",
        category: "ERP / Enterprise",
        order: 3
      },
      {
        title: "Coverdash - SMB Insurance Infrastructure",
        liveUrl: "https://www.coverdash.com",
        description: "Embeddable InsurTech infrastructure enabling any B2B platform to sell insurance to their customers.",
        problem: "Insurance integration was too complex for partners. Needed a 'Stripe-like' drop-in component that handled compliance and quoting automatically.",
        role: "Founding Engineer - Core Product & SDK Development.",
        architecture: "Next.js Monorepo. Built a proprietary React SDK published to NPM. Server-side quoting engine integrating with multiple insurance carriers.",
        keyDecisions: "Architected the 'Embedded Flow' as an iframe-free, native React component to provide partners with full CSS control and better UX.",
        outcome: "Secured key partnerships with major B2B platforms. The embedded SDK became the primary revenue channel, processing millions in premiums.",
        techStack: ["React SDK", "Next.js", "Node.js", "Checkr API", "AWS"],
        imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1769685287/Screenshot-2023-01-23-at-11.58.07-AM_vapcnn.jpg",
        category: "InsurTech / B2B SaaS",
        order: 4
      },
      {
        title: "EdTech Learning Ecosystem (LMS)",
        liveUrl: "https://www.learnworlds.com/",
        description: "Scalable Learning Management System (LMS) with real-time classrooms and gamified progress tracking.",
        problem: "Legacy LMS could not handle concurrent live classes and lacked engagement features, leading to high student drop-off rates.",
        role: "Senior Engineer - Real-time Infrastructure.",
        architecture: "Next.js frontend with WebRTC for live classes. Redis for real-time leaderboards and presence. Socket.io for chat and notifications.",
        keyDecisions: "Implemented ' Optimistic UI' updates for quiz interactions to make the platform feel instant, syncing with the server in the background.",
        outcome: "Increased user engagement by 25%. Supported 5,000+ concurrent students in live sessions with zero downtime.",
        techStack: ["Next.js", "WebRTC", "Socket.io", "Redis", "MongoDB"],
        imageUrl: "https://res.cloudinary.com/duxzb3nig/image/upload/v1769685693/gl9jrUih6Nfa08grOvcSfmLebAyiGUkP7Q_zhrpxa.png",
        category: "EdTech / SaaS",
        order: 5
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
      bio: "Senior Full-Stack Engineer helping US/EU founders scale complex SaaS & real-time applications. I bridge the gap between business goals and technical execution, delivering production-ready architecture without the fluff.",
      location: 'Vadodara, India',
      githubUrl: 'https://github.com/Ayush-Donga',
      linkedinUrl: 'https://linkedin.com/in/ayush-donga-696755197',
      seoTitle: 'Ayush Donga | Senior Full-Stack Engineer',
      seoDescription: 'Senior Full-Stack Engineer helping US/EU founders scale complex SaaS & real-time applications. React, Node.js, and Cloud-Native architectures.',
      seoKeywords: ['Senior Full Stack Engineer', 'SaaS Architect', 'React', 'Node.js', 'Remote Engineer', 'Cloud Native']
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
              description: "<ul><li>Leading a distributed engineering team of 4, orchestrating sprint planning and improving delivery velocity by 20%.</li><li>Architected a high-performance Super Admin Platform resulting in a 40% reduction in data loading times.</li><li>Designed scalable cloud-native architectures that support 10k+ concurrent users with 99.9% uptime.</li><li>Optimized database queries and frontend rendering, achieving a 15% improvement in Core Web Vitals.</li></ul>"
            },
            {
              id: "exp-2",
              title: "Senior Software Engineer",
              company: "Saas Innova",
              location: "Surat, India",
              startDate: "July 2022",
              endDate: "Dec 2024",
              description: "<ul><li>Led development of a Learning Management System (LMS) resulting in a 25% increase in user engagement.</li><li>Optimized backend architectures using NestJS and Redis, reducing server response time by 30%.</li><li>Managed a cross-functional team of 3 developers, delivering 15+ production-ready features within deadline.</li><li>Reduced infrastructure costs by 20% through efficient cloud resource management and Docker orchestration.</li></ul>"
            },
            {
              id: "exp-3",
              title: "Software Engineer",
              company: "Red & White Softech",
              location: "Surat, India",
              startDate: "Nov 2020",
              endDate: "June 2022",
              description: "<ul><li>Developed a large scale Education ERP system, reducing operational costs for clients by 30%.</li><li>Implemented automated fee collection modules, increasing payment processing speed by 40%.</li><li>Optimized SQL queries and database indexing, leading to a 50% faster reporting engine.</li></ul>"
            }
          ]
        },
        {
          id: "proj-section",
          type: "projects",
          heading: "Key Projects",
          items: [
            {
              id: "proj-0",
              title: "RideFlow - Global Mobility Marketplace",
              subtitle: "Lead Architect",
              link: "rideflow.demo",
              description: "High-growth peer-to-peer car sharing platform. Built with Next.js & Microservices. Processed $2M+ transaction volume with 10k+ users."
            },
            {
              id: "proj-1",
              title: "LuxAlgo - AI Financial Analytics",
              subtitle: "Lead Full-Stack Engineer",
              link: "luxalgo.com",
              description: "Scaled AI trading platform to 50k+ users. Decoupled signal processing from UI to ensure sub-second dashboard latency."
            },
            {
              id: "proj-2",
              title: "Enterprise ERP & Analytics Platform",
              subtitle: "Lead Architect",
              description: "Comprehensive Super Admin platform for high-volume logistics. Reduced data loading times by 40% via micro-frontend architecture."
            },
            {
              id: "proj-3",
              title: "Coverdash - InsurTech Infrastructure",
              subtitle: "Founding Engineer",
              link: "coverdash.com",
              description: "Built the 'Stripe for Insurance' embedded SDK. Enabled partners to integrate insurance flows natively, processing millions in premiums."
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
            { id: "s-1", title: "Frontend", description: "React, Next.js, TypeScript, Tailwind CSS, Redux, Vue.js" },
            { id: "s-2", title: "Backend", description: "Node.js, NestJS, Express, Python, Go (Basic)" },
            { id: "s-3", title: "Database & Cloud", description: "PostgreSQL, MongoDB, Redis, AWS, Docker, Kubernetes, CI/CD" },
            { id: "s-4", title: "Architecture", description: "System Design, Microservices, Serverless, Event-Driven, Real-time Systems (WebSockets)" }
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
