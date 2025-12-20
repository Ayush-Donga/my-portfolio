'use client'

import React from 'react'
import { motion } from 'framer-motion'

const tech = [
  { name: 'React', color: 'text-blue-400' },
  { name: 'Next.js', color: 'text-foreground' },
  { name: 'TypeScript', color: 'text-blue-500' },
  { name: 'Node.js', color: 'text-green-500' },
  { name: 'Nest.js', color: 'text-green-500' },
  { name: 'Express.js', color: 'text-green-500' },
  { name: 'FastAPI', color: 'text-green-500' },
  { name: 'PostgreSQL', color: 'text-blue-400' },
  { name: 'MySQL', color: 'text-blue-400' },
  { name: 'Prisma', color: 'text-indigo-400' },
  { name: 'Tailwind', color: 'text-cyan-400' },
  { name: 'AWS', color: 'text-orange-400' },
  { name: 'MongoDB', color: 'text-green-600' },
  { name: 'Docker', color: 'text-blue-600' },
]

export const TechMarquee = () => {
  return (
    <div className="py-10 bg-muted/10 border-y border-border/50 overflow-hidden select-none">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, outerIdx) => (
          <div key={outerIdx} className="flex gap-16 px-8 items-center">
            {tech.map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className={`text-xl font-bold tracking-tighter ${t.color} opacity-70 hover:opacity-100 transition-opacity`}>
                   {t.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-border/50"></span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
