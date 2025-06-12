
import React, { useState,useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { USER } from '../../components/config/endpoints';
import { useParams } from 'react-router-dom';
import Login from '../../components/loginContainer';
import axios from 'axios';
import { MEDIA_URL } from '../../components/config/endpoints';

const VendorDetail = () => {
    const [vendorDetails, setVendorDetails] = useState({});
    const [services, setVendorservices] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [quoteModal, setQuoteModal] = useState(false);
    let token = localStorage.getItem('acess_token')
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        details: '',
       
      });
      const { id } = useParams()
      console.log(id, "i am her id")
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    
  const handleBookingClick = () => {
    if (token) {
      setQuoteModal(true);
    } else {
      setOpen(true); // trigger login modal
    }
  }
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
            name: formData.name,
            email: formData.email,
            number: formData.number,
            details: formData.details,
            vendor_id:id
        };
        
        console.log('Payload being sent:', payload);
        try {
          const response = await axios.post(`${USER.VENDORQUOTE}`, payload, {
            headers: {
              acess_token: token,
            },
          });
    
          if (response.status === 200) {
            toast.success('Your request has been sent');
            setFormData({
                name: 'name',
        email: 'email',
        number: 'number',
        details: 'details',
            });
            setQuoteModal(false);
          }
        } catch (error) {
          toast.error('There was an error with your request.');
          console.error(error);
        }
      };
    
    //get-vendordetails
      
      const getvendorDetails = async (id) => {
        try {
          console.log(id, "vendor id")
          const result = await axios.get(`${'http://localhost:9000/api/user/single-vendor-detail'}/${id}`)
          console.log(result.data, "resultttt")
          setVendorDetails({
            ...result.data.data,
             
          });
    
          setVendorservices(result.data.data.vendor_services|| []);
         
          setGallery(result.data.data.vendor_portfolios|| []);
        } catch (err) {
          console.log(err)
        }
      }
      console.log(gallery, "checkbenuerere")
    
    
      useEffect(() => {
        getvendorDetails(id)
      }, [id])
    return (
        <div className="vendor-detail">
            <div className="vendor-detail__header">
                <img src={`${MEDIA_URL}${vendorDetails?.image}`}/>
            
            <div className="vendor-detail__info">
                <h1>{vendorDetails?.name}</h1>
                <p><strong>📍Location:</strong> {vendorDetails?.location}</p>
                <p><strong>🏷️Category:</strong> {vendorDetails?.category}</p>
                <p><strong>📅Available_dates:</strong> { vendorDetails?.available_dates}</p>
            </div>
            </div>
            <div className="vendor-detail__section1">
                
                <p>{vendorDetails?.about}</p>
            </div>
            
            <div className="vendor-detail__section">
                <h2>PORTFOLIO</h2>
                <div className='highlight-border'></div>
                <div className='Portfolio-gallery container'>
                {gallery.map((image, index) => (
          <img key={index} src={`http://localhost:9000/uploads/${image.portfolio_image}`} alt={''} />
        ))}
                
                </div>
            </div>
            <div className="vendor-detail__section">
                <h2>Services </h2>
                <div className='highlight-border'></div>
                <p><ul>
  {services.map((service, index) => (
    <li key={index}>
      <b>{service.vendor_service}:</b> {service.description}
    </li>
  ))}
</ul>
</p>
             <div className='Price-banner'>STARTING PRICE ~ ₹{vendorDetails?.price}</div>
                <p>If you want to book this vendor, click on "Get a Quote" to receive pricing details.Our team will get back to you with the best pricing and package options tailored to your needs!<br/>
                <button className="vendor-detail__button" onClick={handleBookingClick}>Get a Quote</button></p>
                
            </div>
            {/* <div className="vendor-detail__section4">
                
            <div className="section">
                <h2>Customer Reviews</h2>
                <div className='highlight-border'></div>
                <div className="reviews">
                    <div className="review-card">
                        <p className="review-stars"><img src="/images/user1.jpeg" alt="User 1" />★★★★★<br/>
                        "Excellent service and highly professional!"</p>
                    </div>
                    <div className="review-card">
                    <p className="review-stars"> <img src="/images/user2.jpeg" alt="User 2" />
                        ★★★★☆<br/>
                        "Great experience, but pricing could be better."</p>
                    </div>
                    <div className="review-card">

                        <p className="review-stars"><img src="/images/user3.jpeg" alt="User 3" />★★★★★<br/>
                        "Absolutely loved the makeup! Would recommend 100%."</p>
                    </div>
                    <div className="review-card">
                        

                        <p className="review-stars"><img src="/images/user4.jpeg" alt="User 4" />★★★☆☆<br/>
                        "Good service, but there is room for improvement."</p>
                    </div>
                    <div className="review-card">
                        
                        <p className="review-stars"><img src="/images/user5.jpeg" alt="User 5" />★★★★★<br/>
                        "Loved the experience! Very professional."</p>
                    </div>
                </div>
            </div>                
            </div> */}
            {quoteModal && (
                <div className="vendor-detail__modal">
                    <div className="vendor-detail__modal-content">
                        <span className="vendor-detail__close" onClick={() => setQuoteModal(false)}>&times;</span>
                        <h2>Request a Quote</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" className="vendor-detail__input" placeholder="Your Name" value={formData.name}
                onChange={handleChange}
                 required />
                            <input type="email"  name="email" className="vendor-detail__input" placeholder="Your Email" value={formData.email}
                onChange={handleChange}required />
                            <input type="tel"  name="number" className="vendor-detail__input" placeholder="Your Phone" value={formData.number}
                onChange={handleChange} required />
                            <textarea className="vendor-detail__textarea"  name="details" placeholder="Additional Details" value={formData.details}
                onChange={handleChange}></textarea>
                            <button type="submit" className="vendor-detail__submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
            {/* <section class="review-container">
        <h2 class="review-heading">Write a Review</h2>

        <form class="review-form">
            <label for="user-rating" class="review-label">Rating:</label>
            <select id="user-rating" class="review-select" required>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>

            <label for="user-review" class="review-label">Your Review:</label>
            <textarea id="user-review" class="review-textarea" placeholder="Write your review here..." required></textarea>

            <button type="submit" class="review-button">Submit Review</button>
        </form>
    </section> */}
    <Login open={open} setOpen={setOpen} />
        </div>
    );
};

export default VendorDetail;
