import React, { useState, useEffect } from 'react';
import CustomModal from '../../components/Modal';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { USER } from '../../components/config/endpoints';

function Booking({ Bopen, setBopen }) {

  const [user, setUser] = useState({
    fullname: '',
    email: '',
  });

  const { id } = useParams()
  console.log(id, "checkidoobjec")
  const [formData, setFormData] = useState({
    number: '',
    event_type: '',
    date: '',
    guest_count: '',
    duration: '',
    payment_method: '',
    message: '',
  });
  console.log('Form Data:', formData);  // Log form data to check if event_type and guest_count have values

  let token = localStorage.getItem('acess_token')
  const [profileData, SetprofileData] = useState({});
  const navigate = useNavigate()


  const getUserDetails = async () => {
    try {
      let result = await axios.get('http://localhost:9000/api/user/userProfile', {
        headers: {
          acess_token: token
        }

      })
      console.log("Full API result:", result);
      console.log("profileData to be set:", result?.data?.data);

      if (result.status === 200) {
        SetprofileData(result?.data?.data)
      }
      else if (result.status === 401) {
        localStorage.removeItem('acess_token')
        navigate('/login')
      }
    }
    catch (error) {
      if (error.status === 401) {
        localStorage.removeItem('acess_token')
        navigate('/')
      }
      console.log(error)
    }
  }
  useEffect(() => {
    getUserDetails()
  }, [])

  useEffect(() => {
    setUser({
      fullname: profileData?.user_detail?.fullname,
      email: profileData?.Email,
    })
  }, [profileData])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: profileData?.user_detail?.fullname,
      email: profileData?.Email,
      number: formData.number, // Send phone number from form
      event_type: formData.event_type, // Send event type
      date: formData.date, // Send preferred date
      guest_count: formData.guest_count, // Send guest count
      duration: formData.duration, // Send duration
      message: formData.message, // Send personal message
      payment_method: formData.payment_method, // Send payment method
      venue_id:id

    };
    console.log('Payload being sent:', payload);
    try {
      const response = await axios.post(`http://localhost:9000/api/user/bookingData`, payload, {
        headers: {
          acess_token: token,
        },
      });

      if (response.status === 200) {
        toast.success('Your booking was successful!');
        setFormData({
          number: '',
          event_type: '',
          date: '',
          guest_count: '',
          duration: '',
          message: '',
          payment_method: '',
        });
        setBopen(false);
      }
    } catch (error) {
      toast.error('There was an error with your booking.');
      console.error(error);
    }
  };


  return (
    <div>
      <CustomModal open={Bopen} setOpen={setBopen}>

        <form className="BookingForm" onSubmit={handleSubmit}>
          <h4>Reserve Your Dream Venue in Just a Few Clicks!</h4>
          <div className='Bookingdetails'>
            <div className="Bookingform-group">
              <label>Name</label>
              <input type="text" value={user.fullname} disabled />
            </div>

            <div className="Bookingform-group">
              <label>Email</label>
              <input type="email" value={user.email} disabled />
            </div>
            <div className="Bookingform-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="number"
                placeholder="Enter your phone number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="Bookingform-group">
              <label>Event Type</label>
              <select name="event_type" value={formData.event_type} onChange={handleChange} required>
                <option value="">Select Event Type</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate Event</option>
              </select>
            </div>

            <div className="Bookingform-group">
              <label>Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="Bookingform-group">
              <label>Estimated Guest Count</label>
              <select name="guest_count" value={formData.guest_count} onChange={handleChange} required>
                <option value="">Select Guest count</option>
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
              <select name="payment_method" value={formData.payment_method} onChange={handleChange} required>
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
