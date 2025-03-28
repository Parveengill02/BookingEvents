import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
function SignUpComponent() {

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
    const onRegisterSubmit = (e) => {
        alert("working")
    }
    return (

        <form onSubmit={handleSubmit(onRegisterSubmit)} className="auth-register-form">

            <div className="auth-register-group">
                <label className="auth-register-label">Full Name</label>
                <input
                    {...register("fullName")}
                    type='text'
                    className="auth-register-input"
                    placeholder="" // Keeps input empty but allows floating label effect
                />
                <span className="auth-register-error">{errors?.fullName?.message}</span>
            </div>
            <div className="auth-register-group">
                <label className="auth-register-label">Username</label>
                <input
                    {...register("username")}
                    type='text'
                    className="auth-register-input"
                    placeholder="" // Keeps input empty but allows floating label effect
                />
                <span className="auth-register-error">{errors?.username?.message}</span>
            </div>
            <div className="auth-register-group">
                <label className="auth-register-label">Email</label>
                <input
                    {...register("email")}
                    type='text'
                    className="auth-register-input"
                    placeholder="" // Keeps input empty but allows floating label effect
                />
                <span className="auth-register-error">{errors?.email?.message}</span>
            </div>
            <div className="auth-register-group">
                <label className="auth-register-label">Phone </label>
                <input
                    {...register("phone")}
                    type='text'
                    className="auth-register-input"
                    placeholder="" // Keeps input empty but allows floating label effect
                />
                <span className="auth-register-error">{errors?.phone?.message}</span>
            </div>
            <div className="auth-register-group">
                <label className="auth-register-label">Password</label>
                <input
                    {...register("password")}
                    type='password'
                    className="auth-register-input"
                    placeholder="" // Keeps input empty but allows floating label effect
                />
                <span className="auth-register-error">{errors?.password?.message}</span>
            </div>
            <div className="auth-register-group">
                <label className="auth-register-label">Confirm password</label>
                <input
                    {...register("confirmPassword")}
                    type='password'
                    className="auth-register-input"
                    placeholder="" // Keeps input empty but allows floating label effect
                />
                <span className="auth-register-error">{errors?.confirmPassword?.message}</span>
            </div>
            <button type="submit" className="auth-register-button">Register</button>
        </form>
    )
}

export default SignUpComponent
