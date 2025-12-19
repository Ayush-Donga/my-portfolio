'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-muted/50 animate-pulse" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-14 h-7 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 0 : 28,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-indigo-600" />
        ) : (
          <Sun className="w-3 h-3 text-amber-500" />
        )}
      </motion.div>
    </button>
  )
}
