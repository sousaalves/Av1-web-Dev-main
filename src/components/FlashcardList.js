import React from 'react'
import Flashcard from './Flashcard'

const FlashcardList = ({ flashcards }) => {
    console.log(flashcards)
    // console.log(flashcards.push(0, 11));

    function array_chunk(arr, len) {
        let chunks = [], i = 0, n = arr.length
        while (i < n) {
          chunks.push(arr.slice(i, i += len))
        }
        return chunks
    }
    

    console.log(array_chunk(flashcards, 6));
    let pageFlashCards = array_chunk(flashcards, 6);
    for(let i = 0; i < pageFlashCards.length - 1; i++){
        console.log("AAA")
    }
    console.log(flashcards)
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}

export default FlashcardList
