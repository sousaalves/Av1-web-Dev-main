import React, { useState } from 'react'

const Flashcard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false)

    return (
    <div>       

    <input id='resposta' type='text'/>
    <button onClick={()=> {
            if (document.getElementById('resposta').value === flashcard.answer) {
                <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
                <div className="front">
                    {flashcard.question}
                </div>
                <div className="back">{flashcard.answer}</div>
            </div>
        }
            
        }}>Enviar</button>

        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
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
