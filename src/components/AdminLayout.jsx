import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../pages/admin-temp/admin.css";
import { 
  User, 
  LayoutDashboard, 
  Store, 
  Users, 
  FileText, 
  Lightbulb, 
  Building,
  Bell,
} from "lucide-react";

const AdminLayout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="admin-panel">
      {/* Admin Header */}
      <header className="admin-header">
        <h1 className="panel-title">Admin Panel</h1>

        {/* Admin Profile & Notifications */}
        <div className="admin-profile-container">
          <Link to="/admin/notificationsAdmin">
            <Bell className="icon" />
          </Link>

          <div 
            className="admin-profile-dropdown-container"
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(true)} // Keeps it open unless clicked outside
          >
            <User className="icon" />

            {isDropdownOpen && (
              <div className="admin-profile-dropdown">
                <Link to="/admin/adminProfile" className="admin-profile-option">Profile</Link>
                <Link to="/admin/loginAdmin" className="admin-profile-option">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Admin Sidebar & Content */}
      <div className="admin-main-content">
        <div className="admin-body row">
          <div className="col-md-2">
            <nav className="admin-sidebar">
              <ul>
                <li>
                  <Link to="/admin/mainpage">
                    <LayoutDashboard className="icon" /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/admin/vendorpage">
                    <Store className="icon" /> Manage Vendors
                  </Link>
                </li>
                <li>
                  <Link to="/admin/users">
                    <Users className="icon" /> Manage Users
                  </Link>
                </li>
                <li>
                  <Link to="/admin/Manageideas">
                    <Lightbulb className="icon" /> Manage Ideas
                  </Link>
                </li>
                <li>
                  <Link to="/admin/adminVenues">
                    <Building className="icon" /> Manage Venues
                  </Link>
                </li>
                <li>
                  <Link to="/admin/AdminContact">
                    <FileText className="icon" /> View Contacts
                  </Link>

                </li>
                <li>
                  <Link to="/admin/userbookings">
                    <FileText className="icon" /> View Bookings
                  </Link>
                  
                </li>
              </ul>
            </nav>
          </div>
          {/* Main Content */}
          <div className="admin-content col-md-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
