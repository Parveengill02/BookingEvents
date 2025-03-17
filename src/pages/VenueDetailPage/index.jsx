import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function VenueDetailPage() {
  const [likedVenues, setLikedVenues] = useState({});

  // Toggle like state for a specific venue
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
        <p>984 results near MUMBAI</p>

        {/* Filters Section */}
        <div className="filterbox">
          <input className="citybox" type="text" placeholder="Mumbai" />
          <select className="Price">
            <option value="">Price</option>
            <option value="">2000/person</option>
            <option value="">2500/person</option>
            <option value="">3000/person</option>
            <option value="">3500/person</option>
          </select>
          <select className="Guests">
            <option value="">Guests</option>
            <option value="">Under 25</option>
            <option value="">25-50</option>
            <option value="">50-100</option>
            <option value="">100-150</option>
            <option value="">150-200</option>
            <option value="">200-260</option>
            <option value="">250-500</option>
            <option value="">500-1000</option>
            <option value="">1000+</option>
          </select>
          <select className="VTYPES">
            <option value="">Venue Type</option>
            <option value="">Restaurant</option>
            <option value="">Bar</option>
            <option value="">Outdoor</option>
            <option value="">Barn</option>
            <option value="">Country Club</option>
            <option value="">Retail Space</option>
          </select>
          <select className="EventType">
            <option value="">Event Type</option>
            <option value="">Wedding</option>
            <option value="">Conference</option>
            <option value="">Birthday</option>
            <option value="">Engagement</option>
          </select>
          <button className="filterbtn">
            <img src="/images/filterss.png" alt="Filter Icon" />
            <h6>Filters</h6>
          </button>
        </div>

        {/* Venue Listings */}
        <div className="container">
          <div className="row">
            {/* Sidebar (if needed) */}
            <div className="col-md-4">
              <div className="Map">
                <h5>Find a venue</h5>
              </div>
            </div>

            {/* Venue Results */}
            <div className="col-md-8">
              <div className="Results">
                {mockVenues.map((venue) => (
                  <div key={venue.id} className="container Vendorbox">
                    <div className="row">
                      {/* Image Slider */}
                      <div className="col-md-5">
                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          spaceBetween={10}
                          slidesPerView={1}
                          navigation
                          pagination={{ clickable: true }}
                          loop
                          className="h-40"
                        >
                          {venue.image.map((image, index) => (
                            <SwiperSlide key={index}>
                              <img src={image} alt={`Slide ${index}`} className="w-full h-40 object-cover" />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>

                      {/* Venue Details */}
                      <div className="col-md-7">
                        {/* Heart Button (Favorite Toggle) */}
                        <button className="fav-buttons" onClick={() => toggleLike(venue.id)}>
                          {likedVenues[venue.id] ? (
                            <FaHeart size={24} color="#ba0b0b" className="heart-icon" />
                          ) : (
                            <FaRegHeart size={24} color="gray" className="heart-icon" />
                          )}
                        </button>

                        <h3>{venue.name}</h3>
                        <p>{venue.details}</p>
                        <p>{venue.address}</p>
                        <p>{venue.responseTime}</p>

                        {/* View Details Button */}
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
