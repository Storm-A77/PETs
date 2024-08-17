import Navbar from '../components/Navbar'
import React from 'react'
import Alien from '../imgs/AlienWegg.png'
import Smork from '../imgs/Smork.png'
import Steve from '../imgs/Steve.png'
import Feed from '../imgs/Feed.png'
import Bath from '../imgs/Bath.jpg'
import Logo from '../imgs/Logo.png'
import SpeechBubble from '../imgs/Speech.png'
import { Carousel } from 'flowbite-react'
function Home() {

  return (
    <>
  
    <div className='bg-spacebg  bg-[length:2500px] w-full h-[100vh] overscroll-contain'>
    <section className="dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700  rounded-full" role="alert">
        </div>
        <h1 className="font-alien p-2 mb-4 text-4xl font-extrabold mt-3 text-[#77dd77] md:text-5xl lg:text-6xl"><span className='bg-[#0e0d1d]'>Welcome to the world of P.E.T.s!</span></h1>
        <p className="mb-8 text-lg font-normal text-[#218B82] lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Collect over 15 different pets from across the galaxies!</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        </div>
        
    
        <img src={SpeechBubble} className='w-96 h-52 scale-x-[-1] bottom-0 absolute right-16 -translate-y-36 -translate-x-72' alt='speech bubble'/>
        <div className='text-2xl bottom-0 absolute right-32 -translate-y-64 -translate-x-72 font-bold'>Let's raise some critters!</div>
        <img src={Alien} className=' w-72 h-60 right-32 bottom-0 absolute' alt="an alien with an egg" />
    </div>
</section> 

<div className="translate-x-24 -translate-y-[95px] shadow-xl shadow-[#77dd77] w-[750px] h-[550px] bg-black">
    <Carousel>
      <img src={Smork} className='' alt="" />
      <img src={Steve} alt="" />
      <img src={Feed} alt="" />
    </Carousel>
</div>
    </div>
    </>
  )
}

export default Home