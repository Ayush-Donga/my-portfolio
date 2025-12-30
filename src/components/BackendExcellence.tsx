'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Database, Server, Shield, Zap, Lock, Cpu } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Server,
    title: "API Architecture & Design",
    description: "Designing RESTful and GraphQL APIs that are intuitive, documented (OpenAPI/Swagger), and versioned for long-term maintainability."
  },
  {
    icon: Database,
    title: "Database Modeling",
    description: "Expertise in SQL (Postgres) and NoSQL (MongoDB). Optimizing schemas for data integrity, complex queries, and scaling efficiently."
  },
  {
    icon: Shield,
    title: "Security & Authentication",
    description: "Implementing robust auth systems (OAuth2, JWT, NextAuth). Ensuring data protection through OWASP best practices and secure headers."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Reducing latency with caching strategies (Redis), optimizing database indices, and ensuring rapid response times for high-traffic endpoints."
  },
  {
    icon: Lock,
    title: "Data Integrity & Validation",
    description: "Using Zod/Joi for strict runtime validation. Ensuring inputs are sanitized and data remains consistent across microservices."
  },
  {
    icon: Cpu,
    title: "Scalable Infrastructure",
    description: "Experience with containerization (Docker) and serverless functions to build backends that auto-scale with demand."
  }
]

export const BackendExcellence = () => {
  return (
    <section id="backend-expertise" className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Behind the <span className="text-primary">Interface</span></h2>
            <p className="text-muted-foreground text-lg">
                While the frontend looks good, the backend means business. 
                I treat the invisible parts of the codebase with the same level of care as the UI, ensuring 
                <strong> security, scalability, and speed</strong>.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card className="h-full border-border/50 bg-card hover:bg-muted/50 transition-colors">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
