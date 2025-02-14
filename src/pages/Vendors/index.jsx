import React,{useState} from 'react'
import { Accordion } from 'react-bootstrap';
function Vendorpage() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const categories = [
    "All", "Event Planner", "Photographer", "Design & Floral",
    "Caterer", "Rentals", "Entertainment", "Music Bands",
    "Videographers", "Makeup Artists"
  ];
  const events=["Wedding","Birthday Party","Baby Shower","Corporate Events","Holiday Parties","Dinner Parties","Anniversary Parties"];
  
    const [selected, setSelected] = useState("All");
    const [showMore, setShowMore] = useState(false);
  
  
  const vendors = [
    {
      id: 1,
      name: "Mgmakeovers",
      category: "Category: Event Planner - Specializing in bridal makeovers and wedding planning.",
      location: "Gurugram, Haryana",
      albums: "Albums: 1",
      image:"/images/d1.webp"
    },
    {
      id: 2,
      name: "Shaadi Saga",
      category: "Category: Event Planner - Helping you plan your dream wedding with top vendors.",
      location: "Mumbai, Maharashtra",
      albums: "Albums: 3",
      image:"/images/d2.webp"
    },
    {
      id: 3,
      name: "U&I FotoClics Studios",
      category: "Category: Photographer - Capturing your precious wedding moments beautifully.",
      location: "Gurugram, Haryana",
      albums: "Albums: 0",
      image:"/images/d3.jpg"
    },
    {
      id: 4,
      name: "Pixel Memories",
      category: "Category: Photographer - Experts in candid and cinematic wedding photography.",
      location: "Kolkata, West Bengal",
      albums: "Albums: 3",
      image:"/images/d4.jpg"
    },
    {
      id: 5,
      name: "Royal Feast",
      category: "Category: Caterer - Serving luxurious and delicious wedding feasts.",
      location: "Delhi, India",
      albums: "Albums: 4",
      image:"/images/d5.jpg"
    },
    {
      id: 6,
      name: "Tandoori Treats",
      category: "Category: Caterer - Specializing in authentic Indian and Mughlai cuisine.",
      location: "Lucknow, Uttar Pradesh",
      albums: "Albums: 5",
      image:"/images/d6.jpg"
    },
    {
      id: 7,
      name: "Aura Linens",
      category: "Category: Rentals - Providing premium decor rentals for weddings.",
      location: "New Delhi, Delhi",
      albums: "Albums: 0",
      image:"/images/d7.jpg"
    },
    {
      id: 8,
      name: "Ocean View Resorts",
      category: "Category: Venue Rental - Stunning beachfront venues for dream weddings.",
      location: "Goa, India",
      albums: "Albums: 5",
      image:"/images/d8.jpg"
    },
    {
      id: 9,
      name: "Bloom Weddings",
      category: "Category: Decor & Floral - Transforming venues with elegant floral decorations.",
      location: "Mumbai, Maharashtra",
      albums: "Albums: 3",
      image:"/images/d9.jpg"
    },
    {
      id: 10,
      name: "Bollywood Beats",
      category: "Category: Entertainment - Bringing energetic dance and music performances.",
      location: "Mumbai, Maharashtra",
      albums: "Albums: 4",
      image:"/images/d10.jpg"
    },
    {
      id: 11,
      name: "Glam Look Studio",
      category: "Category: Makeup Artist - Professional bridal and party makeup services.",
      location: "Delhi, India",
      albums: "Albums: 5",
      image:"/images/d11.jpg"
    },
    {
      id: 12,
      name: "Manish Malhotra Designs",
      category: "Category: Wedding Attire - Luxurious designer wedding outfits.",
      location: "Mumbai, Maharashtra",
      albums: "Albums: 5",
      image:"/images/d12.jpeg"
    },
    {
      id: 13,
      name: "Tanishq Jewels",
      category: "Category: Jewelry - Elegant and traditional wedding jewelry collections.",
      location: "Delhi, India",
      albums: "Albums: 5",
      image:"/images/d13.jpg"
    },
    {
      id: 14,
      name: "Royal Scrolls",
      category: "Category: Invitation Designer - Exclusive handcrafted wedding invitations.",
      location: "Delhi, India",
      albums: "Albums: 2",
      image:"/images/d14.jpg"
    },
  ];

  
      
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
        <img src="/images/filterss.png"/>
        <button type='clear'>Clear</button>
       </div>
       <Accordion activeKey={openAccordion} onSelect={(e) => setOpenAccordion(e)}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Loaction</Accordion.Header>
                    <Accordion.Body>
                    <div className="scrollable-list">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Mumbai" />
                          <label className="form-check-label" htmlFor="Mumbai">Mumbai</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Delhi" />
                          <label className="form-check-label" htmlFor="Delhi">Delhi</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Bengaluru" />
                          <label className="form-check-label" htmlFor="Bengaluru">Bengaluru</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Hyderabad" />
                          <label className="form-check-label" htmlFor="Hyderabad">Hyderabad</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Chennai" />
                          <label className="form-check-label" htmlFor="Chennai">Chennai</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Kolkata" />
                          <label className="form-check-label" htmlFor="Kolkata">Kolkata</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Jaipur" />
                          <label className="form-check-label" htmlFor="Jaipur">Jaipur</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Pune" />
                          <label className="form-check-label" htmlFor="Pune">Pune</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Goa" />
                          <label className="form-check-label" htmlFor="Goa">Goa</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Kochi" />
                          <label className="form-check-label" htmlFor="Kochi">Kochi</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Ahmedabad" />
                          <label className="form-check-label" htmlFor="Ahmedabad">Ahmedabad</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Surat" />
                          <label className="form-check-label" htmlFor="Surat">Surat</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Lucknow" />
                          <label className="form-check-label" htmlFor="Lucknow">Lucknow</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Chandigarh" />
                          <label className="form-check-label" htmlFor="Chandigarh">Chandigarh</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Indore" />
                          <label className="form-check-label" htmlFor="Indore">Indore</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Ludhiana" />
                          <label className="form-check-label" htmlFor="Ludhiana">Ludhiana</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Bhopal" />
                          <label className="form-check-label" htmlFor="Bhopal">Bhopal</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Coimbatore" />
                          <label className="form-check-label" htmlFor="Coimbatore">Coimbatore</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Visakhapatnam" />
                          <label className="form-check-label" htmlFor="Visakhapatnam">Visakhapatnam</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Ranchi" />
                          <label className="form-check-label" htmlFor="Ranchi">Ranchi</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Jodhpur" />
                          <label className="form-check-label" htmlFor="Jodhpur">Jodhpur</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Agra" />
                          <label className="form-check-label" htmlFor="Agra">Agra</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Varanasi" />
                          <label className="form-check-label" htmlFor="Varanasi">Varanasi</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="Rishikesh" />
                          <label className="form-check-label" htmlFor="Rishikesh">Rishikesh</label>
                        </div>
                      </div>
                      <button  class="done" onClick={() => setOpenAccordion(null)}>Done</button>

                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Vendor Categories</Accordion.Header>
                    <Accordion.Body>
                    <ul style={{ listStyle: "none", padding: 0 }}>
        {(showMore ? categories : categories.slice(0, 6)).map((category, index) => (
          <li 
            key={index} 
            onClick={() => setSelected(category)}
            style={{
              fontWeight: selected === category ? "bold" : "normal",
              cursor: "pointer",
              marginBottom: "5px"
            }}
          >
            {category}
          </li>
        ))}
      </ul>
      {!showMore ? (
        <p 
          onClick={() => setShowMore(true)} 
          style={{ color: "goldenrod", cursor: "pointer" }}
        >
          Show more...
        </p>
      ) : (
        <p 
          onClick={() => setShowMore(false)} 
          style={{ color: "red", cursor: "pointer" }}
        >
          Show less
        </p>
        )
} 
<button  class="done" onClick={() => setOpenAccordion(null)}>Done</button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body>
                      <div className="form-check">
                          <input className="form-check-input" type="radio" id="Mumbai" />
                          <label className="form-check-label" htmlFor="Mumbai"> Rs.0 - Rs.5,000</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" id="Delhi" />
                          <label className="form-check-label" htmlFor="Delhi">Rs.5,000 - Rs.10,000</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" id="Bengaluru" />
                          <label className="form-check-label" htmlFor="Bengaluru">Rs.10,000 - Rs.25,000</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" id="Hyderabad" />
                          <label className="form-check-label" htmlFor="Rs.25,000 - Rs.50,000">Rs.25,000 - Rs.50,000</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" id="Chennai" />
                          <label className="form-check-label" htmlFor="Chennai">Rs.50,000+</label>
                        </div>
                        <button  class="done" onClick={() => setOpenAccordion(null)}>Done</button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Event Type</Accordion.Header>
                    <Accordion.Body>
                    <ul style={{ listStyle: "none", padding: 0 }}>
        {(showMore ? events : events.slice(0, 4)).map((event, index) => (
          <li 
            key={index} 
            onClick={() => setSelected(event)}
            style={{
              fontWeight: selected === event ? "bold" : "normal",
              cursor: "pointer",
              marginBottom: "5px"
            }}
          >
            {event}
          </li>
        ))}
      </ul>
      {!showMore ? (
        <p 
          onClick={() => setShowMore(true)} 
          style={{ color: "goldenrod", cursor: "pointer" }}
        >
          Show more...
        </p>
      ) : (
        <p 
          onClick={() => setShowMore(false)} 
          style={{ color: "red", cursor: "pointer" }}
        >
          Show less
        </p>
        ) }
        <button  class="done" onClick={() => setOpenAccordion(null)}>Done</button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
      

      </div>
      <div class='container'></div>
    </div>
    <div class="col-md-9">
      <div class="Results">
          {vendors.map((Vendor) => (
            <div key={Vendor.id}>
              <div class="container Vendorbox">
              <div class="row">
              <div class="col-md-5">   
                <img src=  {Vendor.image}/>        
</div>
              <div class="col-md-7 Details">
                <h3>{Vendor.name}</h3>
                <p>{Vendor.category}</p>
                <p>{Vendor.location}</p>
                <p>{Vendor.albums}</p>
                <button>
                  Request Pricing
                </button>      </div>
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
    )
}

export default Vendorpage
