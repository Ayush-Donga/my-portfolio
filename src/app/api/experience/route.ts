import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
  const experiences = await prisma.experience.findMany({
    orderBy: { startDate: 'desc' }
  })
  return NextResponse.json(experiences)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse("Unauthorized", { status: 401 })

  const body = await req.json()
  const { title, company, location, startDate, endDate, current, description } = body

  const experience = await prisma.experience.create({
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
