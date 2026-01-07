import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://ayushd-portfolio.vercel.app"),
  title: {
    default: "Ayush Donga | Engineering Lead & Technical Partner",
    template: "%s | Ayush Donga",
  },
  description: "Senior Full-Stack Engineer helping US/EU founders scale complex SaaS & real-time applications. React, Node.js, and Cloud-Native architectures.",
  keywords: ["Engineering Lead", "Technical Partner", "Full Stack Architect", "Next.js Expert", "Node.js Lead", "Remote Engineering Leader", "Ayush Donga"],
  authors: [{ name: "Ayush Donga" }],
  creator: "Ayush Donga",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Ayush Donga | Engineering Lead & Technical Partner",
    description: "Architecting high-performance systems for global-scale products.",
    siteName: "Ayush Donga",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ayush Donga",
  "url": process.env.NEXT_PUBLIC_APP_URL || "https://ayushd-portfolio.vercel.app",
  "sameAs": [
    "https://www.linkedin.com/in/ayush-donga",
    "https://github.com/ayush-donga",
  ],
  "jobTitle": "Engineering Lead",
  "description": "Engineering Lead specializing in building high-performance web applications.",
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
