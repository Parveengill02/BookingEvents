import React from 'react'

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
      <h5>Find a venue</h5>
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
