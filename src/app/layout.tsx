import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import FloatingChat from "@/components/FloatingChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://ayushd-portfolio.vercel.app"),
  title: {
    default: "Ayush Donga — Senior Full-Stack Engineer & Backend Architect",
    template: "%s | Ayush Donga",
  },
  description: "Senior Full-Stack Engineer & Backend Architect with 8+ years of experience engineering scalable enterprise SaaS, ERP, distributed microservices, and production AI/LLM workflows. Specializing in TypeScript, Node.js, NestJS, Next.js, PostgreSQL, Redis, RabbitMQ, and AWS.",
  keywords: [
    "Ayush Donga",
    "Senior Full-Stack Engineer",
    "Backend Architect",
    "Distributed Systems Engineer",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Apache Kafka",
    "AWS",
    "AI/LLM Workflows",
    "Enterprise ERP",
    "Remote Engineer"
  ],
  authors: [{ name: "Ayush Donga", url: "https://linkedin.com/in/ayush-donga-696755197" }],
  creator: "Ayush Donga",
  publisher: "Ayush Donga",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Ayush Donga — Senior Full-Stack Engineer & Backend Architect",
    description: "8+ Years of Experience architecting high-performance distributed systems, enterprise SaaS, and AI-powered applications across US, UK, and EU time zones.",
    siteName: "Ayush Donga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Donga — Senior Full-Stack Engineer & Backend Architect",
    description: "8+ Years of Experience building scalable enterprise SaaS, distributed systems, and production AI workflows.",
    creator: "@AyushDonga",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ayush Donga",
  "alternateName": "Ayush",
  "url": process.env.NEXT_PUBLIC_APP_URL || "https://ayushd-portfolio.vercel.app",
  "image": "https://res.cloudinary.com/duxzb3nig/image/upload/v1766469968/vbnevvvxieqxcgmgdaaz.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/ayush-donga-696755197",
    "https://github.com/ayush-donga"
  ],
  "jobTitle": "Senior Full-Stack Engineer & Backend Architect",
  "worksFor": {
    "@type": "Organization",
    "name": "Pardy Panda Studios"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Parul University"
  },
  "description": "Senior Full-Stack Engineer & Backend Architect with 8+ years of experience architecting, developing, and delivering scalable enterprise SaaS, ERP, and AI-powered applications.",
  "knowsAbout": [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "React.js",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Apache Kafka",
    "GraphQL",
    "REST APIs",
    "Prisma ORM",
    "Microservices",
    "Distributed Systems",
    "AWS",
    "Docker",
    "OpenAI APIs",
    "Anthropic Claude APIs",
    "AI Document Processing"
  ],
  "email": "mailto:ayush.donga@gmail.com",
  "telephone": "+918140000626",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "addressCountry": "India"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <FloatingChat />
        </Providers>
      </body>
    </html>
  );
}
