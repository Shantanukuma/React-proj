import React, { useContext } from 'react'
import UserContext from '../context/Usercontext'

function RegisterProfile() {
  const {user} = useContext(UserContext)
  if (!user) {
    return <div>Please Register Yourself</div>
  } else{
    return <div>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
        <div>Email: {user.email}</div>
    </div>
  }
}

export default RegisterProfile