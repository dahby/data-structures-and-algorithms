'use strict';

import Stack from './stack';

const multiBracketValidation = (input) => {
  const stack = new Stack();
  for (let x = 0; x < input.length; x++) {
    if (input[x] === '(' || input[x] === '{' || input[x] === '[') {
      stack.push(x);
    }
    if (input[x] === ')') {
      if (stack.peek() === '(') {
        stack.pop();
      } else {
        return false;
      } 
    }
    if (input[x] === '}') {
      if (stack.peek() === '{') {
        stack.pop();
      } else {
        return false;
      }
    }
    if (input[x] === ']') {
      if (stack.peek() === '[') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  } 
  return false;
};

export default multiBracketValidation;
