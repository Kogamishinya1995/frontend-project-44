import readlineSync from 'readline-sync';

export default function arithmeticProgressionGame() {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log('What number is missing in the progression?')

  let correctAnswers = 0;
  let consecutiveCorrectAnswers = 0;
  let gameOver = false;

  while (consecutiveCorrectAnswers < 3 && !gameOver) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const hiddenElementPosition = Math.floor(Math.random() * progressionLength);
    const progressionStep = Math.floor(Math.random() * 10) + 1;

    let progression = '';

    const correctAnswer = hiddenElementPosition * progressionStep;
    for (let i = 0; i < progressionLength; i += 1) {
      const element = hiddenElementPosition === i ? '..' : i * progressionStep;
      progression += `${element} `;
    }

    const userAnswer = parseInt(readlineSync.question(`Question: ${progression}\nYour answer: `), 10);

    if (userAnswer === correctAnswer) {
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
