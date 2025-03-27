import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lush Design System Publishing Guide',
  description: 'Lush Design System Publishing Guide',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} antialiased`}>
      <body className={pretendard.className}>{children}</body>
    </html>
  )
}
