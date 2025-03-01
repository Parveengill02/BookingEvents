import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Vendorpage from "./pages/Vendors/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/foot/index.jsx";
import Homepage from "./pages/HomePage/index.jsx";
import Login from "./pages/HomePage/login.jsx";
import VenuePage from "./pages/Venue/index.jsx";
import VenueDetailPage from "./pages/VenueDetailPage/index.jsx";
import VenueBooking from "./pages/VenueBooking/index.jsx";
import VendorDetail from "./pages/vendorbooking/vendorbook.jsx";
import EventIdea from "./pages/IdeaPage/idea.jsx";
import DetailIdeaPage from "./pages/IdeaDetail/Idetailpage.jsx";
import EventPage from "./pages/wedding/wedding.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import Dashboard from "./pages/admin-temp/dashboard.jsx";
import ManageVendors from "./pages/admin-temp/adminVendors.jsx";

function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin"); // Check if admin route

  return (
    <>
      {!isAdmin && <Header />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/citypage" element={<VenuePage />} />
        <Route path="/venues/:name" element={<VenueDetailPage />} />
        <Route path="/vendors" element={<Vendorpage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/booking/:name" element={<VenueBooking />} />
        <Route path="/Venbook/:name" element={<VendorDetail />} />
        <Route path="/PageIdea" element={<EventIdea />} />
        <Route path="/Detailpageidea/:categories" element={<DetailIdeaPage />} />
        <Route path="/event/:name" element={<EventPage />} />

        {/* Admin Routes (Wrapped in AdminLayout) */}
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
              <Route index element={<Dashboard />} />

                <Route path="mainpage" element={<Dashboard />} />
                <Route path="vendorpage" element={<ManageVendors />}/>
              </Routes>
            </AdminLayout>
          }
        />
      </Routes>

      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
