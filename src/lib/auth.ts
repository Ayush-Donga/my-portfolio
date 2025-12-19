import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where you would validate against your database
        if (!credentials?.email || !credentials?.password) return null

        // Secure admin credentials using environment variables with fallbacks
        const adminEmail = process.env.ADMIN_EMAIL || "ayush.donga@gmail.com"
        const adminPassword = process.env.ADMIN_PASSWORD || "Ayush@6936"
        
        if (credentials.email === adminEmail && credentials.password === adminPassword) {
           return { id: "1", name: "Ayush Donga", email: adminEmail }
        }
        
        return null
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/auth/signin',
  }
}
