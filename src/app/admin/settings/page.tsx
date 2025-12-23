
'use client'

import React, { useState, useEffect } from 'react'
import { Save, Loader2, User, Globe, Share2, Shield, Layout, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ImageUpload } from '@/components/admin/ImageUpload'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'

interface SettingsData {
  id: string
  fullName: string
  professionalTitle: string
  bio: string
  avatarUrl: string
  email: string
  phone: string
  location: string
  githubUrl: string
  linkedinUrl: string
  twitterUrl: string
  instagramUrl: string
  websiteUrl: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
}

const TABS = [
  { id: 'profile', label: 'General Profile', icon: User },
  { id: 'socials', label: 'Social Connections', icon: Share2 },
  { id: 'seo', label: 'SEO & Metadata', icon: Globe },
]

export default function SettingsAdmin() {
  const [activeTab, setActiveTab] = useState('profile')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  
  const [formData, setFormData] = useState<Partial<SettingsData>>({
    fullName: '',
    professionalTitle: '',
    bio: '',
    avatarUrl: '',
    email: '',
    phone: '',
    location: '',
    githubUrl: '',
    linkedinUrl: '',
    twitterUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: []
  })

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings')
      if (res.ok) {
        const data = await res.json()
        setFormData(data)
      }
    } catch (error) {
      console.error('Failed to fetch settings', error)
      toast.error('Could not load settings')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const toastId = toast.loading('Saving configuration...')
    
    try {
      const res = await fetch('/api/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        toast.success('Settings updated successfully', { id: toastId })
      } else {
        toast.error('Failed to update settings', { id: toastId })
      }
    } catch (error) {
       toast.error('Error saving settings', { id: toastId })
    } finally {
      setSaving(false)
    }
  }

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const val = e.target.value
     setFormData({ ...formData, seoKeywords: val.split(',').map(s => s.trim()) })
  }

  if (loading) {
     return (
        <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
           <Loader2 className="w-12 h-12 text-primary animate-spin opacity-20" />
           <p className="text-slate-400 font-medium animate-pulse">Loading Configuration...</p>
        </div>
     )
  }

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <div className="flex items-center gap-2 mb-3">
              <div className="p-1 rounded bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400">
                 <Layout className="w-3 h-3" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">System Config</span>
           </div>
           <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Settings & <span className="text-primary">Controls</span></h1>
           <p className="text-slate-500 font-medium mt-2">Manage your digital presence, SEO metadata, and contact pathways.</p>
        </div>
        <Button 
          onClick={handleSubmit} 
          disabled={saving}
          className="h-14 px-8 rounded-2xl font-black uppercase text-[10px] tracking-widest gap-3 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all w-full md:w-auto"
        >
           {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
           Save Changes
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
         {/* Navigation Sidebar */}
         <div className="w-full lg:w-64 shrink-0 space-y-2">
            {TABS.map((tab) => (
               <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm transition-all duration-300 relative overflow-hidden group ${
                     activeTab === tab.id 
                        ? 'bg-white dark:bg-white/5 text-primary shadow-xl shadow-slate-200/50 dark:shadow-none' 
                        : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
                  }`}
               >
                  <div className={`p-2 rounded-xl transition-colors ${activeTab === tab.id ? 'bg-primary/10' : 'bg-transparent group-hover:bg-slate-200 dark:group-hover:bg-white/10'}`}>
                     <tab.icon className="w-5 h-5" />
                  </div>
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                     <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-primary" 
                     />
                  )}
               </button>
            ))}
         </div>

         {/* Content Area */}
         <div className="flex-1 min-w-0">
             <AnimatePresence mode="wait">
                <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.2 }}
                   className="bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-8 md:p-12 shadow-sm"
                >
                   {activeTab === 'profile' && (
                      <div className="space-y-8">
                         <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white">General Profile</h2>
                         </div>
                         
                         <div className="grid gap-8">
                            <div className="space-y-4">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Profile Visual</label>
                               <div className="flex gap-8 items-start">
                                  <div className="w-32 h-32 shrink-0 rounded-[2rem] overflow-hidden border-2 border-dashed border-slate-200 dark:border-white/10 relative group">
                                     <ImageUpload 
                                        value={formData.avatarUrl || ''} 
                                        onChange={(url) => setFormData({...formData, avatarUrl: url})}
                                        onRemove={() => setFormData({...formData, avatarUrl: ''})}
                                     />
                                  </div>
                                  <div className="flex-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
                                     Upload your primary avatar. Ideally 400x400px. This image will be used across your portfolio header and admin panel.
                                  </div>
                               </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                               <div className="space-y-2">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                                  <Input 
                                     value={formData.fullName} 
                                     onChange={e => setFormData({...formData, fullName: e.target.value})}
                                     className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                                  />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Professional Title</label>
                                  <Input 
                                     value={formData.professionalTitle} 
                                     onChange={e => setFormData({...formData, professionalTitle: e.target.value})}
                                     className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                                  />
                               </div>
                            </div>

                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Professional Bio</label>
                               <Textarea 
                                  value={formData.bio || ''} 
                                  onChange={e => setFormData({...formData, bio: e.target.value})}
                                  className="min-h-[150px] rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 p-5 font-medium leading-relaxed resize-none"
                                  placeholder="Brief introduction about yourself..."
                               />
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-white/5">
                               <div className="space-y-2">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2"><Mail className="w-3 h-3" /> Email Address</label>
                                  <Input 
                                     value={formData.email} 
                                     onChange={e => setFormData({...formData, email: e.target.value})}
                                     className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                                  />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2"><Phone className="w-3 h-3" /> Phone Number</label>
                                  <Input 
                                     value={formData.phone || ''} 
                                     onChange={e => setFormData({...formData, phone: e.target.value})}
                                     className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                                  />
                               </div>
                               <div className="space-y-2 md:col-span-2">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2"><MapPin className="w-3 h-3" /> Location</label>
                                  <Input 
                                     value={formData.location || ''} 
                                     onChange={e => setFormData({...formData, location: e.target.value})}
                                     className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                                  />
                               </div>
                            </div>
                         </div>
                      </div>
                   )}

                   {activeTab === 'socials' && (
                      <div className="space-y-8">
                         <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Social Connections</h2>
                         </div>

                         <div className="grid gap-6">
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2"><Github className="w-3 h-3" /> GitHub URL</label>
                               <Input 
                                  value={formData.githubUrl || ''} 
                                  onChange={e => setFormData({...formData, githubUrl: e.target.value})}
                                  placeholder="https://github.com/..."
                                  className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2"><Linkedin className="w-3 h-3" /> LinkedIn URL</label>
                               <Input 
                                  value={formData.linkedinUrl || ''} 
                                  onChange={e => setFormData({...formData, linkedinUrl: e.target.value})}
                                  placeholder="https://linkedin.com/in/..."
                                  className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2"><Twitter className="w-3 h-3" /> Twitter/X URL</label>
                               <Input 
                                  value={formData.twitterUrl || ''} 
                                  onChange={e => setFormData({...formData, twitterUrl: e.target.value})}
                                  placeholder="https://twitter.com/..."
                                  className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2"><Instagram className="w-3 h-3" /> Instagram URL</label>
                               <Input 
                                  value={formData.instagramUrl || ''} 
                                  onChange={e => setFormData({...formData, instagramUrl: e.target.value})}
                                  placeholder="https://instagram.com/..."
                                  className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                               />
                            </div>
                         </div>
                      </div>
                   )}

                   {activeTab === 'seo' && (
                      <div className="space-y-8">
                         <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white">SEO & Metadata</h2>
                         </div>

                         <div className="grid gap-6">
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Website URL (Canonical)</label>
                               <Input 
                                  value={formData.websiteUrl || ''} 
                                  onChange={e => setFormData({...formData, websiteUrl: e.target.value})}
                                  placeholder="https://nexora.com"
                                  className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Global Site Title</label>
                               <Input 
                                  value={formData.seoTitle || ''} 
                                  onChange={e => setFormData({...formData, seoTitle: e.target.value})}
                                  placeholder="Ayush Donga | Full Stack Developer"
                                  className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Meta Description</label>
                               <Textarea 
                                  value={formData.seoDescription || ''} 
                                  onChange={e => setFormData({...formData, seoDescription: e.target.value})}
                                  placeholder="Used for Google search results and social shares..."
                                  className="min-h-[120px] rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 p-5 font-medium leading-relaxed resize-none"
                               />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Keywords</label>
                               <Input 
                                  value={formData.seoKeywords?.join(', ') || ''} 
                                  onChange={handleKeywordChange}
                                  placeholder="react, nextjs, developer, portfolio"
                                  className="h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 px-5 font-bold"
                               />
                               <p className="text-[10px] font-bold text-slate-400 ml-1">Comma separated values</p>
                            </div>
                         </div>
                      </div>
                   )}
                </motion.div>
             </AnimatePresence>
         </div>
      </div>
    </div>
  )
}
