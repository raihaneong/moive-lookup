import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

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
            <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
