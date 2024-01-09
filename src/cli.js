import readlineSync from 'readline-sync';

export default function userName() {
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${yourName}!`);
}
