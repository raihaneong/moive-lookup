import Link from 'next/link'


import SeachBar from 'components/SearchBar'
import NavigationBar from 'components/NavigationBar'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Title from 'components/Title'


export default function Home() {
  return (
    <div className="flex-col m-4">
      <Title />
      <Header />
      <SeachBar />
      <NavigationBar />
      <Link href="/dashboard">go to dashboard</Link>
      <Footer />
    </div>
  )
}
