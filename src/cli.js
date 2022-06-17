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
      console.log('Answer "yes" if the number is even, otherwise answer "no"');
      break;
    case 'gameBrainCalc':
      console.log('What is the result of the expression?');
      break;
    case 'gameGcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'gameBrainProg':
      console.log('What number is missing in the progression?');
      break;
    default:
      break;
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

export const displayMessageAfterUnsuccessfulGameEnd = (userAnswer, expectedAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. Let's try again, ${userName}!`);
};

export const displayMessageAfterSuccessfulGameEnd = (userName) => {
  console.log(`Congratulation, ${userName}!`);
};

export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
