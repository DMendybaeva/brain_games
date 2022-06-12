import readlineSync from 'readline-sync';

import { greetAndGetUserName, generateRandomNum, isExpectedAnswerEqualUserAnswer } from '../index.js';

// games
const gameBrainEven = () => {
  const userName = greetAndGetUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let successRound = 0;

  for (let i = 0; i < 3; i += 1) {
    const rundomNum = generateRandomNum(0, 100);
    console.log(`Question: ${rundomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isEven = rundomNum % 2 === 0;
    const expectedAnswer = isEven === true ? 'yes' : 'no';

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
export default gameBrainEven;
