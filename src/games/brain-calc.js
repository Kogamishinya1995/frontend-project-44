import mathGame from '../index.js';

// вопрос и ответ на уровне модуля
const generateQuestionAndAnswer = () => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = calculateCorrectAnswer(randomNumber1, randomOperator, randomNumber2);
  return { question, correctAnswer };
};

// вычисление правильного ответа
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
      break;
  }
  return result.toString();
};


export default function runCalculatorGame() {
  mathGame(
    'What is the result of the expression?',
    generateQuestionAndAnswer
  );
}