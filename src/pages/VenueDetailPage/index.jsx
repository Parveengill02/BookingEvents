import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Accordion } from "react-bootstrap";

function VenueDetailPage() {
  const [likedVenues, setLikedVenues] = useState({});
  const [openAccordion, setOpenAccordion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleLike = (id) => {
    setLikedVenues((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const mockVenues = [
    {
      id: 1,
      name: "Hotel Taj Mahal Palace",
      address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
      details: "Spaces for 50-500 Guests | 3 Restaurants | 2 Bars | Sea View",
      image: ["/images/v1.jpg", "/images/v1a.png", "/images/v1b.avif", "/images/v1c.jpg", "/images/v1d.webp"],
      responseTime: "Avg response time 2-4 hrs",
    },
    {
      id: 2,
      name: "ITC Grand Central",
      address: "287, Dr Baba Saheb Ambedkar Rd, Parel, Mumbai, Maharashtra 400012, India",
      details: "Spaces for 100-1000 Guests | 4 Banquet Halls | Luxury Accommodations",
      image: ["/images/v2.jpg", "/images/v4b.jpg", "/images/v4a.jpg", "/images/v2c.avif", "/images/v4c.jpg"],
      responseTime: "Avg response time 3-5 hrs",
    },
    {
      id: 3,
      name: "The St. Regis Mumbai",
      address: "462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013, India",
      details: "Spaces for 50-1200 Guests | Rooftop Venues | Fine Dining",
      image: ["/images/v4.jpg", "/images/v2b.jpg", "/images/v2a.jpg", "/images/v2c.jpg", "/images/v2d.jpg"],
      responseTime: "Avg response time 1-3 hrs",
    },
    {
    id: 4,
    name: "JW Marriott Mumbai Juhu",
    address: "Juhu Tara Rd, Juhu, Mumbai, Maharashtra 400049, India",
    details: "Spaces for 20-800 Guests | Beachfront | 5 Restaurants",
    image: ["/images/v3.jpg","/images/v3a.jpg","/images/v3b.jpg","/images/v3c.jpg","/images/v3d.jpg",], 
    responseTime: "Avg response time 2-4 hrs",
  },
  {
    id: 5,
    name: "Trident Hotel Bandra Kurla",
    address: "C-56, G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India",
    details: "Spaces for 30-500 Guests | Conference Rooms | Premium Facilities",
    image: ["/images/v13.avif","/images/v13a.jpg","/images/v13b.jpg","/images/v13c.jpg",], 
    responseTime: "Avg response time 4-6 hrs",
  },
  {
    id: 6,
    name: "Four Seasons Hotel Mumbai",
    address: "1/136, Dr E Moses Rd, Worli, Mumbai, Maharashtra 400018, India",
    details: "Spaces for 40-700 Guests | Rooftop Bar | Modern Amenities",
    image: ["/images/v14.jpg","/images/v14a.jpg","/images/v14b.jpg","/images/v14c.jpg","/images/v14d.jpg",], 
    responseTime: "Avg response time 3-5 hrs",
  },
  {
    id: 7,
    name: "Sofitel Mumbai BKC",
    address: "C-57, G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India",
    details: "Spaces for 20-400 Guests | Luxury Interiors | 2 Restaurants",
    image: ["/images/s.webp","/images/s1.jpg","/images/s2.jpg","/images/s3.jpg","/images/s4.jpg",], 
    responseTime: "Avg response time 2-4 hrs",
  },
  {
    id: 8,
    name: "Grand Hyatt Mumbai",
    address: "Off Western Express Hwy, Santacruz East, Mumbai, Maharashtra 400055, India",
    details: "Spaces for 50-1500 Guests | Banquet Halls | Premium Services",
    image: ["/images/v18.jpg","/images/v18a.jpg","/images/v18b.jpg","/images/v18c.webp",], 
    responseTime: "Avg response time 3-6 hrs",
  },
  {
    id: 9,
    name: "The Oberoi Mumbai",
    address: "Nariman Point, Mumbai, Maharashtra 400021, India",
    details: "Spaces for 30-600 Guests | Sea View Rooms | Fine Dining",
    image: ["/images/v19.jpg","/images/v19a.jpg","/images/v19b.jpg","/images/v19c.jpg",], 
    responseTime: "Avg response time 1-3 hrs",
  },
  {
    id: 10,
    name: "Renaissance Mumbai Convention Centre Hotel",
    address: "2 & 3B, Near Chinmayanand Ashram, Powai, Mumbai, Maharashtra 400087, India",
    details: "Spaces for 100-2000 Guests | Lake View | Grand Banquets",
    image: ["/images/v20.jpg","/images/v20a.jpg","/images/v20b.jpg","/images/v20c.avif",], 
    responseTime: "Avg response time 4-6 hrs",
  },
    
  ];

  return (
    <div>
      <div className="filterpage">
        <h1>TOP MUMBAI WEDDING VENUES</h1>
        <div className="border"></div>
        <p>984 results near MUMBAI</p>

        {/* Search Box */}
        <div className="venue-search-container">
  <input type="text" placeholder="Search Venues..." className="venue-search-input" />
  <button className="venue-search-button">Search</button>
</div>


        <div className="container">
          <div className="row">
            {/* Sidebar (Filters in Accordion) */}
            <div className="col-md-4">
              <div className="Map">
                
                <h5>Find a venue</h5>
                <Accordion activeKey={openAccordion} onSelect={(e) => setOpenAccordion(e)}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Location</Accordion.Header>
                    <Accordion.Body>
                      {["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai"].map((city) => (
                        <div className="form-check" key={city}>
                          <input className="form-check-input" type="checkbox" id={city} />
                          <label className="form-check-label" htmlFor={city}>{city}</label>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body>
                      {["2000/person", "2500/person", "3000/person"].map((price) => (
                        <div className="form-check" key={price}>
                          <input className="form-check-input" type="checkbox" id={price} />
                          <label className="form-check-label" htmlFor={price}>{price}</label>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Guests</Accordion.Header>
                    <Accordion.Body>
                      {["Under 25", "25-50", "50-100", "100-150", "150-200", "250-500"].map((guest) => (
                        <div className="form-check" key={guest}>
                          <input className="form-check-input" type="checkbox" id={guest} />
                          <label className="form-check-label" htmlFor={guest}>{guest}</label>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            {/* Venue Listings */}
            <div className="col-md-8">
              <div className="Results">
                {mockVenues
                  .filter((venue) => venue.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((venue) => (
                    <div key={venue.id} className="container Vendorbox">
                      <div className="row">
                        {/* Image Slider */}
                        <div className="col-md-5">
                          <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={10} slidesPerView={1} navigation pagination={{ clickable: true }} loop>
                            {venue.image.map((image, index) => (
                              <SwiperSlide key={index}>
                                <img src={image} alt={`Slide ${index}`} className="w-full h-40 object-cover" />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>

                        {/* Venue Details */}
                        <div className="col-md-7">
                          <button className="fav-buttons" onClick={() => toggleLike(venue.id)}>
                            {likedVenues[venue.id] ? <FaHeart size={24} color="#ba0b0b" className="heart-icon" /> : <FaRegHeart size={24} color="gray" className="heart-icon" />}
                          </button>

                          <h3>{venue.name}</h3>
                          <p>{venue.details}</p>
                          <p>{venue.address}</p>
                          <p>{venue.responseTime}</p>

                          <Link to={`/booking/${venue.name}`}>
                            <button>VIEW DETAILS</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div>
  );
}

export default VenueDetailPage;
