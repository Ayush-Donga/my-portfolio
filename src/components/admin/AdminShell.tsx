'use client'

import React, { useState } from 'react'
import { Sidebar } from '@/components/admin/Sidebar'
import { AdminHeader } from '@/components/admin/AdminHeader'

export function AdminShell({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#fafafa] dark:bg-[#030712] overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Passed Props for Mobile Control */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-0">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-secondary/20">
          <div className="p-4 md:p-8 pb-12">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
          <footer className="px-8 py-6 border-t border-border bg-card/30 mt-auto text-center">
             <p className="text-sm text-muted-foreground">
               &copy; {new Date().getFullYear()} Ayush Donga Portfolio Admin. All rights reserved.
             </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
