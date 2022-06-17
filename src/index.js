export const ROUNDS_QUANTITY = 3;
export const MATH_OPERATORS = ['+', '-', '*'];
export const MATH_OPERATOR_QUANTITY = MATH_OPERATORS.length;
export const MIN_PROGRESSION_LENGTH = 5;
export const MAX_PROGRESSION_LENGTH = 10;

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

export const randomIndex = generateRandomNum(0, MATH_OPERATOR_QUANTITY - 1);

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

export const calculateGcd = (randomNum1, randomNum2) =>{
  if (randomNum2 > randomNum1) {
    return calculateGcd(randomNum2, randomNum1);
  }
  if (randomNum2 === 0) {
    return randomNum1;
  }
  return calculateGcd(randomNum2, randomNum1 % randomNum2);
};

export const randomProgressionLength = generateRandomNum(
  MIN_PROGRESSION_LENGTH,
  MAX_PROGRESSION_LENGTH,
);

export const calculatedArithmeticProgression = (
  firstProgressionNum,
  progressionStep,
) => {
  const progression = [firstProgressionNum];
  for (let i = 1; i < randomProgressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
    progression.push(progression[i]);
  } return progression;
};

export const progressionRandomHiddenIndex = generateRandomNum(0, randomProgressionLength);

export const isPrime = (randomNum) => {
  let flag = true;
  for (let dividedNum = 2; dividedNum < randomNum; dividedNum += 1) {
    if (randomNum % dividedNum === 0) {
      flag = false;
      break;
    }
  } return flag;
};