'use client'

import React, { useState, useEffect } from 'react'
import { Trash2, Mail, User, Clock, Loader2, MessageSquare, Reply } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Inbox <span className="text-primary font-black">Center</span></h1>
          <p className="text-slate-500 font-medium mt-1">Manage all strategic inquiries and feedback.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="px-4 py-2 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-xs font-black text-slate-400 uppercase tracking-widest">
              Total: {messages.length} Correspondence
           </div>
        </div>
      </div>

      <div className="space-y-6">
        {messages.length === 0 && !loading && (
          <div className="py-24 text-center bg-white dark:bg-white/5 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-white/10">
            <Mail className="w-16 h-16 text-slate-200 dark:text-white/10 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Workspace Zero achieved.</h3>
            <p className="text-slate-400 font-medium">No new inquiries detected at this time.</p>
          </div>
        )}
        
        {messages.map((msg) => (
          <motion.div 
            layout
            key={msg.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group relative bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-8 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary opacity-20 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
               <div className="shrink-0">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 dark:bg-black/20 flex items-center justify-center text-primary font-black text-2xl border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                     {msg.name[0]}
                  </div>
               </div>

               <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                     <div>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1.5">{msg.name}</h3>
                        <p className="text-sm font-bold text-primary truncate max-w-md">{msg.email}</p>
                     </div>
                     <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-100 dark:border-white/10">
                           {new Date(msg.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                     </div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-black/20 rounded-[1.5rem] p-6 border border-slate-50 dark:border-white/5 group-hover:border-primary/20 transition-all duration-500">
                     <p className="text-slate-600 dark:text-white/70 text-sm font-medium leading-relaxed whitespace-pre-wrap">
                        {msg.message}
                     </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="h-10 px-5 rounded-xl font-bold gap-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all">
                           <Reply className="w-4 h-4" /> Reply
                        </Button>
                        <Button variant="ghost" size="sm" className="h-10 px-5 rounded-xl font-bold gap-2 text-red-500 hover:bg-red-50 transition-all" onClick={() => handleDelete(msg.id, msg.name)}>
                           <Trash2 className="w-4 h-4" /> Delete Discovery
                        </Button>
                     </div>
                     <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                        <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Received via Contact API</span>
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
