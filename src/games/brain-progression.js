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
  calculatedArithmeticProgression,
  progressionRandomHiddenIndex,
} from '../index.js';

const gameBrainProg = () => {
  const userName = greetAndGetUserName();
  const gameName = gameBrainProg.name;
  displayGameRules(gameName);

  let successRound = 0;

  do {
    const firstProgressionNum = generateRandomNum();
    const progressionStep = generateRandomNum();

    const randomProgression = calculatedArithmeticProgression(firstProgressionNum, progressionStep);

    const expectedAnswer = String(randomProgression[progressionRandomHiddenIndex]);
    randomProgression[progressionRandomHiddenIndex] = '...';
    const progressionQuestion = randomProgression;

    askQuestion(progressionQuestion);

    const userAnswer = getUserAnswer();
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

export default gameBrainProg;