import React from 'react'
import Navbar from './Navbar'

function LoginWrapper(props) {
  return (
    <div>
        <div user={props.user} setUser={props.setUser}></div>
        <div>{props.children}</div>
    </div>
)
}

export default LoginWrapper