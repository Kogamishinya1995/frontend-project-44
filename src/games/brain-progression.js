import mathGame from '../index.js';

const description = 'What number is missing in the progression?';

function generateProgression(startNumber, step, length) {
  const progression = [startNumber];

  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + step);
  }

  return progression;
}

export function generateQuestionAndAnswer() {
  const startNumber = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 20) + 1;
  const length = 10;
  const progression = generateProgression(startNumber, step, length);
  const index = Math.floor(Math.random() * (progression.length - 2)) + 1;
  const hiddenElement = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');
  const correctAnswer = hiddenElement.toString();

  return { question, correctAnswer };
}

export default function runArithmeticProgressionGame() {
  mathGame(description, generateQuestionAndAnswer);
}
