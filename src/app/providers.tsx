'use client'

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        storageKey="portfolio-theme-v2"
      >
        {children}
        <Toaster position="top-right" richColors closeButton />
      </ThemeProvider>
    </SessionProvider>
  )
}
