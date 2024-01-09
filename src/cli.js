import readlineSync from 'readline-sync';

export default function userName() {
    const readlineSync = require('readline-sync');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
  };