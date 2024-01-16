import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
//TODO: this component renders on every page, so navbar, footer components can be put here.
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ValleyGrlsRun Club',
  description: 'ValleyGrlsRun Club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
