import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Container() {
    
  return (
    <div>
      <div className="contain">
        <h4>Plan Your Dream Event</h4>
        <p>Weddings, galas, birthdays, and more, Gill's Event Elegance helps you find venues, vendors, and ideas you can't find anywhere else.</p>
        <Link to="/planningPage"> <button  >Start Planning</button></Link>
       
      </div>
      
    </div>
  )
}

export default Container
