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
  isEven,
} from '../index.js';

const gameBrainEven = () => {
  const userName = greetAndGetUserName();
  const gameName = gameBrainEven.name;
  displayGameRules(gameName);

  let successRoundCount = 0;

  do {
    const rundomNum = generateRandomNum();
    askQuestion(rundomNum);

    const userAnswer = getUserAnswer();

    const expectedAnswer = isEven(rundomNum) ? 'yes' : 'no';
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

export default gameBrainEven;
