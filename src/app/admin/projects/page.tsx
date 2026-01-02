'use client'

import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2, Loader2, Save, X, ExternalLink, Github, Image as ImageIcon, FolderGit2, Eye, ShieldCheck, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageUpload } from '@/components/admin/ImageUpload'
import NextImage from 'next/image'
import { toast } from 'sonner'

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  liveUrl: string | null
  githubUrl: string | null
  imageUrl: string | null
  category: string | null
  order: number
  problem: string | null
  role: string | null
  outcome: string | null
}

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    description: '',
    techStack: [],
    imageUrl: '',
    liveUrl: '',
    githubUrl: '',
    category: 'Product Engineering',
    order: 0,
    problem: '',
    role: '',
    outcome: ''
  })

  // Delete Confirmation State
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects')
      const data = await res.json()
      setProjects(data)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenForm = (proj?: Project) => {
    if (proj) {
       setEditingId(proj.id)
       setFormData(proj)
    } else {
       setEditingId(null)
       setFormData({
         title: '',
         description: '',
         techStack: [],
         imageUrl: '',
         liveUrl: '',
         githubUrl: '',
         category: 'Product Engineering',
         order: 0,
         problem: '',
         role: '',
         outcome: ''
       })
    }
    setIsFormOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const toastId = toast.loading(editingId ? 'Pushing project update...' : 'Launching new project asset...')
    try {
      const url = editingId ? `/api/projects/${editingId}` : '/api/projects'
      const method = editingId ? 'PATCH' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        toast.success(editingId ? 'Project asset optimized' : 'Strategic project launched successfully', { id: toastId })
        fetchProjects()
        setIsFormOpen(false)
      } else {
        toast.error('Failed to sync project data', { id: toastId })
      }
    } catch (error) {
      toast.error('Technical error during asset synchronization', { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    const toastId = toast.loading('Decommissioning project asset...')
    try {
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('Project asset successfully decommissioned', { id: toastId })
        fetchProjects()
        setDeleteConfirmId(null)
      } else {
        toast.error('Failed to remove project asset', { id: toastId })
      }
    } catch (error) {
      toast.error('Error during asset decommissioning', { id: toastId })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <FolderGit2 className="w-64 h-64 rotate-12" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
             <div className="p-1 rounded bg-primary/10 text-primary">
                <FolderGit2 className="w-3 h-3" />
             </div>
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Asset Management</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-none">Strategic <span className="text-primary italic">Showcase</span></h1>
          <p className="text-slate-500 font-medium mt-3 max-w-lg">Manage your high-impact case studies and architectural portfolios for global stakeholders.</p>
        </div>
        <Button onClick={() => handleOpenForm()} className="relative z-10 h-14 px-8 rounded-2xl gap-3 font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all text-base w-full md:w-auto">
          <Plus className="w-5 h-5" /> Launch New Asset
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        {projects.map((proj: Project) => (
          <motion.div 
            layout
            key={proj.id}
            className="group bg-white dark:bg-black/20 rounded-[2.5rem] border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-700 hover:-translate-y-2"
          >
            <div className="aspect-[16/10] relative overflow-hidden bg-slate-100 dark:bg-black/40">
               {proj.imageUrl ? (
                  <NextImage 
                     src={proj.imageUrl} 
                     alt={proj.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-all duration-700" 
                  />
               ) : (
                  <div className="flex items-center justify-center h-full">
                     <FolderGit2 className="w-16 h-16 text-slate-200 dark:text-white/10" />
                  </div>
               )}
               
               {/* Premium Overlay Actions */}
               <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center px-8 text-center gap-4">
                  <div className="p-3 rounded-full bg-white/10 text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-all delay-75">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex gap-3 w-full translate-y-8 group-hover:translate-y-0 transition-all delay-150">
                     <Button variant="secondary" className="flex-1 rounded-xl h-12 font-black uppercase text-[10px] tracking-widest bg-white text-black hover:bg-slate-100" onClick={() => handleOpenForm(proj)}>
                        Edit
                     </Button>
                     <Button variant="destructive" className="flex-1 rounded-xl h-12 font-black uppercase text-[10px] tracking-widest bg-red-500 text-white hover:bg-red-600" onClick={() => setDeleteConfirmId(proj.id)}>
                        Remove
                     </Button>
                  </div>
               </div>

               <div className="absolute top-5 left-5 z-10">
                  <span className="px-4 py-1.5 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 text-[9px] font-black text-white uppercase tracking-[0.2em]">
                     {proj.category}
                  </span>
               </div>
            </div>

            <div className="p-10 border-t border-slate-50 dark:border-white/5">
               <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-[0.9]">{proj.title}</h3>
                  <div className="flex gap-2">
                    {proj.liveUrl && <ExternalLink className="w-4 h-4 text-slate-400" />}
                    {proj.githubUrl && <Github className="w-4 h-4 text-slate-400" />}
                  </div>
               </div>
               <p className="text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-2 leading-relaxed mb-8">
                  {proj.description}
               </p>
               <div className="flex flex-wrap gap-2.5">
                  {proj.techStack.map((tech: string) => (
                     <span key={tech} className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-white/5 text-[10px] font-bold text-slate-400 border border-slate-100 dark:border-white/10 uppercase tracking-wider">
                        {tech}
                     </span>
                  ))}
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
              className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md z-[100] overflow-hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-3xl bg-white dark:bg-[#030712] z-[110] shadow-2xl border-l border-slate-200 dark:border-white/5 overflow-y-auto custom-scrollbar"
            >
               <div className="p-8 lg:p-14">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                       <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                          {editingId ? <Edit2 className="w-7 h-7" /> : <Plus className="w-7 h-7" />}
                       </div>
                       <div>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic italic">
                          {editingId ? 'Edit Strategic Asset' : 'Launch New Asset'}
                        </h2>
                        <p className="text-slate-500 font-medium mt-1">Refining the narrative of your technical expertise.</p>
                       </div>
                    </div>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5" onClick={() => setIsFormOpen(false)}>
                      <X className="w-6 h-6" />
                    </Button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-10">
                     <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-3 col-span-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Asset Headline</label>
                           <Input 
                              value={formData.title} 
                              onChange={e => setFormData({...formData, title: e.target.value})}
                              placeholder="e.g. Enterprise Cloud Infrastructure"
                              required
                              className="h-16 rounded-[1.25rem] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-6 font-bold text-lg focus:ring-primary shadow-sm"
                           />
                        </div>
                        
   <div className="space-y-3 col-span-1">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Strategic Category</label>
                           <Input 
                              value={formData.category || ''} 
                              onChange={e => setFormData({...formData, category: e.target.value})}
                              placeholder="e.g. Distributed Systems"
                              required
                              className="h-16 rounded-[1.25rem] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-6 font-bold shadow-sm"
                           />
                        </div>

                        <div className="space-y-3 col-span-1">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Display Order</label>
                           <Input 
                              type="number"
                              value={formData.order?.toString()} 
                              onChange={e => setFormData({...formData, order: parseInt(e.target.value) || 0})}
                              placeholder="0"
                              required
                              className="h-16 rounded-[1.25rem] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-6 font-bold shadow-sm"
                           />
                        </div>

                        <div className="space-y-3 col-span-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">The Technical Narrative</label>
                           <Textarea 
                              value={formData.description} 
                              onChange={e => setFormData({...formData, description: e.target.value})}
                              placeholder="Focus on technical challenges, architectural decisions, and the business impact of the solution."
                              required
                              className="min-h-[160px] rounded-[1.25rem] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 p-6 font-medium leading-relaxed shadow-sm"
                           />
                        </div>

                        <div className="space-y-3 col-span-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">The Problem</label>
                           <Textarea 
                              value={formData.problem || ''} 
                              onChange={e => setFormData({...formData, problem: e.target.value})}
                              placeholder="What challenge were you solving?"
                              className="min-h-[100px] rounded-[1.25rem] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 p-6 font-medium leading-relaxed shadow-sm"
                           />
                        </div>

                        <div className="space-y-3 col-span-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">My Role</label>
                           <Input 
                              value={formData.role || ''} 
                              onChange={e => setFormData({...formData, role: e.target.value})}
                              placeholder="e.g. Lead Full Stack Architect"
                              className="h-16 rounded-[1.25rem] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-6 font-bold shadow-sm"
                           />
                        </div>

                        <div className="space-y-3 col-span-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Result & Impact</label>
                           <Textarea 
                              value={formData.outcome || ''} 
                              onChange={e => setFormData({...formData, outcome: e.target.value})}
                              placeholder="What were the measurable results?"
                              className="min-h-[100px] rounded-[1.25rem] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 p-6 font-medium leading-relaxed shadow-sm"
                           />
                        </div>

                        <div className="space-y-3 col-span-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Core Tech Stack</label>
                           <Input 
                              value={formData.techStack?.join(', ')} 
                              onChange={e => setFormData({...formData, techStack: e.target.value.split(',').map((s: string) => s.trim())})}
                              placeholder="comma separated values"
                              required
                              className="h-16 rounded-[1.25rem] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-6 font-bold shadow-sm"
                           />
                        </div>

                        <div className="space-y-4 col-span-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Visual Asset</label>
                           <div className="bg-slate-50 dark:bg-white/5 rounded-[2rem] p-6 border-2 border-dashed border-slate-200 dark:border-white/10">
                              <ImageUpload 
                                 value={formData.imageUrl || ''} 
                                 onChange={(url) => setFormData({...formData, imageUrl: url})}
                                 onRemove={() => setFormData({...formData, imageUrl: ''})}
                              />
                           </div>
                        </div>

                        <div className="space-y-3 col-span-1">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Live Endpoint</label>
                           <Input 
                              value={formData.liveUrl || ''} 
                              onChange={e => setFormData({...formData, liveUrl: e.target.value})}
                              placeholder="https://..."
                              className="h-16 rounded-[1.25rem] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-6 font-bold shadow-sm"
                           />
                        </div>

                        <div className="space-y-3 col-span-1">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Source Control</label>
                           <Input 
                              value={formData.githubUrl || ''} 
                              onChange={e => setFormData({...formData, githubUrl: e.target.value})}
                              placeholder="https://github.com/..."
                              className="h-16 rounded-[1.25rem] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-6 font-bold shadow-sm"
                           />
                        </div>
                     </div>

                     <div className="flex gap-4 pt-8 sticky bottom-0 bg-white dark:bg-[#030712] py-8 border-t border-slate-100 dark:border-white/5">
                        <Button type="button" variant="outline" className="flex-1 h-16 rounded-[1.25rem] font-black uppercase text-xs tracking-[0.2em]" onClick={() => setIsFormOpen(false)}>
                           Discard
                        </Button>
                        <Button type="submit" className="flex-[2] h-16 rounded-[1.25rem] font-black uppercase text-xs tracking-[0.2em] gap-3 shadow-2xl shadow-primary/30 active:scale-95 transition-all" disabled={loading}>
                           {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                           {editingId ? 'Push Update' : 'Launch Asset'}
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
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
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
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Decommission Asset?</h3>
                <p className="text-slate-500 font-medium">
                  This action will permanently remove <span className="text-slate-900 dark:text-white font-bold">{projects.find(p => p.id === deleteConfirmId)?.title}</span> from your strategic showcase. This cannot be undone.
                </p>
              </div>

              <div className="flex gap-4 mt-10">
                <Button 
                  variant="outline" 
                  className="flex-1 h-14 rounded-2xl font-bold border-2" 
                  onClick={() => setDeleteConfirmId(null)}
                  disabled={isDeleting}
                >
                  Keep Asset
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
