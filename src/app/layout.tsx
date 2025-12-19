import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Donga | Full Stack Developer",
  description: "Experienced MERN Stack Team Lead & Developer with 6+ years of expertise in building scalable web applications using React, Next.js, Node.js, and PostgreSQL.",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Next.js", "Node.js", "Team Lead", "Ayush Donga"],
  authors: [{ name: "Ayush Donga" }],
  openGraph: {
    title: "Ayush Donga | Full Stack Developer",
    description: "Experienced MERN Stack Team Lead & Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
