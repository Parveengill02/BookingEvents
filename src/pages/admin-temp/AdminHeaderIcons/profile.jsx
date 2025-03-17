import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AdminProfile() {
  const [admin, setAdmin] = useState({
    email: "parveenkaur@example.com",
    password: "",
    confirmPassword: "",    
    profilePic: "/images/parveengill.jpg",
    personalInfo: {
      FirstName: "Parveen",
      LastName: "Kaur",
      DateOfBirth: "02-08-2003",
      MobileNo: "6283649108",
    },
  });

  const [editPersonal, setEditPersonal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e, section, field) => {
    if (section) {
      setAdmin((prevAdmin) => ({
        ...prevAdmin,
        [section]: {
          ...prevAdmin[section],
          [field]: e.target.value,
        },
      }));
    } else {
      setAdmin((prevAdmin) => ({
        ...prevAdmin,
        [field]: e.target.value,
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (admin.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (admin.password !== admin.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAdmin((prevAdmin) => ({
        ...prevAdmin,
        profilePic: imageUrl,
      }));
    }
  };

  const handleSave = () => {
    if (validateForm()) {
      alert("Profile Updated Successfully!");
      setEditPersonal(false);
    }
  };

  return (
    <div className="admin-account-page">
      <div className="admin-account-card">
        <h2 className="admin-profile-title">Admin Profile</h2>
        <div className="admin-profile-header">
          <div className="admin-profile-photo-wrapper">
            <img src={admin.profilePic} alt="Profile" className="admin-profile-photo" />
            <input type="file" accept="image/*" onChange={handleFileChange} className="admin-hidden-input" id="upload-photo" />
            <label htmlFor="upload-photo" className="admin-edit-photo-btn">
              <i className="fa-solid fa-camera"></i>
            </label>
          </div>
          <h2 className="admin-profile-name">
            {admin.personalInfo.FirstName} {admin.personalInfo.LastName}
          </h2>
        </div>
        <div className="admin-profile-form">
          <div className="admin-profile-field">
            <label className="admin-profile-label">Email</label>
            <input type="email" name="email" value={admin.email} className="admin-info-input" readOnly />
          </div>
        </div>
        <div className="admin-profile-section">
          <div className="admin-profile-section-header">
            <h3>Change Password</h3>
          </div>
          <div className="admin-profile-field">
            <label className="admin-profile-label">New Password</label>
            <input type="password" name="password" value={admin.password} onChange={(e) => handleChange(e, null, "password")} className="admin-info-input" />
            {errors.password && <p className="admin-error-message">{errors.password}</p>}
          </div>
          <div className="admin-profile-field">
            <label className="admin-profile-label">Confirm Password</label>
            <input type="password" name="confirmPassword" value={admin.confirmPassword} onChange={(e) => handleChange(e, null, "confirmPassword")} className="admin-info-input" />
            {errors.confirmPassword && <p className="admin-error-message">{errors.confirmPassword}</p>}
          </div>
        </div>
        <div className="admin-profile-section">
          <div className="admin-profile-section-header">
            <h3>Personal Information</h3>
            <button className="admin-profile-edit-btn" onClick={() => setEditPersonal(!editPersonal)}>
              {editPersonal ? "Save" : "Edit"}
            </button>
          </div>
          <div className="admin-profile-section-grid">
            {Object.entries(admin.personalInfo).map(([key, value]) => (
              <div className="admin-info-item" key={key}>
                <p className="admin-profile-label">{key.replace(/([A-Z])/g, " $1")}</p>
                {editPersonal ? (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e, "personalInfo", key)}
                    className="admin-info-input"
                  />
                ) : (
                  <p className="admin-profile-value">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleSave} className="admin-profile-save-button">
          Save Changes
        </button>
      </div>
    </div>
  );
}
