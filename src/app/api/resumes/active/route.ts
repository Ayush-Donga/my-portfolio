import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const resume = await prisma.resume.findFirst({
    where: { isActive: true }
  })
  
  if (!resume) {
    // Return the latest one if none is active
    const latest = await prisma.resume.findFirst({
      orderBy: { updatedAt: 'desc' }
    })
    return NextResponse.json(latest)
  }
  
  return NextResponse.json(resume)
}
