import React from 'react'

const Highlights = () => {
  return (
    <section id="highlights">
      <div className='highlights'>
        <div className='video-container'>
            <video src="/stars/videos/vid.mp4"></video>
            <h2>Fun expirience</h2>
            <p>we don't just play also have fan</p>
        </div>
        <div className='video-container'>
            <video src="/stars/videos/vid2.mp4" />
            <h2>Fun expirience</h2>
            <p>we don't just play also have fan</p>
        </div>
        <div className='video-container'>
            <video src="/stars/videos/vid1.mp4"></video>
            <h2>Fun expirience</h2>
            <p>we don't just play also have fan</p>
        </div>
      </div>
      
    </section>
  )
}

export default Highlights
