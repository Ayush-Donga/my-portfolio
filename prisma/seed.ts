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
        title: "CH Jewelers - Enterprise ERP",
        description: "A comprehensive Jewelry ERP system managing complex inventory and diamond rates.",
        problem: "Challenge: Handling fragmented inventory across 5 branches with complex diamond weight calculations (carats/grams) led to frequent manual errors and stock discrepancies.",
        outcome: "Impact: Automated real-time tracking and precise valuation algorithms reduced stock discrepancies to <0.5% and increased processing speed by 50%.",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        category: "Backend Development",
        role: "Lead Architect"
      },
      {
        title: "Global Hire - Recruitment Platform",
        description: "Advanced Job Portal for international startups and high-growth teams.",
        problem: "Challenge: Standard job boards lacked granular filtering for specific niche skillsets, resulting in high 'noise' for recruiters.",
        outcome: "Impact: Implemented AI-driven skill matching that reduced time-to-hire by 35% for initial screening phases.",
        techStack: ["React", "Express.js", "TypeORM", "TypeScript", "PostgreSQL"],
        category: "Full Stack Development",
        role: "Full Stack Lead"
      },
      {
        title: "EduPulse LMS",
        description: "Modern Learning Management System for digital-first educational institutions.",
        problem: "Challenge: Migrating heavy interactive course materials to a responsive platform while maintaining low latency on slow connections.",
        outcome: "Impact: Built a mobile-first, edge-cached LMS that improved student completion rates by 60% and reduced page load times by 40%.",
        techStack: ["React", "Nest.js", "TypeScript", "TypeORM", "PostgreSQL"],
        category: "Full Stack Development",
        role: "Senior Engineer"
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
        quote: "Ayush is an exceptional developer who understands the business requirements perfectly. His architectural decisions for our SaaS platform saved us months of rework.",
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "TechFlow",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: "https://logo.clearbit.com/techflow.com"
      },
      {
        quote: "He delivered a complex MERN application ahead of schedule and with zero technical debt. A true professional who global startups can rely on.",
        name: "Michael Chen",
        role: "CTO",
        company: "CloudScale Systems",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: "https://logo.clearbit.com/cloudscale.com"
      },
      {
        quote: "The best full-stack engineer we've worked with. His focus on performance and production-ready code is exactly what a scaling startup needs.",
        name: "David Miller",
        role: "Founder",
        company: "StartupPulse",
        avatar: null,
        linkedinUrl: "https://linkedin.com/in/ayush-donga-696755197",
        logoUrl: "https://logo.clearbit.com/startuppulse.com"
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
