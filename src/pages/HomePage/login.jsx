import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { USER } from '../../components/config/endpoints';

function Login() {
  const validationSchema = Yup.object({
    Email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    Password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[A-Za-z]/, "Must contain at least one letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .required("Password is required"),
  });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onLoginSubmit = async (data) => {
    const payload = {
      Email: data.Email,
      Password: data.Password,
    };

    try {
      const res = await axios.post(`${USER.LOGIN}`, payload);
      localStorage.setItem("acess_token", res?.data?.data?.token);
      localStorage.setItem("user_details", JSON.stringify(res?.data?.data?.user_details));

      toast.success(`Login Successfully`);
      
      // Reset form fields after login
      reset();

      // Navigate to homepage or desired page after successful login
      navigate("/");

    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="form-group">
        <input
          {...register("Email")}
          type="text"
          className="inputbox"
          placeholder="Email"
        />
        <span className="error-text">{errors?.Email?.message}</span>
      </div>

      <div className="form-group">
        <input
          {...register("Password")}
          type="password"
          className="inputbox"
          placeholder="Password"
        />
        <span className="error-text">{errors.Password?.message}</span>
      </div>

      <button type="submit" className="primary-button">LOG IN</button>
    </form>
  );
}

export default Login;
