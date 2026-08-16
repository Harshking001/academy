import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import React from 'react'
gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {

    useGSAP(()=>{
        gsap.to('.hero-ball',{
            delay: 3,
            left: -10,
            rotate: -720,
            // repeat: 1,
            yoyo: true,
            duration: 2,
            ease: "bounce",
            opacity: 0,
        })
        let split = SplitText.create(".h1",{type: 'chars'})
        let splitP=SplitText.create(".hero-p",{type: 'chars'})

        gsap.to(splitP.chars,{
            y: 50,
            duration: 1,
            stagger: {
                each: 0.2,
                from: 'random',    
            },
            scrollTrigger: {
                trigger: '#hero',
                scrub: 0.5,
                pin: true, 
            }
        })

        gsap.from(split.chars,{
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            delay: 0.7,
        })

        gsap.from('.h1',{
            scale: 2,
            opacity: 0,
            duration: 0.5,
            
        })
    })
  return (
    <section id="hero">
        <div className="hero">
            <div className='h1'><img className='hero-ball' src="/stars/ball1.png" alt="ball" />Stars Football Academy</div>
            <p className='hero-p'>Building Future Legends On and Off the Pitch</p>
        </div>
    </section>
  )
}

export default Hero
