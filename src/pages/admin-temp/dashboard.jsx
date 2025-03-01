import React, { useEffect, useState } from "react";
import { Calendar, Users, BarChart, Building } from "lucide-react";
import "./admin.css"; 

const Dashboard = () => {
  // Define the target values
  const totalEvents = 20;
  const totalVendors = 15;
  const totalRevenue = 25000;
  const totalVenues = 26;

  // State variables for counters
  const [eventCount, setEventCount] = useState(0);
  const [vendorCount, setVendorCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);
  const [venueCount, setVenueCount] = useState(0);

  // Function to animate numbers
  const animateCounter = (setState, total, speed, step = 1) => {
    let count = 0;
    const interval = setInterval(() => {
      count += step;
      if (count >= total) {
        count = total;
        clearInterval(interval);
      }
      setState(count);
    }, speed);
  };

  // Run animation on component mount
  useEffect(() => {
    animateCounter(setEventCount, totalEvents, 100, 1); // Medium speed
    animateCounter(setVendorCount, totalVendors, 120, 1); // Slower
    animateCounter(setRevenueCount, totalRevenue, 20, 250); // Moderate (increments by $250 every 20ms)
    animateCounter(setVenueCount, totalVenues, 150, 1); // Slowest
  }, []);

  return (
    <div className="dashboard">
      <h2 className="title">Admin Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3><Calendar className="icon" /> Total Events</h3>
          <p>{eventCount}</p>
        </div>
        <div className="stat-card">
          <h3><Users className="icon" /> Total Vendors</h3>
          <p>{vendorCount}</p>
        </div>
        <div className="stat-card">
          <h3><BarChart className="icon" /> Total Revenue</h3>
          <p>${revenueCount}</p>
        </div>
        <div className="stat-card">
          <h3><Building className="icon" /> Total Venues</h3>
          <p>{venueCount}</p>
        </div>
      </div>
      <div className="recent-activities">
      <h3 className="subtitle">Recent Activities</h3>
      <ul className="activity-list">
        <li>New event booked: "Corporate Gala"</li>
        <li>Vendor "Luxury Catering" registered</li>
        <li>Customer inquiry received for wedding planning</li>
      </ul>
      </div>
    </div>
  );
};

export default Dashboard;
