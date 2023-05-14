'use client'

import { useState } from 'react'

import SeachBar from 'components/SearchBar'
import Footer from 'components/Footer'
import Header from 'components/Header'


export default function Home() {

  const [search, setSearch] = useState('')

  return (
    <div className="flex-col m-4">
      <Header />
      <SeachBar />
      {/* 
      <Footer /> */}
    </div>
  )
}
