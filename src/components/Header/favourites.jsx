import React, { useState,useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import Login from "../loginContainer";
import axios from "axios";
import { MEDIA_URL } from "../../components/config/endpoints";
import { useNavigate } from "react-router-dom";
const FavoritesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("favorites");
  const token = localStorage.getItem("acess_token")
  const [open, setOpen] = useState(false)
  const [ropen, setropen] = useState(false)
  const navigate = useNavigate();
  const [myFavorites, setMyFavorites] = useState([
    // {
    //   id: 1,
    //   name: "Centerpieces & tablespaces",
    //   image: "/images/idc.avif",
    // },
    // {
    //   id: 2,
    //   name: "Mg Makeovers",
    //   image: "/images/bride.webp",
    // },
  ]);

  // const handleRemoveFavorite = (id) => {
  //   const confirmRemove = window.confirm("Do you really want to remove this item from favorites?");
  //   if (confirmRemove) {
  //     setMyFavorites(myFavorites.filter(fav => fav.id !== id));
  //   }
  // };
 

  useEffect(() => {
    if (!token) return;

    const fetchFavorites = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/user/getFav", {
          headers: {
            acess_token: token,
          },
        });

        setMyFavorites(res.data.data.favorites); // Assuming res.data is an array of fav items
      } catch (error) {
        console.error("Error fetching favorites:", error.response?.data || error);
      }
    };

    fetchFavorites();
  }, [token]);


  const handleViewDetails = (item_id, item_type) => {
    if (item_type === 'venue') {
      navigate(`/booking/${item_id}`); // Navigate to venue detail page
    } else if (item_type === 'vendor') {
      navigate(`/Venbook/${item_id}`); // Navigate to vendor detail page
    }
  };
  const handleRemoveFavorite = async (item_id, item_type) => {
    const confirmRemove = window.confirm("Do you really want to remove this item from favorites?");
    if (!confirmRemove) return;
  
    try {
      await axios.post(
        "http://localhost:9000/api/user/removeFav",
        {
          item_id,
          item_type,
        },
        {
          headers: {
            acess_token: token,
          },
        }
      );
  
      // Remove from UI
      setMyFavorites((prev) =>
        prev.filter((fav) => fav.item_id !== item_id || fav.item_type !== item_type)
      );
    } catch (err) {
      console.error("Error removing favorite:", err.response?.data || err);
    }
  };
  

  return (
    <div>
      <div className="favorites-container">
        {/* Sidebar */}
        <div className="sidebar-fav">
          <h2>Favorites</h2>
          <ul>
            <li
              className={selectedCategory === "favorites" ? "active" : ""}
              onClick={() => setSelectedCategory("favorites")}
            >
              My Favorites
            </li>
            <li
              className={selectedCategory === "vendors" ? "active" : ""}
              onClick={() => setSelectedCategory("vendors")}
            >
              Vendors
            </li>
            <li>Real Events</li>
            <li>Photos</li>
            <li>My Idea Slates</li>
            
          </ul>
          <button className="create-slate">+ Create New Slate</button>
        </div>

        {/* Main Content */}
        <div className="main-content-fav">
          <div className="header-fav">
            <h2>"Save What You Love, Plan What You Dream!"</h2>
            <p>
              Easily save and organize your favorite venues, vendors, and event inspirations.
              Keep everything in one place and plan your perfect event effortlessly.
            </p>
          </div>
          <div className="border"></div>
          <div className="favorite-ideas-container">
      {/* Left Content Section */}
      <div className="favorite-ideas-text">
        <div className="favorite-ideas-title">
          <h2>
            Your Favorite Ideas, <br /> Beautifully Saved & Organized
          </h2>
        </div>
        <p className="favorite-ideas-description">
          With thousands of extraordinary, professional photos from real events, there’s so much to fall in love with on PartySlate. Save your favorites, or group what you like in your own personalized Idea Slates. Make notes, share them, come back to them – and stay inspired as you plan your event.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="favorite-ideas-image-section">
        <div className="favorite-ideas-main-image">
          <img
            src="/images/mainfav.jpg"
            alt="Event"
          />
          <div className="favorite-ideas-popup">
            <h3>Castello Wedding 2020</h3>
            <div className="favorite-ideas-tabs">
              <span className="tab">Venues</span>
              <span className="tab active">Photos</span>
              <span className="tab">Pros</span>
              <span className="tab">Events</span>
            </div>
            <div className="favorite-ideas-grid">
              <img
                src="/images/favimg.jpg"
                alt="Venue"
              />
              <img
                src="/images/favimg1.jpg"
                alt="Decoration"
              />
              <img
                src="/images/favimg2.jpg"
                alt="Flowers"
              />
              <img
                src="/images/fav1.jpg"
                alt="Guests"
              />
            </div>
            <p className="favorite-ideas-stats">
              4 venues · 45 photos · 5 pros · 2 events
            </p>
          </div>
        </div>
      </div>
      </div>
      
<div>
          <div className="myfavorites-container">
            <h2>My Favorites</h2>
            {token ? (
          <div className="vendors-grid-fav">
            {myFavorites.length > 0 ? (
              myFavorites.map((fav) => (
                <div key={fav.id} className="vendor-item-fav">
                  <FaHeart
  className="myfav-icon"
  onClick={() => handleRemoveFavorite(fav.item_id, fav.item_type)}
/>

<img
  src={
    fav.image?.startsWith("http")
      ? fav.image
      : `${MEDIA_URL}${fav.image}`
  } className="vendor-image-fav" 
  alt={fav.name}
/>

                  
                  <h3>{fav.name || "No Name Available"}</h3>

                  <button
  className="view-details-fav"
  onClick={() => handleViewDetails(fav.item_id, fav.item_type)} // Pass item_id and item_type
>
  View Details
</button>
                </div>
              ))
            ) : (
              <p>No favorites yet.</p>
            )}
          </div>
        ) : (
          <button onClick={() => setOpen(true)}>Log in</button>
        )}
          </div>
       </div> 
       </div>
       </div>
       <Login open={open} setOpen={setOpen} ropen={ropen} setropen={setropen}/>

    </div>
  );
};

export default FavoritesPage;
