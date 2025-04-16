import React from 'react'
import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import LoginComponent from '../loginContainer/login';
import Login from '../loginContainer';



function Container() {
  let token = localStorage.getItem("acess_token")


  const navigate = useNavigate()
  console.log(location, "location checking")
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (!token) {
      setOpen(true)
    }
    else {
      navigate("/planningpage")
      setOpen(false)
    }
  }


  return (
    <>
      <div>
        <div className="contain">
          <h4>Plan Your Dream Event</h4>
          <p>Weddings, galas, birthdays, and more, Gill's Event Elegance helps you find venues, vendors, and ideas you can't find anywhere else.</p>


          <button onClick={handleClick}>Start Planning</button>



        </div>

      </div>
      {
        open &&
        <Login open={open} setOpen={setOpen} />
      }
    </>
  )
}

export default Container
