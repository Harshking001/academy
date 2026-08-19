import React from 'react'
import Hero from './components/Hero'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import About from './components/About'
import View from './components/View'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Coaches from './components/Coaches'
import Highlights from './components/highlights'

const App = () => {
  return (
    <main>
      <Navbar />
      <Cursor />
      <Hero />
      <About />
      <Location />
      <View />
      <Coaches />
      <Highlights />
      <Contact />
    </main>
  )
}

export default App
