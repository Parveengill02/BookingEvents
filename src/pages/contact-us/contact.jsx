import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FaFacebookF, FaInstagram, FaTwitter,FaPinterest } from "react-icons/fa";

export default function ContactUs() {
  

  
const validationSchema = Yup.object({
        fullName: Yup.string()
            .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed")
            .required("Full Name is required"),
            email: Yup.string()
                        .email("Invalid email format")
                        .required("Email is required"),
                        message: Yup.string()
                        .trim()
                        .min(5, 'Message must be at least 5 characters long')
                        .max(500, 'Message cannot exceed 500 characters')
                        .required('Message is required'),
                    });
                    const {
                            register,
                            handleSubmit,
                            formState: { errors },
                        } = useForm({
                            resolver: yupResolver(validationSchema),
                        });
                        const onRegisterSubmit = (e) => {
                            alert("Message sent! We will reach out to you soon.")
                        }
  return (
    <div className="contact-page-container">
      <div className="contact-page-box">
        <h2 className="contact-page-title">"Reach Out & Let’s Make Magic Happen!"</h2>
        <div className="contact-page-grid">
          <div>
            <h3 className="contact-page-subtitle">Contact Information</h3>
            <p className="contact-page-text">"Are you a vendor looking to showcase your services or a venue owner wanting to list your space? Or do you have questions about planning your next event? Get in touch with us today!"
</p>
            <div className="contact-page-info">
              <p className="contact-page-item">📍 Gill's Event Elegance,Sector-63, Mohali</p>
              <p className="contact-page-item">📞 +91 6283649118</p>
              <p className="contact-page-item">✉️ eventelgance02@gmail.com</p>
            </div>
            <div className="contact-page-social">
            <a href="#" className="contact-page-icon"><FaFacebookF /></a>
              <a href="#" className="contact-page-icon"><FaInstagram /></a>
              <a href="#" className="contact-page-icon"><FaTwitter /></a>
              <a href="#" className="contact-page-icon"><FaPinterest /></a>
            </div>
          </div>
          <div>
            <h3 className="contact-page-subtitle">Send Us a Message</h3>
            <form className="contact-page-form" onSubmit={handleSubmit(onRegisterSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input   {...register("fullname")} type="text" id="name" required />
                <span className="auth-register-error">{errors?.fullName?.message}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input {...register("email")} type="email" id="email" required />
                <span className="auth-register-error">{errors?.email?.message}</span>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea {...register("message")}id="message" rows="4" required></textarea>
                <span className="auth-register-error">{errors?.message?.message}</span>
              </div>
              <button type="submit" className="contact-page-btn">Send Message</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
