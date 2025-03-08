import React from 'react'

function BannerImage() {
  return (
    <div>
      <div className="video">
        <video width="100%" height="100%" autoPlay muted loop>
          <source src="images/video.mp4" type="video/mp4" />
          </video>
        <div className='custom-overlay2'>
        <div className="heading">
          <h1>"Transforming Events into Memorable Experiences!"</h1>
          <p>~ Gill's Event Elegance</p>
        </div>
        </div>
        </div>
    
    </div>
  )
}

export default BannerImage
