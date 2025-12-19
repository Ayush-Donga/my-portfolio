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
  const { title, company, location, startDate, endDate, current, description } = body

  const experience = await prisma.experience.update({
    where: { id },
    data: {
      title,
      company,
      location,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
      current,
      description
    }
  })

  return NextResponse.json(experience)
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  await prisma.experience.delete({
    where: { id }
  })

  return new NextResponse(null, { status: 204 })
}
