import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rajlaxmi - Full Stack Developer',
  description: 'Portfolio of Rajlaxmi, a passionate full stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-blue-600 via-teal-500 to-blue-800`}>{children}</body>
    </html>
  )
}