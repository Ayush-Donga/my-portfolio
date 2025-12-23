'use client'

import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Search, Bell, Monitor, Settings, Menu, User, LogOut, ChevronRight, Sparkles, CreditCard } from 'lucide-react'
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
        
        <div className="w-px h-6 bg-slate-200 dark:bg-white/10 mx-2 hidden md:block" />

        {/* Modern Profile Dropdown */}
        <div className="relative group/profile pl-2">
            <motion.button 
              className="flex items-center gap-3 p-1 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all outline-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
                <div className="text-right hidden sm:block">
                   <p className="text-xs font-black text-slate-900 dark:text-white leading-none tracking-tight">{session?.user?.name || 'Ayush Donga'}</p>
                   <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Admin Ops</p>
                </div>
                <div className="relative">
                   <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-primary to-purple-500 p-[2px] shadow-lg shadow-primary/20">
                      <div className="w-full h-full rounded-[10px] bg-slate-900 flex items-center justify-center overflow-hidden relative">
                         <span className="text-white font-black text-xs">{session?.user?.name?.[0] || 'A'}</span>
                         <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/10 to-black/0 opacity-0 group-hover/profile:opacity-100 transition-opacity" />
                      </div>
                   </div>
                   <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#030712] rounded-full animate-pulse" />
                </div>
            </motion.button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-64 origin-top-right transform scale-95 opacity-0 invisible group-hover/profile:scale-100 group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-200 z-50">
               <div className="p-4 rounded-[2rem] bg-white dark:bg-[#030712] border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 backdrop-blur-3xl">
                  <div className="flex items-center gap-3 mb-4 p-2 rounded-2xl bg-slate-50 dark:bg-white/5">
                     <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-primary shadow-sm">
                        <User className="w-5 h-5" />
                     </div>
                     <div className="overflow-hidden">
                        <p className="text-sm font-black text-slate-900 dark:text-white truncate">{session?.user?.name || 'Ayush Donga'}</p>
                        <p className="text-[10px] text-slate-500 font-bold truncate">{session?.user?.email || 'admin@nexora.com'}</p>
                     </div>
                  </div>
                  
                  <div className="space-y-1">
                     <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5 transition-all group/item">
                        <User className="w-4 h-4 text-slate-400 group-hover/item:text-primary transition-colors" />
                        <span>My Profile</span>
                        <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 transition-all" />
                     </button>
                     <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5 transition-all group/item">
                        <Sparkles className="w-4 h-4 text-slate-400 group-hover/item:text-primary transition-colors" />
                        <span>Workspace</span>
                        <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">PRO</span>
                     </button>
                     <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5 transition-all group/item">
                        <CreditCard className="w-4 h-4 text-slate-400 group-hover/item:text-primary transition-colors" />
                        <span>Billing</span>
                     </button>
                  </div>

                  <div className="h-px bg-slate-100 dark:bg-white/5 my-3" />

                  <button 
                    onClick={() => signOut({ callbackUrl: '/auth/signin' })}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
                  >
                     <LogOut className="w-4 h-4" />
                     <span>Sign Out</span>
                  </button>
               </div>
            </div>
        </div>
      </div>
    </header>
  )
}
