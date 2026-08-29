import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className='about'>
        <div className='info'>
            <img className="info-img" src="/academy/ball2.png" alt="about" /><h1>95+</h1><p>active players</p></div>
        <div className='info'>
            <img className="info-img"src="/academy/jersey.png" alt="about" /><h1>6+</h1><p>pro coaches</p></div>
        <div className='info'>
            <img className="info-img"src="/academy/trophy-hold.png" alt="about" /><h1>28+</h1><p>trophies</p></div>
        <div className='info'>
            <img className="info-img"src="/academy/trophy.png" alt="about" /><h1>100%</h1><p>dedication</p></div>
      </div>
    </section>
  )
}

export default About
