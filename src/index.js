import readlineSync from 'readline-sync';

export default function Game() {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${yourName}!`);

  let correctAnswers = 0;
  let consecutiveCorrectAnswers = 0;
  let gameOver = false;

  while (consecutiveCorrectAnswers < 3 && !gameOver) {
    // правила конкретной игры
    const question = generateQuestion();
    const userAnswer = readlineSync.question(question.prompt);

    if (checkAnswer(question, userAnswer)) {
      console.log('Correct!');
      correctAnswers += 1;
      consecutiveCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.answer}'.`);
      consecutiveCorrectAnswers = 0;
      console.log(`Let's try again, ${yourName}!`);
      gameOver = true;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${yourName}!`);
  }
}
