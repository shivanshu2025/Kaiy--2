import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Kaiyō',
  description: 'Live boldly, dress bravely. Premium fashion collection.',

  icons: {
    icon: '/images/kaiyologo.png',          // main favicon
    shortcut: '/images/kaiyologo.png',      // optional
    apple: '/images/kaiyologo.png' // optional (for iPhone)
  },

  openGraph: {
    images: [
      {
        url: '/images/kaiyologo.png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/images/kaiyologo.png',
      },
    ],
  },
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.className
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

