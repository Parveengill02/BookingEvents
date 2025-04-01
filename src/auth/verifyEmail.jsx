import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { USER } from '../components/config/endpoints'

const VerifyEmail = () => {

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

},[token])

console.log(token,"tokenenen")
  return (
    <div className='h-500'>
      <p>Email verification</p>

{/*       
      <button type='submit'>Click here to verify </button> */}
    </div>
  )
}

export default VerifyEmail