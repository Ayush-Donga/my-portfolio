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
        // For now, we'll check against a hardcoded admin or add an Admin model later
        if (!credentials?.email || !credentials?.password) return null
        
        // Simple example: Allow a hardcoded admin for portfolio owner
        if (credentials.email === "ayush@example.com" && credentials.password === "admin123") {
           return { id: "1", name: "Ayush Donga", email: "ayush@example.com" }
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
