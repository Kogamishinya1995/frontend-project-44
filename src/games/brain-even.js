import mathGame from '../index.js';

export default function randomEvenGame() {
  const generateQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
  };

  const calculateCorrectAnswer = (question) => {
    const isEven = question % 2 === 0;
    return isEven ? 'yes' : 'no';
  };

  mathGame('Answer "yes" if the number is even, otherwise answer "no".', generateQuestion, calculateCorrectAnswer);
}
