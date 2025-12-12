import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boise Estate Cleanout | Coming Soon',
  description: 'Compassionate estate cleanout services in Boise, Idaho. Full property clearing, donation coordination, and respectful handling.',
  keywords: 'estate cleanout, Boise, Idaho, property cleanout, estate clearing, probate cleanout',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
