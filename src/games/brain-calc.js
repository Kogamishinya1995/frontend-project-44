import mathGame from '../index.js';

const operators = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const calculateCorrectAnswer = (operand1, operator, operand2) => {
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      throw new Error('Unknown operator!');
  }
  return result.toString();
};

const generateQuestionAndAnswer = () => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = calculateCorrectAnswer(randomNumber1, randomOperator, randomNumber2);
  return { question, correctAnswer };
};

export default function runCalculatorGame() {
  mathGame(description, generateQuestionAndAnswer);
}
