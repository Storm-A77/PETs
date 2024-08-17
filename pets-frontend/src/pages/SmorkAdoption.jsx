import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Smork from '../imgs/Smork.png'

function SmorkAdoption(props) {
    const [petAdopt, setPetAdopt] = useState({
        id:"",
        petname: "",
        petspecies: "",
        petphoto:"",
        userid: null,
        petdescrip:""
    })
    useEffect(() => {
        if (props.user && props.user.id) {
            //Getting image from our code on line 18 and put it into a const
            //transforming our image into a blob and then turn it into base64string
            //replace below is cleaning up our string so our DB can read it.
            //Once the image is converted, we set it to petphoto on 31
            //make sure to import the photo instead of using the filepath
            const loadImage = async () => {
                try {
                    const smorkphoto = await fetch(Smork) 
                    console.log(smorkphoto)
                    const blob = await smorkphoto.blob()
                    const reader = new FileReader()
                    reader.onloadend = ()=>{
                        const base64string = reader.result.replace("data:", "").replace(/^.+,/, "");
                   
                    setPetAdopt(prevPet => ({
                        ...prevPet,
                        petspecies: "Smork",
                        petphoto: base64string ,
                        userid: props.user.id
                    }));
                 }
                 reader.readAsDataURL(blob);
                } catch (error) {
                    console.error("Error loading image", error);
                }
            };

            loadImage();
        }
    }, [props.user]);

const onInputChange = (e) => {
    setPetAdopt({...petAdopt,[e.target.name]:e.target.value})
    console.log("current pet", petAdopt)
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting pet", petAdopt)
    try {
        const response = await axios.post(`http://localhost:8080/${props.user.id}/addpet`, petAdopt);
        console.log("Data saved!", response.data);
    } catch (error) {
        console.error("Error saving data", error);
    }
}
  return (
    <>
    
<div className='bg-stary bg-cover min-h-screen '>
<section className="">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Please pick a name for your new friend!</h1>
           <div className='mt-16'></div>
    <form action='submit' onSubmit={(e)=> onSubmit(e)}>
        <input onChange={(e)=> onInputChange(e)} type={"text"} value={petAdopt.petname} name="petname" id="" placeholder='Enter a name' />
        
        <button className='absolute top-[500px] left-[700px] w-[150px] h-[50px]  text-lg text-black bg-[#77dd77] border border-gray-200 rounded-lg shadow-md shadow-[#77dd77] z-12' onClick={onSubmit} >Submit</button>
    </form>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={Smork} alt="mockup"/>
        </div>                
    </div>
</section>
</div>
    </>
  )
}

export default SmorkAdoption
