import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Amuj official',
  description: 'The official amuj website',
  // keywords: []
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>{children}</body>
    </html>
  )
}
