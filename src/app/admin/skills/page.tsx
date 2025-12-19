'use client'

import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2, Loader2, Save, X, Code2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Skill {
  id: string
  name: string
  category: string
  level: number | null
}

export default function SkillsAdmin() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<Partial<Skill>>({
    name: '',
    category: 'Frontend',
    level: 80
  })

  useEffect(() => {
    fetchSkills()
  }, [])

  const fetchSkills = async () => {
    try {
      const res = await fetch('/api/skills')
      const data = await res.json()
      setSkills(data)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenForm = (skill?: Skill) => {
    if (skill) {
      setEditingId(skill.id)
      setFormData(skill)
    } else {
      setEditingId(null)
      setFormData({ name: '', category: 'Frontend', level: 80 })
    }
    setIsFormOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const url = editingId ? `/api/skills/${editingId}` : '/api/skills'
      const method = editingId ? 'PATCH' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        fetchSkills()
        setIsFormOpen(false)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Permanently delete this skill?')) return
    await fetch(`/api/skills/${id}`, { method: 'DELETE' })
    fetchSkills()
  }

  const defaultCategories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Mobile']
  const allCategories = Array.from(new Set([...defaultCategories, ...skills.map(s => s.category)]))

  if (loading && skills.length === 0) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-12 h-12 text-primary animate-spin opacity-20" />
        <p className="text-slate-400 font-medium animate-pulse">Syncing Technical Stack...</p>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Technical <span className="text-primary font-black">Stack</span></h1>
          <p className="text-slate-500 font-medium mt-1">Categorized expertise and proficiency levels.</p>
        </div>
        <Button onClick={() => handleOpenForm()} className="h-12 px-6 rounded-2xl gap-2 font-bold shadow-xl shadow-primary/20">
          <Plus className="w-5 h-5" /> Add New Skill
        </Button>
      </div>

      {skills.length === 0 ? (
        <div className="py-24 text-center bg-white dark:bg-white/5 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-white/10">
          <Code2 className="w-16 h-16 text-slate-200 dark:text-white/10 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No skills discovered yet.</h3>
          <p className="text-slate-400 font-medium max-w-sm mx-auto">Start building your architecutral profile by adding your first technical skill.</p>
          <Button onClick={() => handleOpenForm()} variant="outline" className="mt-8 rounded-xl h-12 px-6 font-bold">
             Launch First Skill
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCategories.map(category => {
            const catSkills = skills.filter(s => s.category === category)
            if (catSkills.length === 0) return null
            
            return (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-2 px-2">
                   <div className="w-1.5 h-6 bg-primary rounded-full" />
                   <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">{category}</h2>
                   <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 border border-slate-200 dark:border-white/10">
                      {catSkills.length} Items
                   </span>
                </div>
                <div className="space-y-3">
                  {catSkills.map(skill => (
                    <motion.div 
                      layout
                      key={skill.id}
                      className="group bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 p-4 hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-none transition-all duration-500"
                    >
                      <div className="flex items-center justify-between mb-3">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-black/20 flex items-center justify-center text-primary border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform">
                               <Code2 className="w-5 h-5" />
                            </div>
                            <div>
                               <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-none">{skill.name}</h4>
                            </div>
                         </div>
                         <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg" onClick={() => handleOpenForm(skill)}>
                               <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg text-red-500" onClick={() => handleDelete(skill.id)}>
                               <Trash2 className="w-4 h-4" />
                            </Button>
                         </div>
                      </div>
                      <div className="space-y-1.5">
                         <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                            <span>Proficiency</span>
                            <span className="text-primary">{skill.level}%</span>
                         </div>
                         <div className="h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              className="h-full bg-primary/60 rounded-full"
                            />
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg bg-white dark:bg-[#030712] rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-white/5 overflow-hidden"
              >
                 <div className="p-8 pb-0 flex justify-between items-center">
                    <div>
                       <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                         {editingId ? 'Modify Skill' : 'New Strategic Skill'}
                       </h2>
                       <p className="text-sm font-medium text-slate-500 mt-1">Configure technical domain and level.</p>
                    </div>
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl" onClick={() => setIsFormOpen(false)}>
                       <X className="w-5 h-5" />
                    </Button>
                 </div>
                 
                 <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-slate-400">Strategic Name</label>
                       <Input 
                          placeholder="e.g. Next.js 15" 
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          required
                          className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                       />
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-slate-400">Technical Domain</label>
                       <div className="grid grid-cols-3 gap-2">
                          {defaultCategories.map((c: string) => (
                             <button
                                key={c}
                                type="button"
                                onClick={() => setFormData({...formData, category: c})}
                                className={cn(
                                   "py-3 rounded-xl text-xs font-bold border transition-all",
                                   formData.category === c
                                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                      : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 hover:border-primary/50"
                                )}
                             >
                                {c}
                             </button>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-3">
                       <div className="flex justify-between items-center">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-400">Expertise Level</label>
                          <span className="text-xl font-black text-primary">{formData.level}%</span>
                       </div>
                       <input 
                          type="range"
                          min="0"
                          max="100"
                          value={formData.level || 0}
                          onChange={e => setFormData({...formData, level: parseInt(e.target.value)})}
                          className="w-full h-2 bg-slate-100 dark:bg-white/5 rounded-full appearance-none accent-primary cursor-pointer transition-all"
                       />
                       <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <span>Beginner</span>
                          <span>Strategic Master</span>
                       </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                       <Button type="button" variant="outline" className="flex-1 h-14 rounded-2xl font-bold" onClick={() => setIsFormOpen(false)}>
                          Discard
                       </Button>
                       <Button type="submit" className="flex-1 h-14 rounded-2xl font-bold gap-2 shadow-xl shadow-primary/20" disabled={loading}>
                          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                          {editingId ? 'Apply Changes' : 'Register Skill'}
                       </Button>
                    </div>
                 </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
