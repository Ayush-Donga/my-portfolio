import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { RemoteReadiness } from "@/components/RemoteReadiness";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Ayush Donga | Senior Full-Stack Engineer - Remote (EU/UK/US)',
  description: 'Senior Full-Stack Engineer with 6+ years architecting scalable systems. Expert in MERN stack, Cloud (AWS/Azure), and remote-first collaboration. Available for EU/UK/US opportunities.',
  keywords: ['Senior Full-Stack Engineer', 'Remote Engineer', 'MERN Stack', 'Cloud Architect', 'AWS', 'Azure', 'Node.js', 'React', 'TypeScript', 'Scalable Systems'],
};

export default async function Home() {
  const skills = await prisma.skill.findMany();
  const experience = await prisma.experience.findMany();
  const projects = await prisma.project.findMany({
    orderBy: {
      order: 'asc'
    },
    take: 4
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
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <RemoteReadiness />
      <Reviews testimonials={testimonials} />
      <CTA calendlyUrl={(settings as any)?.calendlyUrl} />
      <Contact />
      <FloatingContact />
      <Footer />
    </main>
  );
}
