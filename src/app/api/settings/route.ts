
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse('Unauthorized', { status: 401 })

  try {
    let settings = await prisma.settings.findFirst()

    if (!settings) {
      settings = await prisma.settings.create({
        data: {
          fullName: 'Ayush Donga',
          professionalTitle: 'Senior Full-Stack & Distributed Systems Engineer',
          email: 'ayush.donga@gmail.com',
          bio: 'Building scalable distributed systems, high-performance APIs, and production AI workflows with async-first remote ownership.',
          seoKeywords: ['full stack', 'distributed systems', 'backend architect', 'react', 'next.js', 'node.js', 'nestjs', 'postgresql', 'redis', 'rabbitmq']
        }
      })
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Settings GET Error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return new NextResponse('Unauthorized', { status: 401 })

  try {
    const body = await req.json()
    const { 
      fullName, professionalTitle, bio, avatarUrl, 
      email, phone, location,
      githubUrl, linkedinUrl, twitterUrl, instagramUrl,
      websiteUrl, seoTitle, seoDescription, seoKeywords
    } = body

    let settings = await prisma.settings.findFirst()

    if (!settings) {
      settings = await prisma.settings.create({
        data: {
            fullName: fullName || 'Ayush Donga'
        }
      })
    }

    const updatedSettings = await prisma.settings.update({
      where: { id: settings.id },
      data: {
        fullName, professionalTitle, bio, avatarUrl,
        email, phone, location,
        githubUrl, linkedinUrl, twitterUrl, instagramUrl,
        websiteUrl, seoTitle, seoDescription, seoKeywords
      }
    })

    return NextResponse.json(updatedSettings)
  } catch (error) {
    console.error('Settings PATCH Error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
