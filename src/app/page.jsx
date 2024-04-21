import React from 'react'
import Sidenav from './components/side-nav/page'
import Navbar from './components/navbar/page'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Sidenav/>
    </div>
  )
}
