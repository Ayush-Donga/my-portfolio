'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import 'react-quill-new/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false,
  loading: () => <div className="h-40 bg-slate-50 dark:bg-white/5 animate-pulse rounded-2xl" />
})

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['link'],
    ['clean']
  ],
}

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  return (
    <div className="modern-quill">
      <ReactQuill 
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder={placeholder}
        className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden border-slate-200 dark:border-white/10"
      />
      <style jsx global>{`
        .modern-quill .ql-toolbar {
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          border-color: rgba(226, 232, 240, 0.5);
          background: #f8fafc;
        }
        .dark .modern-quill .ql-toolbar {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .modern-quill .ql-container {
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          border-color: rgba(226, 232, 240, 0.5);
          font-family: inherit;
          min-height: 150px;
        }
        .dark .modern-quill .ql-container {
          border-color: rgba(255, 255, 255, 0.1);
          color: white;
        }
      `}</style>
    </div>
  )
}
