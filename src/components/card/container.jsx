import React from 'react'
import { useState } from 'react';
import CustomModal from '../Modal';



function Container() {
     const[ropen,setRopen] = useState(false)
    const [open, setOpen] = useState(false);
    const handlesubmit = (e) => {
      e.preventDefault()};
  return (
    <div>
      <div className="contain">
        <h4>Plan Your Dream Event</h4>
        <p>Weddings, galas, birthdays, and more, PartySlate helps you find venues, vendors, and ideas you can't find anywhere else.</p>
        <button  onClick={() => setOpen(true)}>Start Planning</button>
      </div>
      <CustomModal open={open} setOpen={setOpen} >
                <div className="login-container">
                    <h2>LOG IN</h2>
                    
                    <form onSubmit={handlesubmit} className='container'>
                        <p>Don't have an account? <button style={{ color: 'burlywood' }} onClick={() => setRopen(true)}>Sign Up</button></p>
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
    </div>
  )
}

export default Container
