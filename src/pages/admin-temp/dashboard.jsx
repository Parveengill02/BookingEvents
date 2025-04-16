import React, { useEffect, useState } from "react";
import { Calendar, Users, BarChart, Building } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import "./admin.css";
import axios from "axios";
import CountUp from 'react-countup';
const Dashboard = () => {
  // Define the target values
  
  const totalRevenue = 2500000; // In INR
  

  // State variables for counters
  const [userCount, setUserCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [vendorCount, setVendorCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);
  const [venueCount, setVenueCount] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("Monthly");
const [counts,setCounts]=useState([])


  //pie chart
  const eventCategoryData = [
    { name: "Weddings", value: 40 },
    { name: "Birthdays", value: 25 },
    { name: "Corporate Events", value: 20 },
    { name: "Others", value: 15 },
  ];
    

  const token=localStorage.getItem("acess_token")

  const fetchCounts = async () => {
    try {
      const result = await axios.get("http://localhost:9000/api/admin/fetch-counts", {
        headers: {
          acess_token: token,
        },
      });
       const data = result.data;
       console.log(data, "asdxewfergtrg")
       setUserCount(data?.data.userCounts || 0);
       setVendorCount(data?.data.vendorCounts || 0);
       setVenueCount(data?.data.venueCounts || 0);
      if (result.status === 200) {
        const rawCounts = result?.data?.data?.eventCounts || [];
  
        // Transform data
        const formattedCounts = rawCounts.map((item) => ({
          name: item.event_type,
          value: item.count,
        }));
  
        setCounts(formattedCounts);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const COLORS = ["#800000", " #0c3f03", "#2e745c", "#8f6817"];
  // Function to animate numbers
  // const animateCounter = (setState, total, speed, step = 1) => {
  //   let count = 0;
  //   const interval = setInterval(() => {
  //     count += step;
  //     if (count >= total) {
  //       count = total;
  //       clearInterval(interval);
  //     }
  //     setState(count);
  //   }, speed);
  // };

  // Run animation on component mount
  // useEffect(() => {
  //   animateCounter(userCount , 100, 1);
  //   animateCounter(vendorCount , 120, 1);
  //   animateCounter(totalRevenue, 20, 50000); // ₹50000 increment
  //   animateCounter( venueCount, 150, 1);
  // }, []);

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


  useEffect(() => {
    fetchCounts()
  }, [])


  console.log(counts,"countsss---->")
  return (
    <div className="dashboard">
      <h2 className="title">Admin Dashboard</h2>

      {/* Stats Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="stats-grid">
              <div className="stat-card">
                <h3><Calendar className="icon" /> Total Users</h3>
                <CountUp className="counter" start={0} end={userCount} duration={2} />
              </div>
              <div className="stat-card">
                <h3><Users className="icon" /> Total Vendors</h3>
                <CountUp className="counter" start={0} end={vendorCount} duration={2} />
              </div>
              <div className="stat-card">
                <h3><BarChart className="icon" /> Total Revenue</h3>
                <CountUp className="counter" start={0} end={revenueCount} duration={2} prefix="₹" />
              </div>
              <div className="stat-card">
                <h3><Building className="icon" /> Total Venues</h3>
                <CountUp className="counter" start={0} end={venueCount} duration={2} />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="event-performance-container">

              {/* Events by Category - Pie Chart */}
              <div className="chart-card pie-chart-container">

                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={counts}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={110}
                      innerRadius={60}
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      labelLine={false}
                      stroke="white"
                      strokeWidth={2}
                    >
                     {counts.map((entry, index) => (
  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}

                    </Pie>
                    <Tooltip />

                  </PieChart>
                  <h4>Event Performance Insights</h4>

                </ResponsiveContainer>
              </div>
            </div>
          </div>
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
