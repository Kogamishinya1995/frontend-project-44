import mathGame from '../index.js';

export default function runcalculatorGame() {
  const generateQuestion = () => {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    const randomOperator = Math.floor(Math.random() * 3);

    let expression;

    switch (randomOperator) {
      case 0:
        expression = `${randomNumber1} + ${randomNumber2}`;
        break;
      case 1:
        expression = `${randomNumber1} - ${randomNumber2}`;
        break;
      case 2:
        expression = `${randomNumber1} * ${randomNumber2}`;
        break;
      default:
        break;
    }

    return expression;
  };

  const calculateCorrectAnswer = (question) => {
    const [operand1, operator, operand2] = question.split(' ');

    let result;

    switch (operator) {
      case '+':
        result = parseInt(operand1, 10) + parseInt(operand2, 10);
        break;
      case '-':
        result = parseInt(operand1, 10) - parseInt(operand2, 10);
        break;
      case '*':
        result = parseInt(operand1, 10) * parseInt(operand2, 10);
        break;
      default:
        break;
    }

    return result.toString();
  };

  mathGame(
    'What is the result of the expression?',
    generateQuestion,
    calculateCorrectAnswer,
  );
}
