import React from 'react'
import { useState } from 'react';
import Gameboard from '../games/memorygame/Gameboard';



function GameContainer(props) {
  const [activeComponent, setActiveComponent] = useState("A");

  const renderGame = () => {
    switch (activeComponent) {
      case 'A':
        return <Gameboard />;
      case 'B':
        return null;
      case 'C':
        return null;
      default:
        return null;
    }
  };
  
  return (
    <div className='flex items-center justify-center'>
        <Gameboard/>
    </div>
  )
}

export default GameContainer