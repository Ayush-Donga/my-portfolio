'use client'

import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { 
  Search, 
  Bell, 
  User, 
  Settings, 
  Menu,
  ChevronDown,
  Globe,
  Monitor
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'


interface AdminHeaderProps {
  onMenuClick?: () => void
}

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const { data: session } = useSession()

  return (
    <header className="h-16 md:h-20 border-b border-slate-200 dark:border-white/5 bg-white/70 dark:bg-[#030712]/70 backdrop-blur-xl sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 md:gap-6 flex-1">
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
        >
          <Menu className="w-5 h-5 text-slate-900 dark:text-white" />
        </button>

        <div className="relative max-w-md w-full hidden md:block group">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
           <input 
            type="text" 
            placeholder="Search for projects, tasks, or messages..." 
            className="w-full h-11 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl pl-11 pr-4 text-sm font-medium focus:ring-4 focus:ring-primary/5 focus:border-primary/50 transition-all outline-none"
           />
           <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/10 text-[10px] font-bold text-slate-400 bg-white dark:bg-black">
              ⌘ K
           </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center bg-slate-50 dark:bg-white/5 p-1 rounded-2xl border border-slate-100 dark:border-white/5">
           <Button variant="ghost" size="icon" className="w-8 h-8 md:w-9 md:h-9 rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm transition-all relative">
              <Bell className="w-4 h-4 md:w-4.5 md:h-4.5 text-slate-500 dark:text-slate-400" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-black" />
           </Button>
           <Button variant="ghost" size="icon" className="hidden md:flex w-9 h-9 rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm transition-all">
              <Monitor className="w-4.5 h-4.5 text-slate-500 dark:text-slate-400" />
           </Button>
           <Button variant="ghost" size="icon" className="w-8 h-8 md:w-9 md:h-9 rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm transition-all">
              <Settings className="w-4 h-4 md:w-4.5 md:h-4.5 text-slate-500 dark:text-slate-400" />
           </Button>
        </div>
        
        <div className="w-px h-6 bg-slate-200 dark:bg-white/10 mx-2" />

        <div className="flex items-center gap-3 pl-2">
             <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">{session?.user?.name || 'Ayush Donga'}</p>
                <div className="flex items-center justify-end gap-1.5 mt-1">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Active Now</p>
                </div>
             </div>
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="w-9 h-9 md:w-11 md:h-11 rounded-2xl bg-gradient-to-br from-primary to-blue-600 border-2 border-white dark:border-slate-800 flex items-center justify-center text-white shadow-lg shadow-primary/20 cursor-pointer"
             >
                <User className="w-4 h-4 md:w-5 md:h-5" />
             </motion.div>
        </div>
      </div>
    </header>
  )
}
