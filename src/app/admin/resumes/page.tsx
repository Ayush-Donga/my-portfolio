'use client'

import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2, Loader2, FileText, CheckCircle2, MoreVertical, ExternalLink, Download, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Resume {
  id: string
  internalName: string
  isActive: boolean
  updatedAt: string
}

export default function ResumesAdmin() {
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    fetchResumes()
  }, [])

  const fetchResumes = async () => {
    try {
      const res = await fetch('/api/resumes')
      const data = await res.json()
      setResumes(data)
    } finally {
      setLoading(false)
    }
  }

  const handleActivate = async (id: string) => {
    const toastId = toast.loading('Activating resume...')
    try {
      const res = await fetch(`/api/resumes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: true })
      })
      if (res.ok) {
        toast.success('Resume is now live on your profile', { id: toastId })
        fetchResumes()
      }
    } catch (error) {
      toast.error('Failed to activate resume', { id: toastId })
    }
  }

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    const toastId = toast.loading('Removing resume...')
    try {
      const res = await fetch(`/api/resumes/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('Resume deleted successfully', { id: toastId })
        fetchResumes()
        setDeleteConfirmId(null)
      }
    } finally {
      setIsDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-12 h-12 text-primary animate-spin opacity-20" />
        <p className="text-slate-400 font-medium animate-pulse">Loading Resumes...</p>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Resume <span className="text-primary font-black">Builder</span></h1>
          <p className="text-slate-500 font-medium mt-1">Manage and curate your professional identity.</p>
        </div>
        <Link href="/admin/resumes/builder">
          <Button className="h-12 px-6 rounded-2xl gap-2 font-bold shadow-xl shadow-primary/20">
            <Plus className="w-5 h-5" /> Design New Resume
          </Button>
        </Link>
      </div>

      {resumes.length === 0 ? (
        <div className="py-24 text-center bg-white dark:bg-white/5 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-white/10">
          <FileText className="w-16 h-16 text-slate-200 dark:text-white/10 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No resumes designed yet.</h3>
          <p className="text-slate-400 font-medium max-w-sm mx-auto">Create multiple versions of your resume for different roles and industries.</p>
          <Link href="/admin/resumes/builder">
            <Button variant="outline" className="mt-8 rounded-xl h-12 px-6 font-bold">
               Build Your First Resume
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <motion.div
              layout
              key={resume.id}
              className={cn(
                "group relative bg-white dark:bg-white/5 rounded-[2rem] border p-6 transition-all duration-500",
                resume.isActive 
                  ? "border-primary shadow-2xl shadow-primary/10" 
                  : "border-slate-100 dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10 shadow-sm"
              )}
            >
              <div className="flex items-start justify-between mb-8">
                <div className={cn(
                  "p-3 rounded-2xl",
                  resume.isActive ? "bg-primary/10 text-primary" : "bg-slate-50 dark:bg-black/20 text-slate-400"
                )}>
                  <FileText className="w-8 h-8" />
                </div>
                {resume.isActive && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20">
                    <CheckCircle2 className="w-3 h-3" /> Active Live
                  </div>
                )}
              </div>

              <div className="space-y-1 mb-10">
                <h3 className="text-xl font-black text-slate-900 dark:text-white truncate">{resume.internalName}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Modified {new Date(resume.updatedAt).toLocaleDateString()}</p>
              </div>

              <div className="flex items-center gap-2">
                <Link href={`/admin/resumes/builder?id=${resume.id}`} className="flex-1">
                  <Button variant="outline" className="w-full h-12 rounded-xl font-bold gap-2">
                    <Edit2 className="w-4 h-4" /> Edit
                  </Button>
                </Link>
                {!resume.isActive && (
                  <Button 
                    onClick={() => handleActivate(resume.id)}
                    className="flex-1 h-12 rounded-xl font-bold gap-2 bg-slate-900 dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200"
                  >
                    Activate
                  </Button>
                )}
                {resume.isActive && (
                  <Link href="/resume" target="_blank">
                    <Button 
                      className="aspect-square h-12 w-12 rounded-xl"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </Link>
                )}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="aspect-square h-12 w-12 rounded-xl text-red-500 hover:bg-red-50"
                  onClick={() => setDeleteConfirmId(resume.id)}
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Delete Confirmation */}
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
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Delete Resume?</h3>
                <p className="text-slate-500 font-medium">
                  This action will permanently remove <span className="text-slate-900 dark:text-white font-bold">{resumes.find(r => r.id === deleteConfirmId)?.internalName}</span>. This cannot be undone.
                </p>
              </div>

              <div className="flex gap-4 mt-10">
                <Button 
                  variant="outline" 
                  className="flex-1 h-14 rounded-2xl font-bold border-2" 
                  onClick={() => setDeleteConfirmId(null)}
                  disabled={isDeleting}
                >
                  Discard
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
