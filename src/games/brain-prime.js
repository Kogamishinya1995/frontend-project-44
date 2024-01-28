import mathGame from '../index.js';

export default function runPrimeNumberGame() {
  const generateQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
  };

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };

  const calculateCorrectAnswer = (question) => {
    const isNumberPrime = isPrime(question);
    return isNumberPrime ? 'yes' : 'no';
  };

  mathGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateQuestion, calculateCorrectAnswer);
}
