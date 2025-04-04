import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { USER } from '../components/config/endpoints'
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Login from '../components/loginContainer';

const VerifyEmail = () => {
    const [open, setOpen] = useState(false)

    const {token} = useParams()
const [count,setCount]=useState(0)
const VerifyUserEmail = async(token)=>
{
  setCount(2)
  try{

    let payload={
      token:token
    }
    const res=   await axios.post(`${USER.VERIFY_EMAIL}`,payload)
    console.log(res)
    if(true){
    }
  }catch(error){
    console.log(error)
  }
}

useEffect(()=>
{
  VerifyUserEmail(token)

},[])

console.log(token,"tokenenen")
const navigate = useNavigate();
  return (
    <div className="email-verified-container">
      <div className="email-verified-box">
        <CheckCircle size={70} className="email-verified-icon" />
        <h2 className="email-verified-title">Email Verified!</h2>
        <p className="email-verified-text">
          Your account has been successfully verified. You can now log in.
        </p>
        <button 
          onClick={() => setOpen(true)} 
          className="email-verified-button"
        >
          Go to Login
        </button>
      </div>
      <Login open={open} setOpen={setOpen}  />
    </div>
  )
}

export default VerifyEmail