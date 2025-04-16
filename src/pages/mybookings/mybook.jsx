import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { USER } from '../../components/config/endpoints';

const MyBookings = () => {
  const [venueBookings, setVenueBookings] = useState([]);
  const [vendorRequests, setVendorRequests] = useState([]);
  const token = localStorage.getItem('acess_token');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const venueRes = await axios.get('http://localhost:9000/api/user/venueBookings', {
          headers: { acess_token: token }
        });

        const vendorRes = await axios.get('http://localhost:9000/api/user/vendorRequests', {
          headers: { acess_token: token }
        });

        setVenueBookings(venueRes.data.data.bookings || []);
        setVendorRequests(vendorRes.data.data.requests || []);
      } catch (err) {
        console.error("Error fetching booking/request data:", err);
      }
    };

    fetchBookings();
  }, []);
  console.log(venueBookings, "cjekbvenmerere")

  return (
    <div className="my-bookings">
      <h2>My Bookings</h2>

      {/* Venue Bookings */}
      <section className="booking-section">
        <h3>Venue Bookings</h3>
        {venueBookings.length ? (
          venueBookings.map((booking, i) => (
            <div key={i} className="booking-card">
              {/* <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Phone:</strong> {booking.number}</p> */}
              <p><strong>Event Type:</strong> {booking.event_type}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Guests:</strong> {booking.guest_count}</p>
              <p><strong>Duration:</strong> {booking.duration}</p>
              <p><strong>Payment Method:</strong> {booking.payment_method}</p>
              <p><strong>Message:</strong> {booking.message}</p>
              <p><strong>Status:</strong> {booking.status || 'Pending'}</p>
            </div>
          ))
        ) : (
          <p>No venue bookings found.</p>
        )}
      </section>

      {/* Vendor Requests */}
      <section className="booking-section">
        <h3>Vendor Requests</h3>
        {vendorRequests.length ? (
          vendorRequests.map((request, i) => (
            <div key={i} className="booking-card">
              {/* <p><strong>Name:</strong> {request.name}</p>
              <p><strong>Email:</strong> {request.email}</p> */}
              <p><strong>Phone:</strong> {request.number}</p>
              <p><strong>Details:</strong> {request.details}</p>
              <p><strong>Status:</strong> {request.status || 'Pending'}</p>
              <p role='button' onClick={() => alert("cancel")} style={{
    marginTop: '1rem',
    display: 'inline-block',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }}> Cancel</p>
            </div>
          ))
        ) : (
          <p>No vendor requests found.</p>
        )}
      </section>
    </div>
  );
};

export default MyBookings;
