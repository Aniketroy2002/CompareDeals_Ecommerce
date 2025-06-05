import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CompareDeals',
  description: 'Buy your products with CompareDeals',
  generator: 'Tribhiyantrayam Innovations',
  icons: {
    icon: '/s32.png', // Path to your favicon in public folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
