import readlineSync from 'readline-sync';

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

export default function primeNumberGame() {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswers = 0;
  
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    
    const isNumberPrime = isPrime(randomNumber);
    const correctAnswer = isNumberPrime ? 'yes' : 'no';
    
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${yourName}!`);
      return;
    }
  }
  
  console.log(`Congratulations, ${yourName}!`);
}