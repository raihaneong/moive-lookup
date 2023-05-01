import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="rounded-lg duration-500 p-1 ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 hover:bg-purple-700 hover:text-xl">MENU</button>
      <footer>
        <Image src="/themoviedb-logoattribution.svg" alt="themoviedb logo" width={100} height={100}/>
      </footer>
    </main>
  )
}
