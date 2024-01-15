import readlineSync from 'readline-sync';

function getGCD(a, b) {
  if (b === 0) {
    return a;
  }

  return getGCD(b, a % b);
}

export default function gcdGame() {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;
  let randomNum1;
  let randomNum2;

  while (correctAnswers < 3) {
    randomNum1 = Math.floor(Math.random() * 100) + 1;
    randomNum2 = Math.floor(Math.random() * 100) + 1;

    const expression = `Question: ${randomNum1} ${randomNum2}`;
    const correctAnswer = getGCD(randomNum1, randomNum2);
    const userAnswer = parseInt(readlineSync.question(`${expression}\nYour answer: `), 10);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${yourName}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${yourName}!`);
  }
}
