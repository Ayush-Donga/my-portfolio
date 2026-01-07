import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Initialize Gemini with the new SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    
    // 1. Fetch Resume Data (Context)
    const resume = await prisma.resume.findFirst({
        where: { isActive: true },
    })

    let contextData = resume || await prisma.resume.findFirst({
        orderBy: { updatedAt: 'desc' }
    })

    // Convert to string and truncate if too large (basic safeguard)
    const contextString = JSON.stringify(contextData).slice(0, 20000) 

    // 2. System Prompt
    const systemPrompt = `
      You are an intelligent AI assistant for **Ayush Donga's Portfolio**.
      Your goal is to impress recruiters and visitors by accurately answering questions about Ayush's skills, experience, and projects.

      **Context (Ayush's Resume Data):**
      ${contextString}

      **Instructions:**
      1. **Be Professional & Enthusiastic:** Represent Ayush as a highly skilled Senior Full-Stack Engineer.
      2. **Strictly Factual:** Only answer based on the provided JSON data. Do not make up facts.
      3. **Concise Answers:** Keep responses short and to the point (max 2-3 sentences unless asked for details).
      4. **Contact Info:** If asked for contact details, provide his email or LinkedIn from the data.
      5. **Handling Unknowns:** If the answer isn't in the data, say: "I don't have that specific detail, but Ayush would love to chat! You can contact him directly."
      6. **Formatting:** You can use markdown (bold, bullet points) for readability.
    `

    // 3. Generate Response
    // Using the new SDK structure
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Using the user requested model
      config: {
        systemInstruction: systemPrompt,
      },
      contents: [
        { role: 'user', parts: [{ text: message }] }
      ]
    });

    const text = response.text;

    return NextResponse.json({ reply: text })

  } catch (error: any) {
    console.error('Chat API Error:', error)
    
    // Check for specific API key error
    if (error.message?.includes('API key')) {
        return NextResponse.json(
            { reply: "Configuration Error: Invalid or missing API Key. Please check your .env file." },
            { status: 200 }
        )
    }

    return NextResponse.json(
      { reply: `Error: ${error.message || "Something went wrong."}` }, 
      { status: 200 }
    )
  }
}
