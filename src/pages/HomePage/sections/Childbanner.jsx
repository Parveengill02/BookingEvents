import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon

function Childbanner() {
  return (
    <div>
      <div className="parent">
        <div className="child">
          <h4>Book Tent Decoration, Banquet, Stage & Lighting Decoration</h4><br />
          <p>Don’t pay commission to anyone Book Directly with Gill's Event Elegance</p>

          <a 
            href="https://wa.me/916283649108?text=Hi%20Gill's%20Event%20Elegance%2C%20I%20would%20like%20to%20book%20your%20services." 
            className="book" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp style={{ marginRight: '8px', fontSize: '20px', color: 'white' }} />
            Chat with us
          </a>

          <div className="overlay2"></div>
        </div>
      </div>
    </div>
  )
}

export default Childbanner;
