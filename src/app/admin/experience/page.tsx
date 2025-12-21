'use client'

import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2, Loader2, Calendar, MapPin, Building2, Save, X, Briefcase, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'

interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | null
  current: boolean
  description: string[]
}

export default function ExperienceAdmin() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<Partial<Experience>>({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ['']
  })

  // Delete Confirmation State
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    fetchExperiences()
  }, [])

  const fetchExperiences = async () => {
    try {
      const res = await fetch('/api/experience')
      const data = await res.json()
      setExperiences(data)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenForm = (exp?: Experience) => {
    if (exp) {
       setEditingId(exp.id)
       setFormData({
         ...exp,
         startDate: exp.startDate.split('T')[0],
         endDate: exp.endDate ? exp.endDate.split('T')[0] : ''
       })
    } else {
       setEditingId(null)
       setFormData({ title: '', company: '', location: '', startDate: '', endDate: '', current: false, description: [''] })
    }
    setIsFormOpen(true)
  }

  const handleDescChange = (index: number, value: string) => {
    const newDesc = [...(formData.description || [])]
    newDesc[index] = value
    setFormData({ ...formData, description: newDesc })
  }

  const addDescLine = () => {
    setFormData({ ...formData, description: [...(formData.description || []), ''] })
  }

  const removeDescLine = (index: number) => {
    const newDesc = (formData.description || []).filter((_, i) => i !== index)
    setFormData({ ...formData, description: newDesc })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const toastId = toast.loading(editingId ? 'Updating professional record...' : 'Recording new career milestone...')
    try {
      const url = editingId ? `/api/experience/${editingId}` : '/api/experience'
      const method = editingId ? 'PATCH' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        toast.success(editingId ? 'Career record optimized' : 'Professional experience recorded successfully', { id: toastId })
        fetchExperiences()
        setIsFormOpen(false)
      } else {
        toast.error('Failed to sync career data', { id: toastId })
      }
    } catch (error) {
      toast.error('Technical error during experience synchronization', { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    const toastId = toast.loading('Removing entry from professional history...')
    try {
      const res = await fetch(`/api/experience/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('Experience record successfully archived', { id: toastId })
        fetchExperiences()
        setDeleteConfirmId(null)
      } else {
        toast.error('Failed to remove career entry', { id: toastId })
      }
    } catch (error) {
      toast.error('Error during experience decommission', { id: toastId })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Professional <span className="text-primary font-black">History</span></h1>
          <p className="text-slate-500 font-medium mt-1">Timeline of your career journey.</p>
        </div>
        <Button onClick={() => handleOpenForm()} className="h-12 px-6 rounded-2xl gap-2 font-bold shadow-xl shadow-primary/20">
          <Plus className="w-5 h-5" /> Add Experience
        </Button>
      </div>

      <div className="grid gap-6">
        {experiences.length === 0 && !loading && (
          <div className="py-20 text-center bg-white dark:bg-white/5 rounded-3xl border-2 border-dashed border-slate-200 dark:border-white/10">
             <Briefcase className="w-12 h-12 text-slate-200 dark:text-white/10 mx-auto mb-4" />
             <p className="text-slate-400 font-bold">No experience entries found.</p>
          </div>
        )}
        
        {experiences.map((exp: Experience) => (
          <motion.div 
            layout
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 p-6 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
               <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                     <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{exp.title}</h3>
                     {exp.current && (
                        <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-wider border border-green-500/20">
                           Present
                        </span>
                     )}
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                     <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" /> {exp.company}</div>
                     <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {exp.location}</div>
                     <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" /> 
                        {new Date(exp.startDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })} 
                        {' - '} 
                        {exp.current ? 'Now' : new Date(exp.endDate!).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                     </div>
                  </div>
                  <ul className="space-y-3">
                     {exp.description.map((point: string, i: number) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                           <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                           {point}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="flex lg:flex-col gap-2 shrink-0">
                  <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-primary/10 hover:text-primary transition-all" onClick={() => handleOpenForm(exp)}>
                     <Edit2 className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-red-50 hover:text-red-500 transition-all" onClick={() => setDeleteConfirmId(exp.id)}>
                     <Trash2 className="w-5 h-5" />
                  </Button>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm z-50 overflow-hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-white dark:bg-[#030712] z-[60] shadow-2xl border-l border-slate-200 dark:border-white/5 overflow-y-auto custom-scrollbar"
            >
               <div className="p-10">
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                        {editingId ? 'Edit Experience' : 'New Experience'}
                      </h2>
                      <p className="text-slate-500 font-medium mt-1">Specify your professional journey details.</p>
                    </div>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl" onClick={() => setIsFormOpen(false)}>
                      <X className="w-6 h-6" />
                    </Button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2 col-span-2 md:col-span-1">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Position Title</label>
                           <Input 
                              value={formData.title} 
                              onChange={e => setFormData({...formData, title: e.target.value})}
                              placeholder="e.g. Lead Architect"
                              required
                              className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold focus:ring-4 focus:ring-primary/5"
                           />
                        </div>
                        <div className="space-y-2 col-span-2 md:col-span-1">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Company Name</label>
                           <Input 
                              value={formData.company} 
                              onChange={e => setFormData({...formData, company: e.target.value})}
                              placeholder="e.g. Stripe"
                              required
                              className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                           />
                        </div>
                        <div className="space-y-2 col-span-2">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Location</label>
                           <Input 
                              value={formData.location} 
                              onChange={e => setFormData({...formData, location: e.target.value})}
                              placeholder="e.g. Remote / New York, NY"
                              required
                              className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                           />
                        </div>
                        <div className="space-y-2 col-span-2 md:col-span-1">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">From Date</label>
                           <Input type="date" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} required className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold" />
                        </div>
                        <div className="space-y-2 col-span-2 md:col-span-1">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">To Date</label>
                           <Input 
                              type="date" 
                              value={formData.endDate || ''} 
                              onChange={e => setFormData({...formData, endDate: e.target.value})} 
                              disabled={formData.current}
                              required={!formData.current}
                              className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold disabled:opacity-30 transition-opacity" 
                           />
                        </div>
                        <div className="col-span-2">
                           <label className="flex items-center gap-3 group cursor-pointer p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all">
                              <input 
                                 type="checkbox" 
                                 checked={formData.current} 
                                 onChange={e => setFormData({...formData, current: e.target.checked})}
                                 className="w-5 h-5 rounded-lg border-primary accent-primary" 
                              />
                              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">I am currently working in this role</span>
                           </label>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <div className="flex items-center justify-between">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Achievements / Key Points</label>
                           <Button type="button" variant="ghost" size="sm" onClick={addDescLine} className="text-primary font-bold hover:bg-primary/10">
                              + Add Item
                           </Button>
                        </div>
                        <div className="space-y-3">
                           {formData.description?.map((point: string, index: number) => (
                              <div key={index} className="flex gap-2">
                                 <Textarea 
                                    value={point} 
                                    onChange={e => handleDescChange(index, e.target.value)}
                                    placeholder="Describe your impact..."
                                    className="min-h-[100px] rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 p-5 font-medium leading-relaxed"
                                 />
                                 <Button type="button" variant="ghost" size="icon" className="text-red-400 hover:text-red-500 hover:bg-red-50" onClick={() => removeDescLine(index)}>
                                    <Trash2 className="w-4 h-4" />
                                 </Button>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="flex gap-4 pt-4 sticky bottom-0 bg-white dark:bg-[#030712] py-4 border-t border-slate-100 dark:border-white/5">
                        <Button type="button" variant="outline" className="flex-1 h-14 rounded-2xl font-bold" onClick={() => setIsFormOpen(false)}>
                           Cancel
                        </Button>
                        <Button type="submit" className="flex-1 h-14 rounded-2xl font-bold gap-2 shadow-xl shadow-primary/20" disabled={loading}>
                           {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                           {editingId ? 'Update Record' : 'Save Record'}
                        </Button>
                     </div>
                  </form>
               </div>
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
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Delete Experience?</h3>
                <p className="text-slate-500 font-medium">
                  This action will permanently remove <span className="text-slate-900 dark:text-white font-bold">{experiences.find(e => e.id === deleteConfirmId)?.title}</span> at <span className="text-slate-900 dark:text-white font-bold">{experiences.find(e => e.id === deleteConfirmId)?.company}</span> from your professional history. This cannot be undone.
                </p>
              </div>

              <div className="flex gap-4 mt-10">
                <Button 
                  variant="outline" 
                  className="flex-1 h-14 rounded-2xl font-bold border-2" 
                  onClick={() => setDeleteConfirmId(null)}
                  disabled={isDeleting}
                >
                  Keep Record
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
