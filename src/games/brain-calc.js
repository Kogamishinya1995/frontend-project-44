import readlineSync from 'readline-sync';

export default function calculatorGame() {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${yourName}!`);

  let correctAnswers = 0;
  let consecutiveCorrectAnswers = 0;
  let randomNum1;
  let randomNum2;
  let randomOperator;
  let gameOver = false;

  while (consecutiveCorrectAnswers < 3 && !gameOver) {
    randomNum1 = Math.floor(Math.random() * 100) + 1;
    randomNum2 = Math.floor(Math.random() * 100) + 1;
    randomOperator = Math.floor(Math.random() * 3); // 0 for '+', 1 for '-', 2 for '*'

    let expression;
    let correctAnswer;
    let userAnswer;

    switch (randomOperator) {
      case 0:
        expression = `${randomNum1} + ${randomNum2}`;
        correctAnswer = randomNum1 + randomNum2;
        userAnswer = parseInt(readlineSync.question(`What is the result of ${expression}? `), 10);
        break;
      case 1:
        expression = `${randomNum1} - ${randomNum2}`;
        correctAnswer = randomNum1 - randomNum2;
        userAnswer = parseInt(readlineSync.question(`What is the result of ${expression}? `), 10);
        break;
      case 2:
        expression = `${randomNum1} * ${randomNum2}`;
        correctAnswer = randomNum1 * randomNum2;
        userAnswer = parseInt(readlineSync.question(`What is the result of ${expression}? `), 10);
        break;
      default:
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
      consecutiveCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'.`);
      consecutiveCorrectAnswers = 0;
      console.log(`Let's try again, ${yourName}!`);
      gameOver = true;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${yourName}!`);
  }
}
