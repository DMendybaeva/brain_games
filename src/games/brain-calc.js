import readlineSync from 'readline-sync';

import { greetAndGetUserName, generateRandomNum, isExpectedAnswerEqualUserAnswer } from '../index.js';

// games
const gameBrainCalc = () => {
  const userName = greetAndGetUserName();
  console.log('What is the result of the expression?');

  let successRound = 0;

  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = generateRandomNum(0, 100);
    const randomNum2 = generateRandomNum(0, 100);
    const mathOperator = ['+', '-', '*'];
    const randomIndex = generateRandomNum(0, 2);
    const randomMathOperator = mathOperator[randomIndex];
    const calcQuestion = `${randomNum1} ${randomMathOperator} ${randomNum2}`;

    console.log(`Question: ${calcQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const getExpectedAnswer = () => {
      switch (randomMathOperator) {
        case '+':
          return randomNum1 + randomNum2;
        case '-':
          return randomNum1 - randomNum2;
        case '*':
          return randomNum1 * randomNum2;
        default:
          return null;
      }
    };
    const expectedAnswer = String(getExpectedAnswer());
    const ExpectedAnswerEqualUserAnswer = isExpectedAnswerEqualUserAnswer(
      expectedAnswer,
      userAnswer,
      userName,
    );
    if (ExpectedAnswerEqualUserAnswer) {
      successRound += 1;
    } else {
      break;
    }
  }
  if (successRound === 3) {
    console.log(`Congratulation, ${userName}!`);
  }
};
export default gameBrainCalc;
