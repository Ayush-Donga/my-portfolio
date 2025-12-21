'use client'

import React, { useState, useEffect } from 'react'
import { Trash2, Mail, User, Clock, Loader2, MessageSquare, Reply, Hash, ShieldCheck, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
}

export default function MessagesAdmin() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages')
      const data = await res.json()
      setMessages(data)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Permanently remove correspondence from ${name}?`)) return
    await fetch(`/api/messages/${id}`, { method: 'DELETE' })
    fetchMessages()
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
             <div className="p-1 rounded bg-orange-500/10 text-orange-500">
                <Zap className="w-3 h-3" />
             </div>
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Inbound Analytics</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-none">Inquiry <span className="text-primary italic">Hub</span></h1>
          <p className="text-slate-500 font-medium mt-3 max-w-lg">Advanced management of global opportunities and strategic partnerships.</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="px-6 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-black text-slate-900 dark:text-slate-300 uppercase tracking-widest shadow-sm">
              {messages.length} Correspondence
           </div>
        </div>
      </div>

      <div className="space-y-8">
        {messages.length === 0 && !loading && (
          <div className="py-24 text-center bg-white dark:bg-white/5 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-white/10 p-12">
            <div className="w-24 h-24 bg-slate-50 dark:bg-black/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-100 dark:border-white/5 shadow-inner">
               <Mail className="w-10 h-10 text-slate-200 dark:text-white/10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase italic">Inbound Passive</h3>
            <p className="text-slate-400 font-medium text-lg">Your queue is currently empty. Perfect time for production focus.</p>
          </div>
        )}
        
        {messages.map((msg: Message, index: number) => (
          <motion.div 
            layout
            key={msg.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-white/5 rounded-[3rem] border border-slate-100 dark:border-white/5 p-10 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-700"
          >
            <div className="absolute top-10 left-0 w-1.5 h-16 bg-primary opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500 translate-x-[-0.75px]" />
            
            <div className="flex flex-col lg:flex-row gap-10 items-start">
               {/* Left Profile Section */}
               <div className="shrink-0 flex lg:flex-col items-center gap-4 text-center">
                  <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-slate-50 to-slate-200 dark:from-white/5 dark:to-white/10 flex items-center justify-center text-primary font-black text-3xl border border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-700">
                     {msg.name[0]}
                  </div>
                  <div className="hidden lg:block space-y-2">
                     <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase tracking-widest border border-emerald-500/20">Verified Path</span>
                  </div>
               </div>

               <div className="flex-1 min-w-0 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
                     <div>
                        <div className="flex items-center gap-3 mb-2">
                           <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">{msg.name}</h3>
                           <div className="p-1 rounded bg-slate-100 dark:bg-white/10">
                              <ShieldCheck className="w-4 h-4 text-primary" />
                           </div>
                        </div>
                        <p className="text-base font-bold text-slate-400 truncate hover:text-primary transition-colors cursor-pointer">{msg.email}</p>
                     </div>
                     <div className="flex flex-col items-end gap-2">
                        <span className="text-[10px] font-black text-slate-900 dark:text-slate-300 uppercase tracking-[0.2em] bg-slate-50 dark:bg-white/10 px-4 py-2 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm">
                           {new Date(msg.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 mr-2 uppercase tracking-widest">Inbound via SSL Endpoint</span>
                     </div>
                  </div>
                  
                  <div className="relative">
                     <div className="bg-slate-50 dark:bg-black/40 rounded-[2rem] p-8 border border-slate-50 dark:border-white/5 group-hover:border-primary/10 group-hover:bg-primary/[0.01] transition-all duration-500 min-h-[120px]">
                        <MessageSquare className="absolute top-4 right-6 w-8 h-8 text-primary/5 group-hover:text-primary/10 transition-colors" />
                        <p className="text-slate-600 dark:text-slate-300 text-lg font-medium leading-[1.8] italic">
                           "{msg.message}"
                        </p>
                     </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                     <div className="flex items-center gap-3">
                        <Button className="h-12 px-8 rounded-2xl font-black uppercase text-[10px] tracking-widest gap-3 shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5" asChild>
                           <a href={`mailto:${msg.email}`}>
                              <Reply className="w-4 h-4" /> Initiate Correspondence
                           </a>
                        </Button>
                        <Button variant="ghost" className="h-12 px-6 rounded-2xl font-black uppercase text-[10px] tracking-widest gap-3 text-red-500 hover:bg-red-50 hover:text-red-600 transition-all" onClick={() => handleDelete(msg.id, msg.name)}>
                           <Trash2 className="w-4 h-4" /> Purge Asset
                        </Button>
                     </div>
                     
                     <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Inquiry ID</p>
                           <p className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">#{msg.id.slice(-6).toUpperCase()}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
        ))}
      </div>
    </div>
  )
}
