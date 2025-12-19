import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(projects)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  const body = await req.json()
  const { title, description, techStack, liveUrl, githubUrl, imageUrl, category } = body
  
  const project = await prisma.project.create({ 
    data: {
      title,
      description,
      techStack,
      liveUrl,
      githubUrl,
      imageUrl: imageUrl || null,
      category
    } 
  })
  return NextResponse.json(project)
}
