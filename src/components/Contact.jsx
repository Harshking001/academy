import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Contact = () => {

    useGSAP(() => {
        gsap.to('.pin',{
            y: 20,
            repeat: -1,
            ease: "bounce.out",
            duration: 0.5,
        })
        gsap.from('.contact-info',{
            yPercent: 100,
            // delay: 0,
            opacity: 0,
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 20',
            }
        })
    })
  return (
    <section id="contact">
      <div className='contact'>
        <div className='contact-info'>
            <h1>Contact Us</h1>
            <p>Have questions about trial sessions,schedules, or academy locations ? We'd love to hear from you</p>
            <h2><img className="pin" src="/stars/pin-location.png" style={{
                width: '60px',
            }}alt="pinned" />Wendani astro turf, Nairobi, Kenya</h2>
            <a href="tel:0705472895">+254 705 472 895</a>
            <a href="tel:0714203533">+254 714 203 533</a>
            <a href="mailto:Starsfootballacademy254@gmail.com">Email Us</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
