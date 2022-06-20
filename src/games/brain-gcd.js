import {
  greetAndGetUserName,
  displayMessageAfterCorrectRound,
  displayMessageAfterUnsuccessfulGameEnd,
  displayMessageAfterSuccessfulGameEnd,
  getUserAnswer,
  isExpectedAnswerEqualUserAnswer,
  displayGameRules,
  askQuestion,
} from '../cli.js';
import {
  ROUNDS_QUANTITY,
  generateRandomNum,
  calculateGcd,
} from '../index.js';

const gameGcd = () => {
  const userName = greetAndGetUserName();
  const gameName = gameGcd.name;
  displayGameRules(gameName);

  let successRoundCount = 0;

  do {
    const randomNum1 = generateRandomNum(1, 100);
    const randomNum2 = generateRandomNum(1, 100);
    const expression = `${randomNum1} ${randomNum2}`;

    askQuestion(expression);

    const userAnswer = getUserAnswer();
    const expectedAnswer = String(calculateGcd(randomNum1, randomNum2));
    const expectedAnswerEqualUserAnswer = isExpectedAnswerEqualUserAnswer(
      expectedAnswer,
      userAnswer,
    );
    if (expectedAnswerEqualUserAnswer) {
      successRoundCount += 1;
      displayMessageAfterCorrectRound();
    } else {
      displayMessageAfterUnsuccessfulGameEnd(userAnswer, expectedAnswer, userName);
      break;
    }
  }
  while (successRoundCount < ROUNDS_QUANTITY);

  if (successRoundCount === ROUNDS_QUANTITY) {
    displayMessageAfterSuccessfulGameEnd(userName);
  }
};

export default gameGcd;
