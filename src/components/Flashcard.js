import React, { useState } from 'react'

const Flashcard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false)
    
    const girar = () =>{   
        let resposta = document.getElementById('resposta').value;
        
        if(resposta===flashcard.answer){
            return setFlip(!flip);
        }

     }
    return (
    <div>       
        <input id='resposta' type='text'/>
        <button onClick={()=> girar()}>Enviar</button>

        <div className={`card ${flip ? 'flip' : ''}`}>
            <div className="front">
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.options.map(option => {
                        return <div className="flashcard-option">{option}</div>
                    })}
                </div>
            </div>
            <div className="back">{flashcard.answer}</div>
        </div>
    </div>
    )

}

export default Flashcard
