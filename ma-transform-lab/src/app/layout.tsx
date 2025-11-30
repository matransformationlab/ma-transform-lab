import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SocialBanner from '@/components/ui/SocialBanner'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MA Transform Lab - Ignite Your Growth | @matransformlab',
  description: 'Transforming lives across mental, physical, business, and AI dimensions. Systems for Mind, Body & Business Mastery.',
  keywords: 'personal transformation, business growth, mental wellness, AI strategy, matransformlab, online courses, certification',
  authors: [{ name: 'Mahmoud Ahmed', url: 'https://matransformlab.com' }],
  openGraph: {
    title: 'MA Transform Lab - Ignite Your Growth',
    description: 'Join thousands transforming their lives through our integrated system. Sovereign education empire.',
    images: ['/og-image.png'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MA Transform Lab - Ignite Your Growth',
    description: 'Transforming lives across mental, physical, business, and AI dimensions',
    images: ['/twitter-image.png'],
    creator: '@matransformlab',
    site: '@matransformlab',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="starfield" id="starfield" />
        <SocialBanner />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const starfield = document.getElementById('starfield');
              if (!starfield) return;
              
              const numStars = 150;
              for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                starfield.appendChild(star);
              }
            })();
          `
        }} />
      </body>
    </html>
  )
}
