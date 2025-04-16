import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FaEnvelope } from "react-icons/fa";
import CustomModal from "../Modal";
import LoginComponent from "./login";
import SignUpComponent from "./register";
import { FRONTEND_URL, USER } from "../config/endpoints";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';
import { Link } from "react-router-dom";
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
    setOpen(false); // Close the modal after successful registration
  };

  const onLoginSubmit = (data) => {
    console.log("Login Data:", data);
    setOpen(false); // Close the modal after successful registration
  };



  const loginButton = useGoogleLogin({
    onSuccess: tokenResponse => {
    
      console.log(tokenResponse,tokenResponse?.access_token);
      fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenResponse?.access_token}`
        }
      })
      .then(res => res.json())
                .then(async userInfo => {
                    console.log("User Info:", userInfo);
                    try {
                      const res = await axios.post(`${USER.GOOGLE_LOGIN}`, userInfo)
                      localStorage.setItem("acess_token", res?.data?.data?.token);
                      localStorage.setItem("user_details", JSON.stringify(res?.data?.data?.user_details));
                      toast.success(`Login Successfully`)
                      setOpen(false);
                      reset();
                      navigate("/");
                  }
                  catch (error) {
                      console.log(error)
                  }
          
              });
    }
  })
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
            <img src={`${FRONTEND_URL}/images/icons8-facebook-logo-48.png`} alt="Facebook" style={{ height: "29px" }} />

            CONTINUE WITH FACEBOOK
          </button>
          <button type="button" onClick={() => loginButton()} className="social-button-google">
            <img src={`${FRONTEND_URL}/images/icons8-google-logo-48.png`} alt="Facebook" style={{ height: "29px" }} />
            CONTINUE WITH GOOGLE
          </button>
          <button className="social-button-email" onClick={() => {

            setropen(false);
            setRegisterOpen(true);


          }}>
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
            <img src={`${FRONTEND_URL}/images/icons8-facebook-logo-48.png`} alt="Facebook" style={{ height: "29px" }} />
            CONTINUE WITH FACEBOOK
          </button>
          <button type="button" onClick={() => loginButton()} className="social-button-google">
            <img src={`${FRONTEND_URL}/images/icons8-google-logo-48.png`} alt="Facebook" style={{ height: "29px" }} />

            CONTINUE WITH GOOGLE
          </button>
          <LoginComponent setOpen={setOpen} />
          {/* Forgot Password Link */}
          <Link to="/password" className="forgot-password"
          onClick={() => setOpen(false)}>Forgot Password?</Link>
        </div>
      )}

      {/* Registration Form Modal */}
      <CustomModal open={registerOpen} setOpen={setRegisterOpen} className="CustomModal">
        <div className="auth-register-container">
          <h2 className="auth-register-title">Create an Account</h2>
          <SignUpComponent setOpen={setRegisterOpen} />
        </div>

      </CustomModal>
    </CustomModal>
  );
}

export default Login;
