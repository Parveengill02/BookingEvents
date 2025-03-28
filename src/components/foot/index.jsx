import React from 'react';
import facebook from "/images/icons8-facebook-50.png" 
import instagram from "/images/icons8-instagram-50.png"
import twitter from "/images/icons8-twitter-bird-24.png"
import pinterest from "/images/icons8-pinterest-26.png"
import { FaFacebookF, FaInstagram, FaTwitter,FaPinterest } from "react-icons/fa";
function Footer() {
  console.log('Footer is being rendered!');  // Check if it's rendering

  return (
    <div>
      <div className="footer">
        <div className="foot1">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h6>Get the Latest Trends</h6>
                <p>Our team’s top picks and more straight to your inbox.</p>
                <form className="email1">
                  <div className="mb-3 email">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text" style={{ color: 'white' }}>
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      marginLeft: '2px',
                      marginTop: '31px',
                      height: '38px',
                      backgroundColor: 'burlywood',
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>  
          </div>
        </div>
        <div className="foot2">
          <h6>Follow Us</h6>
          <div className='foot-img'>
          <a href="#" className="contact-page-icon"><FaFacebookF /></a>
              <a href="#" className="contact-page-icon"><FaInstagram /></a>
              <a href="#" className="contact-page-icon"><FaTwitter /></a>
              <a href="#" className="contact-page-icon"><FaPinterest /></a>
          </div>
         
        </div>
      </div>
  
    
    <div class="end">
  <div class="row">
    <div class="col-md-4">
      <h6>Get Started</h6>
      <a href="#">Find Venues</a><br/>
      <a href="#">Find Vendors</a><br/>
      <a href="#">Find Ideas</a>

    </div>
    <div class="col-md-4">
    <h6>Browse by Event</h6>
      <a href="#">Weddings</a><br/>
      <a href="#">Birthdays</a><br/>
      <a href="#">Baby Showers</a><br/>
      <a href="#">Corporate Events</a>

    </div>
    <div class="col-md-4">
    <h6>The Company</h6>
      <a href="#">About us</a><br/>
      <a href="#">Contact Gill's Event Elegance</a><br/>
      <a href="#">Careers</a>

    </div>
  </div>
</div>
<div className="endbanner">
  
    
  <a>Privacy Policy</a>
  <a>Terms of Service</a>
 <p>© Gill's Event Elegance 2025</p>
  
</div>

    </div>

  );
}

export default Footer;
