import readlineSync from 'readline-sync';

export const setUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const greetAndGetUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = setUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};
export const displayGameRules = (gameName) => {
  switch (gameName) {
    case 'gameBrainEven':
      return console.log('Answer "yes" if the number is even, otherwise answer "no"');
    case 'gameBrainCalc':
      return console.log('What is the result of the expression?');
    case 'gameGcd':
      return console.log('Find the greatest common divisor of given numbers.');
    default:
      return null;
  }
};
export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};
export const isExpectedAnswerEqualUserAnswer = (
  expectedAnswer,
  userAnswer,
) => expectedAnswer === userAnswer;
export const displayMessageAfterCorrectRound = () => {
  console.log('Correct!');
};

export const displayMessageAfterWrongRound = (userAnswer, expectedAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. Let's try again, ${userName}!`);
};
export const displayMessageAfterGameEnd = (userName) => {
  console.log(`Congratulation, ${userName}!`);
};

export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
