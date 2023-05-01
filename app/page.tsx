import Link from 'next/link'


import SeachBar from 'components/SearchBar'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'


export default function Home() {
  return (
    <div className="p-1">
      <SeachBar />
      <NavigationBar />
      <Link href="/dashboard">go to dashboard</Link>
      <Footer />
    </div>
  )
}
