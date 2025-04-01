import React from 'react'
import { useParams } from 'react-router'
import VerifyEmail from '../auth/verifyEmail'

 const Email = () => {
 const {token} = useParams()
  return (
    <div>
      
      <VerifyEmail/>
    </div>
  )
}

export default Email;