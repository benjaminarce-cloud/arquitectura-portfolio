import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Yoshio Urakami — Architect',
  description: 'Architecture portfolio of Yoshio Urakami, based in Los Cabos, Baja California Sur. Over 30 years of experience in luxury residential and commercial projects.',
  keywords: ['architecture', 'Los Cabos', 'luxury homes', 'residential architecture', 'Yoshio Urakami'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="animate-fade-in">{children}</body>
    </html>
  )
}
