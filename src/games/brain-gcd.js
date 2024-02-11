import mathGame from '../index.js';

function getGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
}

export default function runGcdGame() {
  const generateQuestionAndAnswer = () => {
    const randomNum1 = Math.floor(Math.random() * 100) + 1;
    const randomNum2 = Math.floor(Math.random() * 100) + 1;
    const question = `${randomNum1} ${randomNum2}`;
    const correctAnswer = calculateCorrectAnswer(question);

    return { question, correctAnswer };
  };

  const calculateCorrectAnswer = (question) => {
    const [num1, num2] = question.split(' ');
    return getGCD(parseInt(num1, 10), parseInt(num2, 10)).toString();
  };


  mathGame(
    'Find the greatest common divisor of given numbers.',
    generateQuestionAndAnswer
  );
}