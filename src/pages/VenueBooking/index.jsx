import React, { useState, useEffect } from 'react'
import Booking from './booking';
import Login from '../../components/loginContainer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MEDIA_URL } from '../../components/config/endpoints';


function VenueBooking() {
  const [venueDetails, setVenueDetails] = useState({});
  const [facilities, setFacilitiesDetails] = useState({
    hotels: [],
    rooms: [],
    dining: [],
    wellness: []
  });
  const [gallery, setGallery] = useState([]);

  const token = localStorage.getItem("acess_token")
  const [Bopen, setBopen] = useState(false)
  const [showMore, setShowMore] = useState(null);
  const [open, setOpen] = useState(false);
  console.log(showMore, "checkblue")


  const { id } = useParams()

  console.log(id, "i am her id")

  const handleBookingClick = () => {
    if (token) {
      setBopen(true);
    } else {
      setOpen(true); // trigger login modal
    }
  }



  const getvenueDetails = async (id) => {
    try {
      console.log(id, "venuuer id")
      const result = await axios.get(`${'http://localhost:9000/api/user/single-venue-detail'}/${id}`)
      console.log(result.data, "resultttt")
      setVenueDetails({
        ...result.data.data,
        highlights: result.data.data.highlights?.[0] || {} // flatten the array to a single object
      });

      console.log(result.data.data.venue_facilities, "resultchecksdsdhererer")
      const rooms = result?.data?.data?.venue_facilities?.filter((e) => e.category === "Rooms")
      const dining = result?.data?.data?.venue_facilities?.filter((e) => e.category === "Dining")
      const wellness = result?.data?.data?.venue_facilities?.filter((e) => e.category === "Wellness")
      const hotels = result?.data?.data?.venue_facilities?.filter((e) => e.category === "Hotels")

      setFacilitiesDetails({ ...facilities, rooms: rooms, hotels: hotels, wellness: wellness, dining: dining })

      setGallery(result.data.data.venue_galleries || []);
    } catch (err) {
      console.log(err)
    }
  }
  console.log(gallery, "checkbenuerere")


  useEffect(() => {
    getvenueDetails(id)
  }, [id])

  useEffect(() => {
    if (!token) {
      setBopen(false); // Close booking if no token
    }
  }, [token]);



  console.log(venueDetails, "checikign venuerer detaisls")
  return (
    <div>
      <div className='Bookinghead'>
        <h1>
          {venueDetails?.name}
        </h1>
      </div>
      <div className='venue-container' >
        <img 
        className='w-100'
          src={`${MEDIA_URL}${venueDetails?.image}`}

        />
        {/* <video className='venue-video' autoPlay muted loop>
          <source src="#" type="video/mp4" />
        </video> */}
      </div>
      <div className="venue-details">
        <h2>{venueDetails?.name}</h2>
        <p>📍{venueDetails?.address}</p>

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
                <p>{venueDetails?.highlights?.per_plate || "N/A"}</p>
              </div>

              <div className="highlight">
                <span className="icon">🪑</span>
                <h4>SEATING</h4>
                <p>{venueDetails?.highlights?.sitting || "N/A"}</p>
              </div>

              <div className="highlight">
                <span className="icon">🛏️</span>
                <h4>ROOMS</h4>
                <p>{venueDetails?.highlights?.rooms || "N/A"}</p>
              </div>

              <div className="highlight">
                <span className="icon">🅿️</span>
                <h4>PARKING</h4>
                <p>{venueDetails?.highlights?.parking || "N/A"}</p>
              </div>

              <div className="highlight">
                <span className="icon">🏷️</span>
                <h4>PER DAY</h4>
                <p>{venueDetails?.highlights?.per_day || "N/A"}</p>
              </div>
            </div>



            {/* Unlock Best Price Form */}
            <div className="col-md-6 ">
              <div className='form-card'>
                <div className='text-center'>
                  <h3 >Unlock Best Price for this Venue</h3>
                </div>
                <p>
                  "Make your event unforgettable by booking the perfect venue! Whether it's a wedding, a birthday, or a corporate gathering, our venues offer the ideal setting for your special occasion. Simply click the button below to reserve your spot and start planning your dream event today. Let us help you create lasting memories!"
                </p>
                <button type="button" onClick={handleBookingClick}>BOOK VENUE</button>


              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="facilities">
        <h2 className="title">FACILITIES</h2>
        <div className='facility-border'></div>
        <div className="facilities-grid">
          {/* {data.map((item, index) => (
            <div key={index} className="facility-card">

              <h3 className="facility-title">Hotels</h3>
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
          ))} */}
         

<div className="facility-card">
  <h3 className="facility-title">Hotels</h3>
  <ul className="facility-list">
    {(showMore === "hotels" ? facilities.hotels : facilities.hotels?.slice(0, 6))?.map((item, index) => (
      <li key={index} className="facility-item">{item?.name}</li>
    ))}
  </ul>

  {facilities.hotels && facilities.hotels.length > 6 && (
    <p
      onClick={() =>
        setShowMore(showMore === "hotels" ? null : "hotels")
      }
      style={{
        color: showMore === "hotels" ? "red" : "burlywood",
        fontWeight: "500",
        cursor: "pointer",
        marginTop: "8px",
      }}
    >
      {showMore === "hotels" ? "Show less" : "Show more..."}
    </p>
  )}
</div>


<div className="facility-card">
  <h3 className="facility-title">Dining</h3>
  <ul className="facility-list">
    {(showMore === "dining" ? facilities.dining : facilities.dining?.slice(0, 6))?.map((item, index) => (
      <li key={index} className="facility-item">{item?.name}</li>
    ))}
  </ul>

  {facilities.dining && facilities.dining.length > 6 && (
    <p
      onClick={() =>
        setShowMore(showMore === "dining" ? null : "dining")
      }
      style={{
        color: showMore === "dining" ? "red" : "burlywood",
        fontWeight: "500",
        cursor: "pointer",
        marginTop: "8px",
      }}
    >
      {showMore === "dining" ? "Show less" : "Show more..."}
    </p>
  )}
</div>

<div className="facility-card">
  <h3 className="facility-title">Wellness</h3>
  <ul className="facility-list">
    {(showMore === "wellness" ? facilities.wellness : facilities.wellness?.slice(0, 6))?.map((item, index) => (
      <li key={index} className="facility-item">{item?.name}</li>
    ))}
  </ul>

  {facilities.wellness && facilities.wellness.length > 6 && (
    <p
      onClick={() =>
        setShowMore(showMore === "wellness" ? null : "wellness")
      }
      style={{
        color: showMore === "wellness" ? "red" : "burlywood",
        fontWeight: "500",
        cursor: "pointer",
        marginTop: "8px",
      }}
    >
      {showMore === "wellness" ? "Show less" : "Show more..."}
    </p>
  )}
</div>


<div className="facility-card">
  <h3 className="facility-title">Rooms</h3>
  <ul className="facility-list">
    {(showMore === "rooms" ? facilities.rooms : facilities.rooms?.slice(0, 6))?.map((item, index) => (
      <li key={index} className="facility-item">{item?.name}</li>
    ))}
  </ul>

  {facilities.rooms && facilities.rooms.length > 6 && (
  <p
    onClick={() =>
      setShowMore(showMore === "rooms" ? null : "rooms")
    }
    style={{
      color: showMore === "rooms" ? "red" : "burlywood",
      fontWeight: "500",
      cursor: "pointer",
      marginTop: "8px",
    }}
  >
    {showMore === "rooms" ? "Show less" : "Show more..."}
  </p>
)}
</div>


        </div>
      </div>
      <div className="Gallery">
        <h2 className="title">GALLERY</h2>
        <div className='facility-border'></div>

        <div className='Scrollable-gallery container'>{gallery.map((image, index) => (
          <img key={index} src={`http://localhost:9000/uploads/${image.image_url}`} alt={''} />
        ))}</div>

      </div>
      {token && <Booking Bopen={Bopen} setBopen={setBopen} />}
      <Login open={open} setOpen={setOpen} />
    </div >


  )
}

export default VenueBooking

