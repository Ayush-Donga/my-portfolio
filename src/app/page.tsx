import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { TrustStats } from "@/components/TrustStats";
import { Services } from "@/components/Services";
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

export const dynamic = 'force-dynamic';

export default async function Home() {
  const skills = await prisma.skill.findMany();
  
  const experience = await prisma.experience.findMany();
  const projects = await prisma.project.findMany();

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <TechMarquee />
      <TrustStats />
      <Services />
      <QualityStandards />
      <Process />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Reviews />
      <CTA />
      <Contact />
      <FloatingContact />
      <Footer />
    </main>
  );
}
