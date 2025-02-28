import React, { useState } from 'react';
import Venuecards from './Venuecards';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function VenuePage() {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  
  const venues = [
    {
      city: 'Mumbai',
      imageUrl: 'images/pexels-bertellifotografia-17206144.jpg',
    },
    {
      city: 'Delhi',
      imageUrl: 'images/img2.jpg',
    },
    {
      city: 'Bengaluru',
      imageUrl: 'images/img3.jpg',
    },
    {
      city: 'Hyderabad',
      imageUrl: 'images/img8.avif',
    },
    {
      city: 'Chennai',
      imageUrl: 'images/img5.jpg',
    },{
      city: 'Kolkata',
      imageUrl: 'images/img26.jpeg',
    },{
      city: 'Jaipur',
      imageUrl: 'images/img6.jpg',
    },
  {
      city: 'Pune',
      imageUrl: 'images/img7.jpeg',
    },{
      city: 'Goa',
      imageUrl: 'images/img25.jpeg',
    },{
      city: 'Kochi',
      imageUrl: 'images/img9.jpg',
    },
  {
      city: 'Ahmedabad',
      imageUrl: 'images/img10.jpeg',
    },{
      city: 'Surat',
      imageUrl: 'images/img11.jpeg',
    },{
      city: 'Lucknow',
      imageUrl: 'images/img12.jpeg',
    },{
      city: 'Chandigarh',
      imageUrl: 'images/img12.jpg',
    },{
      city: 'Indore',
      imageUrl: 'images/image13.avif',
    },{
      city: 'Ludhiana',
      imageUrl: 'images/image14.jpeg',
    },{
      city: 'Bhopal',
      imageUrl: 'images/image15.jpeg',
    },{
      city: ' Coimbatore ',
      imageUrl: 'images/image16.jpeg',
    },{
      city: 'Visakhapatnam',
      imageUrl: 'images/image17.jpeg',
    },{
      city: 'Ranchi',
      imageUrl: 'images/image18.jpg',
    },{
      city: 'Jodhpur',
      imageUrl: 'images/img19.jpg',
    },{
      city: 'Agra',
      imageUrl: 'images/img20.jpeg',
    },{
      city: 'Varanansi',
      imageUrl: 'images/img21.jpg',
    },{
      city: 'Rishikesh',
      imageUrl: 'images/img22.jpg',
    },{
      city: 'Amritsar',
      imageUrl: 'images/img27.jpg',
    },{
      city: 'Shimla',
      imageUrl: 'images/img30.jpeg',
    },
        ];
        const {name}=useParams()
  return(
    <div>
      <div className="Venuepage">
        <h1>FIND VENUES</h1>
        </div>
        <div className='searchbox'>
        <h6>Enter a location</h6>
        <input
          type="text"
          placeholder="Search by location..."
          value={location}
          onChange={handleLocationChange}
          className="location-search"
        />
        <img className='search' src="images/searchimg.png"/>
        </div>
      
      <Venuecards venuecards={venues}/>
      <div className='VenueTypes'>
        <img src="/images/last.png"/>
        <h2>Memorable Events Start with a Memorable Venue</h2>
        <h5>All Venue Types</h5>
        <Link to={`/venues/${venues.city}`}>
        <div class="container Vtypes">
  <div class="row">
    <div class="col-md-3">
     
     <ul>
      <li>Restaurant</li>
      <li>Bar</li>
      <li>Outdoor</li>
      <li>Barn</li>
      <li>Country Club</li>
      <li>Retail Space</li>
      </ul>
    </div>
    <div class="col-md-3">
      <ul>
    <li>Beach</li>
      <li> Distillery</li>
      <li>Farm</li>
      <li>Historic Space</li>
      <li>Garden</li>
      <li>Loft</li>
      </ul>
    </div>
    <div class="col-md-3">
      <ul>
    <li>Hotel</li>
      <li>Rooftop</li>
      <li>Farm</li>
      <li>Park</li>
      <li>Boat</li>
      <li>Winery</li>
      </ul>
    </div>
    <div class="col-md-3">
      <ul>
    <li>Ballroom</li>
      <li>Resort</li>
      <li>Vineyard</li>
      <li>Park</li>
      <li>Mansion</li>
      <li>Tent</li>
      </ul>
      
    </div>
  
  </div>
</div>
</Link>
      </div>

      </div>
    
  );
}

export default VenuePage;
