
import { useEffect, useState } from 'react'
import AnimalImgs from "../memorygame/ImgsArray";
import Card from './Card';
import "../memorygame/MemoryGame.css"


function Gameboard() {
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [cards, setCards] = useState([]);
    const [disabled, setDisabled] = useState(false)
    
   
    const shuffleCards = () => {
        const shuffledCards = [...AnimalImgs, ...AnimalImgs]
        .sort(()=> Math.random() - 0.5)
        .map((card)=>({...card, id: Math.random()}))

        setCards(shuffledCards)
    }


    const handleChoice = (card) => {
        firstCard ? setSecondCard(card) : setFirstCard(card)
    }
    
    const handleChange = (card) => {
        if (card.matched === true){
            console.log('matched!')
        }
    }


    useEffect(()=> {
        if(firstCard && secondCard){
            setDisabled(true)
            if (firstCard.animalimg === secondCard.animalimg){
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.animalimg === firstCard.animalimg){
                            return {...card, matched:true}
                        }else {
                            return card
                        }
                    })
                })
                resetFlip()
            } else {
                setTimeout(()=> resetFlip(), 1000)
            }
        }
    },[firstCard, secondCard])


    const resetFlip = () => {
        setFirstCard(null)
        setSecondCard(null)
        setDisabled(false)
    }
    return(
        <>
        <div className='flex flex-col items-center min-h-screen justify-center'>
        <div className='flex col-span-5 flex-wrap justify-center'> {/*This is the container of the game */}
            {cards.map(card => (
                <Card key={card.id} card={card} onChange={handleChange} handleChoice={handleChoice} disabled={disabled} flipped={card === firstCard || card === secondCard || card.matched}/>
            ))}
        </div>
        </div>
            <button className='newgamebutton   px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={shuffleCards}>New Game!</button>
        </>
    )
}

export default Gameboard