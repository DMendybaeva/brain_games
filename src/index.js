export const ROUNDS_QUANTITY = 3;
export const MATH_OPERATORS = ['+', '-', '*'];
export const MATH_OPERATOR_QUANTITY = MATH_OPERATORS.length;
export const MIN_PROGRESSION_LENGTH = 5;
export const MAX_PROGRESSION_LENGTH = 10;
export const HIDDEN_ITEM = '...';

/**
 * random number from min to (max+1);
 * @param {*} min default = 0;
 * @param {*} max default = 100;
 * @returns random integer number;
 */
export const generateRandomNum = (min = 0, max = 100) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isEven = (rundomNum) => rundomNum % 2 === 0;

export const calculateExpressionResult = (randomMathOperator, randomNum1, randomNum2) => {
  switch (randomMathOperator) {
    case '+':
      return randomNum1 + randomNum2;
    case '-':
      return randomNum1 - randomNum2;
    case '*':
      return randomNum1 * randomNum2;
    default:
      return null;
  }
};

export const calculateGcd = (randomNum1, randomNum2) => {
  if (randomNum2 > randomNum1) {
    return calculateGcd(randomNum2, randomNum1);
  }
  if (randomNum2 === 0) {
    return randomNum1;
  }
  return calculateGcd(randomNum2, randomNum1 % randomNum2);
};

export const getProgression = () => {
  const firstProgressionNum = generateRandomNum();
  const progressionStep = generateRandomNum();
  const randomProgressionLength = generateRandomNum(
    MIN_PROGRESSION_LENGTH,
    MAX_PROGRESSION_LENGTH,
  );
  const progression = [firstProgressionNum];
  for (let i = 0; i < randomProgressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  } return progression;
};

export const getProgressionWithHiddenNumber = (progression) => {
  const progressionCopy = [...progression];
  const progressionHiddenIndex = generateRandomNum(0, progression.length);
  progressionCopy[progressionHiddenIndex] = HIDDEN_ITEM;
  return progressionCopy;
};

export const getProgressionHiddenNumber = (progressionHidden, progressionFull) => {
  const progressionHiddenIndex = progressionHidden.indexOf(HIDDEN_ITEM);
  return progressionFull[progressionHiddenIndex];
};

export const isPrime = (randomNum) => {
  for (let denom = 2; denom < randomNum; denom += 1) {
    if (randomNum % denom === 0) {
      return false;
    }
  } return true;
};
