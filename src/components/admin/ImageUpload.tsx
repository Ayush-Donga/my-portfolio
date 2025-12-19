'use client'

import { CldUploadWidget } from 'next-cloudinary'
import { Button } from '@/components/ui/button'
import { Image as ImageIcon, Plus, X } from 'lucide-react'
import NextImage from 'next/image'

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
  onRemove: () => void
}

export function ImageUpload({ value, onChange, onRemove }: ImageUploadProps) {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url)
  }

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center gap-4">
        {value ? (
          <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 group">
            <NextImage
              fill
              src={value}
              alt="Project preview"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button 
                type="button" 
                variant="destructive" 
                size="icon" 
                className="rounded-xl shadow-xl"
                onClick={() => onRemove()}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        ) : (
          <CldUploadWidget 
            onUpload={onUpload} 
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "ml_default"}
            options={{
              cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
            }}
          >
            {({ open }) => {
              const onClick = () => {
                open()
              }

              return (
                <button
                  type="button"
                  onClick={onClick}
                  className="w-full aspect-video rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-white/10 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-black/20 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Upload Project Visual</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">PNG, JPG or WebP (Max 10MB)</p>
                  </div>
                  <div className="absolute bottom-6 right-6 p-3 rounded-xl bg-white dark:bg-[#030712] border border-slate-100 dark:border-white/10 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-4 h-4 text-primary" />
                  </div>
                </button>
              )
            }}
          </CldUploadWidget>
        )}
      </div>
    </div>
  )
}
