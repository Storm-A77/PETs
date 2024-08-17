import React from 'react';
import { useNavigate } from 'react-router-dom';
import worldmap from '../imgs/PlanetMap.png'; // Ensure this path is correct

function Map() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <img 
        src={worldmap} 
        className='h-[100vh] w-[100vw] mt-10' 
        alt="World Map" 
        useMap='#worldmap' 
      />
      <map name='worldmap'>
        <area 
          onClick={handleClick('/')} 
          shape="rect" 
          coords="145,241,156,250" 
          alt="Home" 
           // This can help with debugging
        />
        {/* Add more <area> elements with correct coordinates */}
      </map>
    </>
  );
}

export default Map;
