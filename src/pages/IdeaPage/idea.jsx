import React from 'react'
import { Link } from 'react-router-dom';

function EventIdea() {
    const categories = [
        { title: "Centerpieces & Tablescapes", image: "/images/ida.avif" },
        { title: "Floral & Decor", image: "/images/idb.avif" },
        { title: "Food & Drink", image: "/images/idc.avif"},
        { title: "Bars & Lounges", image: "/images/idd.avif"},
        { title: "Invitations", image: "/images/ide.avif"},
        { title: "Dance Floors", image: "/images/idf.avif"},
        { title: "Lighting", image: "/images/idg.avif"},
        { title: "Entertainment", image:"/images/idh.avif"}
      ];
  return (
    <div>
      <div className="custom-container">
    
      <header className="custom-header">
        <h1>Find Photos</h1>
        <p>2,000+ photos</p>
      </header>

      
      <div className="custom-grid">
        {categories.map((category, index) => (
          <div key={index} className="custom-grid-item">
            <Link to={`/Detailpageidea/${category.title}`}>
            <img
              src={category.image}
              alt={category.title}
              className="custom-image"
            />
            
            <div className="custom-overlay">
              {category.title}
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div> 
    </div>
  )
}

export default EventIdea
