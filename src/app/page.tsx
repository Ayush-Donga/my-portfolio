import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
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
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </main>
  );
}
