import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../../components/loginContainer';



const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const handleClick = () => {
    
      setOpen(true)
   
  }
  const [open, setOpen] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password) {
      try {
        await axios.post("http://localhost:9000/api/user/reset-password", { token, password });
        toast.success("Password reset successfully!");
        // setTimeout(() => {
        //   navigate('/login');
        // }, 2000);
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
      }
    } else {
      toast.error("Password is required");
    }
  };

  return (
    <>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">New Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>
            Reset Password
          </button>
        </form>
        {message && <p className="text-success text-center mt-3">{message}</p>}
        <ToastContainer />
      </div>
    </div>
    {
        open &&
        <Login open={open} setOpen={setOpen} />
      }
    </>
  );
};

export default ResetPassword;
