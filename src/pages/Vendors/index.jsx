import React, { useState, useEffect } from 'react'
import { Accordion } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { MEDIA_URL } from "../../components/config/endpoints";
import Pagination from 'react-bootstrap/Pagination';
import VendorBooking from '../vendorbooking/vendorbook';
function Vendorpage() {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const [vendorList, setVendorList] = useState([]);
  const [totalPages, setTotalPages] = useState(1)
  const [likedVendors, setLikedVendors] = useState({});
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [searchParams] = useSearchParams();
  const vendorType = searchParams.get("type");

  const [selectedLocations, setSelectedLocations] = useState([]); // array of location strings
  const [selectedCategory, setSelectedCategory] = useState('');    // single string
  const [selectedPriceRange, setSelectedPriceRange] = useState(''); // like "0-50000"
  const [selectedEventType, setSelectedEventType] = useState('');
  const [selectedVendorType, setSelectedVendorType] = useState('');
  const token = localStorage.getItem("acess_token");

  const [openAccordion, setOpenAccordion] = useState(null);
  const allCities = [
    "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata",
    "Jaipur", "Pune", "Goa", "Kochi", "Ahmedabad", "Surat",
    "Lucknow", "Chandigarh", "Indore", "Ludhiana", "Bhopal", "Coimbatore",
    "Visakhapatnam", "Ranchi", "Jodhpur", "Agra", "Varanasi", "Rishikesh"
  ];

  const categories = [
    "All", "Event Planner", "Photographer", "Design & Floral",
    "Caterer", "Rentals", "Entertainment", "Music Bands",
    "Videographers", "Makeup Artists"
  ];
  const events = ["Wedding", "Birthday Party", "Baby Shower", "Corporate Events", "Holiday Parties", "Dinner Parties", "Anniversary Parties"];

  const priceRanges = [
    "0-20000", "20000-30000", "30000-40000", "40000-50000", "50000+"
  ];
  const [selected, setSelected] = useState("All");
  const [showMore, setShowMore] = useState(false);


  const handleLocationChange = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)  // Remove location if already selected
        : [...prev, location]  // Add location if not already selected
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };

  const handleEventTypeChange = (eventType) => {
    setSelectedEventType(eventType);
  };
  //fetch Vendors
  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/api/user/allvendors?page=${page}&limit=${rows}`);
        console.log("API full response:", res);
        let filtered = res?.data?.data?.vendor || [];

        // Apply filtering logic
        if (selectedLocations.length > 0) {
          filtered = filtered.filter((vendor) =>
            selectedLocations.some((loc) => vendor.location.toLowerCase().includes(loc.toLowerCase())) // Match location with selected
          );
        }

        if (selectedCategory.length > 0 && selectedCategory !== "All") {
          filtered = filtered.filter((vendor) =>
            vendor.category.toLowerCase().includes(selectedCategory.toLowerCase())
          );
        }
        if (selectedPriceRange) {
          const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
          filtered = filtered.filter((vendor) =>
            vendor.price >= minPrice && vendor.price <= maxPrice
          );
        }

        if (selectedEventType) {
          filtered = filtered.filter((vendor) =>
            vendor.eventType === selectedEventType
          );
        }
        // vendorType: selectedVendorType,
        setVendorList(filtered);
        setTotalPages(res.data?.data?.totalPages);
      } catch (err) {
        console.error("Failed to fetch vendors:", err);
      }
    };

    fetchVendors();
  }, [page, rows, selectedLocations, selectedCategory, selectedPriceRange, selectedEventType]);
  useEffect(() => {
    if (vendorType) {
      setSelectedCategory(vendorType)
    }
  }, [vendorType])


  // const vendors = [
  //   {
  //     id: 1,
  //     name: "Mgmakeovers",
  //     category: "Category: Event Planner - Specializing in bridal makeovers and wedding planning.",
  //     location: "Gurugram, Haryana",
  //     albums: "Albums: 1",
  //     image:"/images/d1.webp"
  //   },
  //   {
  //     id: 2,
  //     name: "Shaadi Saga",
  //     category: "Category: Event Planner - Helping you plan your dream wedding with top vendors.",
  //     location: "Mumbai, Maharashtra",
  //     albums: "Albums: 3",
  //     image:"/images/d2.webp"
  //   },
  //   {
  //     id: 3,
  //     name: "U&I FotoClics Studios",
  //     category: "Category: Photographer - Capturing your precious wedding moments beautifully.",
  //     location: "Gurugram, Haryana",
  //     albums: "Albums: 0",
  //     image:"/images/d3.jpg"
  //   },
  //   {
  //     id: 4,
  //     name: "Pixel Memories",
  //     category: "Category: Photographer - Experts in candid and cinematic wedding photography.",
  //     location: "Kolkata, West Bengal",
  //     albums: "Albums: 3",
  //     image:"/images/d4.jpg"
  //   },
  //   {
  //     id: 5,
  //     name: "Royal Feast",
  //     category: "Category: Caterer - Serving luxurious and delicious wedding feasts.",
  //     location: "Delhi, India",
  //     albums: "Albums: 4",
  //     image:"/images/d5.jpg"
  //   },
  //   {
  //     id: 6,
  //     name: "Tandoori Treats",
  //     category: "Category: Caterer - Specializing in authentic Indian and Mughlai cuisine.",
  //     location: "Lucknow, Uttar Pradesh",
  //     albums: "Albums: 5",
  //     image:"/images/d6.jpg"
  //   },
  //   {
  //     id: 7,
  //     name: "Aura Linens",
  //     category: "Category: Rentals - Providing premium decor rentals for weddings.",
  //     location: "New Delhi, Delhi",
  //     albums: "Albums: 0",
  //     image:"/images/d7.jpg"
  //   },
  //   {
  //     id: 8,
  //     name: "Ocean View Resorts",
  //     category: "Category: Venue Rental - Stunning beachfront venues for dream weddings.",
  //     location: "Goa, India",
  //     albums: "Albums: 5",
  //     image:"/images/d8.jpg"
  //   },
  //   {
  //     id: 9,
  //     name: "Bloom Weddings",
  //     category: "Category: Decor & Floral - Transforming venues with elegant floral decorations.",
  //     location: "Mumbai, Maharashtra",
  //     albums: "Albums: 3",
  //     image:"/images/d9.jpg"
  //   },
  //   {
  //     id: 10,
  //     name: "Bollywood Beats",
  //     category: "Category: Entertainment - Bringing energetic dance and music performances.",
  //     location: "Mumbai, Maharashtra",
  //     albums: "Albums: 4",
  //     image:"/images/d10.jpg"
  //   },
  //   {
  //     id: 11,
  //     name: "Glam Look Studio",
  //     category: "Category: Makeup Artist - Professional bridal and party makeup services.",
  //     location: "Delhi, India",
  //     albums: "Albums: 5",
  //     image:"/images/d11.jpg"
  //   },
  //   {
  //     id: 12,
  //     name: "Manish Malhotra Designs",
  //     category: "Category: Wedding Attire - Luxurious designer wedding outfits.",
  //     location: "Mumbai, Maharashtra",
  //     albums: "Albums: 5",
  //     image:"/images/d12.jpeg"
  //   },
  //   {
  //     id: 13,
  //     name: "Tanishq Jewels",
  //     category: "Category: Jewelry - Elegant and traditional wedding jewelry collections.",
  //     location: "Delhi, India",
  //     albums: "Albums: 5",
  //     image:"/images/d13.jpg"
  //   },
  //   {
  //     id: 14,
  //     name: "Royal Scrolls",
  //     category: "Category: Invitation Designer - Exclusive handcrafted wedding invitations.",
  //     location: "Delhi, India",
  //     albums: "Albums: 2",
  //     image:"/images/d14.jpg"
  //   },
  // ];

  //fetchLiked
  useEffect(() => {
    const fetchLikedVendors = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/user/getFav", {
          headers: {
            acess_token: token,
          },
        });

        const favs = res.data.data.favorites || [];

        const vendorLikes = {};
        favs.forEach((fav) => {
          if (fav.item_type === "venue") {
            vendorLikes[fav.item_id] = true;
          }
        });
        setLikedVendors(vendorLikes);
      } catch (err) {
        console.error("Error fetching liked vendors:", err.response?.data || err);
      }
    };

    if (token) {
      fetchLikedVendors();
    }
  }, [token]);
  const toggleLike = async (vendor) => {
    const isLiked = likedVendors[vendor.id];

    try {
      if (!isLiked) {
        // Add to favorites
        await axios.post(
          "http://localhost:9000/api/user/addFav",
          {
            item_id: vendor.id,
            item_type: "vendor",
            name: vendor.name,
            image: vendor.image,


          },
          {
            headers: {
              acess_token: token,
            },
          }
        );
      } else {
        // Remove from favorites
        await axios.post(
          "http://localhost:9000/api/user/removeFav",
          {
            item_id: vendor.id,
            item_type: "vendor",
          },
          {
            headers: {
              acess_token: token,
            },
          }
        );
      }

      setLikedVendors((prev) => ({
        ...prev,
        [vendor.id]: !isLiked,
      }));
    } catch (err) {
      console.error("Error toggling favorite:", err.response?.data || err);
    }
  };

  const handlePageChange = (page) => {
    setPage(page)
  }

  const clearFilters = () => {
    setSelectedLocations([]);
    setSelectedCategory('');
    setSelectedPriceRange('');
    setSelectedEventType('');

  };
  return (
    <div>
      <div class="vendorheading">
        <h2>TOP EVENT VENDORS NEAR ME</h2>
        <p>Find vendors for weddings, corporate events, fundraisers, Bar or Bat Mitzvahs, milestone birthday parties and more. See thousands of photos of real events and contact your favorite vendors to learn more or get a quote.</p>
        <div class="container ">
          <div class="row">
            <div class="col-md-3">
              <div className='SideFilter'>
                <div className='filterhead'>
                  <h5>Filters</h5>
                  <img src="/images/filterss.png" />
                  <button type='clear' onClick={clearFilters}>Clear</button>
                </div>
                <Accordion activeKey={openAccordion} onSelect={(e) => setOpenAccordion(e)}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Location</Accordion.Header>
                    <Accordion.Body>
                      <div className="scrollable-list">
                        {allCities.map((city) => (
                          <div className="form-check" key={city}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={city}
                              checked={selectedLocations.includes(city)} // check if city is selected
                              onChange={() => handleLocationChange(city)} // handle change
                            />
                            <label className="form-check-label" htmlFor={city}>
                              {city}
                            </label>
                          </div>
                        ))}
                      </div>
                      <button className="done" onClick={() => setOpenAccordion(null)}>Done</button>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Category</Accordion.Header>
                    <Accordion.Body>
                      <div className="scrollable-list">
                        {categories.map((category) => (
                          <div className="form-check" key={category}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name='category'
                              id={category}
                              checked={selectedCategory === category && true}
                              onChange={(e) => handleCategoryChange(e.target.checked ? category : "")}
                            />
                            <label className="form-check-label" htmlFor={category}>
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                      <button className="done" onClick={() => setOpenAccordion(null)}>Done</button>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Price Range</Accordion.Header>
                    <Accordion.Body>
                      <div className="scrollable-list">
                        {priceRanges.map((range) => (
                          <div className="form-check" key={range}>
                            <input
                              className="form-check-input"
                              type="radio"
                              id={range}
                              checked={selectedPriceRange === range}
                              onChange={() => handlePriceRangeChange(range)}
                            />
                            <label className="form-check-label" htmlFor={range}>
                              {range}
                            </label>
                          </div>
                        ))}
                      </div>
                      <button className="done" onClick={() => setOpenAccordion(null)}>Done</button>
                    </Accordion.Body>
                  </Accordion.Item>



                </Accordion>

              </div>
              <div class='container'></div>
            </div>
            <div class="col-md-9">
              <div class="Results">
                {vendorList?.map(vendor => (
                  <div key={vendor.id}>
                    <div class="container Vendorbox">
                      <div class="row">
                        <div class="col-md-5">
                          <img src={`${MEDIA_URL}${vendor.image}`} />
                        </div>
                        <div class="col-md-7 Details">
                          <button className="fav-buttons-vendors" onClick={() => toggleLike(vendor)}>
                            {likedVendors[vendor.id] ? (
                              <FaHeart size={24} color="#ba0b0b" className="heart-icon" />
                            ) : (
                              <FaRegHeart size={24} color="gray" className="heart-icon" />
                            )}
                          </button>
                          <h3>{vendor.name}</h3>
                          <p>{vendor.category}</p>
                          <p>{vendor.location}</p>
                          <p>{vendor.albums}</p>
                          <Link to={`/Venbook/${vendor.id}`}> <button>
                            VIEW DETAILS
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
    </div>
  )
}

export default Vendorpage
