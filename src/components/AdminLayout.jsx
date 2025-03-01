import React from "react";
import { Link } from "react-router-dom";
import "../pages/admin-temp/admin.css";
import { 
  User, 
  LayoutDashboard, 
  Store, 
  Calendar, 
  Users, 
  FileText, 
  Lightbulb, 
  Building,
  Bell,
  Settings
} from "lucide-react";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-panel">
      {/* Admin Header */}
      <header className="admin-header">
  <h1 className="panel-title">Admin Panel</h1>
  
  <div className="admin-profile">
    
    <Bell className="icon" />
    <Settings className="icon" />
    <User className="icon" />
    <span>Admin</span>
  </div>
</header>

      {/* Admin Sidebar & Content */}
      <div className="admin-body row">
        {/* Sidebar */}
        <nav className="admin-sidebar col-md-2">
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
              <Link to="/admin/events">
                <Calendar className="icon" /> Manage Events
              </Link>
            </li>
            <li>
              <Link to="/admin/users">
                <Users className="icon" /> Manage Users
              </Link>
            </li>
            <li>
              <Link to="/admin/ideas">
                <Lightbulb className="icon" /> Manage Ideas
              </Link>
            </li>
            <li>
              <Link to="/admin/venues">
                <Building className="icon" /> Manage Venues
              </Link>
            </li>
            <li>
              <Link to="/admin/reports">
                <FileText className="icon" /> Reports & Analytics
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="admin-content col-md-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
