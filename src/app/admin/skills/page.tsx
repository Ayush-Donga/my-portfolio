'use client'

import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2, Loader2, Save, X, Code2, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

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

  // Delete Confirmation State
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

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
    const toastId = toast.loading(editingId ? 'Updating skill...' : 'Registering new skill...')
    try {
      const url = editingId ? `/api/skills/${editingId}` : '/api/skills'
      const method = editingId ? 'PATCH' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        toast.success(editingId ? 'Skill optimized successfully' : 'New strategic skill registered', { id: toastId })
        fetchSkills()
        setIsFormOpen(false)
      } else {
        toast.error('Failed to sync skill data', { id: toastId })
      }
    } catch (error) {
      toast.error('A technical error occurred during sync', { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    const toastId = toast.loading('Removing skill from stack...')
    try {
      const res = await fetch(`/api/skills/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('Skill successfully decommissioned', { id: toastId })
        fetchSkills()
        setDeleteConfirmId(null)
      } else {
        toast.error('Failed to remove skill', { id: toastId })
      }
    } catch (error) {
      toast.error('Error during skill decommissioning', { id: toastId })
    } finally {
      setIsDeleting(false)
    }
  }

  const defaultCategories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Mobile']
  const allCategories = Array.from(new Set([...defaultCategories, ...skills.map((s: Skill) => s.category)]))

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
          {allCategories.map((category: string) => {
            const catSkills = skills.filter((s: Skill) => s.category === category)
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
                  {catSkills.map((skill: Skill) => (
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
                             <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg text-red-500" onClick={() => setDeleteConfirmId(skill.id)}>
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
                    
                    <div className="space-y-4">
                       <label className="text-xs font-black uppercase tracking-widest text-slate-400">Technical Domain</label>
                       
                       <div className="grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-white/10 pr-2">
                          {allCategories.map((c: string) => (
                             <button
                                key={c}
                                type="button"
                                onClick={() => setFormData({...formData, category: c})}
                                className={cn(
                                   "py-3 rounded-xl text-[10px] font-bold border transition-all truncate px-2",
                                   formData.category === c
                                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                      : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 hover:border-primary/50"
                                )}
                             >
                                {c}
                             </button>
                          ))}
                       </div>

                       <div className="pt-2">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-2">Or Define New Domain</p>
                          <Input 
                             placeholder="e.g. Cloud Architecture" 
                             value={formData.category}
                             onChange={e => setFormData({...formData, category: e.target.value})}
                             className="h-12 rounded-xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold text-sm"
                          />
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

      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeleteConfirmId(null)}
              className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-[#030712] rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-white/5 overflow-hidden p-8"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-3xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 mb-6 ring-8 ring-red-500/5">
                  <AlertTriangle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Decommission Skill?</h3>
                <p className="text-slate-500 font-medium">
                  This action will permanently remove <span className="text-slate-900 dark:text-white font-bold">{skills.find(s => s.id === deleteConfirmId)?.name}</span> from your technical arsenal. This cannot be undone.
                </p>
              </div>

              <div className="flex gap-4 mt-10">
                <Button 
                  variant="outline" 
                  className="flex-1 h-14 rounded-2xl font-bold border-2" 
                  onClick={() => setDeleteConfirmId(null)}
                  disabled={isDeleting}
                >
                  Keep Skill
                </Button>
                <Button 
                  className="flex-1 h-14 rounded-2xl font-bold bg-red-500 hover:bg-red-600 text-white shadow-xl shadow-red-500/20 gap-2"
                  onClick={() => handleDelete(deleteConfirmId)}
                  disabled={isDeleting}
                >
                  {isDeleting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
                  Confirm
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
