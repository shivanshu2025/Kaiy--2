import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000')
);

export const metadata: Metadata = {
  metadataBase,
  title: `Kaiy\u014d`,
  description: 'Live boldly, dress bravely. Premium fashion collection.',
  icons: {
    icon: '/images/Kaiyologo.png',
    shortcut: '/images/Kaiyologo.png',
    apple: '/images/Kaiyologo.png',
  },
  openGraph: {
    images: [
      {
        url: '/images/Kaiyologo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/images/Kaiyologo.png',
      },
    ],
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
