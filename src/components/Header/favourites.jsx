import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Login from "../loginContainer";

const FavoritesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("favorites");
  const token = localStorage.getItem("acess_token")
  const [open, setOpen] = useState(false)
  const [ropen, setropen] = useState(false)
  const [myFavorites, setMyFavorites] = useState([
    {
      id: 1,
      name: "Centerpieces & tablespaces",
      image: "/images/idc.avif",
    },
    {
      id: 2,
      name: "Mg Makeovers",
      image: "/images/bride.webp",
    },
  ]);

  const handleRemoveFavorite = (id) => {
    const confirmRemove = window.confirm("Do you really want to remove this item from favorites?");
    if (confirmRemove) {
      setMyFavorites(myFavorites.filter(fav => fav.id !== id));
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
            {token ?
            <div className="vendors-grid-fav">
              {myFavorites.map((fav) => (
                
                <div key={fav.id} className="vendor-item-fav">
                  <FaHeart
                    className="myfav-icon"
                    onClick={() => handleRemoveFavorite(fav.id)}
                    
                  />
                  <img src={fav.image} alt={fav.name} className="vendor-image-fav" />
                  <h3>{fav.name}</h3>
                  <button
                    className="view-details-fav"
                    onClick={() => alert("Navigating to Vendor Detail Page")}
                  >
                    View Details
                  </button>
                  
                </div>
              ))}
            </div>
            : <button onClick={() => setOpen(true)} >Log in</button>}
          </div>
       </div> 
       </div>
       </div>
       <Login open={open} setOpen={setOpen} ropen={ropen} setropen={setropen}/>

    </div>
  );
};

export default FavoritesPage;
