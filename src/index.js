import setUserName from './cli.js';

export const greetAndGetUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = setUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const displayMessageAfterRoundEnd = (userAnswer, expectedAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. Let's try again, ${userName}!`);
};
export const displayMessageAfterGameEnd = (userName) => {
  console.log(`Congratulation, ${userName}!`);
};

export const generateRandomNum = (min, max) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isExpectedAnswerEqualUserAnswer = (expectedAnswer, userAnswer, userName) => {
  if (expectedAnswer === userAnswer) {
    console.log('Correst!');
    return true;
  }
  displayMessageAfterRoundEnd(userAnswer, expectedAnswer, userName);
  return false;
};
