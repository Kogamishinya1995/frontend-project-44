import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export default function randomEvenGame() {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${yourName}!`);

  let correctAnswers = 0;
  let consecutiveCorrectAnswers = 0;
  let randomNumber;

  while (consecutiveCorrectAnswers < 3) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    const userAnswer = readlineSync.question(`Is ${randomNumber} an even number? `);

    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswers++;
      consecutiveCorrectAnswers++;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      consecutiveCorrectAnswers = 0;
    }
  }

  console.log(`Congratulations, ${yourName}!`);
}