import readlineSync from 'readline-sync';

export default function mathGame(description, generateQuestionAndAnswer) {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!\n${description}`);

  let consecutiveCorrectAnswers = 0;

  while (consecutiveCorrectAnswers < 3) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${yourName}!`);
      return;
    }
    console.log('Correct!');
    consecutiveCorrectAnswers += 1;
  }

  console.log(`Congratulations, ${yourName}!`);
}
