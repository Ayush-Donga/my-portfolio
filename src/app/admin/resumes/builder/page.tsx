'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { 
  ChevronLeft, 
  Save, 
  Plus, 
  Trash2, 
  GripVertical, 
  Layout, 
  User, 
  Briefcase, 
  GraduationCap, 
  BadgeCheck, 
  Layers,
  Eye,
  Settings,
  X,
  PlusCircle,
  Loader2,
  ArrowUp,
  ArrowDown,
  Palette
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageUpload } from '@/components/admin/ImageUpload'
import { toast } from 'sonner'
import RichTextEditor from '@/components/admin/RichTextEditor'
import { cn } from '@/lib/utils'

// Types for Resume Content
type SectionType = 'experience' | 'education' | 'skills' | 'projects' | 'custom'

interface ResumeItem {
  id: string
  title?: string
  subtitle?: string
  company?: string
  school?: string
  degree?: string
  link?: string
  startDate?: string
  endDate?: string
  location?: string
  description?: string
  level?: number
  subskills?: string
}

interface ResumeSection {
  id: string
  type: SectionType
  heading: string
  items: ResumeItem[]
}

export default function ResumeBuilder() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const resumeId = searchParams.get('id')
  
  const [loading, setLoading] = useState(!!resumeId)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<'info' | 'content' | 'preview'>('info')
  
  const [internalName, setInternalName] = useState('New Strategic Resume')
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    professionalTitle: '',
    email: '',
    phone: '',
    location: '',
    photo: '',
    summary: '',
    linkedin: '',
    github: '',
    website: '',
    nationality: '',
    dob: '',
    visa: '',
    passport: '',
    gender: ''
  })
  const [accentColor, setAccentColor] = useState('#3b82f6') // Default Blue-500
  const [sections, setSections] = useState<ResumeSection[]>([])

  useEffect(() => {
    if (resumeId) {
      fetchResume()
    }
  }, [resumeId])

  const fetchResume = async () => {
    try {
      const res = await fetch(`/api/resumes/${resumeId}`)
      const data = await res.json()
      if (data) {
        setInternalName(data.internalName)
        setPersonalInfo(data.personalInfo || {})
        setSections(data.content || [])
        setAccentColor(data.personalInfo?.accentColor || '#3b82f6')
      }
    } catch (error) {
      toast.error('Failed to load resume data')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    const toastId = toast.loading('Syncing architectural blueprint...')
    try {
      const url = resumeId ? `/api/resumes/${resumeId}` : '/api/resumes'
      const method = resumeId ? 'PATCH' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          internalName,
          personalInfo: { ...personalInfo, accentColor },
          content: sections
        })
      })
      if (res.ok) {
        toast.success('Resume assets secured successfully', { id: toastId })
        if (!resumeId) {
          const data = await res.json()
          router.push(`/admin/resumes/builder?id=${data.id}`)
        }
      }
    } catch (error) {
      toast.error('Failed to save resume data', { id: toastId })
    } finally {
      setSaving(false)
    }
  }

  const addSection = (type: SectionType) => {
    const newSection: ResumeSection = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      heading: type.charAt(0).toUpperCase() + type.slice(1),
      items: []
    }
    setSections([...sections, newSection])
    toast.success(`New ${type} section incorporated`)
  }

  const removeSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id))
  }

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= newSections.length) return
    [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]]
    setSections(newSections)
  }

  const moveItem = (sIndex: number, iIndex: number, direction: 'up' | 'down') => {
    const newSections = [...sections]
    const items = [...newSections[sIndex].items]
    const targetIndex = direction === 'up' ? iIndex - 1 : iIndex + 1
    if (targetIndex < 0 || targetIndex >= items.length) return
    [items[iIndex], items[targetIndex]] = [items[targetIndex], items[iIndex]]
    newSections[sIndex].items = items
    setSections(newSections)
  }

  const addItem = (sectionId: string) => {
    setSections(prev => prev.map(s => {
      if (s.id === sectionId) {
        return {
          ...s,
          items: [...s.items, { 
            id: Math.random().toString(36).substr(2, 9), 
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            description: '',
            degree: '',
            school: '',
            subskills: '',
            link: '',
            subtitle: ''
          }]
        }
      }
      return s
    }))
  }

  if (loading) return (
    <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
      <Loader2 className="w-12 h-12 text-primary animate-spin opacity-20" />
      <p className="text-slate-400 font-medium animate-pulse">Initializing Builder Stack...</p>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-slate-100 dark:border-white/5 sticky top-0 z-[40] backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-xl h-12 w-12" onClick={() => router.push('/admin/resumes')}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div>
            <Input 
              value={internalName} 
              onChange={e => setInternalName(e.target.value)}
              className="bg-transparent border-none text-2xl font-black focus-visible:ring-0 p-0 h-auto w-auto min-w-[300px]"
              placeholder="Internal Resume Name"
            />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Status: {resumeId ? 'Synchronized' : 'Drafting'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-2xl font-bold gap-2" onClick={() => setActiveTab(activeTab === 'preview' ? 'content' : 'preview')}>
            {activeTab === 'preview' ? <Layout className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            {activeTab === 'preview' ? 'Exit Preview' : 'Live Preview'}
          </Button>
          <Button className="h-12 px-8 rounded-2xl font-bold gap-2 shadow-xl shadow-primary/20" onClick={handleSave} disabled={saving}>
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            Deploy Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="col-span-12 lg:col-span-3 space-y-2">
          <button 
            onClick={() => setActiveTab('info')}
            className={cn(
              "w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all",
              activeTab === 'info' ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-xl" : "text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5"
            )}
          >
            <User className="w-5 h-5" /> Personal Identity
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={cn(
              "w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all",
              activeTab === 'content' ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-xl" : "text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5"
            )}
          >
            <Layers className="w-5 h-5" /> Strategic Content
          </button>
          
          <div className="pt-8 px-4">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Structure Modules</p>
             <div className="grid grid-cols-1 gap-2">
                <Button variant="ghost" className="justify-start gap-3 rounded-xl h-12 text-xs font-bold" onClick={() => addSection('experience')}>
                   <Briefcase className="w-4 h-4 text-primary" /> Add Experience
                </Button>
                <Button variant="ghost" className="justify-start gap-3 rounded-xl h-12 text-xs font-bold" onClick={() => addSection('education')}>
                   <GraduationCap className="w-4 h-4 text-primary" /> Add Education
                </Button>
                <Button variant="ghost" className="justify-start gap-3 rounded-xl h-12 text-xs font-bold" onClick={() => addSection('skills')}>
                   <BadgeCheck className="w-4 h-4 text-primary" /> Add Skills
                </Button>
                <Button variant="ghost" className="justify-start gap-3 rounded-xl h-12 text-xs font-bold" onClick={() => addSection('projects')}>
                   <Layout className="w-4 h-4 text-primary" /> Add Projects
                </Button>
                <Button variant="ghost" className="justify-start gap-3 rounded-xl h-12 text-xs font-bold" onClick={() => addSection('custom')}>
                   <PlusCircle className="w-4 h-4 text-primary" /> Custom Section
                </Button>
             </div>
          </div>
        </div>

        {/* Builder Area */}
        <div className="col-span-12 lg:col-span-9">
          <AnimatePresence mode="wait">
            {activeTab === 'info' && (
              <motion.div 
                key="info"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-10 space-y-10"
              >
                <div>
                   <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase italic">Personal <span style={{ color: accentColor }}>Identity</span></h2>
                   <p className="text-slate-500 font-medium mt-1">Core details that define your professional brand.</p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                   <div className="col-span-2 space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Profile Architecture (Photo)</label>
                      <div className="max-w-[200px]">
                        <ImageUpload 
                          value={personalInfo.photo || ''} 
                          onChange={(url) => setPersonalInfo({...personalInfo, photo: url})}
                          onRemove={() => setPersonalInfo({...personalInfo, photo: ''})}
                        />
                      </div>
                   </div>

                   <div className="col-span-2 space-y-4">
                      <div className="flex items-center gap-3">
                        <Palette className="w-5 h-5" style={{ color: accentColor }} />
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Brand Color Accent</label>
                      </div>
                      <div className="flex gap-3">
                        {['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#0f172a'].map((color: string) => (
                          <button 
                            key={color}
                            onClick={() => setAccentColor(color)}
                            className={cn(
                              "w-10 h-10 rounded-full border-2 transition-all",
                              accentColor === color ? "scale-125 border-slate-900 dark:border-white ring-4 ring-primary/20" : "border-transparent"
                            )}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        <input 
                          type="color" 
                          value={accentColor} 
                          onChange={(e) => setAccentColor(e.target.value)}
                          className="w-10 h-10 rounded-full bg-white dark:bg-black p-0 border-none cursor-pointer"
                        />
                      </div>
                   </div>

                   <div className="space-y-2 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Identity Name</label>
                      <Input 
                        value={personalInfo.fullName} 
                        onChange={e => setPersonalInfo({...personalInfo, fullName: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50 dark:bg-black/20 border-slate-200 dark:border-white/10 px-5 font-bold"
                        placeholder="e.g. Ayush Donga"
                      />
                   </div>
                   <div className="space-y-2 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Strategic Title</label>
                      <Input 
                        value={personalInfo.professionalTitle} 
                        onChange={e => setPersonalInfo({...personalInfo, professionalTitle: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50 dark:bg-black/20 border-slate-200 dark:border-white/10 px-5 font-bold"
                        placeholder="e.g. Full Stack Solutions Architect"
                      />
                   </div>
                   <div className="space-y-2 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Direct Email</label>
                      <Input 
                        value={personalInfo.email} 
                        onChange={e => setPersonalInfo({...personalInfo, email: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50 dark:bg-black/20 border-slate-200 dark:border-white/10 px-5 font-bold"
                      />
                   </div>
                   <div className="space-y-2 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Secure Phone</label>
                      <Input 
                        value={personalInfo.phone} 
                        onChange={e => setPersonalInfo({...personalInfo, phone: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50 dark:bg-black/20 border-slate-200 dark:border-white/10 px-5 font-bold"
                      />
                   </div>
                   <div className="space-y-2 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Global Location</label>
                      <Input 
                        value={personalInfo.location} 
                        onChange={e => setPersonalInfo({...personalInfo, location: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50 dark:bg-black/20 border-slate-200 dark:border-white/10 px-5 font-bold"
                        placeholder="City, Country"
                      />
                   </div>
                   <div className="space-y-2 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">LinkedIn Profile</label>
                      <Input 
                        value={personalInfo.linkedin} 
                        onChange={e => setPersonalInfo({...personalInfo, linkedin: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50 dark:bg-black/20 border-slate-200 dark:border-white/10 px-5 font-bold"
                        placeholder="https://linkedin.com/in/..."
                      />
                   </div>
                   <div className="space-y-2 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">GitHub Profile</label>
                      <Input 
                        value={personalInfo.github} 
                        onChange={e => setPersonalInfo({...personalInfo, github: e.target.value})}
                        className="h-14 rounded-2xl bg-slate-50 dark:bg-black/20 border-slate-200 dark:border-white/10 px-5 font-bold"
                        placeholder="https://github.com/..."
                      />
                   </div>

                   <div className="col-span-2 space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Professional Summary</label>
                      <RichTextEditor 
                        value={personalInfo.summary || ''} 
                        onChange={(val) => setPersonalInfo({...personalInfo, summary: val})}
                        placeholder="Define your professional narrative..."
                      />
                   </div>
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-white/5 space-y-6">
                   <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">Additional Credentials</h3>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Nationality</label>
                        <Input value={personalInfo.nationality} onChange={e => setPersonalInfo({...personalInfo, nationality: e.target.value})} className="h-12 rounded-xl bg-slate-50 dark:bg-black/10 border-slate-200 dark:border-white/5" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Date of Birth</label>
                        <Input value={personalInfo.dob} onChange={e => setPersonalInfo({...personalInfo, dob: e.target.value})} className="h-12 rounded-xl bg-slate-50 dark:bg-black/10 border-slate-200 dark:border-white/5" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Gender/Pronoun</label>
                        <Input value={personalInfo.gender} onChange={e => setPersonalInfo({...personalInfo, gender: e.target.value})} className="h-12 rounded-xl bg-slate-50 dark:bg-black/10 border-slate-200 dark:border-white/5" />
                      </div>
                   </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'content' && (
              <motion.div 
                key="content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                {sections.length === 0 ? (
                  <div className="py-20 text-center bg-white dark:bg-white/5 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-white/10">
                     <PlusCircle className="w-12 h-12 text-slate-200 dark:text-white/10 mx-auto mb-4" />
                     <p className="text-slate-400 font-bold italic">Start adding modules from the sidebar to build your story.</p>
                  </div>
                ) : (
                  sections.map((section: ResumeSection, sIndex: number) => (
                    <div key={section.id} className="bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden">
                       <div className="p-6 bg-slate-50 dark:bg-black/20 border-bottom border-slate-100 dark:border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <div className="p-2 rounded-lg bg-white dark:bg-white/5 shadow-sm text-primary">
                                {section.type === 'experience' && <Briefcase className="w-5 h-5" />}
                                {section.type === 'education' && <GraduationCap className="w-5 h-5" />}
                                {section.type === 'skills' && <BadgeCheck className="w-5 h-5" />}
                                {section.type === 'projects' && <Layout className="w-5 h-5" />}
                                {section.type === 'custom' && <Layers className="w-5 h-5" />}
                             </div>
                             <Input 
                                value={section.heading} 
                                onChange={e => {
                                  const newSections = [...sections]
                                  newSections[sIndex].heading = e.target.value
                                  setSections(newSections)
                                }}
                                className="bg-transparent border-none text-lg font-black focus-visible:ring-0 p-0 h-auto w-auto min-w-[200px]"
                             />
                          </div>
                          <div className="flex items-center gap-1">
                             <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg" onClick={() => moveSection(sIndex, 'up')} disabled={sIndex === 0}>
                                <ArrowUp className="w-4 h-4" />
                             </Button>
                             <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg" onClick={() => moveSection(sIndex, 'down')} disabled={sIndex === sections.length - 1}>
                                <ArrowDown className="w-4 h-4" />
                             </Button>
                             <div className="w-px h-4 bg-slate-200 dark:bg-white/10 mx-2" />
                             <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-500 rounded-xl" onClick={() => removeSection(section.id)}>
                                <X className="w-5 h-5" />
                             </Button>
                          </div>
                       </div>

                       <div className="p-8 space-y-8">
                          {section.items.map((item: ResumeItem, iIndex: number) => (
                            <div key={item.id} className="relative group/item bg-slate-50 dark:bg-black/10 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
                               <div className="grid grid-cols-2 gap-6">
                                  {section.type === 'experience' && (
                                    <>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Job Title</label>
                                          <Input 
                                            value={item.title || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], title: e.target.value };
                                              setSections(newSec);
                                            }}
                                            placeholder="Lead Software Engineer"
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Employer / Company</label>
                                          <Input 
                                            value={item.company || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], company: e.target.value };
                                              setSections(newSec);
                                            }}
                                            placeholder="Google"
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                    </>
                                  )}

                                  {section.type === 'education' && (
                                    <>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Degree / Certification</label>
                                          <Input 
                                            value={item.degree || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], degree: e.target.value };
                                              setSections(newSec);
                                            }}
                                            placeholder="B.Tech in CS"
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">School / University</label>
                                          <Input 
                                            value={item.school || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], school: e.target.value };
                                              setSections(newSec);
                                            }}
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                    </>
                                  )}

                                  {section.type === 'skills' && (
                                    <>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Technical Skill</label>
                                          <Input 
                                            value={item.title || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], title: e.target.value };
                                              setSections(newSec);
                                            }}
                                            placeholder="React.js / Cloud Arch"
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Sub-skills / Info</label>
                                          <Input 
                                            value={item.subskills || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], subskills: e.target.value };
                                              setSections(newSec);
                                            }}
                                            placeholder="Next.js, Redux, Performance"
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                    </>
                                  )}

                                  {section.type === 'projects' && (
                                    <>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Project Title</label>
                                          <Input 
                                            value={item.title || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], title: e.target.value };
                                              setSections(newSec);
                                            }}
                                            placeholder="AI Portfolio Builder"
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Project Link</label>
                                          <Input 
                                            value={item.link || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], link: e.target.value };
                                              setSections(newSec);
                                            }}
                                            placeholder="https://github.com/..."
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                       <div className="col-span-2 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Sub-title / Stack</label>
                                          <Input 
                                            value={item.subtitle || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], subtitle: e.target.value };
                                              setSections(newSec);
                                            }}
                                            placeholder="Next.js, Tailwind, Prisma"
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                    </>
                                  )}

                                  {section.type === 'custom' && (
                                    <>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Title</label>
                                          <Input 
                                            value={item.title || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], title: e.target.value };
                                              setSections(newSec);
                                            }}
                                            placeholder="Award Name / Certification"
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Link (Optional)</label>
                                          <Input 
                                            value={item.link || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], link: e.target.value };
                                              setSections(newSec);
                                            }}
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                       <div className="col-span-2 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Subtitle / Organization</label>
                                          <Input 
                                            value={item.subtitle || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], subtitle: e.target.value };
                                              setSections(newSec);
                                            }}
                                            className="h-12 rounded-xl bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                    </>
                                  )}

                                  {(section.type === 'experience' || section.type === 'education' || section.type === 'projects' || section.type === 'custom') && (
                                    <>
                                       <div className="col-span-1 grid grid-cols-2 gap-4">
                                          <div className="space-y-1">
                                             <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Start Date</label>
                                             <Input 
                                                value={item.startDate || ''} 
                                                onChange={e => {
                                                  const newSec = [...sections];
                                                  newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                                  newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], startDate: e.target.value };
                                                  setSections(newSec);
                                                }}
                                                placeholder="MM/YYYY"
                                                className="h-10 rounded-lg bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                             />
                                          </div>
                                          <div className="space-y-1">
                                             <label className="text-[9px] font-black uppercase text-slate-400 ml-1">End Date</label>
                                             <Input 
                                                value={item.endDate || ''} 
                                                onChange={e => {
                                                  const newSec = [...sections];
                                                  newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                                  newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], endDate: e.target.value };
                                                  setSections(newSec);
                                                }}
                                                placeholder="MM/YYYY or Present"
                                                className="h-10 rounded-lg bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                             />
                                          </div>
                                       </div>
                                       <div className="col-span-1 space-y-1">
                                          <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Location / Metadata</label>
                                          <Input 
                                            value={item.location || ''} 
                                            onChange={e => {
                                              const newSec = [...sections];
                                              newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                              newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], location: e.target.value };
                                              setSections(newSec);
                                            }}
                                            placeholder="Remote / Bangalore"
                                            className="h-10 rounded-lg bg-white dark:bg-white/5 border-slate-200 dark:border-white/5"
                                          />
                                       </div>
                                    </>
                                  )}

                                  <div className="col-span-2 space-y-2">
                                     <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Narrative Description</label>
                                     <RichTextEditor 
                                        value={item.description || ''}
                                        onChange={(val) => {
                                          const newSec = [...sections];
                                          newSec[sIndex] = { ...newSec[sIndex], items: [...newSec[sIndex].items] };
                                          newSec[sIndex].items[iIndex] = { ...newSec[sIndex].items[iIndex], description: val };
                                          setSections(newSec);
                                        }}
                                        placeholder="Outline architectural challenges and solutions..."
                                     />
                                  </div>
                               </div>

                               <div className="absolute -top-3 -right-3 flex gap-1 opacity-0 group-hover/item:opacity-100 transition-all">
                                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-white/10" onClick={() => moveItem(sIndex, iIndex, 'up')} disabled={iIndex === 0}>
                                     <ArrowUp className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-white/10" onClick={() => moveItem(sIndex, iIndex, 'down')} disabled={iIndex === section.items.length - 1}>
                                     <ArrowDown className="w-4 h-4" />
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-8 w-8 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-white/10 text-red-500"
                                    onClick={() => {
                                      const newSec = [...sections];
                                      newSec[sIndex] = { ...newSec[sIndex], items: newSec[sIndex].items.filter((_, idx) => idx !== iIndex) };
                                      setSections(newSec);
                                    }}
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                               </div>
                            </div>
                          ))}

                          <Button 
                            variant="outline" 
                            className="w-full h-14 rounded-2xl border-dashed border-2 font-bold gap-2 text-slate-400 hover:text-primary hover:border-primary transition-all"
                            onClick={() => addItem(section.id)}
                          >
                             <PlusCircle className="w-5 h-5" /> Append New Item
                          </Button>
                       </div>
                    </div>
                  ))
                )}
              </motion.div>
            )}

            {activeTab === 'preview' && (
              <motion.div 
                key="preview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 border border-slate-100 dark:border-white/5 overflow-hidden ring-1 ring-slate-200 dark:ring-white/10"
              >
                {/* Mockup of how PDF might look */}
                <div className="bg-white text-slate-900 p-12 min-h-[1000px] shadow-inner font-serif">
                   <div className="flex justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
                      <div className="flex gap-6 items-center">
                         {personalInfo.photo && (
                            <img src={personalInfo.photo} className="w-24 h-24 rounded-2xl object-cover grayscale" alt="Profile" />
                         )}
                         <div>
                            <h1 className="text-4xl font-black tracking-tight mb-2">{personalInfo.fullName || 'Identity Name'}</h1>
                            <p className="text-xl font-bold uppercase tracking-widest" style={{ color: accentColor }}>{personalInfo.professionalTitle || 'Strategic Title'}</p>
                         </div>
                      </div>
                      <div className="text-right text-sm space-y-1 font-sans font-bold text-slate-500 max-w-[250px]">
                         <p className="truncate">{personalInfo.email}</p>
                         <p>{personalInfo.phone}</p>
                         <p>{personalInfo.location}</p>
                         <p className="italic truncate" style={{ color: accentColor }}>{personalInfo.linkedin}</p>
                         <p className="italic truncate" style={{ color: accentColor }}>{personalInfo.github}</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-12 gap-12">
                      <div className="col-span-12 space-y-10">
                        {personalInfo.summary && (
                           <div className="space-y-4">
                              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-100 pb-2">Professional Summary</h2>
                              <div className="prose prose-sm font-sans text-slate-600 max-w-none" dangerouslySetInnerHTML={{ __html: personalInfo.summary }} />
                           </div>
                        )}
                        {sections.map((section: ResumeSection) => (
                          <div key={section.id} className="space-y-4">
                             <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-100 pb-2">{section.heading}</h2>
                             <div className="space-y-6">
                                {section.items.map(item => (
                                  <div key={item.id} className="space-y-2">
                                     <div className="flex justify-between items-start">
                                        <div>
                                           <h3 className="font-black text-lg">{item.title || item.degree}</h3>
                                           <p className="text-slate-600 font-bold italic">
                                              {item.company || item.school || item.subtitle}
                                              {item.link && <span className="ml-2 not-italic text-slate-400 text-xs truncate">• {item.link}</span>}
                                           </p>
                                        </div>
                                        <div className="text-right text-xs font-black uppercase tracking-wider" style={{ color: accentColor }}>
                                           <p>{item.startDate} {item.endDate ? `- ${item.endDate}` : ''}</p>
                                           <p>{item.location}</p>
                                        </div>
                                     </div>
                                     <div className="prose prose-sm font-sans text-slate-600 max-w-none" dangerouslySetInnerHTML={{ __html: item.description || '' }} />
                                  </div>
                                ))}
                             </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
