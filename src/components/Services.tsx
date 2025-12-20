'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Layout, MessageSquare, Rocket, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Full Stack Development',
    description: 'Building end-to-end web applications with modern stacks like MERN or Next.js. Focused on scalability and performance.',
    icon: Code2,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'UI/UX Implementation',
    description: 'Transforming designs into pixel-perfect, interactive, and responsive user interfaces with framer-motion and Tailwind.',
    icon: Layout,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    title: 'Backend & API Design',
    description: 'Architecting robust RESTful and GraphQL APIs with Node.js, Express, and PostgreSQL/Prisma.',
    icon: Server,
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  },
  {
    title: 'Team Leadership',
    description: 'Managing development teams, conducting code reviews, and implementing CI/CD workflows for efficient delivery.',
    icon: MessageSquare,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  {
    title: 'Performance Optimization',
    description: 'Analyzing and improving application speed, Core Web Vitals, and overall frontend performance.',
    icon: Rocket,
    color: 'text-red-500',
    bg: 'bg-red-500/10'
  }
]

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Professional <span className="text-primary">Services</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Providing high-quality solutions tailored for global clients, from startups to enterprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all group hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
          
          {/* Custom Bento-ish Card for "Available for Remote" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-primary-foreground border-none hover:shadow-2xl hover:shadow-primary/20 transition-all md:col-span-2 lg:col-span-1 flex flex-col justify-between"
          >
            <div>
              <ShieldCheck className="w-12 h-12 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-3">Global Collaboration</h3>
              <p className="opacity-90 text-sm leading-relaxed mb-6">
                Ready to work across any timezone. I provide flexible overlapping hours for US, UK, Europe, and Australia based clients to ensure smooth async and sync communication.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-white/10 px-3 py-2 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              AVAILABLE NOW
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
