import mathGame from '../index.js';

const desctiption = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

export const generateQuestionAndAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default function runRandomEvenGame() {
  mathGame(desctiption, generateQuestionAndAnswer);
}
