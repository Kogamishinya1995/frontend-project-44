import mathGame from '../index.js';

export default function calculatorGame() {
  const generateQuestion = () => {
    const randomNumber1 = Math.floor(Math.random() * 100 ) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100 ) + 1;
    const randomOperator = Math.floor(Math.random() * 3 ); // 0 for '+', 1 for '-', 2 for '*'
  
    let expression;
    let correctAnswer;
  
    switch (randomOperator) {
      case 0:
        expression = `${randomNumber1} + ${randomNumber2}`;
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case 1:
        expression = `${randomNumber1} - ${randomNumber2}`;
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case 2:
        expression = `${randomNumber1} * ${randomNumber2}`;
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        break;
    }
  
    return expression;
  };

  const calculateCorrectAnswer = (question) => eval(question).toString();

  mathGame(
    'What is the result of the expression?',
    generateQuestion,
    calculateCorrectAnswer
  );
}