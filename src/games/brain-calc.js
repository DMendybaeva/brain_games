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
  mathOperator,
  randomIndex,
  calculateExpectedAnswer,
} from '../index.js';

const gameBrainCalc = () => {
  const userName = greetAndGetUserName();
  const gameName = gameBrainCalc.name;
  displayGameRules(gameName);

  let successRound = 0;

  do {
    const randomNum1 = generateRandomNum();
    const randomNum2 = generateRandomNum();
    const randomMathOperator = mathOperator[randomIndex];
    const expression = `${randomNum1} ${randomMathOperator} ${randomNum2}`;

    askQuestion(expression);

    const userAnswer = getUserAnswer();

    const expectedAnswer = String(
      calculateExpectedAnswer(
        randomMathOperator,
        randomNum1,
        randomNum2,
      ),
    );
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

export default gameBrainCalc;
