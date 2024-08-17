/* eslint-disable no-restricted-globals */
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function SignIn(props) {
 const navigator = useNavigate()

 const handleInput = (e) => {
    props.setUser({...props.user,[e.target.name]:e.target.value});
 }

 const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/signin",props.user)
    .then((response)=>{
        console.log(response.data)
        localStorage.setItem("userid",response.data.id)
        props.setUser(response.data)
        navigator("/profile")
    })
    .catch((e)=>{
        console.log(e)
    })
}

  return (
    <div className='bg-starfall bg-cover min-h-screen'>
      <div className="flex flex-col items-center justify-center -translate-y-24 py-12 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-[#032e4c] rounded-lg shadow-black shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label for="email" className="block mb-2 text-lg font-medium text-[#0768aa] dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" value={props.user.email} onChange={handleInput} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yourock@email.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-lg font-medium text-[#0768aa] dark:text-white">Password</label>
                      <input type="password" name="password" id="password" value={props.user.password} onChange={handleInput} placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      
                      <Link to='/forgotpass' className="text-lg font-medium text-[#0768aa] hover:underline dark:text-primary-500">Forget your password?</Link>
                  </div>
                  <button type="submit" className="w-full text-white bg-[#0768aa] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-lg font-bold text-[#0768aa] dark:text-gray-400">
                      Don’t have an account yet? <Link to='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
    </div>
  )
}

export default SignIn