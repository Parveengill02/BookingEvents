
import axios from "axios";
import React, { useState,useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
const initialVendors = [
  { 
    id: 1,
    name: "Mgmakeovers",
    category: "Event Planner - Specializing in bridal makeovers and wedding planning.",
    location: "Gurugram, Haryana",
    albums: "Albums: 1",
    image: "/images/d1.webp",
    sale: 1000
  },
  {
    id: 2,
    name: "Shaadi Saga",
    category: " Event Planner - Helping you plan your dream wedding with top vendors.",
    location: "Mumbai, Maharashtra",
    albums: "Albums: 3",
    image: "/images/d2.webp",
    sale: 3000
  },
  {
    id: 3,
    name: "U&I FotoClics Studios",
    category: " Photographer - Capturing your precious wedding moments beautifully.",
    location: "Gurugram, Haryana",
    albums: "Albums: 0",
    image: "/images/d3.jpg",
    sale: 0
  },
  {
    id: 4,
    name: "Pixel Memories",
    category: " Photographer - Experts in candid and cinematic wedding photography.",
    location: "Kolkata, West Bengal",
    albums: "Albums: 3",
    image: "/images/d4.jpg",
    sale: 3000
  },
  {
    id: 5,
    name: "Royal Feast",
    category: " Caterer - Serving luxurious and delicious wedding feasts.",
    location: "Delhi, India",
    albums: "Albums: 4",
    image: "/images/d5.jpg",
    sale: 4000
  },
  {
    id: 6,
    name: "Tandoori Treats",
    category: " Caterer - Specializing in authentic Indian and Mughlai cuisine.",
    location: "Lucknow, Uttar Pradesh",
    albums: "Albums: 5",
    image: "/images/d6.jpg",
    sale: 5000
  },
  {
    id: 7,
    name: "Aura Linens",
    category: " Rentals - Providing premium decor rentals for weddings.",
    location: "New Delhi, Delhi",
    albums: "Albums: 0",
    image: "/images/d7.jpg",
    sale: 0
  },
  {
    id: 8,
    name: "Ocean View Resorts",
    category: "Venue Rental - Stunning beachfront venues for dream weddings.",
    location: "Goa, India",
    albums: "Albums: 5",
    image: "/images/d8.jpg",
    sale: 5000
  },
  {
    id: 9,
    name: "Bloom Weddings",
    category: " Decor & Floral - Transforming venues with elegant floral decorations.",
    location: "Mumbai, Maharashtra",
    albums: "Albums: 3",
    image: "/images/d9.jpg",
    sale: 3000
  },
  {
    id: 10,
    name: "Bollywood Beats",
    category: " Entertainment - Bringing energetic dance and music performances.",
    location: "Mumbai, Maharashtra",
    albums: "Albums: 4",
    image: "/images/d10.jpg",
    sale: 4000
  },
  {
    id: 11,
    name: "Glam Look Studio",
    category: "Makeup Artist - Professional bridal and party makeup services.",
    location: "Delhi, India",
    albums: "Albums: 5",
    image: "/images/d11.jpg",
    sale: 5000
  },
  {
    id: 12,
    name: "Manish Malhotra Designs",
    category: " Wedding Attire - Luxurious designer wedding outfits.",
    location: "Mumbai, Maharashtra",
    albums: "Albums: 5",
    image: "/images/d12.jpeg",
    sale: 5000
  },
  {
    id: 13,
    name: "Tanishq Jewels",
    category: " Jewelry - Elegant and traditional wedding jewelry collections.",
    location: "Delhi, India",
    albums: "Albums: 5",
    image: "/images/d13.jpg",
    sale: 5000
  },
  {
    id: 14,
    name: "Royal Scrolls",
    category: " Invitation Designer - Exclusive handcrafted wedding invitations.",
    location: "Delhi, India",
    albums: "Albums: 2",
    image: "/images/d14.jpg",
    sale: 2000
  }
];
 
  
export default function ManageVendors() {
  const token = localStorage.getItem("acess_token")
  const [vendors, setVendors] = useState(initialVendors);
  const [search, setSearch] = useState("");
  const [editingIdea, setEditingIdea] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [bookings, setBookings] = useState([]);
    const [reloadVendors, setReloadVendors] = useState(false);

  const [newVendor, setNewVendor] = useState({
    name: "",
    location: "",   
    category: "",
    available_dates:"",
    price: "",
    about:"",
     
  });
  const fetchVendors = async () => {
    try {
      const result = await axios.get("http://localhost:9000/api/admin/allvendors", {
        headers: {
          acess_token: token,
        },
      });
  
      if (result?.data?.success) {
        setVendors(result?.data?.data?.list); 
       
      } else {
        toast.error("Failed to fetch vendors");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while fetching venues!");
    }
  };
  
  

  useEffect(() => {
    fetchVendors();
  }, [reloadVendors]);




  const handleDelete = (id) => {
    setVendors(vendors.filter((vendor) => vendor.id !== id));
  };

  // Updated to accept the vendor object instead of id
  const handleEditIdea = (vendor) => {
    setEditingIdea(vendor);
    setIsModalOpen(true);
  };

  // Saves the changes made in the modal
  const handleSaveEdit = () => {
    setVendors(vendors.map((v) => (v.id === editingIdea.id ? editingIdea : v)));
    setEditingIdea(null);
    setIsModalOpen(false);
  };
  
  const handleChange = (e) => {
    setNewVendor({ ...newVendor, [e.target.name]: e.target.value });
  };
  
  const handleUpload = (e) => {

    console.log(e.target.files, "tarregerer")
    const file = e.target.files[0]; // Get the first selected file

    if (file) {
      // Store the file in the state
      setUploadedImage(file);

      // Create a URL for the selected file (for image preview)
      // const objectUrl = URL.createObjectURL(file);
      // setImageUrl(objectUrl);
    }
  }


  const addVendor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", newVendor?.name);
      formData.append("location", newVendor?.location);
      formData.append("category", newVendor?.category);
      formData.append("sales", newVendor?.sales);
      formData.append("available_dates", newVendor?.available_dates);
      formData.append("file", uploadedImage);
      formData.append("price", newVendor?.price);
      formData.append("about", newVendor?.about);
      const result = await axios.post("http://localhost:9000/api/admin/vendors", formData, {
        headers: {
          acess_token: token,
        },
      });
  
      if (result?.data?.success) {
        toast.success("Vendor has been added!",{
          position: "top-right",
          autoClose: 2000,
        });
        reset();// ✅ Only close after success
        setReloadVendors(prev => !prev); // ✅ Trigger useEffect to fetch new list
      } else {
        toast.error("Failed to add vendor");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while adding the vendor!");
    }
  };


  console.log(vendors,"vemdotrrd")



  //FETCH VENDOR-BOOKINGS
  const fetchAllBookings = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/admin/fetch-vendorBookings", {
        headers: {
          acess_token: token,
        },
      });
      setBookings(res.data.data); // Assuming response wraps data in `data`
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  // Fetch bookings on page load or token change
  useEffect(() => {
    fetchAllBookings();
  }, [token]); // Only re
  return (
    <div className="admin-container">
      
      <h1 className="admin-title">Manage Vendors</h1>
      
      <input
        type="text"
        placeholder="Search Vendors..."
        className="admin-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="admin-card">
        <h2>Vendor Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={vendors} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sale" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="admin-add-form">
        <h2>Add New Vendor</h2>
        <input
  type="text"
  name="name" // ✅
  placeholder="Name"
  value={newVendor.name}
  onChange={handleChange}
/>
<input
  type="text"
  name="category" // ✅
  placeholder="Category"
  value={newVendor.category}
  onChange={handleChange}
/>
<input
  type="text"
  name="location" // ✅
  placeholder="Location"
  value={newVendor.location}
  onChange={handleChange}
/>
<input
  type="text"
  name="available_dates" // ✅
  placeholder="Available-dates"
  value={newVendor.available_dates}
  onChange={handleChange}
/>

<input
  type="text"
  name="price" // ✅
  placeholder="Price"
  value={newVendor.price}
  onChange={handleChange}
/><input
  type="text"
  name="about" // ✅
  placeholder="Details"
  value={newVendor.about}
  onChange={handleChange}
/>
        <input
              type="file"
              name="file"
              placeholder="upload image"
              accept=".png,.jpeg,.svg,.jpg,.webp"
              // value={newVenue.image}
              onChange={handleUpload}
            />
        <button className="modal-save-btn" onClick={addVendor}>Add Vendor</button>
      </div>

      <table className="admin-vendor-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Vendor</th>
            <th>Category</th>
            <th>Location</th>
           
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.id}</td>
              <td>
              <img
    src={`http://localhost:9000/uploads/${vendor.image}`}
    alt={vendor.name}
    style={{ width: "100px", height: "auto", objectFit: "cover" }}/>
              </td>
              <td>{vendor.name}</td>
              <td>{vendor.category}
                <br/>
                <Link to={`/admin/adminvendordetail/${vendor.id}`} className="text-blue-500 underline text-sm">
    View Details
  </Link>
              </td>
              <td>{vendor.location}</td>
             
              <td className="table-action-buttons">
                <button className="edit-idea-btn" onClick={() => handleEditIdea(vendor)}>
                  Edit
                </button>
                <button className="delete-idea-btn" onClick={() => handleDelete(vendor.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && editingIdea && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h2>Edit Vendor</h2>
            <input
              type="text"
              className="modal-input"
              value={editingIdea.name}
              onChange={(e) => setEditingIdea({ ...editingIdea, name: e.target.value })}
            />
            <input
              type="text"
              className="modal-input"
              value={editingIdea.image}
              onChange={(e) => setEditingIdea({ ...editingIdea, image: e.target.value })}
            />
            <input
              type="text"
              className="modal-input"
              value={editingIdea.category}
              onChange={(e) => setEditingIdea({ ...editingIdea, category: e.target.value })}
            />
            <div className="modal-buttons-container">
              <button className="modal-cancel-btn" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="modal-save-btn" onClick={addVendor}>
                Save
              </button>
            </div>
          </div>
         
        </div>
      )}
      <ToastContainer autoClose={3000}/>
      <section className='adminvenue-booking' style={{ padding: '24px', marginTop: '30px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '16px' }}>Bookings</h2>
        <table className="admin-venue-table"
          style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Vendor</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>
                <td>{booking.vendor?.name || "N/A"}</td> {/* venue name */}
                <td>{booking.user?.Email || "N/A"}</td>   {/* customer name */}
                <td>{booking.phone}</td>
                <td>{booking.details}</td>
             


               
                <td>
                <button
                  className="admin-venue-edit-btn"
                  onClick={() => handleApprove(booking.id, booking.user?.Email)}
                >
                  Approve
                </button>
                <button
                  className="admin-venue-delete-btn"
                  onClick={() => handleBookDelete(booking.id, booking.user?.Email)}
                >
                  Delete
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
