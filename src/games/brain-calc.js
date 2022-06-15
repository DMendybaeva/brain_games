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
  MATH_OPERATORS,
  randomIndex,
  calculateExpressionResult,
} from '../index.js';

const gameBrainCalc = () => {
  const userName = greetAndGetUserName();
  const gameName = gameBrainCalc.name;
  displayGameRules(gameName);

  let successRound = 0;

  do {
    const randomNum1 = generateRandomNum();
    const randomNum2 = generateRandomNum();
    const randomMathOperator = MATH_OPERATORS[randomIndex];
    const expression = `${randomNum1} ${randomMathOperator} ${randomNum2}`;

    askQuestion(expression);

    const userAnswer = getUserAnswer();

    const expectedAnswer = String(
      calculateExpressionResult(
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
      displayMessageAfterUnsuccessfulGameEnd(userAnswer, expectedAnswer, userName);
      break;
    }
  }
  while (successRound < ROUNDS_QUANTITY);
  if (successRound === ROUNDS_QUANTITY) {
    displayMessageAfterSuccessfulGameEnd(userName);
  }
};

export default gameBrainCalc;
