'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, MessageSquare, Clock, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const remoteFeatures = [
  {
    icon: Clock,
    title: "Strategic Timezone Overlap",
    description: "Consistent guaranteed overlap with US (EST) and full overlap with Europe & UK (CET/GMT) for synchronous technical planning and daily unblocking."
  },
  {
    icon: MessageSquare,
    title: "Async-First Engineering",
    description: "Fluent in asynchronous delivery. I leverage Loom for architectural walkthroughs, deep Notion/Jira documentation, and GitHub Discussions to keep progress moving 24/7."
  },
  {
    icon: Target,
    title: "Ownership Over Execution",
    description: "I don't require micro-management. Give me a complex business problem, and I'll return with a scalable architecture, production-ready code, and comprehensive monitoring."
  },
  {
    icon: Globe,
    title: "Global Startup Experience",
    description: "8+ years of track record building and scaling SaaS platforms alongside globally distributed engineering teams. Deeply adjusted to remote-native startup cultures."
  }
]

export const RemoteReadiness = () => {
  return (
    <section id="remote-readiness" className="py-24 bg-card/30 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                    <Globe className="w-3 h-3" />
                    Remote-First Professional
                </div>
                <h2 className="text-3xl font-bold mb-4">Built for <span className="text-primary">Remote Collaboration</span></h2>
                <p className="text-muted-foreground mr-auto ml-auto max-w-2xl">
                    Remote work isn't just a location change—it's a skillset. Here's how I ensure seamless collaboration across time zones.
                </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {remoteFeatures.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full border-border/50 bg-card hover:bg-muted/50 transition-colors hover:border-primary/30 hover:shadow-lg">
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
