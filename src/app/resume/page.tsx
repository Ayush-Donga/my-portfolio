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
    <Button disabled className="h-10 px-6 rounded-xl font-bold gap-2 bg-blue-600js/50 text-white text-xs">
      <Loader2 className="w-4 h-4 animate-spin" /> downloading...
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

  const cleanHtml = (html: string) => {
    if (!html) return '';
    // Replace non-breaking spaces with regular spaces to ensure text wrapping works
    return html.replace(/&nbsp;/g, ' ').replace(/\u00A0/g, ' ');
  };

  const highlightMetrics = (text: string | null | undefined) => {
    if (!text) return ''
    const cleaned = cleanHtml(text)
    return cleaned
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white font-bold print:text-black">$1</strong>')
      .replace(
        /(\b\d+(?:\.\d+)?%|\b\d+\+?\s*(?:hours|developers|years|months|reduction|increase|improvement|growth|TB|requests\/sec|RPS|sessions|users|daily volume|uptime|latency|\d+m to \d+m))/gi, 
        (match) => match.includes('<strong') ? match : `<strong class="text-slate-900 dark:text-white font-bold print:text-black">${match}</strong>`
      )
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
          <header className="px-6 py-6 md:px-16 md:py-8 border-b border-slate-100 dark:border-white/5 bg-white dark:bg-zinc-950 print:bg-white text-center">
             <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white print:text-black leading-tight mb-2">
                    {personalInfo.fullName}
                </h1>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 print:text-blue-700 mb-4">
                    {personalInfo.professionalTitle}
                </p>
                
                {/* Contact Info - Optimized for Professional Look */}
                <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-[10px] md:text-[11px] font-bold text-slate-500 dark:text-slate-400 print:text-slate-600">
                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-blue-500/70" /> 
                      <span>{personalInfo.email}</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-blue-500/70" /> <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-blue-500/70" /> <span>{personalInfo.location}</span>
                    </div>
                    {(personalInfo.linkedin || personalInfo.github) && (
                      <div className="w-full md:w-auto h-px bg-slate-200 dark:bg-white/10 hidden md:block" />
                    )}
                    {personalInfo.linkedin && (
                      <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                          <Linkedin className="w-3.5 h-3.5 text-blue-500/70" /> <span>LinkedIn</span>
                      </a>
                    )}
                    {personalInfo.github && (
                      <a href={personalInfo.github.startsWith('http') ? personalInfo.github : `https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                          <Github className="w-3.5 h-3.5 text-blue-500/70" /> <span>GitHub</span>
                      </a>
                    )}
                </div>
             </div>
          </header>

          {/* SINGLE COLUMN PROFESSIONAL LAYOUT */}
          <div className="max-w-4xl mx-auto min-h-[297mm]">
            
            {/* DOCUMENT CONTENT */}
            <div className="p-6 md:p-8 lg:p-10 space-y-5 md:space-y-6 print:p-8">
              
              {/* Summary Section (Merged) */}
              {(() => {
                const summarySec = content.find(s => s.type === 'summary' || s.type === 'profile' || s.heading.toLowerCase().includes('summary') || s.heading.toLowerCase().includes('profile'));
                const summaryHeading = summarySec?.heading || 'Summary';
                const hasSummary = personalInfo.summary || summarySec;

                if (!hasSummary) return null;

                return (
                  <section className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-2 md:gap-3 mb-2">
                        <h2 className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-slate-900 dark:text-white print:text-black whitespace-nowrap">
                          {summaryHeading}
                        </h2>
                        <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
                      </div>
                      {personalInfo.summary && (
                        <div 
                          className="text-[10.5px] md:text-[11.5px] leading-[1.6] text-slate-600 dark:text-slate-400 text-justify print:text-black/80"
                          dangerouslySetInnerHTML={{ __html: highlightMetrics(personalInfo.summary) }}
                        />
                      )}
                      {content.filter(s => s.type === 'summary' || s.type === 'profile' || (s.heading.toLowerCase().includes('summary') && s !== summarySec)).map(section => (
                        <div key={section.id} className="space-y-2">
                           {section.items.map(item => (
                              <div key={item.id} dangerouslySetInnerHTML={{ __html: highlightMetrics(item.description || '') }} className="text-[10.5px] md:text-[11.5px] leading-[1.6] text-slate-600 dark:text-slate-400 text-justify print:text-black/80" />
                           ))}
                        </div>
                      ))}
                  </section>
                );
              })()}

              {/* Main Content Loop (Experience, Skills, Education, Projects) */}
              {['experience', 'skills', 'education', 'projects'].map(type => {
                 const sections = content.filter((s: ResumeSection) => s.type === type);
                 if (sections.length === 0) return null;

                 return sections.map((section: ResumeSection) => (
                    <section key={section.id} className="space-y-2 md:space-y-3 break-inside-avoid">
                       <div className="flex items-center gap-2 md:gap-3 mb-2">
                          <h2 className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-slate-900 dark:text-white print:text-black whitespace-nowrap">
                            {section.heading}
                          </h2>
                          <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
                       </div>

                       <div className="space-y-3 md:space-y-4">
                          {section.items.map((item: ResumeItem) => (
                            <div key={item.id} className="relative group">
                               {/* Common Header Structure for all types */}
                               <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1 gap-1">
                                  <div className="flex items-start gap-2 flex-1 min-w-0">
                                    <h3 className="text-[12px] md:text-[13px] font-bold text-slate-900 dark:text-white print:text-black break-words">
                                      {item.title || item.degree}
                                    </h3>
                                    {item.link && (
                                      <a href={item.link.startsWith('http') ? item.link : `https://${item.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 print:hidden flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                         <ExternalLink className="w-3 h-3" />
                                      </a>
                                    )}
                                  </div>
                                  {(item.startDate) && (
                                    <span className="text-[9px] md:text-[10px] font-bold text-slate-400 md:whitespace-nowrap print:text-slate-600 flex-shrink-0">
                                      {item.startDate} {item.endDate ? `— ${item.endDate}` : '— Present'}
                                    </span>
                                  )}
                               </div>
                               
                               {/* Subtitle / Company / School */}
                               {(item.company || item.school || item.subtitle) && (
                                 <div className="flex flex-wrap items-center gap-2 mb-2">
                                   <span className="text-[10px] md:text-[11px] font-semibold text-blue-600 dark:text-blue-500 break-words">
                                     {item.company || item.school || item.subtitle}
                                   </span>
                                   {item.location && <span className="text-[9px] md:text-[10px] text-slate-400 flex-shrink-0">• {item.location}</span>}
                                 </div>
                               )}

                               {/* Description / Subskills */}
                               {(item.description || item.subskills) && (
                                 <div 
                                   className="text-[10px] md:text-[11px] leading-[1.6] text-slate-600 dark:text-slate-400 print:text-black/85 [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:space-y-1.5 [&>ul>li::marker]:text-slate-400 break-words overflow-hidden"
                                   dangerouslySetInnerHTML={{ __html: highlightMetrics(item.description || item.subskills || '') }}
                                 />
                               )}
                            </div>
                          ))}
                       </div>
                    </section>
                 ));
              })}

              {/* Other items (Languages, Interests, Awards) */}
              {content.filter((s: ResumeSection) => !['experience', 'projects', 'education', 'skills', 'summary', 'profile'].includes(s.type) && s.heading.toLowerCase() !== 'summary' && s.heading.toLowerCase() !== 'professional profile').map((section: ResumeSection) => (
                 <section key={section.id} className="space-y-3 md:space-y-4 break-inside-avoid">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                       <h2 className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-slate-900 dark:text-white print:text-black whitespace-nowrap">
                         {section.heading}
                       </h2>
                       <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                       {section.items.map((item: ResumeItem) => (
                         <div key={item.id} className="space-y-1">
                             <h3 className="text-[10px] md:text-[11px] font-bold text-slate-700 dark:text-slate-300">
                               {item.title}
                             </h3>
                             {item.description && (
                               <div className="text-[9.5px] md:text-[10.5px] text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{__html: item.description || ''}} />
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
