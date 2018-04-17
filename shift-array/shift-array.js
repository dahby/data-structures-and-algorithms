'use strict';

const shiftArray = module.exports = {};

shiftArray.insertShiftArray = (array, val) => {
  const mid = Math.round(array.length / 2);
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i < mid) {
      newArray[i] = array[i];
    } if (array[i] === mid) {
      newArray[mid] = val;
    } else {
      newArray[i + 1] = array[i];
    }
  }
  return newArray;
};
