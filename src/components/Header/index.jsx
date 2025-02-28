import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CustomModal from '../Modal'
import logo from '/images/lo.png'
import Login from '../loginContainer'
import Registration from '../Registration'


function Header() {
    const [open, setOpen] = useState(false)
    const[ropen,setRopen] = useState(false)
    // const Navbar2=[
    //     {EventType:"Wedding"},
    //     {EventType:"Birthday-Party"},
    //     {EventType:"Baby-showers"},
    //     {EventType:"Corporate-events"}
        
    // ]
   
    return (
        <>
            <header className='header'>

                <div className="vlogo">

                    <img src={logo} alt="image" />
                </div>

                <div className="content">
                    <nav className="navbar navbar-expand-lg navc">
                        <div className="container-fluid container0">
                
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav navlist">
                                    <li className="nav-item ">
                                         <Link className="nav-link active text-white " aria-current="page" to="/homepage">Home</Link>

                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link active text-white " aria-current="page" to="/citypage">Venues</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active text-white" aria-current="page" to="/vendors">Vendors</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active text-white " aria-current="page" to={"/PageIdea"}>Ideas</Link>
                                    </li>
                                </ul>

                            </div>
                            <div className="search-bar">
                                <input type="text" placeholder="Try 'Rafanelli Events'" />
                                <select>
                                    <option value="vendors">in Vendors</option>
                                </select>
                            </div>
                            <div className="collapse navbar-collapse navlist2" id="navbarNav">
                                <ul className="navbar-nav">


                                    <li className="nav-item">
                                        <button className="nav-link active text-white " aria-current="page" onClick={() => setOpen(true)}>Login</button>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white  " aria-current="page" onClick={() => setRopen(true)} href="#">Register</a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </nav>
                </div >

                <nav className="navbar navbar-expand-lg Secondarynav">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse secondarynavitems" id="navbarNavAltMarkup">
                            <div className="navbar-nav Navlist2">
                                
                                <Link className="nav-link active text-white" aria-current="page" to="/event/Wedding">Wedding</Link>
                                <Link className="nav-link active text-white" aria-current="page" to="/event/Birthday Party">Birthday Party</Link>
                                <Link className="nav-link active text-white" aria-current="page" to="/event/Baby Showers">Baby Showers</Link>
                                <Link className="nav-link active text-white" aria-current="page" to="/event/Corporate Events">Corporate Events</Link>
                                <Link className="nav-link active text-white" aria-current="page" to="/event/More Celebrations">More Celebrations</Link>
                                <Link className="nav-link active text-white" aria-current="page" to="#">Contact Us</Link>
                            
                            
                            </div>
                        </div>
                    </div>
                </nav>
            </header >
         <Login open={open} setOpen={setOpen} />
         <Registration ropen={ropen} setRopen={setRopen}/> 
        </>

    )
}

export default Header
