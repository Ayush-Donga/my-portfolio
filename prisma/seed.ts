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
          "Leading and mentoring a team of 4 full stack developers working on MERN and Next.js based projects.",
          "Planning sprints, assigning tasks, tracking progress, and ensuring timely delivery of milestones.",
          "Architected and developed a high-performance Super Admin Platform using Next.js, React, TypeScript, Prisma, and PostgreSQL.",
          "Designed scalable frontend and backend architectures aligned with long-term product goals.",
          "Implemented real-time notification and item-tracking systems using WebSockets.",
          "Conducting regular code reviews, enforcing best practices, and maintaining high code quality standards.",
          "Optimized frontend rendering, API performance, and database queries to improve system scalability and reliability.",
          "Collaborating with UI/UX designers, product managers, and QA teams to deliver user centric solutions"
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
          "Managed and mentored a team of 3 developers, ensuring technical growth and project success.",
          "Led end-to-end development of a Learning Management System (LMS) using React, NestJS, TypeScript, resulting in a 25% increase in user engagement.",
          "Designed and implemented full-stack architectures supporting high traffic and real-time data updates.",
          "Built real-time dashboards and notification systems for education and healthcare platforms.",
          "Conducted architectural reviews, performance tuning, and technical documentation.",
          "Worked closely with international clients, ensuring clear English communication and requirement alignment.",
          "Implemented JWT based authentication, RBAC, and secure REST APIs."
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
          "Developed a large scale Education ERP system using React and PostgreSQL, reducing operational costs by 30%.",
          "Built and maintained multiple modules including student management, fee collection, attendance tracking, and examination systems.",
          "Implemented responsive UI components and optimized frontend performance for better user experience.",
          "Collaborated with cross-functional teams to gather requirements and deliver features on schedule.",
          "Integrated third-party APIs for payment gateways, SMS notifications, and email services.",
          "Participated in code reviews and contributed to improving development workflows and coding standards."
        ]
      },
      {
        title: "Associate Software Engineer",
        company: "Red & White Softech",
        location: "Surat, India",
        startDate: new Date("2018-11-01"),
        endDate: new Date("2020-11-30"),
        current: false,
        description: [
          "Built CRM and Job Portal applications with analytics dashboards and optimized user flows.",
          "Implemented reusable component patterns, improving frontend maintainability and development speed.",
          "Collaborated in Agile teams and actively participated in sprint planning and reviews.",
          "Worked on student portals, attendance systems, and internal enterprise tools.",
          "Gained strong fundamentals in full stack development, databases, and teamwork."
        ]
      }
    ]
  })

  // Projects
  await prisma.project.createMany({
    data: [
      {
        title: "ERP - Jewellery Domain (CH Jewelers)",
        description: "Developed scalable backend APIs for customer, supplier, inventory, rate, and diamond rate management. Designed optimized relational database schema using Prisma ORM and PostgreSQL. Implemented secure authentication, role based access control (RBAC), and audit logging. Built real time notification and item transfer APIs for inventory tracking.",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        category: "Backend Development"
      },
      {
        title: "Job Portal Platform",
        description: "Built a full-featured job portal for job seekers and employers. Implemented advanced search, filters, and analytics dashboards. Developed application tracking, interview scheduling, and real-time notifications. Created micro-based dashboards for Admin, Employer, and Job Seeker users.",
        techStack: ["React", "Express.js", "TypeORM", "TypeScript", "PostgreSQL"],
        category: "Full Stack Development"
      },
      {
        title: "Learning Management System (LMS)",
        description: "Designed and developed a modular LMS supporting academic, administrative, and financial workflows. Implemented admissions, attendance, course management, and financial reporting modules. Built real-time dashboards, notifications, and detailed analytics reports. Integrated JWT-based authentication and granular micro-based access control.",
        techStack: ["React", "Nest.js", "TypeScript", "TypeORM", "PostgreSQL", "MongoDB"],
        category: "Full Stack Development"
      },
      {
        title: "Pharma CRM System",
        description: "Developed an end-to-end CRM for pharmaceutical export operations. Implemented sales pipeline, vendor management, inventory tracking, and invoicing. Enabled real-time stock updates and shipment tracking. Designed role-based access for sales, admin, and inventory teams.",
        techStack: ["Laravel", "AJAX", "jQuery", "MySQL"],
        category: "CRM Development"
      },
      {
        title: "Policy Management System",
        description: "Built a complete insurance policy and claims management system. Implemented policy creation, allocation workflows, and claim tracking. Designed master data modules for users, financial entities, and third-party integrations. Improved operational efficiency through automated workflows and reporting.",
        techStack: ["Laravel", "AJAX", "jQuery", "MySQL"],
        category: "Enterprise Application"
      },
      {
        title: "Hospital Management System",
        description: "Developed a centralized system to manage patient records, appointments, billing, and inventory. Implemented real-time scheduling, automated reminders, and online payment workflows. Integrated role based access for doctors, staff, and administrators.",
        techStack: ["Laravel", "jQuery", "MySQL"],
        category: "Enterprise Application"
      },
      {
        title: "IT Education & E-Learning Platform",
        description: "Built an interactive multimedia education platform. Developed CMS modules for course management, video lectures, and downloadable content. Implemented quizzes, assignments, advanced search, filters, and discussion forums. Improved student engagement through structured UI and optimized navigation",
        techStack: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
        category: "Web Application"
      }
    ]
  })

  // Skills
  const skillsConfig = [
    { category: "Frontend Technologies", skills: ["React.js", "Next.js (SSR)", "Redux Toolkit", "JavaScript (TS6+)", "TypeScript", "Webpack", "HTML5", "CSS3"] },
    { category: "Backend Technologies", skills: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "Microservices Architecture"] },
    { category: "Databases & ORM", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "TypeORM"] },
    { category: "DevOps & Cloud", skills: ["Docker", "CI/CD Pipelines", "GitHub Actions", "AWS (EC2, S3)", "GCP", "VPC"] },
    { category: "Testing & Quality", skills: ["Jest", "Mocha", "Cypress", "Unit & Integration Testing"] },
    { category: "Methodologies & Tools", skills: ["Agile/Scrum", "Git", "Clean Code Practices", "System Design"] },
    { category: "Architecture & Security", skills: ["Server-Side Rendering (SSR)", "RBAC", "JWT Authentication", "API Security", "Performance Optimization"] }
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
        quote: "Ayush is an exceptional developer who doesn't just write code but understands the business requirements perfectly. His leadership skills were vital for our project's success.",
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "TechFlow",
        avatar: "SJ"
      },
      {
        quote: "Working with Ayush was a breeze. He delivered a complex MERN application ahead of schedule and with zero technical debt. Highly recommended for remote leadership roles.",
        name: "Michael Chen",
        role: "CTO",
        company: "CloudScale Systems",
        avatar: "MC"
      },
      {
        quote: "The architectural decisions Ayush made for our SaaS platform saved us months of rework. He's a true professional who global teams can rely on.",
        name: "David Miller",
        role: "Founder",
        company: "StartupPulse",
        avatar: "DM"
      }
    ]
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
