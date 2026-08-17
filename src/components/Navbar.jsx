import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Navbar = () => {
    useGSAP(()=>{
        gsap.from('nav',{
            top: -300,
            duration: 1,
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
                scrub: 0.5,
            }
        })
    },[])
  return (
    <nav>
      <div className="nav">
        <div className='buttons'>
            <a href="#hero" className='button'>Home</a>
            <a href="#location" className='button'>About</a>
            <a href="#contact" className='button'>Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
