
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
          professionalTitle: 'Full Stack Developer',
          email: 'ayush.donga20@gmail.com',
          bio: 'Building scalable applications and intuitive user experiences.',
          seoKeywords: ['full stack', 'developer', 'react', 'next.js', 'node.js']
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
