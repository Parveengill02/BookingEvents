import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";

function DetailIdeaPage() {
  const [likedVenues, setLikedVenues] = useState({});
  
  const toggleLike = (title) => {
    setLikedVenues((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const { categories } = useParams();  // Get category from URL parameter

  // Dummy data for all categories with multiple images
  const categoriesArray = [
    {
      title: "Centerpieces & Tablescapes",
      images: [
        "/images/ida.avif", "/images/ida2.avif", "/images/ida3.avif",
        "/images/ida4.avif", "/images/ida5.avif", "/images/ida6.avif"
      ]
    },
    {
      title: "Floral & Decor",
      images: [
        "/images/idb.avif", "/images/images/de1.jpg", "/images/images/de2.jpg",
        "/images/images/de3.jpg", "/images/images/de4.jpg", "/images/images/de5.jpg", "/images/images/de6.jpg", "/images/images/de7.jpg"
      ]
    },
    {
      title: "Food & Drink",
      images: ["/images/idc.avif", "/images/images/food.jpg","/images/images/fo1.jpg","/images/images/fo2.jpg","/images/images/fo3.jpg","/images/images/fo4.jpg","/images/images/fo5.jpg",]
    },
    {
      title: "Bars & Lounges",
      images: ["/images/idd.avif","/images/images/bar.jpg", "/images/images/bar2.jpg",
        "/images/images/bar3.jpg", "/images/images/bar4.jpg", "/images/images/bar5.jpg"]
    },
    {
      title: "Invitations",
      images: ["/images/ide.avif","/images/images/in1.jpg", "/images/images/in2.jpg",
        "/images/images/in3.jpg", "/images/images/in4.jpg"]
    },
    {
      title: "Dance Floors",
      images: ["/images/idf.avif"]
    },
    {
      title: "Lighting",
      images: ["/images/idg.avif"]
    },
    {
      title: "Entertainment",
      images: ["/images/idh.avif"]
    }
  ];

  // Filter categories based on the selected category
  const filteredCategory = categoriesArray.find(
    (category) => category.title.toLowerCase() === categories.toLowerCase()
  );

  return (
    <div>
      <div className="custom-container">
        <header className="custom-header">
          <h1>Ideas for <span>{categories}</span></h1>
          <p>Showing ideas related to <span>{categories}</span></p>
        </header>

        {/* Display filtered images for the selected category */}
        <div className="custom-grid">
          {filteredCategory ? (
            filteredCategory.images.map((image, index) => (
              <div key={index} className="custom-grid-item">
                <button className="fav-buttons-ideas" onClick={() => toggleLike(image)}>
                  {likedVenues[image] ? (
                    <FaHeart size={24} color="#ba0b0b" className="heart-icon" />
                  ) : (
                    <FaRegHeart size={24} color="white" className="heart-icon" />
                  )}
                </button>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="custom-image"
                />
              </div>
            ))
          ) : (
            <p>No ideas found for the selected category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailIdeaPage;
