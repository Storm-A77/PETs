import { useState } from 'react';
import ProgressNavbar from "../assets/ProgressNavbar"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AlienPoint from "../imgs/AlienPoint2.png"
import AlienLock from "../imgs/AlienLock.png"
import AlienCheer from "../imgs/AlienCheer.png"
import axios from 'axios';


const SignUp = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
 

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };


  const onInputChange = (e) => {
    props.setUser({...props.user,[e.target.name]:e.target.value})
  }

  const navigator = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user",props.user)
    navigator("/adoption")
  }


  const steps = ['Step 1', 'Step 2', 'Step 3']; 

  return (
    <div className='bg-[#363951] w-full h-[100vh]'>   
      <div>
      <ProgressNavbar steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <form action="submit" onSubmit={(e) => onSubmit(e)}>
      <div className="container mx-auto py-8">
        {currentStep === 0 && (
            <div className='-mt-16'>
              <div className='relative'>
              <div className='absolute top-[200px] left-[500px] w-auto h-[250px] p-8 bg-[#77dd77] border border-gray-200 rounded-lg shadow-md shadow-black z-12'> 
            <h1 className="relative mt-3 p-1 text-lg font-bold font-sans">Welcome to the World of P.E.T.s, my new friend!</h1>
            <h2 className='p-1 mt-0 text-md font-semibold font-sans'>Before we can gather our new pets, we need to know about you!</h2>
              <p className='p1-1 mt-2 font-semibold'>Let's start with an email. Please enter an email!</p>
              <input
                      type={"text"}
                      className="p-2 m-12  translate-x-24"
                      placeholder="Enter your email"
                      name="email"
                      value={props.user.email}
                      onChange={(e) => onInputChange(e)}
                    />                            
          </div>
          <img src={AlienPoint} alt='Alien pointing left' className='absolute w-[350px] h-[350px] top-[250px] right-[150px] z-0'/>
          <button onClick={handleNextStep} className="absolute top-[500px] left-[700px] w-[150px] h-[50px]  text-lg text-black bg-[#77dd77] border border-gray-200 rounded-lg shadow-md shadow-[#77dd77] z-12">
                Continue
              </button>
              </div>
            </div>
                  )}
        {currentStep === 1 && (
           <div className='-mt-16'>
           <div className='relative'>
       <div className='absolute top-[200px] left-[500px] w-[700px] h-[250px] p-8 bg-[#77dd77] border border-gray-200 rounded-lg shadow-md shadow-black z-12'> 
           <p className='relative mt-3 p-1 text-lg font-bold font-sans'>Now we need to create a password for you.</p>
           <p className='p-1 mt-0 text-md font-semibold font-sans'>Think of something that could be easy for you to remember.</p>
           <p className='p-1 mt-0 text-md font-semibold font-sans'>But also think of something that might be hard for someone to guess.</p>
           <input
                   type={"password"}
                   className="p-2 m-12  translate-x-24"
                   placeholder="Enter your password"
                   name="password"
                   value={props.user.password}
                   onChange={(e) => onInputChange(e)}
                 />                            
       </div>
       <img src={AlienLock} alt='Alien pointing left' className='absolute w-[350px] h-[350px] top-[250px] right-[150px] z-0'/>
       <button onClick={handleNextStep} className="absolute top-[500px] left-[700px] w-[150px] h-[50px]  text-lg text-black bg-[#77dd77] border border-gray-200 rounded-lg shadow-md shadow-[#77dd77] z-12">
             Continue
           </button>
           </div>
         </div>
        )}
        {currentStep === 2 && (
        <div className='-mt-1'>
           <div className='relative'>
       <div className='absolute top-[200px] left-[500px] w-[700px] h-[250px] p-8 bg-[#77dd77] border border-gray-200 rounded-lg shadow-md shadow-black z-12'> 
         <h1 className="p-3 text-xl font-bold font-sans">Awesome job!</h1>
           <p className='w-'>You're ready to go out and meet your first pet!</p>
           <p></p>
           
       </div>
       <img src={AlienCheer} alt='Alien pointing left' className='absolute w-[350px] h-[350px] top-[250px] right-[150px] z-0'/>
       <button onClick={onSubmit} className="absolute top-[500px] left-[700px] w-[150px] h-[50px]  text-lg text-black bg-[#77dd77] border border-gray-200 rounded-lg shadow-md shadow-[#77dd77] z-12">
        Let's go!
           </button>
           </div>
         </div>
        )}
        {/* Repeat the above pattern for other steps */}
        {/* ... */}
      </div>
      </form>
    </div>
    </div>
  );
}

export default SignUp;