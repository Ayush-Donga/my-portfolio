import React from 'react'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Briefcase, Code2, FolderGit2, Mail, Plus, ChevronRight, Activity, Globe, Database, Cpu } from 'lucide-react'
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
    { name: 'Experience', value: experienceCount, icon: Briefcase, color: 'text-blue-500', trend: '+2 this month' },
    { name: 'Skills', value: skillsCount, icon: Code2, color: 'text-purple-500', trend: 'Updated 2h ago' },
    { name: 'Projects', value: projectsCount, icon: FolderGit2, color: 'text-green-500', trend: 'Live on Global' },
    { name: 'Messages', value: contactCount, icon: Mail, color: 'text-orange-500', trend: '3 new inquiries' },
  ]
}

export default async function AdminDashboard() {
  const stats = await getStats()
  
  const recentProjects = await prisma.project.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' }
  })

  const recentMessages = await prisma.contact.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="space-y-10">
      {/* Premium Header with Status */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">System Operational</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Command <span className="text-primary italic">Center</span></h1>
          <p className="text-slate-500 font-medium mt-2">Managing your global digital presence and professional metrics.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
           <div className="flex items-center gap-4 px-4 py-2 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2">
                 <Database className="w-3.5 h-3.5 text-slate-400" />
                 <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">PostgreSQL Live</span>
              </div>
              <div className="w-px h-3 bg-slate-200 dark:bg-white/10" />
              <div className="flex items-center gap-2">
                 <Globe className="w-3.5 h-3.5 text-slate-400" />
                 <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">Vercel Edge</span>
              </div>
           </div>
           <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white text-sm font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-0.5 active:translate-y-0">
              <Plus className="w-4 h-4" /> Add Asset
           </button>
        </div>
      </div>

      {/* Stats Grid with Glassmorphism */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={stat.name} className="group relative border-none bg-white dark:bg-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-primary/5">
            <CardContent className="p-8 relative">
              <div className={cn("absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-20 rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-30", stat.color.replace('text-', 'bg-'))} />
              
              <div className="flex flex-col gap-6 relative z-10 text-left">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-white/5 group-hover:scale-110 transition-all duration-500 shadow-sm", stat.color)}>
                   <stat.icon className="h-7 w-7" />
                </div>
                
                <div>
                   <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1">{stat.name}</p>
                   <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.value}</span>
                      <span className="text-[10px] font-bold text-emerald-500">{stat.trend}</span>
                   </div>
                </div>
              </div>

              {/* Mock Trend Chart */}
              <div className="absolute bottom-0 left-0 right-0 h-1 hidden group-hover:block transition-all duration-500">
                 <div className={cn("h-full opacity-50", stat.color.replace('text-', 'bg-'))} style={{ width: '100%' }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none bg-white dark:bg-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-10 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic">Strategic Assets</CardTitle>
                  <CardDescription className="text-slate-400 font-medium mt-1">Latest case studies and production codebases.</CardDescription>
                </div>
                <button className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-primary hover:bg-primary/5 transition-all">Full Archive</button>
              </div>
            </CardHeader>
            <CardContent className="p-10 pt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                  {recentProjects.map(project => (
                    <div key={project.id} className="flex flex-col gap-4 p-5 rounded-3xl border border-slate-50 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group cursor-pointer">
                        <div className="aspect-video w-full rounded-[1.5rem] bg-slate-100 dark:bg-black/40 overflow-hidden border border-slate-200 dark:border-white/10 relative">
                          {project.imageUrl ? (
                            <NextImage src={project.imageUrl} alt="" fill className="object-cover group-hover:scale-110 transition-all duration-700" />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                               <Plus className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                            </div>
                          )}
                          <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-md text-[9px] font-bold text-white uppercase tracking-widest">
                             {project.category}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">{project.title}</h4>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.techStack.slice(0, 3).map(tech => (
                                <span key={tech} className="text-[10px] font-bold text-slate-400"># {tech}</span>
                            ))}
                          </div>
                        </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* New Activity/Health Card */}
          <Card className="border-none bg-primary/[0.03] dark:bg-primary/5 rounded-[2.5rem] border border-primary/10 overflow-hidden p-8">
             <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                   <Cpu className="w-8 h-8" />
                </div>
                <div className="flex-1 text-center md:text-left">
                   <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Technical Health</h3>
                   <p className="text-sm text-slate-500 mt-1 max-w-sm">All backend services are currently performing within optimal parameters for a global audience.</p>
                </div>
                <div className="flex items-center gap-6">
                   <div className="text-center">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Latency</p>
                      <p className="text-xl font-black text-slate-900 dark:text-white">24ms</p>
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Uptime</p>
                      <p className="text-xl font-black text-slate-900 dark:text-white">99.9%</p>
                   </div>
                </div>
             </div>
          </Card>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-8">
          <Card className="border-none bg-[#030712] text-white rounded-[2.5rem] overflow-hidden shadow-2xl">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-black uppercase italic italic tracking-tighter">Inbound Requests</CardTitle>
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              </div>
              <CardDescription className="text-slate-500 font-medium">New potential opportunities.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-6">
              <div className="space-y-6">
                  {recentMessages.length === 0 ? (
                    <div className="text-center py-8">
                       <p className="text-sm text-slate-500 uppercase font-black tracking-widest">No Inbound Active</p>
                    </div>
                  ) : recentMessages.map(msg => (
                    <div key={msg.id} className="group cursor-pointer">
                        <div className="flex items-center justify-between mb-1.5">
                          <p className="text-sm font-black text-slate-200 group-hover:text-primary transition-colors">{msg.name}</p>
                          <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">New</span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 group-hover:text-slate-400 transition-colors leading-relaxed italic">
                          "{msg.message}"
                        </p>
                        <div className="h-px w-full bg-white/5 mt-4 group-last:hidden" />
                    </div>
                  ))}
                  <button className="w-full py-4 mt-4 rounded-2xl bg-white/5 border border-white/10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                    Access Comms
                  </button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-slate-900 text-white rounded-[2.5rem] p-8 space-y-4">
             <div className="flex items-center gap-2 text-primary">
                <Activity className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">Quick Tip</span>
             </div>
             <p className="text-sm font-medium text-slate-400 leading-relaxed">
                Update your <span className="text-slate-200">Featured Projects</span> regularly to maintain a high-ranking profile in global remote developer marketplaces.
             </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
