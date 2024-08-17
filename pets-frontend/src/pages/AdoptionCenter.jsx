import React, { useState } from 'react'
import AlienCat from "../imgs/AlienCat.png"
import SpeechBubble from "../imgs/Speech.png"
import Adoption from "../imgs/Adoption.png"
import Smork from "../imgs/Smork.png"
import Fredrick from "../imgs/Fredrick.png"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card } from 'flowbite-react'


function AdoptionCenter(props) {
    


    
    return (
    <>
    <section className="bg-stary bg-cover h-[100vh] dark:bg-gray-900">
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <div className="flex items-center justify-center lg:order-first">
            <img src={Adoption} alt="mockup" className="w-full h-auto"/>
        </div>
        <div className="flex items-center lg:order-last">
            <div className='ml-10'>
                <h1 className="bg-white text-2xl font-extrabold mb-4 shadow-[#77dd77] shadow-md md:text-5xl xl:text-6xl dark:text-white">Welcome to the Adoption Agency!</h1>
                <p className="bg-white mb-6 text-black shadow-[#77dd77] shadow-md lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Below are all the pets that are currently available for adoption. Pick your favorite!</p>
            </div>
        </div>
    </div>  
    </section>

    <section className="bg-stary bg-cover dark:bg-gray-900">
    <div className="py-8 px-4 -my-32 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="flex flex-wrap justify-center gap-4"> {/* Add flex and gap classes here */}
        <Card
          className="max-w-sm shadow-[#77dd77] shadow-xl border-black border-4"
          imgAlt="Smork"
          imgSrc={Smork}
        >
          <div className="flex flex-col items-center justify-center flex-1 text-center -mt-16">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Smork
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Smork's are the cutest, cuddliest creatures this side of the Milky Way! Adopt yours today!
            </p>
            <Link to="/smorkadoption" className='py-3 px-10 m-2 bg-[#77dd77] font-extrabold rounded-xl border-black border-2'>Adopt!</Link>
          </div>
        </Card>
        <Card
          className="max-w-sm shadow-[#77dd77] shadow-xl border-black border-4"
          imgAlt="Fredrick"
          imgSrc={Fredrick}
        >
          <div className="flex flex-col items-center justify-center flex-1 text-center -mt-16">
            <h5 className="text-2xl mt-10 font-bold tracking-tight text-gray-900 dark:text-white">
              Fredrick
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Fredricks are rare! They are born on a Solar Eclipse every 50 years. Adopt yours today!
            </p>
            <Link to="/fredrickadoption" className='py-3 px-10 m-2 bg-[#77dd77] font-extrabold rounded-xl border-black border-2'>Adopt!</Link>
          </div>
        </Card>
      </div>
    </div>
  </section>

    </>
)
}

export default AdoptionCenter