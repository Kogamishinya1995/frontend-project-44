import mathGame from '../index.js';

export default function runArithmeticProgressionGame() {
    const generateProgression = () => {
      const startNumber = Math.floor(Math.random() * 50) + 1;
      const step = Math.floor(Math.random() * 20) + 1;
      const length = Math.floor(Math.random() * 6) + 5;
      const progression = [startNumber];
      for (let i = 1; i < length; i++) {
        progression.push(progression[i - 1] + step);
      }
      return progression;
    };
  
    const generateQuestion = (progression) => {
      const index = Math.floor(Math.random() * (progression.length - 2)) + 1;
      progression[index] = '..';
      return progression.join(' ');
    };
  
    const calculateCorrectAnswer = (question) => {
      const progression = question.split(' ').map((element) => {
        return element === '..' ? parseInt(element, 10) : element;
      });
  
      const findMissingNumber = (arr) => {
        const d = arr[1] - arr[0];
        for (let i = 2; i < arr.length; i++) {
          if (arr[i] - arr[i - 1] !== d) {
            return arr[i] - d;
          }
        }
      };
  
      const missingNumber = findMissingNumber(progression);
      return missingNumber.toString();
    };
  
    const description = 'What number is missing in the progression?';
    mathGame(description, generateQuestion, calculateCorrectAnswer);
  }