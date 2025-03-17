import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FaEnvelope } from "react-icons/fa";
import CustomModal from "../Modal";

function Login({ open, setOpen, ropen, setropen }) {
  // State for Registration Modal
  const [registerOpen, setRegisterOpen] = useState(false);

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

  // Separate Form for Login
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    alert("Registration Successful!");
    console.log("Registration Data:", data);
  };

  const onLoginSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <CustomModal open={open} setOpen={setOpen} className="CustomModal">
      {ropen ? (
        // Registration Choice Section
        <div className="form-container">
          <h2>Start your celebrations here...</h2>
          <p>
            Already have an account?{" "}
            <button type="button" className="signup-button" onClick={() => setropen(false)}>
              Log In...
            </button>
          </p>
          <button className="social-button-facebook">
            <img src="images/icons8-facebook-logo-48.png" alt="Facebook" style={{ height: "29px" }} />
            CONTINUE WITH FACEBOOK
          </button>
          <button className="social-button-google">
            <img src="images/icons8-google-logo-48.png" alt="Google" style={{ height: "25px" }} />
            CONTINUE WITH GOOGLE
          </button>
          <button className="social-button-email" onClick={() => setRegisterOpen(true)}>
            <FaEnvelope style={{ marginRight: "8px" }} /> SIGN UP WITH EMAIL
          </button>
        </div>
      ) : (
        // Login Form Section
        <div className="login-container">
          <h2>LOG IN</h2>
          <p>
            Don't have an account?{" "}
            <button type="button" className="signup-button" onClick={() => setropen(true)}>
              Sign Up...
            </button>
          </p>
          <button className="social-button-facebook">
            <img src="images/icons8-facebook-logo-48.png" alt="Facebook" style={{ height: "29px" }} />
            CONTINUE WITH FACEBOOK
          </button>
          <button className="social-button-google">
            <img src="images/icons8-google-logo-48.png" alt="Google" style={{ height: "25px" }} />
            CONTINUE WITH GOOGLE
          </button>
          
          <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
            <div className="form-group">
              <input
                type="text"
                className="inputbox"
                placeholder="Email"
                {...loginRegister("loginEmail", { required: "Email is required" })}
              />
              <span className="error-text">{loginErrors.loginEmail?.message}</span>
            </div>

            <div className="form-group">
              <input
                type="password"
                className="inputbox"
                placeholder="Password"
                {...loginRegister("loginPassword", { required: "Password is required" })}
              />
              <span className="error-text">{loginErrors.loginPassword?.message}</span>
            </div>

            <button type="submit" className="primary-button">LOG IN</button>
          </form>
          
          {/* Forgot Password Link */}
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
      )}

      {/* Registration Form Modal */}
      <CustomModal open={registerOpen} setOpen={setRegisterOpen} className="CustomModal">
      <div className="auth-register-container">
  <h2 className="auth-register-title">Create an Account</h2>
  <form onSubmit={handleSubmit(onRegisterSubmit)} className="auth-register-form">
    {["FullName", "Username", "Email", "Phone", "Password", "ConfirmPassword"].map((field) => (
      <div key={field} className="auth-register-group">
        <input
          type={field.includes("password") ? "password" : "text"}
          {...register(field)}
          className="auth-register-input"
          placeholder=" " // Keeps input empty but allows floating label effect
        />
        <label className="auth-register-label">{field.replace(/([A-Z])/g, " $1").trim()}</label>
        <span className="auth-register-error">{errors[field]?.message}</span>
      </div>
    ))}
    <button type="submit" className="auth-register-button">Register</button>
  </form>
</div>

      </CustomModal>
    </CustomModal>
  );
}

export default Login;
