import mathGame from '../index.js';

export const generateQuestionAndAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = randomNumber.toString();
  const correctAnswer = calculateCorrectAnswer(randomNumber);
  return { question, correctAnswer };
};


const calculateCorrectAnswer = (number) => {
  const isEven = number % 2 === 0;
  return isEven ? 'yes' : 'no';
};

export default function runRandomEvenGame() {
  mathGame('Answer "yes" if the number is even, otherwise answer "no".', generateQuestionAndAnswer);
}