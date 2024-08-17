import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Card } from 'flowbite-react';


function Profile(props) {
const [pets, setPets] = useState([]);
const [hasnoPets, setHasNoPets] = useState(false);
const [petImgs, setPetImgs] = useState([]);
const [imageSrc, setImageSrc] = useState('');
  useEffect(() => {
   const fetchPets = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/${props.user.id}/pets`)
      setPets(response.data)
      if(response.data.length===0){

        setHasNoPets(true)
      }
      console.log(response.data)
      console.log(hasnoPets)
    } catch (error) {
      console.log(error)
    }
};
fetchPets();
},[petImgs, props.user.id])



if(!pets){
  return(
    <div>Loading...</div>
  )
}
  
  return (
  <>
    <body class="bg-stary bg-cover flex items-center justify-center min-h-screen">

  <div class="bg-white rounded-lg shadow-lg border border-gray-200 max-w-sm mx-auto p-6">
    <div class="flex flex-col items-center">
      <img class="w-32 h-32 rounded-full border-4 border-teal-500" src="https://picsum.photos/200" alt="Profie"/>
      <h2 class="text-2xl font-semibold mt-4">{props.user.email}</h2>
      <p class="text-gray-600 mt-1">TODO: username (swap this with email)</p>
    </div>
    
    <div class="mt-6">
      <h3 class="text-lg font-semibold">Bio</h3>
      <p class="text-gray-700 mt-2">TODO : creating field of user desc. using what is in DB</p>
    </div>

    <div class="mt-6">
      <h3 class="text-lg font-semibold">TODO: create field of user interests using what is in DB</h3>
      <ul class="list-disc list-inside text-gray-700 mt-2">
        <li>Favorite Game: Chess</li>
        <li>Favorite Color: Blue</li>
        <li>Favorite Pet: Dog</li>
      </ul>
    </div>
  </div>

</body>
{hasnoPets ? <div className='font-extrabold bg-white'>Looks like you don't have any pets! Let's go to the Adoption Agency to find you a pet!</div>

:
<div className="bg-cover bg-stary flex flex-wrap justify-center gap-4 p-4 -mt-24">      
  {pets.map((pet)=>{
        return(
          <Card
          className="max-w-sm shadow-[#77dd77] shadow-xl border-black border-4"
          imgAlt="Your pet"
          >
          <img className='mb-10' src={`data:img/jpg;base64,${pet.petphoto}`} alt='pet'/>             
          <div class="flex flex-col items-center justify-center flex-1 text-center -mt-16">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pet.petname}
          </h5>
          <p className="font-normal  text-gray-700 dark:text-gray-400">
            {pet.petbirthday}
          </p>
          <p className="font-normal  text-gray-700 dark:text-gray-400">
            {pet.petdescrip}
          </p>
          </div>
        </Card>
      )})}
    </div>
    }
    </>
  )
}

export default Profile