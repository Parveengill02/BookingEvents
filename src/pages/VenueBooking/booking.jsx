import React, { useState } from 'react';
import CustomModal from '../../components/Modal';
import axios from 'axios';

function Booking({ Bopen, setBopen }) {

  const [formData, setFormData] = useState({
    phoneNumber: '',
    eventType: 'Wedding',
    preferredDate: '2025-02-18',
    guestCount: 'Under 25',
    budget: '$5,000 - $10,000',
    duration: '',
    message: '',
    paymentMethod:'',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async() => {
    e.preventDefault();

const payload = {
data:formData
}

await axios.post(`http://localhost:9000/api/user/venue-book`,payload,{
  headers:{
    access_token:"dbkjsdfhkjdshfkjdshfkdshfkjdshfkjdshfkjhdskfjhdskjfhskjfhskjfhkjdsfh"
  }
})



  };

  return (
    <div>
    <CustomModal open={Bopen} setOpen={setBopen}>
   
      <form className="BookingForm"onSubmit={handleSubmit}>
        <h4>Reserve Your Dream Venue in Just a Few Clicks!</h4>
        <div className='Bookingdetails'>
        <div className="Bookingform-group">
          <label>Name</label>
          <input type="text" value="Parveen Kaur Gill" disabled />
        </div>

        <div className="Bookingform-group">
          <label>Email</label>
          <input type="email" value="parveenkaurgill02@gmail.com" disabled />
        </div>

        <div className="Bookingform-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="Bookingform-group">
          <label>Event Type</label>
          <select name="eventType" value={formData.eventType} onChange={handleChange}>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Corporate Event</option>
          </select>
        </div>

        <div className="Bookingform-group">
          <label>Preferred Date</label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="Bookingform-group">
          <label>Estimated Guest Count</label>
          <select name="guestCount" value={formData.guestCount} onChange={handleChange}>
            <option>Under 25</option>
            <option>25 - 50</option>
            <option>50 - 100</option>
            <option>100+</option>
          </select>
        </div>

        <div className="Bookingform-group">
          <label>Duration (hours)</label>
          <input
            type="number"
            name="duration"
            min="1"
            max="12"
            placeholder="Enter hours"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="Bookingform-group">
  <label>Payment Method</label>
  <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
    <option value="">Select Payment Method</option>
    <option value="credit_card">Credit/Debit Card</option>
    <option value="upi">UPI</option>
    <option value="net_banking">Net Banking</option>
    <option value="wallet">Wallet</option>
  </select>
</div>
        </div>
        

        <div className="Bookingform-group">
          <label>Personal Message</label>
          <textarea
            name="message"
            placeholder="Add details about your event"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </CustomModal>
    </div>
  );
}

export default Booking;
