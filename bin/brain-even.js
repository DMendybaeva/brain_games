import readlineSync from 'readline-sync';
import setUserName from '../src/cli.js';

const generateRandomNum = () => Math.floor(Math.random() * 101);
const arrAnswers = [];

// games
console.log('Welcome to the Brain Games!');
const userName = setUserName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');

for (let i = 0; i < 3; i++) {
  const rundomNum = generateRandomNum();
  console.log(`Question: ${rundomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let ifEven = '';
  let result = '';
  if (rundomNum % 2 === 0) {
    ifEven = 'yes';
  } else {
    ifEven = 'no';
  }
  if (ifEven === userAnswer) {
    result = 'Correct!';
    arrAnswers.push('correct');
  } else if (ifEven !== userAnswer) {
    result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${ifEven}'. Let's try again, ${userName}!`;
    console.log(result);
    break;
} console.log(result);
}
if (arrAnswers.length === 3) {
  console.log(`Congratulations, ${userName}!`);
}