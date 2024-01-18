import readlineSync from 'readline-sync';

export default function randomEvenGame() {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);

  let correctAnswers = 0;
  let consecutiveCorrectAnswers = 0;
  let randomNumber;
  let gameOver = false;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (consecutiveCorrectAnswers < 3 && !gameOver) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
      consecutiveCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      consecutiveCorrectAnswers = 0;
      console.log(`Let's try again, ${yourName}!`);
      gameOver = true;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${yourName}!`);
  }
}
