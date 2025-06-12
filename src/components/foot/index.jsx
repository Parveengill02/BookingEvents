import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import { Link } from "react-router-dom";

function Footer() {
  console.log('Footer is being rendered!'); // Check if it's rendering

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the email (you can add more sophisticated validation)
    if (email) {
      // Show toast notification
      toast.success("Email has been submitted successfully!");

      // You can also reset the form if necessary
      setEmail("");
    } else {
      // Show error toast if no email is entered
      toast.error("Please enter a valid email.");
    }
  };

  return (
    <div>
      <div className="footer">
        <div className="foot1">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h6>Get the Latest Trends</h6>
                <p>Our team’s top picks and more straight to your inbox.</p>
                <form className="email1" onSubmit={handleSubmit}>
                  <div className="mb-3 email">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
          <div className="foot-img">
            {/* Links to social media pages */}
            <a href="https://www.facebook.com/parveen_gill02" className="contact-page-icon" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/Parveen" className="contact-page-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/yourpage" className="contact-page-icon" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.pinterest.com/yourpage" className="contact-page-icon" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      <div className="end">
  <div className="row">
    <div className="col-md-4">
      <h6>Get Started</h6>
      <Link to="/venues">Find Venues</Link><br />
      <Link to="/vendors">Find Vendors</Link><br />
      <Link to="/PageIdea">Find Ideas</Link>
    </div>
    <div className="col-md-4">
      <h6>Browse by Event</h6>
      <Link to="/event/Wedding">Wedding</Link><br />
      <Link to="/event/Birthday Party">Birthday Party</Link><br />
      <Link to="/event/Baby Showers">Baby Showers</Link><br />
      <Link to="/event/Corporate Events">Corporate Events</Link>
    </div>
    <div className="col-md-4">
      <h6>The Company</h6>
      <Link to="/aboutus">About Us</Link><br />

      <Link to="/contactPage">Contact Gill's Event Elegance</Link><br />
      
    </div>
  </div>
</div>

      <div className="endbanner">
  
    
      <Link to="/privacy-policy">Privacy Policy</Link>
<Link to="/terms-of-service">Terms of Service</Link>

 <p>© Gill's Event Elegance 2025</p>
  
</div>





      {/* Toast Container (for displaying notifications) */}
      <ToastContainer />
    </div>
  );
}

export default Footer;
