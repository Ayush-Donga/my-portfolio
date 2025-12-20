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
  title: "Ayush Donga | Engineering Lead & Technical Partner",
  description: "Engineering Lead specializing in building high-performance web applications and leading remote engineering teams to success. Bridging the gap between business and technology.",
  keywords: ["Engineering Lead", "Technical Partner", "Full Stack Architect", "Next.js Expert", "Node.js Lead", "Remote Engineering Leader"],
  authors: [{ name: "Ayush Donga" }],
  openGraph: {
    title: "Ayush Donga | Engineering Lead & Technical Partner",
    description: "Architecting high-performance systems for global-scale products.",
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
