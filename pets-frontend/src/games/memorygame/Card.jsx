import { useState } from "react";
import CardBack from "../memorygame/memorygameimgs/CardBack/CardBack.jpg"

const handleChoice = () => {

}

function Cardtile({card, handleChoice, flipped, disabled, handleChange}){

  const handleClick = () => {
    if(!disabled){
    handleChoice(card)
    }
      }
  return (

                    <div className='card'>
                      <div  className={flipped ? (card.matched === true ? 'disappear flipped' : 'flipped') : "" }>
                        <img id={card.id} className="front" src={card.animalimg} alt="card front" />
                        <img id={card.id} className="back" src={CardBack} onClick={handleClick} alt="" />
                      </div>
                    </div>
    )
  }

export default Cardtile