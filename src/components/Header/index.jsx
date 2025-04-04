import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomModal from '../Modal'
import logo from '/images/lo.png'
import Login from '../loginContainer'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { User } from "lucide-react";

function Header() {
    const [open, setOpen] = useState(false)
    const [ropen, setropen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const token = localStorage.getItem("acess_token");

    useEffect(() => {
        if (token) {

            setIsAuthenticated(true); // Convert token existence to boolean
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("acess_token");
        setIsAuthenticated(false);
        navigate("/"); // Redirect to homepage after logout
    };

    console.log(open, "operoerenrerjbkjbfdkbfkd")

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
                                <div className="search-icon">
                                    <FaSearch />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Try 'Rafanelli Events'"
                                    className="search-input"
                                />
                                <div className="search-select-container">
                                    <select className="search-select">
                                        <option value="Venues"> Venues</option>
                                        <option value="Vendors">Vendors</option>
                                        <option value="Ideas"> Ideas</option>

                                    </select>
                                    <IoIosArrowDown className="dropdown-icon" />
                                </div>
                            </div>
                            <div className="collapse navbar-collapse navlist2" id="navbarNav">
                                <ul className="navbar-nav">

                                    <li className="nav-item fav-list">
                                        <Link to="/likedpage">
                                            <button className=" nav-link active text-white fav-button " aria-current="page">
                                                <FaRegHeart className="heart-icon" />
                                            </button>
                                        </Link>
                                    </li>

                                    {isAuthenticated ? (
                                        <>
                                                <li className="nav-item user-menu">
                                                <Link to="/my-bookings">
                                                <i class="fa-regular fa-calendar "style={{ fontSize: "2.2rem" }}></i>

                                                </Link>
                                            </li>
                                    
                                        <li className="nav-item user-menu">
                                       <i class="fa-solid fa-circle-user "style={{ fontSize: "2.2rem" }}></i>
                                            <div className="dropdown">
                                                <Link to="/profilePage">Profile</Link>
                                                <button onClick={handleLogout}>Logout</button>
                                            </div>
                                        </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="nav-item">
                                                <button
                                                    className="nav-link active text-white"
                                                    onClick={() => setOpen(true)}
                                                >
                                                    Login
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    className="nav-link active text-white"
                                                    onClick={() => {
                                                        console.log("Sign up clicked");
                                                        setropen(true);
                                                        setOpen(true)
                                                    }}
                                                >
                                                    Sign up
                                                </button>
                                            </li>
                                        </>
                                    )}
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
                                <Link className="nav-link active text-white" aria-current="page" to="/contactPage">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header >
            <Login open={open} setOpen={setOpen} ropen={ropen} setropen={setropen} />
        </>

    )
}

export default Header
