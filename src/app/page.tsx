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
import { Footer } from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Ayush Donga | Senior Full-Stack Engineer | Systems Architect',
  description: 'Senior Full-Stack Engineer with 7+ years of experience building high-performance, cloud-native platforms for US & EU startups. Specialist in Rust, NestJS, and AWS.',
  keywords: ['Senior Full-Stack Engineer', 'Remote Developer', 'Systems Architect', 'Rust', 'NestJS', 'AWS', 'High-Performance Systems', 'FinTech', 'SaaS', 'US Startups', 'EU Tech'],
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
      <Hero 
        calendlyUrl={(settings as any)?.calendlyUrl} 
        bio={(settings as any)?.bio}
        professionalTitle={(settings as any)?.professionalTitle}
      />
      <About avatarUrl={(settings as any)?.avatarUrl} />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <RemoteReadiness />
      <Reviews testimonials={testimonials} />
      <CTA calendlyUrl={(settings as any)?.calendlyUrl} />
      <Contact />
      <Footer />
    </main>
  );
}
