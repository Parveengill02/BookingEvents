import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AdminLogin() {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h2 className="admin-login-title">Admin Login</h2>
        <div className="admin-login-form">
          {/* Email Input with Icon */}
          <div className="admin-login-field">
            <i className="fa fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={admin.email}
              onChange={handleChange}
              className="admin-login-input"
            />
          </div>

          {/* Password Input with Icon */}
          <div className="admin-login-field">
            <i className="fa fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={admin.password}
              onChange={handleChange}
              className="admin-login-input"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="admin-forgot-password">
            <a href="#" className="admin-forgot-link">
              Forgot Password?
            </a>
          </div>

          <button className="admin-login-button">Login</button>
        </div>
      </div>
    </div>
  );
}
