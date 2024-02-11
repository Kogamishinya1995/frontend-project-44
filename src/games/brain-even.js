import readlineSync from 'readline-sync';
import mathGame from '../index.js';

export default function runRandomEvenGame() {
  // Функция генерирующая вопрос и правильный ответ
  const generateQuestionAndAnswer = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const question = randomNumber.toString();
    const correctAnswer = calculateCorrectAnswer(randomNumber);

    return { question, correctAnswer };
  };

  // Функция для вычисления правильного ответа
  const calculateCorrectAnswer = (number) => {
    const isEven = number % 2 === 0;
    return isEven ? 'yes' : 'no';
  };

  mathGame('Answer "yes" if the number is even, otherwise answer "no".', generateQuestionAndAnswer);
}