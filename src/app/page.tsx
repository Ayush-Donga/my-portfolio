import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechMarquee } from "@/components/TechMarquee";
import { TrustStats } from "@/components/TrustStats";
import { Services } from "@/components/Services";
import { BackendExcellence } from "@/components/BackendExcellence";
import { QualityStandards } from "@/components/QualityStandards";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Ayush Donga | Senior Full Stack MERN Engineer (Remote)',
  description: 'Senior Full Stack Engineer specializing in scalable React & Node.js architectures. Available for remote roles in US/EU/UK. Expert in building production-grade SaaS.',
  keywords: ['Senior Full Stack Engineer', 'MERN Stack Developer', 'React Developer', 'Node.js Developer', 'Remote Engineer', 'Software Architect', 'Next.js Expert'],
};

export default async function Home() {
  const skills = await prisma.skill.findMany();
  const experience = await prisma.experience.findMany();
  const projects = await prisma.project.findMany({
    orderBy: {
      order: 'asc'
    }
  });
  
  const testimonials = await prisma.testimonial.findMany({
    where: { active: true }
  });
  
  const settings = await prisma.settings.findFirst();
  
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <About avatarUrl={settings?.avatarUrl} />
      <TechMarquee />
      <BackendExcellence />
      <TrustStats />
      <Services />
      <QualityStandards />
      <Process />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Reviews testimonials={testimonials} />
      <CTA />
      <Contact />
      <FloatingContact />
      <Footer />
    </main>
  );
}
