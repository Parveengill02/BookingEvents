import React, { useState } from 'react';
import CustomModal from '../Modal';

function Registration({ ropen, setRopen }) {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
//   const handleLoginClick =()=>{
//     setOpen(true);
// }

  return (
    <div>
      <CustomModal open={ropen} setOpen={setRopen}>
        <div className="form-container2">
          <h2 className="form-heading">Registration</h2>
          {/* <p>Don't have an account? 
                         <button 
                         type="button"
                         style={{ color: 'burlywood' }} 
                         onClick={handleSignUpClick}
                     >
                         Sign Up
                     </button>
</p> */}
          <form onSubmit={handleSubmit}>
            {[
              { label: "Full Name", name: "fullName", type: "text" },
              { label: "Username", name: "username", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "text" },
              { label: "Password", name: "password", type: "password" },
              { label: "Confirm Password", name: "confirmPassword", type: "password" }
            ].map((field) => (
              <div className="form-group" key={field.name}>
                <label className="form-label2">{field.label}:</label>
                <input 
                  type={field.type} 
                  name={field.name} 
                  value={formData[field.name]} 
                  onChange={handleChange} 
                  required 
                  className="form-input"
                />
              </div>
            ))}
            <button type="submit" className="form-button">Register</button>
          </form>
        </div>
      </CustomModal>
    </div>
  );
}

export default Registration;
