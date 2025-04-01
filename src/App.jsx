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
import ManageVendors from "./pages/admin-temp/VendorsAdmin/adminVendors.jsx";
import ManageUsers from "./pages/admin-temp/ManageUsers/users.jsx";
import AdminEventIdeas from "./pages/admin-temp/IdeasAdmin/adminIdeas.jsx";
import IdeaDetails from "./pages/admin-temp/IdeasAdmin/AdminIdeasDetail.jsx";
import AdminVendorDetail from "./pages/admin-temp/VendorsAdmin/adminVendorDetail.jsx";
import ManageVenuePage from "./pages/admin-temp/AdminVenues/VeneusAdmin.jsx";
import AdminVenueDetail from "./pages/admin-temp/AdminVenues/VenuesAdminDetail.jsx";
import AdminNotifications from "./pages/admin-temp/adminNotifications.jsx";
import AdminProfilePage from "./pages/admin-temp/AdminHeaderIcons/profile.jsx";
import AdminLogin from "./pages/admin-temp/AdminHeaderIcons/AdminLogin.jsx";
import ManageUsersDetails from "./pages/admin-temp/ManageUsers/userdetails.jsx";
import FavoritesPage from "./components/Header/favourites.jsx";
import ContactUs from "./pages/contact-us/contact.jsx";
import EventPlanning from "./pages/Planning/planningPage.jsx";
import VerifyEmail from "./verify/email.jsx";
function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin"); 

  return (
    <>
      {!isAdmin && <Header />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify/:token" element={<VerifyEmail />} />
        <Route path="/citypage" element={<VenuePage />} />
        <Route path="/venues/:name" element={<VenueDetailPage />} />
        <Route path="/vendors" element={<Vendorpage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/booking/:name" element={<VenueBooking />} />
        <Route path="/Venbook/:name" element={<VendorDetail />} />
        <Route path="/PageIdea" element={<EventIdea />} />
        <Route path="/Detailpageidea/:categories" element={<DetailIdeaPage />} />
        <Route path="/event/:name" element={<EventPage />} />
        <Route path="/likedpage" element={<FavoritesPage/>} />
        <Route path="/contactPage" element={<ContactUs/>}/>
        <Route path="/planningPage" element={<EventPlanning/>}/>


        {/* Admin Routes (Wrapped in AdminLayout) */}
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
              <Route index element={<Dashboard />} />

                <Route path="mainpage" element={<Dashboard />} />
                <Route path="vendorpage" element={<ManageVendors />}/>
                <Route path="users" element={<ManageUsers/>}/>
                <Route path="Manageideas" element={<AdminEventIdeas/>}/>
                <Route path="admindetailIdeas/:title" element={<IdeaDetails />}/>
                <Route path="adminvendordetail/:name" element={<AdminVendorDetail/>}/>
                <Route path="adminVenues" element={<ManageVenuePage/>}/>
                <Route path="detailvenue/:name" element={<AdminVenueDetail/>}/>
                <Route path="notificationsAdmin" element={<AdminNotifications/>}/>
                <Route path="adminProfile" element={<AdminProfilePage/>}/>
                <Route path="loginAdmin" element={<AdminLogin/>}/>
                <Route path="detailuser/:id" element={<ManageUsersDetails/>}/>
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
