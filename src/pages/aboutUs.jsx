import React from 'react';

function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h1 className="aboutus-title">About Gill's Event Elegance</h1>
        <p className="aboutus-subtitle">
          Crafting Unforgettable Moments, One Event at a Time.
        </p>

        <section className="aboutus-section">
          <h2 className="aboutus-heading">Who We Are</h2>
          <p className="aboutus-text">
            At Gill's Event Elegance, we specialize in curating extraordinary events —
            from grand weddings to memorable birthdays, elegant corporate events, and more.
            Our passionate team is dedicated to bringing your vision to life with creativity,
            professionalism, and attention to every detail.
          </p>
        </section>

        <section className="aboutus-section">
          <h2 className="aboutus-heading">Our Mission</h2>
          <p className="aboutus-text">
            To create stunning events that leave lasting memories for you and your guests.
            We believe every celebration deserves a touch of elegance, creativity, and heart.
          </p>
        </section>

        <section className="aboutus-section">
          <h2 className="aboutus-heading">Why Choose Us?</h2>
          <ul className="aboutus-list">
            <li>Experienced team of event planners and designers</li>
            <li>Personalized services tailored to your needs</li>
            <li>Access to top venues, vendors, and ideas</li>
            <li>Seamless event execution from start to finish</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
