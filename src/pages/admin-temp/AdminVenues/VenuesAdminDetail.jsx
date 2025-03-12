import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
const AdminVenueDetail = () => {
    const {name}=useParams();
  const [venueData, setVenueData] = useState({
    name: "Hotel Taj Mahal Palace",
    location: "Apollo Bandar, Colaba, Mumbai, Maharashtra",
    rating: "⭐ 4.7 (31,926 users)",
    highlights: {
      perPlate: "₹3000 - ₹4000",
      seating: "60 - 650",
      rooms: "10 - 538",
      parking: "Approx 100",
      perDay: "₹3000 - ₹3500",
    },
    facilities: [
      "Accessibility for differently-abled",
      "Baby-sitter on premises",
      "Car Rental",
      "Concierge",
    ],
    bookings: [
      { id: 1, customerName: "John Doe", bookingDate: "2025-03-15", status: "Pending" },
      { id: 2, customerName: "Jane Smith", bookingDate: "2025-04-20", status: "Completed" },
    ],
  });

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

  return (
    <div className="admin-venue-detail-page">
      <h1>{name}</h1>
      
      {/* Venue Basic Information */}
      <section className='adminVenue-Basicinfo'>
        <h2>Basic Information</h2>
        <table>
        <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(venueData).slice(0, 3).map((key) => (
              <tr key={key}>
                <td><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></td>
                <td>{venueData[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => openModal("editBasic", venueData)}><ArrowRight className="w-6 h-6 text-white" />Edit</button>
      </section>

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
            {Object.entries(venueData.highlights).map(([key, value]) => (
              <tr key={key}>
                <td><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></td>
                <td>{value}</td>
              </tr>
            ))}
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
              <th>Customer Name</th>
              <th>Booking Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {venueData.bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.customerName}</td>
                <td>{booking.bookingDate}</td>
                <td>
                  <select 
                    className="admin-venue-detail__status-dropdown" 
                    value={booking.status} 
                    onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td>
                  <button className="admin-venue-detail__delete-btn" onClick={() => setVenueData({
                      ...venueData,
                      bookings: venueData.bookings.filter((b) => b.id !== booking.id)
                    })}>Delete</button>
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
                {Object.keys(venueData.highlights).map((key) => (
                  <label key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    <input
                      className="modal-input"
                      value={formData[key] || ""}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    />
                  </label>
                ))}
                <button onClick={() => { setVenueData({ ...venueData, highlights: { ...venueData.highlights, ...formData } }); closeModal(); }}><ArrowRight className="w-6 h-6 text-white" />Save</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVenueDetail;
