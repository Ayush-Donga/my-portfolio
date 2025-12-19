import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  const body = await req.json()
  const { title, description, techStack, liveUrl, githubUrl, imageUrl, category } = body

  const project = await prisma.project.update({
    where: { id },
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

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  await prisma.project.delete({ where: { id } })
  return new NextResponse(null, { status: 204 })
}
