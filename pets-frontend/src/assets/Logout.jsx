import React from 'react'
import { Link } from 'react-router-dom'


const signOut = (props) => {
    localStorage.removeItem("userid")
    props.setUser({
        id: undefined,
        email: "",
        password: "",
        isAdmin: false
    
      })
  navigator("/")
}

function Logout() {
    return(
        <button className=''>Logout</button>
    )
}

export default Logout