import { ReactQueryProvider } from '@/providers'
import type { Metadata } from 'next'
import './globals.css'
import { Flowbite } from 'flowbite-react'
import customTheme from './theme'

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
            <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  )
}
