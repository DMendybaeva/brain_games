import readlineSync from 'readline-sync';

const setUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default setUserName;
