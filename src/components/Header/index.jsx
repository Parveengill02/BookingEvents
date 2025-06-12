import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomModal from '../Modal'
import logo from '/images/lo.png'
import Login from '../loginContainer'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { User } from "lucide-react";
import axios from 'axios'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


// In your search handler
try {
  const res = await axios.get(`/api/global-search?query=${searchInput}`);
  if (res.data && res.data.id) {
    navigate(`/Venbook/${res.data.id}`);
  }
} catch (err) {
    if (err.response && err.response.status === 404) {
        toast.error("No vendor found with that name.");
      } else {
        toast.error("Search failed. Please try again.");
      }
}

function Header() {
    const [open, setOpen] = useState(false)
    const [ropen, setropen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const token = localStorage.getItem("acess_token");
    const userDeatils = JSON.parse(localStorage.getItem("user_details"));
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
  
//GLOBAL search
const [searchInput, setSearchInput] = useState('');


const [searchType, setSearchType] = useState('vendor'); // default

const handleSearch = async () => {
  if (!searchInput.trim()) return;

  try {
    const res = await axios.get(`http://localhost:9000/api/user/global-search`, {
      params: { query: searchInput, type: searchType }
    });

    const { id, type } = res.data;

    if (type === "vendor") {
      navigate(`/Venbook/${id}`);
    } else if (type === "venue") {
      navigate(`/booking/${id}`);
    }
  } catch (err) {
    if (err.response?.status === 404) {
      toast.error(`No ${searchType} found`);
    } else {
      console.error('Search failed:', err.message);
      toast.error('Search failed');
    }
  }
};
  


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
                                        <Link className="nav-link active text-white " aria-current="page" to="/venues">Venues</Link>
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
        placeholder="Search for a vendor"
        className="search-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)} // Update search input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(); // Trigger search when Enter is pressed
          }
        }}
      />
     



                                <div className="search-select-container">
                                <select
  className="search-select"
  value={searchType}
  onChange={(e) => setSearchType(e.target.value)}
>
  <option value="venue">Venues</option>
  <option value="vendor">Vendors</option>
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
  <Link to="/bookings">
    <i className="fa-solid fa-calendar-check" style={{ fontSize: "1.5rem" }}></i>
  </Link>
</li>

<li className="nav-item user-menu">
  <i className="fa-solid fa-user-gear" style={{ fontSize: "1.5rem" }}></i>
  <div className="dropdown">
    <Link to="/profilePage">Profile</Link>
    <button onClick={handleLogout}>Logout</button>
  </div>
</li>

{userDeatils?.role_id === 1 && (
  <li className="nav-item user-menu">
    <Link to="/admin">
      <i className="fas fa-user-shield" style={{ fontSize: "1.5rem" }}></i>
      <h6 style={{fontSize:"13px"}}>Admin</h6>
    </Link>
  </li>
)}

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
                                {/* <Link className="nav-link active text-white" aria-current="page" to="/event/More Celebrations">More Celebrations</Link> */}
                                <Link className="nav-link active text-white" aria-current="page" to="/contactPage">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header >
            <Login open={open} setOpen={setOpen} ropen={ropen} setropen={setropen} />
            <ToastContainer position="top-center" autoClose={3000} />
        </>

    )
}

export default Header
