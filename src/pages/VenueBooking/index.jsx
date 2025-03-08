import React, { useState } from 'react'
import Booking from './booking';



const data = [
  {
    heading: "Hotels",
    categories: [
      "Accessibility for differently-abled",
      "Baby-sitter on premises",
      "Car Rental",
      "Concierge",
      "Currency Exchange",
      "Doctor on Call",
      "Earth check certified",
      "EV charging stations",
      "Evening entertainment",
      "Indoor banquet spaces",
      "IPTV",
      "Khazana for shopping",
      "Laundry and Drycleaning",
      "Library",
      "Limousine transfers available on charge basis",
      "Multi-lingual Staff",
      "Onsite Shopping",
      "Outdoor banquet spaces",
      "Shuttle service to/from city centre",
      "Smoking Lounge",
      "Standard & premium Wi-Fi",
      "Taj Club lounge",
      "The Chambers Lounge",
      "Travel Desk",
      "Vehicle parking",
      "24/7 business centre"
    ]
  }, {
    heading: "Wellness",
    categories: [
      "Accessibility for differently-abled",
      "Baby-sitter on premises",
      "Car Rental",
      "Concierge",
      "Currency Exchange",
      "Doctor on Call",
      "Earth check certified",
      "EV charging stations",
      "Evening entertainment",
      "Indoor banquet spaces",
      "IPTV",
      "Khazana for shopping",
      "Laundry and Drycleaning",
      "Library",
      "Limousine transfers available on charge basis",
      "Multi-lingual Staff",
      "Onsite Shopping",
      "Outdoor banquet spaces",
      "Shuttle service to/from city centre",
      "Smoking Lounge",
      "Standard & premium Wi-Fi",
      "Taj Club lounge",
      "The Chambers Lounge",
      "Travel Desk",
      "Vehicle parking",
      "24/7 business centre"
    ]
  }, {
    heading: "Dining",
    categories: ["Wasabi by Morimoto (Japanese)",
      "Golden Dragon (Sichuan & Cantonese)",
      "Souk (Mediterranean)",
      "Shamiana (24-hour international dining)",
    ]
  },
  {
    heading: "Rooms",
    categories: [
      "Butler service",
      "Interconnecting rooms (subject to availability)",
      "Mini-Bar",
      "Sea-facing rooms/ City View Rooms",
      "Smoking and non-smoking rooms (subject to availability)",
      "Taj Club rooms",
      "24/7 in-room dining",
      "543 Rooms & 54 Suites",
    ]
  }
]
const images = [
  { src: "/images/taj1.jpg", alt: "First Image" },
  { src: "/images/taj2.jpg", alt: "First Image" },
  { src: "/images/taj3.jpg", alt: "First Image" },
  { src: "/images/taj4.jpg", alt: "First Image" },
  { src: "/images/taj5.jpg", alt: "First Image" },
  { src: "/images/taj6.jpg", alt: "First Image" },
  { src: "/images/taj7.jpg", alt: "First Image" },
  { src: "/images/taj8.jpg", alt: "Second Image" },
  { src: "/images/taj9.jpg", alt: "Third Image" },
];


function VenueBooking() {
   const [Bopen, setBopen] = useState(false)
  const [showMore, setShowMore] = useState(null);
  console.log(showMore, "checkblue")



  return (
    <div>
      <div className='Bookinghead'>
        <h1>
          Hotel Taj Mahal Palace
        </h1>
      </div>
      <div className='venue-container' >
        <img src="/images/tajphoto.jpg"/>
        {/* <video className='venue-video' autoPlay muted loop>
          <source src="#" type="video/mp4" />
        </video> */}
      </div>
      <div className="venue-details">
        <h2>The Taj Mahal Palace, Mumbai</h2>
        <p>⭐ 4.7 (31,926 users)</p>
        <p>📍 Apollo Bandar, Colaba, Mumbai, Maharashtra</p>

      </div>
      <div className="venue-card">
        <h2 className='venuehighlights'>Venue Highlights</h2>
        <div class="highlight-border"></div>
        <div className='container bookform'>
          <div class="row">
            <div className='venuegrid col-md-6'>
              <div className="highlight  ">
                <span className="icon">💰</span>
                <h4>PER PLATE</h4>
                <p>₹3000 - ₹4000</p>
              </div>

              <div className="highlight">
                <span className="icon">🪑</span>
                <h4>SEATING</h4>
                <p>60 - 650</p>
              </div>

              <div className="highlight">
                <span className="icon">🛏️</span>
                <h4>ROOMS</h4>
                <p>10 - 538</p>
              </div>

              <div className="highlight">
                <span className="icon">🅿️</span>
                <h4>PARKING</h4>
                <p>Approx 100</p>
              </div>

              <div className="highlight">
                <span className="icon">🏷️</span>
                <h4>PER DAY</h4>
                <p>₹3000 - ₹3500</p>
              </div>
            </div>



            {/* Unlock Best Price Form */}
            <div className="col-md-6 ">
              <div className='form-card'>
                <div className='text-center'>
                  <h3 >Unlock Best Price for this Venue</h3>
                </div>
                <form>
                  <div className='mt-4'>
                    <label>
                      <p>Name</p>
                    </label>
                    <input type="text" placeholder="Enter your name" />


                  </div>


                  <div className='mt-4'>
                    <label >
                      <p>Phone Number</p></label>
                    <div className='phone-input'>
                      <span>+91</span>

                      <input type="tel" placeholder="Enter phone number" />
                    </div>



                  </div>

                  <p className='mt-4'>We will send an OTP to verify your number</p>
                 <button type="button" onClick={() => setBopen(true)}>BOOK VENUE</button>

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="facilities">
        <h2 className="title">FACILITIES</h2>
        <div className='facility-border'></div>
        <div className="facilities-grid">
          {data.map((item, index) => (
            <div key={index} className="facility-card">

              <h3 className="facility-title">{item.heading}</h3>
              <ul className="facility-list">
                {(showMore === index ? item.categories : item.categories.slice(0, 6)).map((item, index) => (
                  <li key={index} className="facility-item">{item}</li>
                ))}
              </ul>
              {showMore !== index ? (
                <p className='showMore'
                  onClick={() => setShowMore(index)}
                  
                >
                  Show more...
                </p>
              ) : (
                <p
                  onClick={() => setShowMore(null)}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  Show less
                </p>
              )
              }
            </div>
          ))}
        </div>
      </div>
      <div className="Gallery">
        <h2 className="title">GALLERY</h2>
        <div className='facility-border'></div>
        
     <div className='Scrollable-gallery container'>{images.map((image, index) => (
  <img key={index} src={image.src} alt={image.alt} />
))}</div> 

  </div>
  <Booking Bopen={Bopen} setBopen={setBopen} />

  </div>


  )
}

export default VenueBooking

