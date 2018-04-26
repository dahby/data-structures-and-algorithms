'use strict';

const merge = module.exports = {};

merge.mergeLists = function mergeLists(llOne, llTwo) {
  let lenOne = 0;
  let lenTwo = 0;
  let currNodeOne = llOne.head;
  let currNodeTwo = llTwo.head;
  while (currNodeOne.next) {
    currNodeOne = currNodeOne.next;
    lenOne += 1;
  }
  while (currNodeTwo.next) {
    currNodeTwo = currNodeTwo.next;
    lenTwo += 1;
  }
  if (lenOne >= lenTwo) {
    for (let x = 0; x < lenTwo; x += 2) {
      if (!currNodeOne.next) {
        break;
      }
      const temp1 = currNodeOne.next;
      currNodeOne.next = currNodeTwo;
      currNodeOne.next.next = temp1;
      currNodeOne = currNodeOne.next.next;
      currNodeTwo = currNodeTwo.next;
    }
    return llOne;
  }
  if (lenTwo > lenOne) {
    for (let y = 0; y < lenOne; y += 2) {
      if (!currNodeTwo.next) {
        break;
      }
      const temp2 = currNodeTwo.next;
      currNodeTwo.next = currNodeTwo;
      currNodeTwo.next.next = temp2;
      currNodeTwo = currNodeTwo.next.next;
      currNodeOne = currNodeOne.next;
    }
    return llTwo;
  }
  return undefined;
};
