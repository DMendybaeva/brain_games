#!/usr/bin/env node

import readlineSync from 'readline-sync';

import setUserName from '../src/cli.js';

const generateRandomNum = () => Math.floor(Math.random() * 101);
let successRound = 0;

// games
console.log('Welcome to the Brain Games!');

const userName = setUserName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');

for (let i = 0; i < 3; i += 1) {
  const rundomNum = generateRandomNum();
  console.log(`Question: ${rundomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const isEven = rundomNum % 2 === 0;
  const expectedAnswer = isEven === true ? 'yes' : 'no';

  if (expectedAnswer === userAnswer) {
    console.log('Correst!');
    successRound += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. Let's try again, ${userName}!`);
    break;
  }
}

if (successRound === 3) {
  console.log(`Congratulation, ${userName}!`);
}
