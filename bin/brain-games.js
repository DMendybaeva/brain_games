#!/usr/bin/env node
import setUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = setUserName();
console.log(`Hello, ${userName}!`);
