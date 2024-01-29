import mathGame from '../index.js';

export default function runArithmeticProgressionGame() {
  const generateProgression = () => {
    const startNumber = Math.floor(Math.random() * 50) + 1;
    const step = Math.floor(Math.random() * 20) + 1;
    const length = 10;
    const progression = [startNumber];
    for (let i = 1; i < length; i += 1) {
      progression.push(progression[i - 1] + step);
    }
    return progression;
  };

  let hiddenElement;

  const generateQuestion = () => {
    const progression = generateProgression();
    const index = Math.floor(Math.random() * (progression.length - 2)) + 1;
    hiddenElement = progression[index];
    progression[index] = '..';
    return progression.join(' ');
  };

  const calculateCorrectAnswer = () => hiddenElement.toString();

  const description = 'What number is missing in the progression?';
  mathGame(description, generateQuestion, calculateCorrectAnswer);
}
