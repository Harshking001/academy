import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Location = () => {

    useGSAP(()=>{
        gsap.from('.pin-img',{
            y: -50,
            ease: 'bounce.out',
            yoyo: true,
            repeat: -1,
        })

        gsap.from(".pin2 h2",{
            opacity: 0,
            duration: 1,
            y: 100,
            scrollTrigger: {
                trigger: '#location',
                start: 'top 30',
            }
        })

        gsap.fromTo('.schedule-info',{
            xPercent: gsap.utils.wrap([130, -130])
        },{
            xPercent: gsap.utils.wrap([-120, 120]),
            rotate: gsap.utils.wrap([10, -10]),
            duration: 2,
            stagger: 1,
            scrollTrigger: {
                trigger: '#location',
                start: 'bottom bottom',
                pin: true,
                scrub: 1,
            }
        })
    })
  return (
    <section id="location">
        <div className='schedule'>
            <div className='schedule-info'>
                <h2>
                    Training (from 9.00am)
                </h2>
                <p>Training program when school closed every Monday, Wednesday, Saturday and Sunday</p>
            </div>
            <div className='schedule-info'>
                <h2>
                    Training (from 2.00pm)
                </h2>
                <p>Training when school closed, saturday and sunday from 2pm every week</p>
            </div>
        </div>
      <div className='location'>
        <img src="/stars/africa1.png" alt="location" />
        <div className='pin2'>
            <img className="pin-img" src="/stars/pin-location.png" alt="pin" />
            <h2>Wendani Astro Turf, Nairobi, Kenya</h2>
        </div>
      </div>
    </section>
  )
}

export default Location
