import readlineSync from 'readline-sync';

export default function mathGame(description, generateQuestionAndAnswer) {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!\n${description}`);

  const numberOfRounds = 3;

  for (let round = 1; round <= numberOfRounds; round += 1) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${yourName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${yourName}!`);
}
