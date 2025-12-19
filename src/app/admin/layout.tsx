import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Sidebar } from '@/components/admin/Sidebar'
import { AdminHeader } from '@/components/admin/AdminHeader'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="flex h-screen bg-[#fafafa] dark:bg-[#030712] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-secondary/20">
          <div className="p-8 pb-12">
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
