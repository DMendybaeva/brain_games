import readlineSync from 'readline-sync';

const writeUserName = () => readlineSync.question('May I have your name? ');
export default writeUserName;
