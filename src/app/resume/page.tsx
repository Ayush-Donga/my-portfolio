'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Linkedin, Globe, Loader2, ChevronLeft, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ResumeDownloadButton = dynamic(
  () => import('@/components/resume/ResumeDownloadButton'),
  { ssr: false, loading: () => (
    <Button disabled className="h-10 px-6 rounded-xl font-bold gap-2 bg-blue-600/50 text-white text-xs">
      <Download className="w-4 h-4" /> Loading...
    </Button>
  ) }
)

/**
 * PublicResume Component - Modern Professional Edition (FlowCV Style)
 * 
 * DESIGN SPECIFICATIONS:
 * 1. COMPACT LAYOUT: Optimized for 1-2 pages max.
 * 2. 2-COLUMN STRUCTURE: Sidebar for meta-data, Main for deep work.
 * 3. PRINT OPTIMIZED: Exact A4 dimensions with zero margin bleed.
 */
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
  type: string
  heading: string
  items: ResumeItem[]
}

interface ResumeData {
  id: string
  internalName: string
  personalInfo: {
    fullName: string
    professionalTitle: string
    email: string
    phone: string
    location: string
    linkedin?: string
    github?: string
    summary?: string
  }
  content: ResumeSection[]
}

export default function PublicResume() {
  const [resume, setResume] = useState<ResumeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchActiveResume()
  }, [])

  useEffect(() => {
    if (resume?.personalInfo?.fullName) {
      document.title = `${resume.personalInfo.fullName} - Resume`
    }
  }, [resume])

  const fetchActiveResume = async () => {
    try {
      const res = await fetch('/api/resumes/active')
      const data = await res.json()
      setResume(data)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    window.print()
  }

  if (loading) return (
    <div className="min-h-screen bg-slate-50 dark:bg-black flex items-center justify-center">
       <Loader2 className="w-12 h-12 text-primary animate-spin opacity-20" />
    </div>
  )

  if (!resume) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50 dark:bg-black">
       <div className="w-20 h-20 rounded-3xl bg-white dark:bg-white/5 shadow-xl flex items-center justify-center mb-6">
          <Globe className="w-10 h-10 text-slate-300" />
       </div>
       <h1 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tighter">Profile Not Published</h1>
       <p className="text-slate-500 mb-8 max-w-sm">The digital engineering portfolio for this user is currently offline.</p>
       <Link href="/">
          <Button variant="outline" className="rounded-xl h-12 px-6 font-bold gap-2">
             <ChevronLeft className="w-4 h-4" /> Return to Home
          </Button>
       </Link>
    </div>
  )

  const { personalInfo, content } = resume
  
  // Define sections for the main column (experience, projects, education)
  // Education is often good in the sidebar for senior roles, but let's keep it main or sidebar based on standard.
  // FlowCV typically puts Education in sidebar if it's short, or main if detailed. 
  // Let's put Experience and Projects in Main. Education in Sidebar (or Main bottom).
  // Given the user wants "FlowCV" style, a sidebar is very common.
  
  const mainSections = content.filter((s: ResumeSection) => ['experience', 'projects'].includes(s.type))
  const sideSections = content.filter((s: ResumeSection) => ['skills', 'education', 'languages', 'interests', 'awards'].includes(s.type))
  
  // If education has long descriptions, maybe move it to main. For now, let's keep it in sidebar for compactness or check length.
  // Actually, usually Education goes in Main if you are a new grad, Sidebar if experienced.
  // Let's stick to safe bets: Experience/Projects -> Main. Skills/Education/Contact -> Sidebar (Right side).
  
  return (
    <div className="min-h-screen bg-[#eef1f5] dark:bg-black md:py-12 px-0 print:p-0 print:bg-white">
      <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          body {
            -webkit-print-color-adjust: exact;
          }
          /* Hide headers/footers injected by browser */
        }
      `}</style>
      
      <div className="max-w-[210mm] mx-auto print:max-w-none print:w-[210mm]">
        
        {/* ACTION OVERLAY (Hidden in PDF) */}
        <div className="flex justify-between items-center mb-4 md:mb-6 print:hidden px-4 md:px-0">
          <Link href="/">
             <Button variant="ghost" className="rounded-xl h-9 md:h-10 px-3 md:px-4 font-bold gap-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 shadow-sm hover:translate-y-[-2px] transition-all text-xs">
                <ChevronLeft className="w-4 h-4" /> Back
             </Button>
          </Link>
          {resume && (
            <ResumeDownloadButton resume={resume} />
          )}
        </div>

        {/* 
          RESUME DOCUMENT 
          A4: 210mm x 297mm
        */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-zinc-950 w-full min-h-[297mm] shadow-2xl dark:shadow-none print:shadow-none print:min-h-0 overflow-hidden relative"
          id="resume-content"
        >
          {/* HEADER (Full Width) */}
          <header className="px-4 pt-6 pb-6 md:px-12 md:pt-12 md:pb-8 border-b border-slate-100 dark:border-white/5 bg-white dark:bg-zinc-950 print:bg-white">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
                <div className="flex-1 w-full">
                  <h1 className="text-2xl md:text-[42px] font-bold tracking-tight text-slate-900 dark:text-white print:text-black leading-none mb-1.5">
                      {personalInfo.fullName}
                  </h1>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-blue-600 dark:text-blue-500 print:text-blue-700 mb-3 md:mb-5">
                      {personalInfo.professionalTitle}
                  </p>
                  
                  {/* Contact Row */}
                  <div className="flex flex-wrap gap-x-3 md:gap-x-5 gap-y-2 text-[10px] md:text-[11px] font-medium text-slate-500 dark:text-slate-400 print:text-slate-600">
                      <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                        <Mail className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" /> 
                        <span className="break-all">{personalInfo.email}</span>
                      </a>
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" /> {personalInfo.phone}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" /> {personalInfo.location}
                      </div>
                      {personalInfo.linkedin && (
                        <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors print:hidden">
                            <Linkedin className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" /> LinkedIn
                        </a>
                      )}
                      {personalInfo.github && (
                        <a href={personalInfo.github.startsWith('http') ? personalInfo.github : `https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors print:hidden">
                            <Github className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" /> GitHub
                        </a>
                      )}
                  </div>
                </div>

                {/* Optional Summary (Right Aligned or just styled) */}
                {/* We will put summary in the main column or sidebar. Let's keep header clean. */}
             </div>
          </header>

          {/* TWO COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_32%] min-h-[400px] md:min-h-[800px]">
            
            {/* LEFT COLUMN (MAIN) */}
            <div className="p-4 md:p-10 md:pr-12 md:pl-12 space-y-6 md:space-y-8 print:p-8 print:pr-10">
              
              {/* Summary Section */}
              {personalInfo.summary && (
                 <section className="space-y-2 md:space-y-3">
                    <h2 className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-white/10 pb-2">
                      Professional Profile
                    </h2>
                    <div 
                      className="text-[10.5px] md:text-[11.5px] leading-[1.6] text-slate-600 dark:text-slate-400 text-justify print:text-black/80"
                      dangerouslySetInnerHTML={{ __html: personalInfo.summary || '' }}
                    />
                 </section>
              )}

              {/* Main Content Loop (Experience, Projects) */}
              {content.filter((s: ResumeSection) => ['experience', 'projects'].includes(s.type)).map((section: ResumeSection) => (
                <section key={section.id} className="space-y-3 md:space-y-4 break-inside-avoid">
                   <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <h2 className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-slate-900 dark:text-white print:text-black whitespace-nowrap">
                        {section.heading}
                      </h2>
                      <div className="hidden md:block flex-1 h-px bg-slate-200 dark:bg-white/10" />
                   </div>

                   <div className="space-y-4 md:space-y-5">
                      {section.items.map((item: ResumeItem) => (
                        <div key={item.id} className="relative">
                           <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1 gap-1">
                              <div className="flex items-start gap-2 flex-1 min-w-0">
                                <h3 className="text-[12px] md:text-[13px] font-bold text-slate-900 dark:text-white print:text-black break-words">
                                  {item.title || item.degree}
                                </h3>
                                {item.link && (
                                  <a href={item.link.startsWith('http') ? item.link : `https://${item.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 print:hidden flex-shrink-0">
                                     <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                              <span className="text-[9px] md:text-[10px] font-bold text-slate-400 md:whitespace-nowrap print:text-slate-600 flex-shrink-0">
                                {item.startDate} {item.endDate ? `— ${item.endDate}` : (!item.startDate ? '' : '— Present')}
                              </span>
                           </div>
                           
                           <div className="flex flex-wrap items-center gap-2 mb-2">
                             <span className="text-[10px] md:text-[11px] font-semibold text-blue-600 dark:text-blue-500 break-words">
                               {item.company || item.school || item.subtitle}
                             </span>
                             {item.location && <span className="text-[9px] md:text-[10px] text-slate-400 flex-shrink-0">• {item.location}</span>}
                           </div>

                           {item.description && (
                             <div 
                               className="text-[10px] md:text-[11px] leading-[1.55] text-slate-600 dark:text-slate-400 print:text-black/85 [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:space-y-1 [&>ul>li::marker]:text-slate-400 break-words overflow-hidden"
                               dangerouslySetInnerHTML={{ __html: item.description || '' }}
                             />
                           )}
                        </div>
                      ))}
                   </div>
                </section>
              ))}
            </div>

            {/* RIGHT COLUMN (SIDEBAR) */}
            <div className="bg-slate-50 dark:bg-zinc-900/40 p-4 md:p-10 md:pt-10 border-t md:border-t-0 md:border-l border-slate-100 dark:border-white/5 space-y-6 md:space-y-8 print:bg-slate-50 print:p-8 print:pt-10">
               
               {/* Skills */}
               {content.filter((s: ResumeSection) => s.type === 'skills').map((section: ResumeSection) => (
                 <section key={section.id} className="space-y-2 md:space-y-3 break-inside-avoid">
                    <h2 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-900 dark:text-white print:text-black pb-1">
                      {section.heading}
                    </h2>
                    <div className="space-y-2 md:space-y-3">
                      {section.items.map((item: ResumeItem) => (
                        <div key={item.id}>
                           <h3 className="text-[10px] md:text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                             {item.title}
                           </h3>
                           <div 
                             className="text-[9.5px] md:text-[10.5px] leading-relaxed text-slate-500 dark:text-slate-400 print:text-black/70"
                             dangerouslySetInnerHTML={{ __html: item.subskills || item.description || '' }}
                           />
                        </div>
                      ))}
                    </div>
                 </section>
               ))}

               {/* Education (Placed in Sidebar for compactness) */}
               {content.filter((s: ResumeSection) => s.type === 'education').map((section: ResumeSection) => (
                 <section key={section.id} className="space-y-2 md:space-y-3 break-inside-avoid">
                    <h2 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-900 dark:text-white print:text-black pb-1">
                      {section.heading}
                    </h2>
                    <div className="space-y-2 md:space-y-3">
                      {section.items.map((item: ResumeItem) => (
                        <div key={item.id}>
                           <div className="flex justify-between items-start">
                             <h3 className="text-[10px] md:text-[11px] font-bold text-slate-800 dark:text-slate-200">
                               {item.degree || item.title}
                             </h3>
                           </div>
                           <p className="text-[9.5px] md:text-[10.5px] text-blue-600 dark:text-blue-500 mb-0.5 font-medium">
                             {item.school || item.company}
                           </p>
                           <p className="text-[9px] md:text-[10px] text-slate-400 mb-1">
                             {item.startDate} — {item.endDate || 'Present'}
                           </p>
                        </div>
                      ))}
                    </div>
                 </section>
               ))}

               {/* Other items (Languages, Interests) */}
               {content.filter((s: ResumeSection) => !['experience', 'projects', 'education', 'skills'].includes(s.type)).map((section: ResumeSection) => (
                 <section key={section.id} className="space-y-2 md:space-y-3 break-inside-avoid">
                    <h2 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-900 dark:text-white print:text-black pb-1">
                      {section.heading}
                    </h2>
                    <div className="space-y-2">
                       {section.items.map((item: ResumeItem) => (
                         <div key={item.id}>
                             <h3 className="text-[10px] md:text-[11px] font-bold text-slate-700 dark:text-slate-300">
                               {item.title}
                             </h3>
                             {item.description && (
                               <div className="text-[9.5px] md:text-[10.5px] text-slate-500" dangerouslySetInnerHTML={{__html: item.description || ''}} />
                             )}
                         </div>
                       ))}
                    </div>
                 </section>
               ))}

            </div>

          </div>

          <footer className="absolute bottom-0 w-full py-4 text-center print:hidden">
             
          </footer>
        </motion.article>
      </div>
    </div>
  )
}
