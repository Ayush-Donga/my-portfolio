'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { 
  LayoutDashboard, 
  Briefcase, 
  Code2, 
  FolderGit2, 
  Mail, 
  LogOut,
  ExternalLink,
  ChevronRight,
  User,
  Settings,
  FileText
} from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Experience', href: '/admin/experience', icon: Briefcase },
  { name: 'Skills', href: '/admin/skills', icon: Code2 },
  { name: 'Projects', href: '/admin/projects', icon: FolderGit2 },
  { name: 'Resumes', href: '/admin/resumes', icon: FileText },
  { name: 'Messages', href: '/admin/messages', icon: Mail },
]

export function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const handleLogout = () => {
    signOut({ callbackUrl: '/auth/signin' })
  }

  return (
    <aside className="w-72 bg-white dark:bg-[#030712] border-r border-slate-200 dark:border-white/5 flex flex-col h-screen sticky top-0 z-40">
      <div className="p-8">
        <Link href="/admin" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
            <span className="text-xl font-black">A</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none tracking-tight text-slate-900 dark:text-white">Ayush <span className="text-primary text-[10px] uppercase align-top ml-1">Pro</span></h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Admin Console</p>
          </div>
        </Link>
      </div>

      <div className="flex-1 px-4 space-y-8 overflow-y-auto custom-scrollbar">
        <div>
          <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">Core Management</p>
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all group relative overflow-hidden",
                    isActive 
                      ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-lg shadow-slate-200 dark:shadow-none" 
                      : "text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-slate-400 group-hover:text-primary transition-colors")} />
                    {item.name}
                  </div>
                  {isActive ? (
                    <ChevronRight className="w-4 h-4 text-primary relative z-10" />
                  ) : (
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-pill"
                      className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10 opacity-50"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>

        <div>
          <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">Quick Shortcuts</p>
          <div className="space-y-1">
             <Link 
              href="/" 
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-slate-500 hover:bg-primary/5 hover:text-primary transition-all group"
            >
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
              Live Portfolio
            </Link>
             <button className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-semibold text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 transition-all group text-left">
              <Settings className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
              Settings
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 mt-auto">
        <div className="bg-slate-50 dark:bg-white/5 rounded-3xl p-4 border border-slate-100 dark:border-white/5">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#030712] border border-slate-200 dark:border-white/10 flex items-center justify-center text-primary font-bold shadow-sm">
                 {session?.user?.name?.[0] || 'A'}
              </div>
              <div className="flex-1 min-w-0">
                 <p className="text-sm font-bold truncate text-slate-900 dark:text-white">{session?.user?.name || 'Ayush Donga'}</p>
                 <p className="text-[10px] text-slate-400 truncate font-medium">{session?.user?.email || 'ayush@example.com'}</p>
              </div>
           </div>
           <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-red-500 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 hover:bg-red-100 dark:hover:bg-red-500/20 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  )
}
