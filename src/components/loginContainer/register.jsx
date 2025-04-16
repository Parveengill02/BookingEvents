import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { USER } from '../config/endpoints';
function SignUpComponent({setOpen}) {

    // Validation Schema for Registration
    const validationSchema = Yup.object({
        fullname: Yup.string()
            .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed")
            .required("Full Name is required"),
        username: Yup.string()
            .matches(/^[A-Za-z0-9]+$/, "Only alphanumeric characters allowed")
            .required("Username is required"),
        Email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        number: Yup.string()
            .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
            .required("Phone number is required"),
        Password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .matches(/[A-Za-z]/, "Must contain at least one letter")
            .matches(/[0-9]/, "Must contain at least one number")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("Password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const onRegisterSubmit = async (data) => {
        console.log(data, "check")
    
    const payload={
        Email: data.Email,
        Password: data.Password,
        fullname:data.fullname,
        username:data.username,
        number:data.number
    }
       console.log(payload,"payload")
    try{
        const res= await axios.post(`${USER.SIGN_UP}`,payload)
        toast.success(`signup Successfully`)
        setOpen(false);
        alert("Please verify your email to complete registration.");
    }
    catch(error){
    console.log(error)
// toast.error(`${error.response.data.message}`)
    }
}


console.log(errors,"err")
    return (

        <form onSubmit={handleSubmit(onRegisterSubmit)} className="auth-register-form">

            <div className="auth-register-group">
                <label className="auth-register-label">Full Name</label>
                <input
                    {...register("fullname")}
                    type='text'
                    className="auth-register-input"
                    placeholder="" // Keeps input empty but allows floating label effect
                />
                <span className="auth-register-error">{errors?.fullname?.message}</span>
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
                    {...register("Email")}
                    type='text'
                    className="auth-register-input"
                    placeholder="" // Keeps input empty but allows floating label effect
                />
                <span className="auth-register-error">{errors?.Email?.message}</span>
            </div>
            <div className="auth-register-group">
                <label className="auth-register-label">Phone </label>
                <input
                    {...register("number")}
                    type='text'
                    className="auth-register-input"
                    placeholder="" // Keeps input empty but allows floating label effect
                />
                <span className="auth-register-error">{errors?.number?.message}</span>
            </div>
            <div className="auth-register-group">
                <label className="auth-register-label">Password</label>
                <input
                    {...register("Password")}
                    type='password'
                    className="auth-register-input"
                    placeholder="" // Keeps input empty but allows floating label effect
                />
                <span className="auth-register-error">{errors?.Password?.message}</span>
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
