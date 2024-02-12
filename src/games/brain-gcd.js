import mathGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

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
    const correctAnswer = String(getGCD(randomNum1, randomNum2));

    return { question, correctAnswer };
  };

  mathGame(
    description,
    generateQuestionAndAnswer,
  );
}
