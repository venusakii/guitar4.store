import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Guitar Studio | Premium Guitars, Expert Lessons & Professional Services',
  description: 'Discover exceptional guitars, world-class instruction, and professional services at Guitar Studio. Your premier destination for acoustic, electric, and bass guitars.',
  generator: 'v0.app',
  keywords: ['guitar shop', 'guitar lessons', 'acoustic guitars', 'electric guitars', 'guitar repair', 'music lessons', 'guitar studio'],
  authors: [{ name: 'Guitar Studio' }],
  openGraph: {
    title: 'Guitar Studio | Premium Guitars & Expert Lessons',
    description: 'Your premier destination for exceptional guitars and professional instruction',
    type: 'website',
    url: 'https://guitar4.store',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#D97706',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
