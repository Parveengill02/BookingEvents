import React from 'react'
import { Link } from 'react-router-dom'

export default Venuecards


function Venuecards({venuecards}) {
    
  return (
    
     <div>
        <div className='Venuecards'>
            {venuecards.map((Venue,index)=>(
                <div key={index} className='venue-cards'>
                <Link to={`/venues/${Venue.city}`}>
                <img src={Venue.imageUrl}/>
                </Link>
                <h3>{Venue.city}</h3>
                </div>
            ))}
        </div>
      </div>
  )
}