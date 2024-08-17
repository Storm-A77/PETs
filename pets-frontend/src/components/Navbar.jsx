import React, { useEffect, useState,  } from 'react'
import Logo from '../imgs/Logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {
  const [loggedIn, setLoggedIn] = useState()
  
  
  useEffect(()=>{
    const id = props.user.id;
    setLoggedIn(id)
    
  },[props.user.id])

  const navigator = useNavigate()

  const signOut = () => {
    localStorage.removeItem("userid")
    props.setUser({
      id: undefined,
      email: "",
      password: "",
    })
    navigator("/")
  }

  return (
    <>
<nav className="bg-[#77dd77] dark:bg-gray-900 fixed w-[1550px] mx-40 p-4  z-20 top-0 start-0 mb-32 rounded-3xl border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <Link to="/"  className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} className="h-8" alt="PETs Logo"/>
      <span className="self-center font-alien text-2xl whitespace-nowrap dark:text-white">P.E.T.s</span>
    </Link>

  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      {loggedIn ? 
      <button onClick={signOut} type="button" className="text-white bg-[#218B82] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md shadow-black">Sign Out</button>
      :
      <Link to="/signin" type="button" className="text-white bg-[#218B82] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md shadow-black">Sign In</Link>
      } 
  </div>
  {loggedIn ?
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-6 md:px-3 md:p-0 mt-4 font-medium  shadow-black shadow-md border border-gray-100 rounded-lg bg-[#B6D8F2]  md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#B6D8F2] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/map">
            <FontAwesomeIcon icon={faMap}/>&nbsp;&nbsp;Map
        </Link>
      </li>
      <li>
        <Link to="/games"  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Games</Link>
      </li>
      <li>
        <Link to="/"  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shops</Link>
      </li>
      <li>
        <Link to="/adoption" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Adoption Agency</Link>
      </li>
      <li>
        <Link to="/profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</Link>
      </li>
    </ul>
  </div>
  :
  <div></div>
}
  </div>

</nav>



    </>
  )
}

export default Navbar