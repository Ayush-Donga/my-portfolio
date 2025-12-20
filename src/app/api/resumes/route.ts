import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
  const resumes = await prisma.resume.findMany({
    orderBy: { updatedAt: 'desc' }
  })
  return NextResponse.json(resumes)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  const body = await req.json()
  const resume = await prisma.resume.create({ 
    data: {
      internalName: body.internalName || 'Untitled Resume',
      personalInfo: body.personalInfo || {},
      content: body.content || [],
      isActive: body.isActive || false
    } 
  })

  // If this one is active, deactivate others
  if (resume.isActive) {
    await prisma.resume.updateMany({
      where: { id: { not: resume.id } },
      data: { isActive: false }
    })
  }

  return NextResponse.json(resume)
}
