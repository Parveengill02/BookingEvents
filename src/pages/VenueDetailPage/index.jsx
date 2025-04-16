import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, useSearchParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { MEDIA_URL } from "../../components/config/endpoints";
import Pagination from 'react-bootstrap/Pagination';
function VenueDetailPage() {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const [venueList, setVenueList] = useState([]);
  const [totalPages, setTotalPages] = useState(1)
  const [likedVenues, setLikedVenues] = useState({});
  const [openAccordion, setOpenAccordion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [searchParams] = useSearchParams();
  const venueType = searchParams.get("type");
  const venueLocation = searchParams.get("location");

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedGuests, setSelectedGuests] = useState('');
  const [selectedVenueType, setSelectedVenueType] = useState('');
  //   const [venueList, setVenueList] = useState([])
  //   const [page,setPage]=useState(1);
  //   const [rows,setRows]=useState(10);
  // // let token = localStorage('access_token',)
  const token = localStorage.getItem("acess_token");
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const filters = {
          location: selectedLocations.join(","),
          priceRange: selectedPriceRange,
          guests: selectedGuests,
          venueType: selectedVenueType || venueType,
        };

        const res = await axios.get(
          `http://localhost:9000/api/user/allvenues?page=${page}&limit=${rows}`,
          { params: filters }
        );

        setVenueList(res?.data?.data?.venues);
        setTotalPages(res.data?.data?.totalPages);
      } catch (err) {
        console.error("Failed to fetch venues:", err);
      }
    };

    fetchVenues();
  }, [page, selectedLocations, selectedCategory, selectedPriceRange, selectedGuests, selectedVenueType]);
  useEffect(() => {
    if (venueType) {
      setSelectedVenueType(venueType)
    }
  }, [venueType, venueLocation])

  console.log(totalPages, "totalPAgesssss-->x")

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/user/getFav", {
          headers: {
            acess_token: token,
          },
        });

        const favs = response.data.data.favorites || [];

        const venueLikes = {};
        favs.forEach((fav) => {
          if (fav.item_type === "venue") {
            venueLikes[fav.item_id] = true;
          }
        });

        setLikedVenues(venueLikes);
      } catch (err) {
        console.error("Failed to load favorites", err.response?.data || err);
      }
    };

    if (token) {
      fetchFavorites();
    }
  }, [token]);

  // const mockVenues = [
  //   {
  //     id: 1,
  //     name: "Hotel Taj Mahal Palace",
  //     address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
  //     details: "Spaces for 50-500 Guests | 3 Restaurants | 2 Bars | Sea View",
  //     image: ["/images/v1.jpg", "/images/v1a.png", "/images/v1b.avif", "/images/v1c.jpg", "/images/v1d.webp"],
  //     responseTime: "Avg response time 2-4 hrs",
  //   },
  //   {
  //     id: 2,
  //     name: "ITC Grand Central",
  //     address: "287, Dr Baba Saheb Ambedkar Rd, Parel, Mumbai, Maharashtra 400012, India",
  //     details: "Spaces for 100-1000 Guests | 4 Banquet Halls | Luxury Accommodations",
  //     image: ["/images/v2.jpg", "/images/v4b.jpg", "/images/v4a.jpg", "/images/v2c.avif", "/images/v4c.jpg"],
  //     responseTime: "Avg response time 3-5 hrs",
  //   },
  //   {
  //     id: 3,
  //     name: "The St. Regis Mumbai",
  //     address: "462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013, India",
  //     details: "Spaces for 50-1200 Guests | Rooftop Venues | Fine Dining",
  //     image: ["/images/v4.jpg", "/images/v2b.jpg", "/images/v2a.jpg", "/images/v2c.jpg", "/images/v2d.jpg"],
  //     responseTime: "Avg response time 1-3 hrs",
  //   },
  //   {
  //     id: 4,
  //     name: "JW Marriott Mumbai Juhu",
  //     address: "Juhu Tara Rd, Juhu, Mumbai, Maharashtra 400049, India",
  //     details: "Spaces for 20-800 Guests | Beachfront | 5 Restaurants",
  //     image: ["/images/v3.jpg", "/images/v3a.jpg", "/images/v3b.jpg", "/images/v3c.jpg", "/images/v3d.jpg",],
  //     responseTime: "Avg response time 2-4 hrs",
  //   },
  //   {
  //     id: 5,
  //     name: "Trident Hotel Bandra Kurla",
  //     address: "C-56, G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India",
  //     details: "Spaces for 30-500 Guests | Conference Rooms | Premium Facilities",
  //     image: ["/images/v13.avif", "/images/v13a.jpg", "/images/v13b.jpg", "/images/v13c.jpg",],
  //     responseTime: "Avg response time 4-6 hrs",
  //   },
  //   {
  //     id: 6,
  //     name: "Four Seasons Hotel Mumbai",
  //     address: "1/136, Dr E Moses Rd, Worli, Mumbai, Maharashtra 400018, India",
  //     details: "Spaces for 40-700 Guests | Rooftop Bar | Modern Amenities",
  //     image: ["/images/v14.jpg", "/images/v14a.jpg", "/images/v14b.jpg", "/images/v14c.jpg", "/images/v14d.jpg",],
  //     responseTime: "Avg response time 3-5 hrs",
  //   },
  //   {
  //     id: 7,
  //     name: "Sofitel Mumbai BKC",
  //     address: "C-57, G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India",
  //     details: "Spaces for 20-400 Guests | Luxury Interiors | 2 Restaurants",
  //     image: ["/images/s.webp", "/images/s1.jpg", "/images/s2.jpg", "/images/s3.jpg", "/images/s4.jpg",],
  //     responseTime: "Avg response time 2-4 hrs",
  //   },
  //   {
  //     id: 8,
  //     name: "Grand Hyatt Mumbai",
  //     address: "Off Western Express Hwy, Santacruz East, Mumbai, Maharashtra 400055, India",
  //     details: "Spaces for 50-1500 Guests | Banquet Halls | Premium Services",
  //     image: ["/images/v18.jpg", "/images/v18a.jpg", "/images/v18b.jpg", "/images/v18c.webp",],
  //     responseTime: "Avg response time 3-6 hrs",
  //   },
  //   {
  //     id: 9,
  //     name: "The Oberoi Mumbai",
  //     address: "Nariman Point, Mumbai, Maharashtra 400021, India",
  //     details: "Spaces for 30-600 Guests | Sea View Rooms | Fine Dining",
  //     image: ["/images/v19.jpg", "/images/v19a.jpg", "/images/v19b.jpg", "/images/v19c.jpg",],
  //     responseTime: "Avg response time 1-3 hrs",
  //   },
  //   {
  //     id: 10,
  //     name: "Renaissance Mumbai Convention Centre Hotel",
  //     address: "2 & 3B, Near Chinmayanand Ashram, Powai, Mumbai, Maharashtra 400087, India",
  //     details: "Spaces for 100-2000 Guests | Lake View | Grand Banquets",
  //     image: ["/images/v20.jpg", "/images/v20a.jpg", "/images/v20b.jpg", "/images/v20c.avif",],
  //     responseTime: "Avg response time 4-6 hrs",
  //   },

  // ];


  const toggleLike = async (venue) => {
    const isLiked = likedVenues[venue.id];

    try {
      if (!isLiked) {
        // Add to favorites
        await axios.post(
          "http://localhost:9000/api/user/addFav",
          {
            item_id: venue.id,
            item_type: "venue",
            name: venue.name,
            image: venue.image[0],
          },
          {
            headers: {
              acess_token: token,
            },
          }
        );

        setLikedVenues((prev) => ({
          ...prev,
          [venue.id]: true,
        }));
      } else {
        // Confirm before removing from favorites
        const confirmed = window.confirm("Do you want to remove this item from favorites?");
        if (!confirmed) return;

        await axios.post(
          "http://localhost:9000/api/user/removeFav",
          {
            item_id: venue.id,
            item_type: "venue",
          },
          {
            headers: {
              acess_token: token,
            },
          }
        );

        setLikedVenues((prev) => ({
          ...prev,
          [venue.id]: false,
        }));
      }
    } catch (err) {
      console.error("Error toggling favorite:", err.response?.data || err);
    }
  };

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "location":
        setSelectedLocations(value);
        break;
      case "price":
        setSelectedPriceRange(value);
        break;
      case "guests":
        setSelectedGuests(value);
        break;
      case "venueType":
        setSelectedVenueType(value);
        break;
      default:
        break;
    }
  };
  const handlePageChange = (page) => {
    setPage(page)
  }

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
                  {/* Location Filter */}
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Location</Accordion.Header>
                    <Accordion.Body>
                      {["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai"].map((city) => (
                        <div className="form-check" key={city}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={city}
                            onChange={(e) => {
                              const newLocations = e.target.checked
                                ? [...selectedLocations, city]
                                : selectedLocations.filter((location) => location !== city);
                              handleFilterChange("location", newLocations);
                            }}
                          />
                          <label className="form-check-label" htmlFor={city}>
                            {city}
                          </label>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Price Range Filter */}
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body>
                      {["2000-5000", "5000-10000", "10000-20000"].map((price) => (
                        <div className="form-check" key={price}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={price}
                            onChange={(e) => {
                              handleFilterChange("price", e.target.checked ? price : "");
                            }}
                          />
                          <label className="form-check-label" htmlFor={price}>
                            {price}
                          </label>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Guest Capacity Filter */}
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Guests</Accordion.Header>
                    <Accordion.Body>
                      {["Under 25", "25-50", "50-100", "100-150", "150-200", "250-500"].map((guest) => (
                        <div className="form-check" key={guest}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={guest}
                            onChange={(e) => {
                              handleFilterChange("guests", e.target.checked ? guest : "");
                            }}
                          />
                          <label className="form-check-label" htmlFor={guest}>
                            {guest}
                          </label>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Venue Type Filter */}
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Venue Type</Accordion.Header>
                    <Accordion.Body>
                      {["Banquet", "Beachfront", "Hotel", "Outdoor"].map((type) => (
                        <div className="form-check" key={type}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={type}
                            defaultChecked={selectedVenueType === type ? true : false}
                            onChange={(e) => {
                              handleFilterChange("venueType", e.target.checked ? type : "");
                            }}
                          />
                          <label className="form-check-label" htmlFor={type}>
                            {type}
                          </label>
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
                {venueList
                  .filter((venue) => venue.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((venue) => (
                    <div key={venue.id} className="container Vendorbox">
                      <div className="row">
                        {/* Image Slider */}
                        <div className="col-md-5">
                          {/* <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={10} slidesPerView={1} navigation pagination={{ clickable: true }} loop>
                            {venue.image.map((image, index) => (
                              <SwiperSlide key={index}>
                                <img src={image} alt={`Slide ${index}`} className="w-full h-40 object-cover" />
                              </SwiperSlide>
                            ))}
                          </Swiper> */}
                          <img
                            src={`${MEDIA_URL}${venue.image}`}
                            alt={venue.name}
                          />



                        </div>

                        {/* Venue Details */}
                        <div className="col-md-7">
                          <button className="fav-buttons" onClick={() => toggleLike(venue)}>
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

                          <Link to={`/booking/${venue.id}`}>
                            <button>VIEW DETAILS</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div>
                <Pagination style={{ marginLeft: "310px" }}>
                  <Pagination.Prev />

                  {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === page}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}


                  <Pagination.Next />

                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueDetailPage;
