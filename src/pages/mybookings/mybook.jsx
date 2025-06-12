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
             <p>
  <span
    style={{
      backgroundColor: 'rgb(173, 173, 119)',
    
      color: '#ffffff',              // maroon text
      padding: '4px 12px',
      borderRadius: '12px',
      fontWeight: 'bold',
      fontSize: '0.95rem',
      display: 'inline-block',
      marginBottom: '0.5rem',
      textTransform: 'capitalize'
    }}
  >
    Venue: {booking.venue?.name || 'N/A'}
  </span>
</p>
              <p><strong>Event Type:</strong> {booking.event_type}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Guests:</strong> {booking.guest_count}</p>
              <p><strong>Duration:</strong> {booking.duration}</p>
             
              <p><strong>Message:</strong> {booking.message}</p>
              <p>
  <strong>Status:</strong>{' '}
  <span style={{
    backgroundColor: booking.status === 'Confirmed' 
      ? '#d4edda' 
      : booking.status === 'Rejected' 
      ? '#f8d7da' 
      : '#fff3cd',
    color: booking.status === 'Confirmed' 
      ? '#155724' 
      : booking.status === 'Rejected' 
      ? '#721c24' 
      : '#856404',
    padding: '2px 10px',
    borderRadius: '8px',
    fontWeight: 'bold'
  }}>
    {booking.status || 'Pending'}
  </span>
</p>

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
            <p>
  <span
    style={{
      backgroundColor: 'rgb(173, 173, 119)',
    
      color: '#ffffff',      
      padding: '4px 12px',
      borderRadius: '12px',
      fontWeight: 'bold',
      fontSize: '0.95rem',
      display: 'inline-block',
      marginBottom: '0.5rem',
      textTransform: 'capitalize'
    }}
  >
    Vendor: {request.vendor?.name || 'N/A'}
  </span>
</p>

              <p><strong>Details:</strong> {request.details}</p>
              <p><strong>Status:</strong>{' '}
  <span style={{
    backgroundColor: request.status === 'Confirmed' 
      ? '#d4edda' 
      : request.status === 'Rejected' 
      ? '#f8d7da' 
      : '#fff3cd',
    color: request.status === 'Confirmed' 
      ? '#155724' 
      : request.status === 'Rejected' 
      ? '#721c24' 
      : '#856404',
    padding: '2px 10px',
    borderRadius: '8px',
    fontWeight: 'bold'
  }}>
    {request.status || 'Pending'}
  </span></p>
              
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
