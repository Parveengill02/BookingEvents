
import React, { useState } from 'react';


const VendorDetail = () => {
    const [quoteModal, setQuoteModal] = useState(false);

    return (
        <div className="vendor-detail">
            <div className="vendor-detail__header">
                <img src="/images/bride.webp" alt="Vendor" />
            
            <div className="vendor-detail__info">
                <h1>MG Makeovers</h1>
                <p><strong>📍Location:</strong> Gurugram, Haryana</p>
                <p><strong>🏷️Category:</strong> Bridal Makeup Artists</p>
                <p><strong>📅 Available Dates:</strong> March 2025 - June 2025</p>
            </div>
            </div>
            <div className="vendor-detail__section1">
                
                <p>MG Makeovers is your ultimate destination for all your makeover needs in Gurgaon! With a passion for beauty and makeup, MG Makeovers has been providing top-class services to clients since 2017. Their goal is to understand the unique needs and desires of their clients and work diligently to transform their dreams into reality.<br/> <br/>Products Used at MG Makeovers
                At MG Makeovers, they believe in using only the finest and most reputable makeup products to ensure a flawless and long-lasting look. They take pride in offering an impressive lineup of premium makeup brands, including NARS, Dior, Huda Beauty, Sephora, MAC, Fenty Beauty, Bobbi Brown, and Makeup Forever. Their carefully curated selection of products ensures that you receive nothing but the best for your special occasion.</p>
            </div>
            
            <div className="vendor-detail__section">
                <h2>PORTFOLIO</h2>
                <div className='highlight-border'></div>
                <div className='Portfolio-gallery container'>
                
                    <img src="/images/br1.jpg" alt="Vendor Work 1" />
                    <img src="/images/br2.jpeg" alt="Vendor Work 2" />
                    <img src="/images/br3.jpg" alt="Vendor Work 3" />
                    <img src="/images/br4.jpg" alt="Vendor Work 3" />
                    <img src="/images/br5.jpg" alt="Vendor Work 3" />
                    <img src="/images/br6.jpg" alt="Vendor Work 3" />
                    <img src="/images/br7.jpg" alt="Vendor Work 3" />
                    <img src="/images/br8.jpg" alt="Vendor Work 3" />
                    <img src="/images/br9.jpg" alt="Vendor Work 3" />
                
                </div>
            </div>
            <div className="vendor-detail__section">
                <h2>Services </h2>
                <div className='highlight-border'></div>
                <p><ul>
                    <li><b>Party Makeup:</b> Get ready to dazzle at any celebration with our exquisite party makeup. Our skilled artists will create a look that perfectly matches the tone and theme of the event, leaving you looking radiant and confident.</li><br/>
<li><b>Bridal Makeup:</b> Your wedding day is a once-in-a-lifetime event, and we are committed to making it truly unforgettable. MG Makeovers' bridal makeup service is tailored to reflect your individuality, ensuring you feel like the most beautiful bride on your special day.</li><br/>
<li><b>Engagement Makeup:</b>The engagement ceremony is a prelude to your wedding day, and our team will make sure you look breathtaking for this significant event. Our engagement makeup service focuses on highlighting your best features and giving you a radiant glow.</li><br/>
<li><b>Airbrush Makeup:</b> Experience the magic of airbrush makeup, known for its flawless finish and lightweight feel. MG Makeovers' expert artists are skilled in this technique, delivering a seamless and natural look that will last throughout the event.</li><br/>
<li><b>Pre-Bridal Packages:</b> Get ready to shine on your big day with MG Makeovers' exquisite Pre-Bridal Packages. They offer a comprehensive range of services to pamper and enhance your natural beauty from head to toe. Whether it's your nails that need a perfect finish, your hair that deserves a mesmerizing transformation, or your skin that calls for a radiant glow, their expert team of professionals is here to cater to all your needs. The services include Nails, Hair, Skin Microblading, and other Basic Salon Services.</li><br/>
</ul>
</p>
             <div className='Price-banner'>STARTING PRICE ~ ₹20,000</div>
                <p>If you want to book this vendor, click on "Get a Quote" to receive pricing details.Our team will get back to you with the best pricing and package options tailored to your needs!<br/>
                <button className="vendor-detail__button" onClick={() => setQuoteModal(true)}>Get a Quote</button></p>
                
            </div>
            <div className="vendor-detail__section4">
                
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
            </div>
            {quoteModal && (
                <div className="vendor-detail__modal">
                    <div className="vendor-detail__modal-content">
                        <span className="vendor-detail__close" onClick={() => setQuoteModal(false)}>&times;</span>
                        <h2>Request a Quote</h2>
                        <form>
                            <input type="text" className="vendor-detail__input" placeholder="Your Name" required />
                            <input type="email" className="vendor-detail__input" placeholder="Your Email" required />
                            <input type="tel" className="vendor-detail__input" placeholder="Your Phone" required />
                            <textarea className="vendor-detail__textarea" placeholder="Additional Details"></textarea>
                            <button type="submit" className="vendor-detail__submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
            <section class="review-container">
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
    </section>
        </div>
    );
};

export default VendorDetail;
