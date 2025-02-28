import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function DetailIdeaPage() {
    
    const {categories}=useParams()
     const categoriesArray = [
        { title: "Centerpieces & Tablescapes", image: "/images/ida.avif" },
        { title: "Centerpieces & Tablescapes", image: "/images/ida2.avif" },
        { title: "Centerpieces & Tablescapes", image: "/images/ida3.avif"},
        { title: "Centerpieces & Tablescapes", image: "/images/ida4.avif"},
        { title: "Centerpieces & Tablescapes", image: "/images/ida5.avif"},
        { title: "Centerpieces & Tablescapes", image: "/images/ida6.avif"},
        { title: "Centerpieces & Tablescapes", image: "/images/ida7.avif"},
        { title: "Centerpieces & Tablescapes", image:"/images/ida8.avif"}
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
