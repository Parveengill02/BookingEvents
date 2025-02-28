import React, { useState } from 'react'
import Header from '../../components/Header';


function Login() {
    const[ email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const handlesubmit=(e)=>{
      e.preventDefault();
      console.log("Email :",email);
      console.log("Password :",password);

    }
    return (
      <div>
        <div className="login-container">
          <h2>LOG IN</h2>
          <span className="close">x</span>
          <form onSubmit={handlesubmit}>
            <p>Don't have an account? <a href="#" style={{ color: 'burlywood' }}>Sign Up</a></p>
            <button className="social-button-facebook">
              <img src="pics/icons8-facebook-logo-48.png" alt="Facebook" style={{ height: '29px' }} />
              CONTINUE WITH FACEBOOK
            </button><br />
            <button className="social-button-google">
              <img src="pics/icons8-google-logo-48.png" alt="Google" style={{ height: '25px' }} />
              CONTINUE WITH GOOGLE
            </button><br />
            <input type="email" className="inputbox" placeholder="Email" onChange={(e)=>setemail(e.target.value)}required /><br />
            <input type="password" className="inputbox" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} required /><br />
            <button className="primary-button">LOG IN</button><br />
            <a href="#" style={{ color: 'burlywood' }}>Forgot Password?</a>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;