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

  let successRound = 0;

  do {
    const rundomNum = generateRandomNum();
    askQuestion(rundomNum);

    const userAnswer = getUserAnswer();

    const isNumEven = isEven(rundomNum);
    const expectedAnswer = isNumEven ? 'yes' : 'no';

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

export default gameBrainEven;
