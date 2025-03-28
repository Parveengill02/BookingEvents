import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
function LoginComponent() {

    // Validation Schema for Registration
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .matches(/[A-Za-z]/, "Must contain at least one letter")
            .matches(/[0-9]/, "Must contain at least one number")
            .required("Password is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const onLoginSubmit = (e) => {
        alert("working")
    }
    return (

        <form onSubmit={handleSubmit(onLoginSubmit)}>
            <div className="form-group">
                <input
                    {...register("email")}
                    type="text"
                    className="inputbox"
                    placeholder="Email"

                />
                <span className="error-text">{errors?.email?.message}</span>
            </div>

            <div className="form-group">
                <input
                    {...register("password")}
                    type="password"
                    className="inputbox"
                    placeholder="Password"
                />
                <span className="error-text">{errors.password?.message}</span>
            </div>

            <button type="submit" className="primary-button">LOG IN</button>
        </form>
    )
}

export default LoginComponent
