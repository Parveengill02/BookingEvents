import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomModal from "../Modal";

function Login({ open, setOpen }) {
  const [ropen, setRopen] = useState(false);

  // Validation Schema for Registration
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed")
      .required("Full Name is required"),
    username: Yup.string()
      .matches(/^[A-Za-z0-9]+$/, "Only alphanumeric characters allowed")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[A-Za-z]/, "Must contain at least one letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onRegisterSubmit = (data) => {
    alert("Registration Successful!");
    console.log("Registration Data:", data);
  };

  // Validation Schema for Login
  const loginSchema = Yup.object({
    loginEmail: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    loginPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onLoginSubmit = (data) => {
    console.log("Login Data:", data);
  };

  const handleSignUpClick = () => setRopen(true);
  const handleLoginClick = () => setRopen(false);

  return (
    <div>
      <CustomModal open={open} setOpen={setOpen}>
        {ropen ? (
          <div className="form-container">
            <h2>Registration</h2>
            <p>
              Already have an account?{" "}
              <button type="button" style={{ color: "burlywood" }} onClick={handleLoginClick}>
                Log In
              </button>
            </p>
            <form onSubmit={handleSubmit(onRegisterSubmit)}>
              {["fullName", "username", "email", "phone", "password", "confirmPassword"].map((field) => (
                <div key={field} className="form-group">
                  <label>{field.replace(/([A-Z])/g, ' $1').trim()}:</label>
                  <input type={field.includes("password") ? "password" : "text"} {...register(field)} className="form-input" />
                  {errors[field] && <span className="error-text">{errors[field].message}</span>}
                </div>
              ))}
              <button type="submit" className="form-button">Register</button>
            </form>
          </div>
        ) : (
          <div className="login-container">
            <h2>LOG IN</h2>
            <p>
              Don't have an account?{" "}
              <button type="button" style={{ color: "burlywood" }} onClick={handleSignUpClick}>
                Sign Up
              </button>
            </p>
            <button className="social-button-facebook">
              <img src="images/icons8-facebook-logo-48.png" alt="Facebook" style={{ height: "29px" }} />
              CONTINUE WITH FACEBOOK
            </button>
            <br />
            <button className="social-button-google">
              <img src="images/icons8-google-logo-48.png" alt="Google" style={{ height: "25px" }} />
              CONTINUE WITH GOOGLE
            </button>
            <br />
            <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
              <input
                type="email"
                className="inputbox"
                placeholder="Email"
                {...loginRegister("loginEmail")}
              />
              <p>
              {loginErrors.loginEmail && <span className="error-text">{loginErrors.loginEmail.message}</span>}
              </p>
              <br />

              <input
                type="password"
                className="inputbox"
                placeholder="Password"
                {...loginRegister("loginPassword")}
              />
              <p>
              {loginErrors.loginPassword && <span className="error-text">{loginErrors.loginPassword.message}</span>}
              </p>
              <br />

              <button type="submit" className="primary-button">LOG IN</button>
              <br />
              <a href="#" style={{ color: "burlywood" }}>Forgot Password?</a>
            </form>
          </div>
        )}
      </CustomModal>
    </div>
  );
}

export default Login;
