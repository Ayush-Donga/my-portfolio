'use client'

import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2, Loader2, Save, X, ExternalLink, Github, Image as ImageIcon, FolderGit2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageUpload } from '@/components/admin/ImageUpload'
import NextImage from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  liveUrl: string | null
  githubUrl: string | null
  imageUrl: string | null
  category: string | null
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
    category: 'Full Stack'
  })

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
         category: 'Full Stack'
       })
    }
    setIsFormOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const url = editingId ? `/api/projects/${editingId}` : '/api/projects'
      const method = editingId ? 'PATCH' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        fetchProjects()
        setIsFormOpen(false)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Permanently remove this showcase?')) return
    await fetch(`/api/projects/${id}`, { method: 'DELETE' })
    fetchProjects()
  }

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Project <span className="text-primary font-black">Archive</span></h1>
          <p className="text-slate-500 font-medium mt-1">Manage your portfolio showcases and case studies.</p>
        </div>
        <Button onClick={() => handleOpenForm()} className="h-12 px-6 rounded-2xl gap-2 font-bold shadow-xl shadow-primary/20">
          <Plus className="w-5 h-5" /> Launch New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <motion.div 
            layout
            key={proj.id}
            className="group bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-500"
          >
            <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-black/40">
               {proj.imageUrl ? (
                  <NextImage 
                     src={proj.imageUrl} 
                     alt={proj.title} 
                     fill 
                     className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  />
               ) : (
                  <div className="flex items-center justify-center h-full">
                     <FolderGit2 className="w-12 h-12 text-slate-200 dark:text-white/10" />
                  </div>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-2 w-full">
                     <Button variant="secondary" className="flex-1 rounded-xl h-10 font-bold bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-black" onClick={() => handleOpenForm(proj)}>
                        <Edit2 className="w-4 h-4 mr-2" /> Edit Details
                     </Button>
                     <Button variant="destructive" className="flex-1 rounded-xl h-10 font-bold" onClick={() => handleDelete(proj.id)}>
                        <Trash2 className="w-4 h-4 mr-2" /> Remove
                     </Button>
                  </div>
               </div>
               <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">
                     {proj.category}
                  </span>
               </div>
            </div>

            <div className="p-8">
               <h3 className="text-xl font-black text-slate-900 dark:text-white leading-none mb-3">{proj.title}</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-2 leading-relaxed mb-6">
                  {proj.description}
               </p>
               <div className="flex flex-wrap gap-2">
                  {proj.techStack.map(tech => (
                     <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-black/40 text-[10px] font-bold text-slate-400 border border-slate-100 dark:border-white/10">
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
                        {editingId ? 'Edit Project' : 'Launch New Project'}
                      </h2>
                      <p className="text-slate-500 font-medium mt-1">Fill in the strategic project details.</p>
                    </div>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl" onClick={() => setIsFormOpen(false)}>
                      <X className="w-6 h-6" />
                    </Button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2 col-span-2">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Project Title</label>
                           <Input 
                              value={formData.title} 
                              onChange={e => setFormData({...formData, title: e.target.value})}
                              placeholder="e.g. Acme Dashboard"
                              required
                              className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                           />
                        </div>
                        
                        <div className="space-y-2 col-span-2">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Category Tag</label>
                           <Input 
                              value={formData.category || ''} 
                              onChange={e => setFormData({...formData, category: e.target.value})}
                              placeholder="e.g. Next.js SaaS"
                              required
                              className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                           />
                        </div>

                        <div className="space-y-2 col-span-2">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Deep Description</label>
                           <Textarea 
                              value={formData.description} 
                              onChange={e => setFormData({...formData, description: e.target.value})}
                              placeholder="Describe the architectural impact and technical challenges."
                              required
                              className="min-h-[120px] rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 p-5 font-medium leading-relaxed"
                           />
                        </div>

                        <div className="space-y-2 col-span-2">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Tech Stack (comma separated)</label>
                           <Input 
                              value={formData.techStack?.join(', ')} 
                              onChange={e => setFormData({...formData, techStack: e.target.value.split(',').map(s => s.trim())})}
                              placeholder="React, Tailwind, Prisma, PostgreSQL"
                              required
                              className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                           />
                        </div>

                        <div className="space-y-4 col-span-2">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Project Visual Showcase</label>
                           <ImageUpload 
                              value={formData.imageUrl || ''} 
                              onChange={(url) => setFormData({...formData, imageUrl: url})}
                              onRemove={() => setFormData({...formData, imageUrl: ''})}
                           />
                        </div>

                        <div className="space-y-2 col-span-1">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Live Workspace</label>
                           <Input 
                              value={formData.liveUrl || ''} 
                              onChange={e => setFormData({...formData, liveUrl: e.target.value})}
                              placeholder="https://acme.com"
                              className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                           />
                        </div>

                        <div className="space-y-2 col-span-1">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Code Repository</label>
                           <Input 
                              value={formData.githubUrl || ''} 
                              onChange={e => setFormData({...formData, githubUrl: e.target.value})}
                              placeholder="https://github.com/ayush/..."
                              className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                           />
                        </div>
                     </div>

                     <div className="flex gap-4 pt-4 sticky bottom-0 bg-white dark:bg-[#030712] py-4 border-t border-slate-100 dark:border-white/5">
                        <Button type="button" variant="outline" className="flex-1 h-14 rounded-2xl font-bold" onClick={() => setIsFormOpen(false)}>
                           Discard Changes
                        </Button>
                        <Button type="submit" className="flex-1 h-14 rounded-2xl font-bold gap-2 shadow-xl shadow-primary/20" disabled={loading}>
                           {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                           {editingId ? 'Push Update' : 'Launch Showcase'}
                        </Button>
                     </div>
                  </form>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
