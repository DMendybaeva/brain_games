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
  getProgression,
  getProgressionWithHiddenNumber,
  getProgressionHiddenNumber,
} from '../index.js';

const gameBrainProg = () => {
  const userName = greetAndGetUserName();
  const gameName = gameBrainProg.name;
  displayGameRules(gameName);

  let successRoundCount = 0;

  do {
    const progressionFull = getProgression();
    const progressionWithHiddenNum = getProgressionWithHiddenNumber(progressionFull);

    const expectedAnswer = String(
      getProgressionHiddenNumber(progressionWithHiddenNum, progressionFull),
    );

    askQuestion(progressionWithHiddenNum);

    const userAnswer = getUserAnswer();
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

export default gameBrainProg;
