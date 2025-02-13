import React from 'react'
import { Accordion } from 'react-bootstrap';
function Vendorpage() {
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
       <Accordion>
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
                      <button class="btn btn-primary mt-3">Done</button>

                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Posted by</Accordion.Header>
                    <Accordion.Body>
                      <ul className='buttongap'>
                        <li> <button> + Owner</button></li>
                        <li>  <button> + Builder</button></li>
                        <li><button> + Dealer </button></li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Localities</Accordion.Header>
                    <Accordion.Body>
                      <ul className='buttongap'>
                        <li> <button> + West Mumbai </button></li>
                        <li>  <button> + East Mumbai</button></li>
                        <li><button> +  Prabhadevi, Mumbai  </button></li>
                        <li><button> + Chembur East, Mumbai </button></li>
                        <li><button> + Pirojshanagar, Vikhroli East, Mumbai</button></li>
                        <li><button> + Juhu, Mumbai </button></li>
                        <li><button> + Titwala Thane, Mumbai  </button></li>
                        <li><button> +  Goregaon West, Mumbai  </button></li>
                        <li><button> +   Parel, Mumbai   </button></li>
                        <li><button> +   Jogeshwari East, Mumbai   </button></li>
                        <li><button> +  Byculla, Mumbai </button></li>
                        <li><button> +  Mahalaxmi, Mumbai   </button></li>

                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Amenities</Accordion.Header>
                    <Accordion.Body>
                      <ul className='buttongap'>
                        <li> <button> + Parking</button></li>
                        <li>  <button> + Park</button></li>
                        <li><button> + Gas pipeline </button></li>
                        <li><button> + Power Backup </button></li>
                        <li><button> + Security Personnel </button></li>
                      </ul>
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
