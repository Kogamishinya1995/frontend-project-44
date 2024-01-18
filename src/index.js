import readlineSync from 'readline-sync';

export default function mathGame(gameDescription, generateQuestion, calculateCorrectAnswer) {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log(gameDescription);

  let correctAnswers = 0;
  let consecutiveCorrectAnswers = 0;
  let gameOver = false;

  while (consecutiveCorrectAnswers < 3 && !gameOver) {
    const question = generateQuestion();
    const correctAnswer = calculateCorrectAnswer(question);

    const userAnswer = parseInt(readlineSync.question(`Question: ${question}\nYour answer: `), 10);

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
