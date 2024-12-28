import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from './components'
import { ReactQueryProvider } from '@/providers'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div>
          <ReactQueryProvider>
            <Navbar />
            {children}
            <Footer />
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  )
}
