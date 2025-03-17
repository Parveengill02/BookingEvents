import React,{useState}from 'react'
import { Link } from 'react-router-dom';
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
    const {categories}=useParams()
    const categoriesArray = [
      { title: "Elegant Floral Centerpiece", image: "/images/ida.avif" },
      { title: "Rustic Wooden Tablescape", image: "/images/ida2.avif" },
      { title: "Minimalist Greenery Design", image: "/images/ida3.avif" },
      { title: "Vintage Candle Setup", image: "/images/ida4.avif" },
      { title: "Bohemian Chic Style", image: "/images/ida5.avif" },
      { title: "Classic Gold Theme", image: "/images/ida6.avif" },
      { title: "Modern Glass Tablescape", image: "/images/ida7.avif" },
      { title: "Outdoor Garden Setup", image: "/images/ida8.avif" }
    ];
  return (
    <div>
        
      <div className="custom-container">
    
      <header className="custom-header">
      <h1>Ideas for <span>{categories}</span></h1>
      <p>Showing ideas related to <span>{categories}</span> </p>
      </header>

      
      <div className="custom-grid">
        {categoriesArray.map((category, index) => (
          <div key={index} className="custom-grid-item">
           <button className="fav-buttons-ideas" onClick={() => toggleLike(category.title)}>
                                                     {likedVenues[category.title] ? (
                                                       <FaHeart size={24} color="#ba0b0b" className="heart-icon" />
                                                     ) : (
                                                       <FaRegHeart size={24} color="white" className="heart-icon" />
                                                     )}
                                                   </button>
            <img
              src={category.image}
              alt={category.title}
              className="custom-image"
            />
            

          </div>
        ))}
      </div>
    </div> 
    </div>
  )
}

export default DetailIdeaPage
