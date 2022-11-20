import React from 'react';
import FlashcardList from '../components/FlashcardList';

function Home() {
  return (
    <>
        <FlashcardList className="card-grid" flashcards={SAMPLE_CARDS} />
    </>
    
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: 'Can You show me?',
    answer: 'Voce pode me mostrar?',
    options: ['']//opção para implementar dicas
  },
  {
    id: 2,
    question: 'Can you throw that away for me?',
    answer: 'Você pode jagar isso fora pra mim?',
    options: ['']
  },
  {
    id: 3,
    question: 'Do you believe that?',
    answer: 'Você acredita nisso?',
    options: ['']
  },
  {
    id: 4,
    question: 'Can you throw Do you have a pencil?',
    answer: 'Você tem um lápis?',
    options: [''] 
  },
  {
    id: 5,
    question: 'Am I pronouncing it correctly?',
    answer: 'E estou pronunciando corretamente?',
    options: ['']
  },
  {
    id: 6,
    question: 'How are you?',
    answer: 'Como você está?',
    options: ['']
  },
  {
    id: 7,
    question: 'Do you want to eat something?',
    answer: 'Você quer comer algo?',
    options: ['']
  },
  {
    id: 8,
    question: 'Do you want to drink something?',
    answer: 'Você quer beber algo?',
    options: ['']
  },
  {
    id: 9,
    question: 'Would you lounch with me?',
    answer: 'Você almoçaria comigo?',
    options: ['']
  },
  {
    id: 10,
    question: 'Did you do the excercises?',
    answer: 'Você fez os exercícios?',
    options: ['']
  },
  {
    id: 11,
    question: 'What is this?',
    answer: 'O que é isto?',
    options: ['']
  },
  {
    id: 12,
    question: 'Have you ever went to United States of America?',
    answer: 'Você já foi para os Estados Unidos da América?',
    options: ['']
  },
  {
    id: 13,
    question: 'Have you already went on biking trip?',
    answer: 'Você já foi numa viagem de bicicleta?',
    options: ['']
  },
  {
    id: 14,
    question: 'Do you know Javascript?',
    answer: 'Você conhece Javascript?',
    options: ['']
  },
  {
    id: 15,
    question: 'Where did you born?',
    answer: 'Onde você nasceu?',
    options: ['']
  },
  {
    id: 16,
    question: 'Where did you come from?',
    answer: 'De onde você veio?',
    options: ['']
  },
  {
    id: 17,
    question: 'Are you fine?',
    answer: 'Você está bem?',
    options: ['']
  },
  {
    id: 18,
    question: 'How can I get to the shopping mall?',
    answer: 'Como eu chego no shopping?',
    options: ['']
  },
  {
    id: 19,
    question: 'Do you want I teach you this?',
    answer: 'Você quer que eu te ensine isto?',
    options: ['']
  },
  {
    id: 20,
    question: 'Do you like computer science?',
    answer: 'Você gosta de ciência da computação?',
    options: ['']
  },
  {
    id: 21,
    question: 'Do you like development and analysis of systems?',
    answer: 'Você gosta de desenvolvimento e análise de sistemas?',
    options: ['']
  },
  {
    id: 22,
    question: 'Where do you want to go?',
    answer: 'Onde você quer ir?',
    options: ['']
  },
  {
    id: 23,
    question: 'How old are you?',
    answer: 'Quantos anos você tem?',
    options: ['']
  },
  {
    id: 24,
    question: 'Would you want to have a dinner with me?',
    answer: 'Você gostaria de jantar comigo?',
    options: ['']
  }


]



export default Home;
