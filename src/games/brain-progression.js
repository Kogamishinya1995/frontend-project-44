import mathGame from '../index.js';

export default function arithmeticProgressionGame() {
  const generateQuestion = () => {
    const progressionLength = 10;
    const hiddenElementPosition = Math.floor(Math.random() * progressionLength);
    const progressionStep = Math.floor(Math.random() * 10) + 1;

    let progression = '';

    for (let i = 0; i < progressionLength; i += 1) {
      const element = hiddenElementPosition === i ? '..' : i * progressionStep;
      progression += `${element} `;
    }

    return progression.trim();
  };

  const calculateCorrectAnswer = (question) => {
    const elements = question.split(' ');
    const hiddenElement = elements.find((element) => element === '..');
    const hiddenElementPosition = elements.indexOf(hiddenElement);
    const progressionStep = parseInt(elements[1], 10) - parseInt(elements[0], 10);

    return (hiddenElementPosition * progressionStep).toString();
  };

  mathGame(
    'What number is missing in the progression?',
    generateQuestion,
    calculateCorrectAnswer,
  );
}
