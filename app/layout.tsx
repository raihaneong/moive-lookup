import './globals.css'
import './customScrollBar.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Title from '@/components/Title'
import NavigationBar from '@/components/NavigationBar'

export const metadata = {
  title: 'moiev lookup',
  description: 'lookup your favorite movies and tv shows',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Title />
        {children}
        <NavigationBar />
      </body>
    </html>
  )
}
