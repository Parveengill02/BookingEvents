import React, { useEffect, useState } from "react";
import { Calendar, Users, BarChart, Building } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./admin.css"; 

const Dashboard = () => {
  // Define the target values
  const totalEvents = 20;
  const totalVendors = 15;
  const totalRevenue = 2500000; // In INR
  const totalVenues = 26;

  // State variables for counters
  const [eventCount, setEventCount] = useState(0);
  const [vendorCount, setVendorCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);
  const [venueCount, setVenueCount] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("Monthly");

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
    animateCounter(setEventCount, totalEvents, 100, 1);
    animateCounter(setVendorCount, totalVendors, 120, 1);
    animateCounter(setRevenueCount, totalRevenue, 20, 50000); // ₹50000 increment
    animateCounter(setVenueCount, totalVenues, 150, 1);
  }, []);

  // Event Booking Trends Data
  const eventBookingData = [
    { month: "Jan", events: 10 },
    { month: "Feb", events: 14 },
    { month: "Mar", events: 20 },
    { month: "Apr", events: 18 },
    { month: "May", events: 22 },
    { month: "Jun", events: 25 },
  ];

  // Revenue Growth Data
  const revenueGrowthData = [
    { month: "Jan", revenue: 500000 },
    { month: "Feb", revenue: 750000 },
    { month: "Mar", revenue: 1000000 },
    { month: "Apr", revenue: 1250000 },
    { month: "May", revenue: 1500000 },
    { month: "Jun", revenue: 2000000 },
  ];

  return (
    <div className="dashboard">
      <h2 className="title">Admin Dashboard</h2>

      {/* Stats Section */}
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
          <p>₹{revenueCount.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3><Building className="icon" /> Total Venues</h3>
          <p>{venueCount}</p>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="event-dashboard-charts">
        {/* Event Booking Trends Chart */}
        
        <div className="event-trends-chart-card">
          <h3 className="event-trends-chart-title">Event Booking Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={eventBookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="events" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Growth Chart */}
        <div className="revenue-growth-chart-card">
          <h3 className="revenue-growth-chart-title">Revenue Growth (₹ INR)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#E63946" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
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
