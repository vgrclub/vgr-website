import type { Metadata } from 'next'
import { Inter, Noto_Sans } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
//TODO: this component renders on every page, so navbar, footer components can be put here.
const inter = Inter({ subsets: ['latin'] });
const noto = Noto_Sans({ subsets: ['latin'] });

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
      <body className={noto.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
