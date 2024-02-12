import mathGame from '../index.js';

export default function runPrimeNumberGame() {
  const generateQuestion = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
  };

  // вынести на уровень модуля
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };

  // объявить константу и через тернарный оператор в переменной вернуть нужный отве
  // description in const;
  const calculateCorrectAnswer = (question) => {
    const isNumberPrime = isPrime(question);
    return isNumberPrime ? 'yes' : 'no';
  };

  mathGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateQuestion, calculateCorrectAnswer);
}
