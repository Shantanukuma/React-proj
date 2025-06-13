import React, { useContext } from 'react'
import UserContext from '../context/Usercontext'

function ContactProfile() {
    const {user} = useContext(UserContext)
    // if (!user) {
    //     return <div>Please login</div>
    // }
    // else{
    //     return <div>Welcome {user.number}</div>
    // }
    return <div>{user? user.number : "please login"} </div>
     

    

  
}

export default ContactProfile