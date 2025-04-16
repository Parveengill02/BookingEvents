import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username:"",
    phoneNumber: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  
  let token = localStorage.getItem('acess_token')
  console.log(token )
  const[profileData,SetprofileData]=useState({});
const [editdetail , seteditdetail]=useState(false);
const navigate=useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
  };



  const getUserDetails= async()=>{
    try{
       let result=await axios.get('http://localhost:9000/api/user/userProfile',{
       headers:{
        acess_token:token
       }
      
    })
    console.log("✅ Full API result:", result);
    console.log("📦 profileData to be set:", result?.data?.data);

    if (result.status===200){
      SetprofileData(result?.data?.data)
    }
    else if  (result.status===401){
        localStorage.removeItem('acess_token')
        navigate('/login')
      }
    }
    catch(error){
      if(error.status===401){
        localStorage.removeItem('acess_token')
        navigate('/')
      }
     console.log(error)
    }
  }
  useEffect(()=>{
    getUserDetails()
  },[])

  useEffect(()=>
  {
    setFormData({
      fullName: profileData?.user_detail?.fullname,
    username:profileData?.user_detail?.username,
    phoneNumber: profileData?.user_detail?.number,
    email: profileData?.Email,
    })
  },[profileData])
  console.log(formData,"userProfiledata")
  console.log(profileData)
  return (
    <div className="user-profile-container">
      <h2 className="user-profile-title">MY ACCOUNT</h2>
      <form onSubmit={handleSubmit} className="user-profile-form">
        
        <label className="user-profile-label">FULL NAME</label>
        <input type="text" name="fullName" value={formData?.fullName} onChange={handleChange} className="user-profile-input" />
        <label className="user-profile-label">USER NAME</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} className="user-profile-input" />


        <label className="user-profile-label">PHONE NUMBER</label>
        <input type="text" name="phoneNumber" value={formData?.phoneNumber} onChange={handleChange} className="user-profile-input" />

        <label className="user-profile-label">EMAIL</label>
        <input type="email" name="email" value={formData?.email} onChange={handleChange} className="user-profile-input" readOnly />

        <div className="user-profile-password-container">
          <div className="user-profile-password-box">
            <label className="user-profile-label">NEW PASSWORD</label>
            <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} className="user-profile-input" />
            <small className="user-profile-hint">(leave blank if you don’t want to change it)</small>
          </div>
          <div className="user-profile-password-box">
            <label className="user-profile-label">NEW PASSWORD CONFIRMATION</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="user-profile-input" />
          </div>
        </div>

        <button type="submit" className="user-profile-update-button" onClick={()=>seteditdetail(!editdetail)}>
          {editdetail? "SAVE":"UPDATE"}
          </button>
      </form>
    </div>
  );
};

export default Profile;
