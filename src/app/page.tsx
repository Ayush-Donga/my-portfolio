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
  title: 'Ayush Donga | Senior Full-Stack Engineer (Remote)',
  description: 'Senior Full-Stack Engineer with 6+ years experience in MERN & Cloud (AWS/Azure). Expert in building scalable systems for global startups across US/UK/EU.',
  keywords: ['Senior Full-Stack Engineer', 'MERN Stack Developer', 'Cloud Architect', 'AWS', 'Azure', 'Remote Engineer', 'Scalable systems'],
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
      <Hero calendlyUrl={(settings as any)?.calendlyUrl} />
      <About avatarUrl={(settings as any)?.avatarUrl} />
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
      <CTA calendlyUrl={(settings as any)?.calendlyUrl} />
      <Contact />
      <FloatingContact />
      <Footer />
    </main>
  );
}
