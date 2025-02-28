import { useState } from "react";
import CustomModal from "../Modal";
import Registration from "../Registration";

function Login({ open, setOpen }) {
  const [ropen, setRopen] = useState(false)
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

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Email :", email);
    console.log("Password :", password);

  }
  const handleSignUpClick = () => {
    // setOpen(false);
    setRopen(true);
  }
  const handleLoginClick = () => {
    setOpen(true);
    setRopen(false);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <CustomModal open={open} setOpen={setOpen} >
        {ropen && (
          <div className="form-container2">
            <h2 className="form-heading">Registration </h2>
            <p>Already have an account?
              <button
                type="button"
                style={{ color: 'burlywood' }}
                onClick={handleLoginClick}
              >
                Log IN
              </button>
            </p>
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
        )}
        {
          !ropen && (
            <div className="login-container">
              <h2>LOG IN</h2>

              <form onSubmit={handlesubmit} className='container'>
                <p>Don't have an account?
                  <button
                    type="button"
                    style={{ color: 'burlywood' }}
                    onClick={handleSignUpClick}
                  >
                    Sign Up
                  </button>
                </p>
                <button className="social-button-facebook">
                  <img src="images/icons8-facebook-logo-48.png" alt="Facebook" style={{ height: '29px' }} />
                  CONTINUE WITH FACEBOOK
                </button><br />
                <button className="social-button-google">
                  <img src="images/icons8-google-logo-48.png" alt="Google" style={{ height: '25px' }} />
                  CONTINUE WITH GOOGLE
                </button><br />
                <input type="email" className="inputbox" placeholder="Email" onChange={(e) => setemail(e.target.value)} /><br />
                <input type="password" className="inputbox" placeholder="Password" onChange={(e) => setpassword(e.target.value)} /><br />
                <button className="primary-button">LOG IN</button><br />
                <a href="#" style={{ color: 'burlywood' }}>Forgot Password?</a>
              </form>
            </div>
          )
        }

      </CustomModal>
      {/* <Registration open={ropen} setOpen={setRopen} /> */}
    </div>
  )
}

export default Login
