'use strict';

const repeatedWord = (str) => {
  const formatedStr = str.toLowerCase();
  const splitStr = formatedStr.split(' ');
  const len = splitStr.length;
  let foundMatch = false;
  let match = null;
  for (let i = 0; i < len; i++) {
    if (foundMatch) {
      break;
    }
    for (let j = i + 1; j < len; j++) {
      if (splitStr[j] === splitStr[i]) {
        match = splitStr[j];
        foundMatch = true;
        break;
      }
    }
  }
  return match;
};

export default repeatedWord;
