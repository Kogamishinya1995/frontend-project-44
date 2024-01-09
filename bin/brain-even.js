import userName from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
userName();

function randomEvenGame() { 
    let correctAnswers = 0; 
    let consecutiveCorrectAnswers = 0; 
   
    while (consecutiveCorrectAnswers < 3) { 
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      const userAnswer = readlineSync.question('Is ${randomNumber} an even number? (yes/no)'); 
   
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
   
    console.log(`Congratulations, Bill! You answered ${correctAnswers} questions correctly in a row.`); 
  } 
   
  randomEvenGame();