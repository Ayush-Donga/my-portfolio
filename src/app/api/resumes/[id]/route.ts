import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const resume = await prisma.resume.findUnique({
    where: { id: params.id }
  })
  return NextResponse.json(resume)
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  const body = await req.json()
  const resume = await prisma.resume.update({
    where: { id: params.id },
    data: body
  })

  if (body.isActive) {
    await prisma.resume.updateMany({
      where: { id: { not: params.id } },
      data: { isActive: false }
    })
  }

  return NextResponse.json(resume)
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  await prisma.resume.delete({
    where: { id: params.id }
  })

  return new NextResponse(null, { status: 204 })
}
