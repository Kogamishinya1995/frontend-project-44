import mathGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const generateQuestionAndAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = randomNumber;
  const isNumberPrime = isPrime(question);
  const correctAnswer = isNumberPrime ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default function runPrimeNumberGame() {
  mathGame(description, generateQuestionAndAnswer);
}
