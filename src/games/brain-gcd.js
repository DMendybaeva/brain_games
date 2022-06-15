import {
  greetAndGetUserName,
  displayMessageAfterCorrectRound,
  displayMessageAfterWrongRound,
  displayMessageAfterGameEnd,
  getUserAnswer,
  isExpectedAnswerEqualUserAnswer,
  displayGameRules,
  askQuestion,
} from '../cli.js';
import {
  ROUNDS_QUANTITY,
  generateRandomNum,
  calculateExpectedAnswerGamePcd,
} from '../index.js';

const gameGcd = () => {
  const userName = greetAndGetUserName();
  const gameName = gameGcd.name;
  displayGameRules(gameName);

  let successRound = 0;

  do {
    const randomNum1 = generateRandomNum();
    const randomNum2 = generateRandomNum();
    const expression = `${randomNum1} ${randomNum2}`;

    askQuestion(expression);

    const userAnswer = getUserAnswer();
    const expectedAnswer = String(calculateExpectedAnswerGamePcd(randomNum1, randomNum2));
    const expectedAnswerEqualUserAnswer = isExpectedAnswerEqualUserAnswer(
      expectedAnswer,
      userAnswer,
    );
    if (expectedAnswerEqualUserAnswer) {
      successRound += 1;
      displayMessageAfterCorrectRound();
    } else {
      displayMessageAfterWrongRound(userAnswer, expectedAnswer, userName);
      break;
    }
  }
  while (successRound < ROUNDS_QUANTITY);
  if (successRound === ROUNDS_QUANTITY) {
    displayMessageAfterGameEnd(userName);
  }
};

export default gameGcd;
