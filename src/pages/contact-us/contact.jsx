import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter,FaPinterest } from "react-icons/fa";

export default function ContactUs() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
    event.target.reset();
  };

  return (
    <div className="contact-page-container">
      <div className="contact-page-box">
        <h2 className="contact-page-title">"Reach Out & Let’s Make Magic Happen!"</h2>
        <div className="contact-page-grid">
          <div>
            <h3 className="contact-page-subtitle">Contact Information</h3>
            <p className="contact-page-text">"Are you a vendor looking to showcase your services or a venue owner wanting to list your space? Or do you have questions about planning your next event? Get in touch with us today!"







</p>
            <div className="contact-page-info">
              <p className="contact-page-item">📍 Gill's Event Elegance,Sector-63, Mohali</p>
              <p className="contact-page-item">📞 +91 6283649118</p>
              <p className="contact-page-item">✉️ eventelgance02@gmail.com</p>
            </div>
            <div className="contact-page-social">
            <a href="#" className="contact-page-icon"><FaFacebookF /></a>
              <a href="#" className="contact-page-icon"><FaInstagram /></a>
              <a href="#" className="contact-page-icon"><FaTwitter /></a>
              <a href="#" className="contact-page-icon"><FaPinterest /></a>
            </div>
          </div>
          <div>
            <h3 className="contact-page-subtitle">Send Us a Message</h3>
            <form className="contact-page-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="contact-page-btn">Send Message</button>
              {messageSent && <p className="success-message">Message sent! We will reach out to you soon.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
