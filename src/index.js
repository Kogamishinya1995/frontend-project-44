import readlineSync from 'readline-sync';

export default function mathGame(description, generateQuestion, calculateCorrectAnswer) {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!\n${description}`);

  let correctAnswers = 0;
  let consecutiveCorrectAnswers = 0;
  let gameOver = false;

  while (consecutiveCorrectAnswers < 3 && !gameOver) {
    const question = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculateCorrectAnswer(question);

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