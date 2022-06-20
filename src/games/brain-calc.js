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
  MATH_OPERATOR_QUANTITY,
  calculateExpressionResult,
} from '../index.js';

const gameBrainCalc = () => {
  const userName = greetAndGetUserName();
  const gameName = gameBrainCalc.name;
  displayGameRules(gameName);

  let successRoundCount = 0;

  do {
    const randomNum1 = generateRandomNum();
    const randomNum2 = generateRandomNum();
    const randomIndex = generateRandomNum(0, MATH_OPERATOR_QUANTITY - 1);
    const randomMathOperator = MATH_OPERATORS[randomIndex];
    const expression = `${randomNum1} ${randomMathOperator} ${randomNum2}`;

    askQuestion(expression);
    const userAnswer = getUserAnswer();

    const expectedAnswer = String(
      calculateExpressionResult(randomMathOperator, randomNum1, randomNum2),
    );
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

export default gameBrainCalc;
