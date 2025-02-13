import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CustomModal from '../Modal'

function Header() {
    const [open, setOpen] = useState(false)
    const[ropen,setRopen] = useState(false)
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("Email :", email);
        console.log("Password :", password);

    }
    return (
        <>
            <header className='header'>

                <div className="vlogo">

                    <img src="images/lo.png" alt="image" />
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
                                        <a className="nav-link active text-white " aria-current="page" href="#">Ideas</a>
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
                                <a className="nav-link active text-white" aria-current="page" href="#">Wedding</a>
                                <a className="nav-link active text-white" aria-current="page" href="#">Birthday Party</a>
                                <a className="nav-link active text-white" aria-current="page" href="#">Baby Showers</a>
                                <a className="nav-link active text-white" aria-current="page" href="#">Corporate Events</a>
                                <a className="nav-link active text-white" aria-current="page" href="#">More Celebrations</a>
                                <a className="nav-link active text-white" aria-current="page" href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header >
            <CustomModal open={open} setOpen={setOpen} >
                <div className="login-container">
                    <h2>LOG IN</h2>
                    
                    <form onSubmit={handlesubmit} className='container'>
                        <p>Don't have an account? <a href="#" style={{ color: 'burlywood' }}>Sign Up</a></p>
                        <button className="social-button-facebook">
                            <img src="images/icons8-facebook-logo-48.png" alt="Facebook" style={{ height: '29px' }} />
                            CONTINUE WITH FACEBOOK
                        </button><br />
                        <button className="social-button-google">
                            <img src="images/icons8-google-logo-48.png" alt="Google" style={{ height: '25px' }} />
                            CONTINUE WITH GOOGLE
                        </button><br />
                        <input type="email" className="inputbox" placeholder="Email" onChange={(e) => setemail(e.target.value)} required /><br />
                        <input type="password" className="inputbox" placeholder="Password" onChange={(e) => setpassword(e.target.value)} required /><br />
                        <button className="primary-button">LOG IN</button><br />
                        <a href="#" style={{ color: 'burlywood' }}>Forgot Password?</a>
                    </form>
                </div>
            </CustomModal>
            <CustomModal open={ropen} setOpen={setRopen}>
            <div className="login-container">
                    <h2>sihnup</h2>
                    
                    <form onSubmit={handlesubmit} className='container'>
                        <p>Don't have an account? <a href="#" style={{ color: 'burlywood' }}>Sign Up</a></p>
                        <button className="social-button-facebook">
                            <img src="pics/icons8-facebook-logo-48.png" alt="Facebook" style={{ height: '29px' }} />
                            CONTINUE WITH FACEBOOK
                        </button><br />
                        <button className="social-button-google">
                            <img src="pics/icons8-google-logo-48.png" alt="Google" style={{ height: '25px' }} />
                            CONTINUE WITH GOOGLE
                        </button><br />
                        <input type="email" className="inputbox" placeholder="Email" onChange={(e) => setemail(e.target.value)} required /><br />
                        <input type="password" className="inputbox" placeholder="Password" onChange={(e) => setpassword(e.target.value)} required /><br />
                        <button className="primary-button">LOG IN</button><br />
                        <a href="#" style={{ color: 'burlywood' }}>Forgot Password?</a>
                    </form>
         </div>
            </CustomModal>
        </>

    )
}

export default Header
