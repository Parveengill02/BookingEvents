import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AdminVenueDetail = () => {
    const {id}=useParams();

    console.log(name,"checksmeeerer")
    const [venueData, setVenueData] = useState({
       per_plate: "",
        sitting: "",
        rooms: "",
        parking: "",
        per_day: ""
      
    });
    const [venueDetails, setVenueDetails] = useState({});
    const [bookings, setBookings] = useState([]);
    const getvenueDetails = async (id) => {
      try {
        const result = await axios.get(`${'http://localhost:9000/api/user/single-venue-detail'}/${id}`)
        console.log(result.data,"resultttt")
        setVenueDetails({
          ...result.data.data,
          highlights: result.data.data.highlights?.[0] || {} // flatten the array to a single object
        });
      } catch (err) {
        console.log(err)
      }
    }
    useEffect(() => {
        getvenueDetails(id)
      }, [id])
    // highlights: {
    //   per_plate: "",
    //    sitting: "",
    //    rooms: "",
    //    parking: "",
    //   per_day: ""
    // },
  //   bookings: []
    // name: "Hotel Taj Mahal Palace",
    // location: "Apollo Bandar, Colaba, Mumbai, Maharashtra",
    // rating: "⭐ 4.7 (31,926 users)",
    // highlights: {
    //   perPlate: "₹3000 - ₹4000",
    //   seating: "60 - 650",
    //   rooms: "10 - 538",
    //   parking: "Approx 100",
    //   perDay: "₹3000 - ₹3500",
    // },
    // facilities: [
    //   "Accessibility for differently-abled",
    //   "Baby-sitter on premises",
    //   "Car Rental",
    //   "Concierge",
    // ],
    // bookings: [
    //   { id: 1, customerName: "John Doe", bookingDate: "2025-03-15", status: "Pending" },
    //   { id: 2, customerName: "Jane Smith", bookingDate: "2025-04-20", status: "Completed" },
    // ],
  
  const [venueHighlights, setVenueHighlights] = useState({
    name: "",         
    per_plate: "",
    sitting: "",
    rooms: "",
    parking: "",
    per_day: ""
  });
  const handleHighlightsChange = (e) => {
    const { name, value } = e.target;
    setVenueHighlights((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const token = localStorage.getItem("acess_token");

  const [modal, setModal] = useState(null);
  const [formData, setFormData] = useState({});

  const openModal = (type, data) => {
      setModal(type);
      setFormData(data || {});
  };

  const closeModal = () => {
      setModal(null);
      setFormData({});
  };

  const updateBookingStatus = (id, newStatus) => {
    setVenueData({
      ...venueData,
      bookings: venueData.bookings.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      ),
    });
  };
   

 
  //add highlights
  const addHighlights = async () => {
    try {
      const payload = {
        venue_id: id,
       
        per_plate: formData.per_plate || "",
        sitting: formData.sitting || "",
        rooms: formData.rooms || "",
        parking: formData.parking || "",
        per_day: formData.per_day || ""
      };
  
      const response = await axios.post("http://localhost:9000/api/admin/venueHighlight", payload, {
        headers: {
          acess_token: token
        }
      });
  
      if (response.data.success) {
        toast.success("Venue highlights added!");
  
        // Update venueData with the new highlight fields
        setVenueData(prev => ({
          ...prev,
          ...payload
        }));
  
        closeModal(); // ✅ Only close on success
      } else {
        toast.error("Failed to add highlights");
      }
    } catch (error) {
      console.error("Add Highlights Error:", error);
      toast.error("Something went wrong while adding highlights!");
    }
  };
  


  //fetchAllVenueBookings
  
   
   
    useEffect(() => {
      const fetchAllBookings = async () => {
        try {
          const res = await axios.get("http://localhost:9000/api/admin/fetch-venueBookings", {
            headers: {
              acess_token: token,
            },
          });
          console.log(res.data,"wdewdewdew"); 
          setBookings(res.data.data); // Assuming response wraps data in `data`
        } catch (err) {
          console.error("Error fetching bookings:", err);
        }
      };
      fetchAllBookings();
    }, [token]);
  
  return (
    <div className="admin-venue-detail-page">
    
      
      {/* Venue Basic Information */}
      {/* <section className='adminVenue-Basicinfo'>
        <h2>Basic Information</h2>
        <table>
        <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
         
          {["", "sitting", "rooms", "parking", "per_day"].map((key) => (
  <tr key={key}>
    <td><strong>{key.replace("_", " ").toUpperCase()}:</strong></td>
    <td>{venueData[key]}</td>
  </tr>
))}

          </tbody>
        </table>
        <button onClick={() => openModal("editBasic", venueData)}><ArrowRight className="w-6 h-6 text-white" />Edit</button>
      </section> */}

      {/* Venue Highlights */}
      <section className='adminvenue-highlights'>
        <h2>Highlights</h2>
        <table>
          <thead>
            <tr>
              <th>Highlights</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
  <tr>
    <td><strong>Per Plate:</strong></td>
    <td>{venueDetails?.highlights?.per_plate || "N/A"}</td>
  </tr>
  <tr>
    <td><strong>Sitting:</strong></td>
    <td>{venueDetails?.highlights?.sitting || "N/A"}</td>
  </tr>
  <tr>
    <td><strong>Rooms:</strong></td>
    <td>{venueDetails?.highlights?.rooms || "N/A"}</td>
  </tr>
  <tr>
    <td><strong>Parking:</strong></td>
    <td>{venueDetails?.highlights?.parking || "N/A"}</td>
  </tr>
  <tr>
    <td><strong>Per Day:</strong></td>
    <td>{venueDetails?.highlights?.per_day || "N/A"}</td>
  </tr>
</tbody>

        </table>
        <button onClick={() => openModal("editHighlights", venueData.highlights)}><ArrowRight className="w-6 h-6 text-white" />Edit</button>
      </section>

      {/* Booking Management */}
      <section className='adminvenue-booking'>
        <h2>Bookings</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
            <th>Venue</th>
            <th>Email</th>
            <th>Event Type</th>
            <th>Guest Count</th>
            <th>Duration</th>
           
            <th>Booking Date</th>
            <th>Status</th>
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
      <button>Edit</button>
      <button>Delete</button>
    </td>
  </tr>
          ))}
        </tbody>
        </table>
      </section>

      {/* Modals */}
      {modal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <span className="close" onClick={closeModal}>&times;</span>
            {modal === "editBasic" && (
              <>
                <h2>Edit Basic Details</h2>
                {Object.keys(venueData).slice(0, 3).map((key) => (
                  <label key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    <input
                      className="modal-input"
                      value={formData[key] || ""}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    />
                  </label>
                ))}
                <button onClick={() => { setVenueData({ ...venueData, ...formData }); closeModal(); }}><ArrowRight className="w-6 h-6 text-white" />Save</button>
              </>
            )}
           {modal === "editHighlights" && (
  <>
    <h2>Edit Highlights</h2>
    {["per_plate", "sitting", "rooms", "parking", "per_day"].map((key) => (
  <label key={key}>
    {key.replace("_", " ").toUpperCase()}
    <input
      className="modal-input"
      name={key}
      value={formData[key] || ""}
      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
    />
  </label>
))}


<button onClick={addHighlights}>
  <ArrowRight className="w-6 h-6 text-white" /> Save
</button>


  </>
)}

          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVenueDetail;
