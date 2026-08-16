import React from 'react'
import Hero from './components/Hero'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import About from './components/About'
import View from './components/View'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

const App = () => {
  return (
    <main>
      <Cursor />
      <Hero />
      <About />
      <View />
      <Contact />
    </main>
  )
}

export default App
