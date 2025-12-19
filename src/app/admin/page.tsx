import React from 'react'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Briefcase, Code2, FolderGit2, Mail, Plus, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import NextImage from 'next/image'

async function getStats() {
  const [experienceCount, skillsCount, projectsCount, contactCount] = await Promise.all([
    prisma.experience.count(),
    prisma.skill.count(),
    prisma.project.count(),
    prisma.contact.count(),
  ])

  return [
    { name: 'Experience', value: experienceCount, icon: Briefcase, color: 'text-blue-500' },
    { name: 'Skills', value: skillsCount, icon: Code2, color: 'text-purple-500' },
    { name: 'Projects', value: projectsCount, icon: FolderGit2, color: 'text-green-500' },
    { name: 'Messages', value: contactCount, icon: Mail, color: 'text-orange-500' },
  ]
}

export default async function AdminDashboard() {
  const stats = await getStats()
  
  const recentProjects = await prisma.project.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' }
  })

  const recentMessages = await prisma.contact.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-500 font-medium mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-all">
              Export Report
           </button>
           <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground text-sm font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <Plus className="w-4 h-4" /> New Project
           </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={stat.name} className="border-none bg-white dark:bg-white/5 shadow-xl shadow-slate-200/40 dark:shadow-none rounded-3xl overflow-hidden group">
            <CardContent className="p-6 relative">
              <div className={cn("absolute top-0 right-0 w-24 h-24 blur-3xl opacity-10 rounded-full", stat.color.replace('text-', 'bg-'))} />
              <div className="flex items-center justify-between relative z-10">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-black/20 group-hover:scale-110 transition-transform duration-500", stat.color)}>
                   <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{stat.name}</p>
                   <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">{stat.value}</div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                 <div className="flex-1 h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full opacity-70 flex items-center justify-end pr-1 w-[70%]", stat.color.replace('text-', 'bg-'))}
                    />
                 </div>
                 <span className="text-[10px] font-bold text-slate-400">70% Cap.</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-none bg-white dark:bg-white/5 shadow-xl shadow-slate-200/40 dark:shadow-none rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-8 pb-4">
            <div>
              <CardTitle className="text-xl font-bold">Recent Projects</CardTitle>
              <CardDescription>The latest additions to your showcase.</CardDescription>
            </div>
            <button className="text-xs font-bold text-primary hover:underline">View All</button>
          </CardHeader>
          <CardContent className="px-8 pb-8">
             <div className="space-y-4">
                {recentProjects.map(project => (
                   <div key={project.id} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group">
                      <div className="w-16 h-12 rounded-xl bg-slate-100 dark:bg-black/40 overflow-hidden border border-slate-200 dark:border-white/10 relative">
                         {project.imageUrl && <NextImage src={project.imageUrl} alt="" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />}
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">{project.title}</h4>
                         <p className="text-xs text-slate-400 truncate mt-0.5">{project.category}</p>
                      </div>
                      <div className="flex items-center gap-2">
                         {project.techStack.slice(0, 2).map(tech => (
                            <span key={tech} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500">{tech}</span>
                         ))}
                         <ChevronRight className="w-4 h-4 text-slate-300" />
                      </div>
                   </div>
                ))}
             </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-white dark:bg-white/5 shadow-xl shadow-slate-200/40 dark:shadow-none rounded-3xl overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl font-bold">New Messages</CardTitle>
            <CardDescription>Unread inquiries.</CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
             <div className="space-y-6">
                {recentMessages.map(msg => (
                   <div key={msg.id} className="relative pl-6 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-primary/30 before:rounded-full">
                      <div className="flex items-center justify-between mb-1">
                         <p className="text-sm font-bold text-slate-900 dark:text-white">{msg.name}</p>
                         <span className="text-[10px] text-slate-400 font-medium">2m ago</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                         {msg.message}
                      </p>
                   </div>
                ))}
                <button className="w-full py-3 rounded-2xl border-2 border-dashed border-slate-200 dark:border-white/10 text-xs font-bold text-slate-400 hover:border-primary/30 hover:text-primary transition-all">
                   Manage All Inquiries
                </button>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
