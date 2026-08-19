import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'

const Cursor = () => {

    const [position, setPosition] = useState({})

    window.addEventListener('mousemove',(e) =>{
        setPosition({x: e.clientX, y: e.clientY})
    })

    useGSAP(() => {
        gsap.to('#cursor',{
            x: position.x,
            y: position.y,
        })
    },[position])

    useGSAP(()=>{
        gsap.to('#cursor',{
            repeat: -1,
            rotate: 360,
            duration: 10,
            ease: 'linear',
        })
    },[])
  return (
    <div id="cursor">
        <img className='cursor' src="/stars/cursor.png" alt="cursor" />
    </div>
  )
}

export default Cursor
