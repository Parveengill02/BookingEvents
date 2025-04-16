import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ManageVenuePage() {
  const [bookings, setBookings] = useState([]);
  const [venues, setVenues] = useState([


    {
      id: 1,
      name: "Hotel Taj Mahal Palace",
      address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
      details: "Spaces for 50-500 Guests | 3 Restaurants | 2 Bars | Sea View",
      image: ["/images/v1.jpg", "/images/v1a.png", "/images/v1b.avif", "/images/v1c.jpg", "/images/v1d.webp"],
      responseTime: "Avg response time 2-4 hrs",
    },
    {
      id: 2,
      name: "ITC Grand Central",
      address: "287, Dr Baba Saheb Ambedkar Rd, Parel, Mumbai, Maharashtra 400012, India",
      details: "Spaces for 100-1000 Guests | 4 Banquet Halls | Luxury Accommodations",
      image: ["/images/v2.jpg", "/images/v4b.jpg", "/images/v4a.jpg", "/images/v2c.avif", "/images/v4c.jpg"],
      responseTime: "Avg response time 3-5 hrs",
    },
    {
      id: 3,
      name: "The St. Regis Mumbai",
      address: "462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013, India",
      details: "Spaces for 50-1200 Guests | Rooftop Venues | Fine Dining",
      image: ["/images/v4.jpg", "/images/v2b.jpg", "/images/v2a.jpg", "/images/v2c.jpg", "/images/v2d.jpg"],
      responseTime: "Avg response time 1-3 hrs",
    },
    {
      id: 4,
      name: "JW Marriott Mumbai Juhu",
      address: "Juhu Tara Rd, Juhu, Mumbai, Maharashtra 400049, India",
      details: "Spaces for 20-800 Guests | Beachfront | 5 Restaurants",
      image: ["/images/v3.jpg", "/images/v3a.jpg", "/images/v3b.jpg", "/images/v3c.jpg", "/images/v3d.jpg"],
      responseTime: "Avg response time 2-4 hrs",
    },
    {
      id: 5,
      name: "Trident Hotel Bandra Kurla",
      address: "C-56, G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India",
      details: "Spaces for 30-500 Guests | Conference Rooms | Premium Facilities",
      image: ["/images/v13.avif", "/images/v13a.jpg", "/images/v13b.jpg", "/images/v13c.jpg"],
      responseTime: "Avg response time 4-6 hrs",
    },
    {
      id: 6,
      name: "Four Seasons Hotel Mumbai",
      address: "1/136, Dr E Moses Rd, Worli, Mumbai, Maharashtra 400018, India",
      details: "Spaces for 40-700 Guests | Rooftop Bar | Modern Amenities",
      image: ["/images/v14.jpg", "/images/v14a.jpg", "/images/v14b.jpg", "/images/v14c.jpg", "/images/v14d.jpg"],
      responseTime: "Avg response time 3-5 hrs",
    },
    {
      id: 7,
      name: "Sofitel Mumbai BKC",
      address: "C-57, G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India",
      details: "Spaces for 20-400 Guests | Luxury Interiors | 2 Restaurants",
      image: ["/images/s.webp", "/images/s1.jpg", "/images/s2.jpg", "/images/s3.jpg", "/images/s4.jpg"],
      responseTime: "Avg response time 2-4 hrs",
    },
    {
      id: 8,
      name: "Grand Hyatt Mumbai",
      address: "Off Western Express Hwy, Santacruz East, Mumbai, Maharashtra 400055, India",
      details: "Spaces for 50-1500 Guests | Banquet Halls | Premium Services",
      image: ["/images/v18.jpg", "/images/v18a.jpg", "/images/v18b.jpg", "/images/v18c.webp"],
      responseTime: "Avg response time 3-6 hrs",
    },
    {
      id: 9,
      name: "The Oberoi Mumbai",
      address: "Nariman Point, Mumbai, Maharashtra 400021, India",
      details: "Spaces for 30-600 Guests | Sea View Rooms | Fine Dining",
      image: ["/images/v19.jpg", "/images/v19a.jpg", "/images/v19b.jpg", "/images/v19c.jpg"],
      responseTime: "Avg response time 1-3 hrs",
    },
    {
      id: 10,
      name: "Renaissance Mumbai Convention Centre Hotel",
      address: "2 & 3B, Near Chinmayanand Ashram, Powai, Mumbai, Maharashtra 400087, India",
      details: "Spaces for 100-2000 Guests | Lake View | Grand Banquets",
      image: ["/images/v20.jpg", "/images/v20a.jpg", "/images/v20b.jpg", "/images/v20c.avif"],
      responseTime: "Avg response time 4-6 hrs",
    }


  ]);



  const token = localStorage.getItem("acess_token")
  const [uploadedImage, setUploadedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVenue, setCurrentVenue] = useState(null);
  const [reloadVenues, setReloadVenues] = useState(false);
   
  const [newVenue, setNewVenue] = useState({
    name: "",
    address: "",
    details: "",
    responseTime: "",
    status: "Active",
  });
  const fetchVenues = async () => {
    try {
      const result = await axios.get("http://localhost:9000/api/admin/allvenues", {
        headers: {
          acess_token: token,
        },
      });

      if (result?.data?.success) {
        setVenues(result?.data?.data?.list); // ← update venue list from backend
      } else {
        toast.error("Failed to fetch venues");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while fetching venues!");
    }
  };



  useEffect(() => {
    fetchVenues();
  }, [reloadVenues]);



  const openModal = (venue = null) => {
    setCurrentVenue(venue);
    setNewVenue(
      venue
        ? { ...venue }
        : { name: "", address: "", details: "", responseTime: "", status: "Active", images: "" }
    );
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVenue(null);
  };

  const handleChange = (e) => {
    setNewVenue({ ...newVenue, [e.target.name]: e.target.value });
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

  const handleSave = () => {
    if (currentVenue) {
      setVenues(
        venues.map((venue) =>
          venue.id === currentVenue.id ? { ...newVenue, id: currentVenue.id } : venue
        )
      );
    } else {
      setVenues([...venues, { ...newVenue, id: venues.length + 1 }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    deleteVenue(id)
  };


  const deleteVenue = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:9000/api/admin/delete/${id}`, {
        headers: {
          acess_token: token,
        },
      });

      if (result?.data?.success) {
        toast.success("Venue has been Deleted!");
        closeModal(); // ✅ Only close after success
        setReloadVenues(prev => !prev); // ✅ Trigger useEffect to fetch new list
      } else {
        toast.error("Failed to delete venue");
      }
    } catch (error) {
      console.log(err);
      toast.error("Something went wrong while deleting the venue!");
    }
  }


  const addVenue = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", newVenue?.name);
      formData.append("address", newVenue?.address);
      formData.append("details", newVenue?.details);
      formData.append("responseTime", newVenue?.responseTime);
      formData.append("file", uploadedImage);
      if (newVenue?.id) {
        formData.append("id", newVenue?.id);
        const result = await axios.put("http://localhost:9000/api/admin/venues", formData, {
          headers: {
            acess_token: token,
          },
        });

        if (result?.data?.success) {
          toast.success("Venue has been Updated!");
          closeModal(); // ✅ Only close after success
          setReloadVenues(prev => !prev); // ✅ Trigger useEffect to fetch new list
        } else {
          toast.error("Failed to update venue");
        }
      } else {
        const result = await axios.post("http://localhost:9000/api/admin/venues", formData, {
          headers: {
            acess_token: token,
          },
        });

        if (result?.data?.success) {
          toast.success("Venue has been added!");
          closeModal(); // ✅ Only close after success
          setReloadVenues(prev => !prev); // ✅ Trigger useEffect to fetch new list
        } else {
          toast.error("Failed to add venue");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while adding the venue!");
    }
  };
  const fetchAllBookings = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/admin/fetch-venueBookings", {
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
  }, [token]); // Only re-run if the token change


  //Approve-reject booking
  const handleApprove = async (id) => {
    try {
      const result = await axios.post("http://localhost:9000/api/admin/update-status", {
        id, // changed from bookingId
        status: "Confirmed",
      }, {
        headers: {
          acess_token: token,
        },
      });
  
      if (result?.data?.success) {
        toast.success("Booking approved!");
        fetchAllBookings(); 
      } else {
        toast.error("Failed to approve booking.");
      }
    } catch (err) {
      console.error("Error approving booking:", err);
      toast.error("Something went wrong while approving the booking.");
    }
  };
  

 

  const handleBookDelete = async (id) => {
    try {
      const result = await axios.post(
        "http://localhost:9000/api/admin/reject-booking",
        { id }, // sending ID in request body
        {
          headers: {
            acess_token: token,
          },
        }
      );
  
      if (result?.data?.success) {
        toast.success("Booking deleted!");
        fetchAllBookings(); // no need to sendRejectionEmail separately now
      } else {
        toast.error("Failed to delete booking.");
      }
    } catch (err) {
      console.error("Error deleting booking:", err);
      toast.error("Something went wrong while deleting the booking.");
    }
  };
  

  

  return (
    <div className="admin-venue-container">
      <h1 className="admin-venue-title">Manage Venues</h1>
      <button className="admin-venue-add-btn" onClick={() => openModal()}>
        + Add Venue
      </button>

      <table className="admin-venue-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Venue Name</th>
            <th>Address</th>
            <th>Details</th>
            <th>Response Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue) => (
            <tr key={venue.id}>
              <td>{venue.id}</td>
              <td>
                {/* Displaying the first image as a preview */}
                <img
                  src={`http://localhost:9000/uploads/${venue.image}`} // the first image
                  alt={venue.name}
                  style={{ width: "100px", height: "auto", objectFit: "cover" }} />
              </td>
              <td>
                {venue.name}
                <br />

                <Link to={`/admin/detailvenue/${venue.id}`} className="text-blue-500 underline text-sm">
                  View Details
                </Link>
              </td>
              <td>{venue.address}</td>
              <td>{venue.details}</td>
              <td>{venue.responseTime}</td>
              <td className="admin-venues-button">
                <button
                  className="admin-venue-edit-btn"
                  onClick={() => openModal(venue)}
                >
                  Edit
                </button>
                <button
                  className="admin-venue-delete-btn"
                  onClick={() => handleDelete(venue.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Booking Management */}
      <section className='adminvenue-booking' style={{ padding: '24px', marginTop: '30px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '16px' }}>Bookings</h2>
        <table className="admin-venue-table"
          style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Venue</th>
              <th>Email</th>
              <th>Event Type</th>
              <th>Guest Count</th>
              <th>Duration</th>

              <th>Booking Date</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>
                <td>{booking.venue?.name || "N/A"}</td> {/* venue name */}
                <td>{booking.user?.Email || "N/A"}</td>   {/* customer name */}
                <td>{booking.event_type}</td>
                <td>{booking.guest_count}</td>
                <td>{booking.duration}</td>


                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>{booking.message}</td>
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
      {modalOpen && (
        <div className="admin-venue-modal">
          <div className="admin-venue-modal-content">
            <h2>{currentVenue ? "Edit Venue" : "Add Venue"}</h2>
            <input
              type="text"
              name="name"
              placeholder="Venue Name"
              value={newVenue.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={newVenue.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="details"
              placeholder="Details"
              value={newVenue.details}
              onChange={handleChange}
            />
            <input
              type="file"
              name="file"
              placeholder="upload image"
              accept=".png,.jpeg,.svg,.jpg"
              // value={newVenue.image}
              onChange={handleUpload}
            />
            <input
              type="text"
              name="responseTime"
              placeholder="Response Time"
              value={newVenue.responseTime}
              onChange={handleChange}
            />
            <select name="status" value={newVenue.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="admin-venue-modal-buttons">
              <button type="submit" className="admin-venue-save-btn" onClick={addVenue}>
                Save
              </button>
              <button className="admin-venue-close-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>



  );
}

export default ManageVenuePage;
