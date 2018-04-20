'use strict';

const largest = module.exports = {};

largest.largestProduct = (arr) => {
  const len = arr.length;
  const innerLen = arr[0].length;
  let maxVal = 0;
  for (let x = 0; x < len; x++) {
    for (let y = 0; y < innerLen; y++) {
      const val = arr[x][y];
      if (arr[x][y + 1]) {
        const currMax = val * arr[x][y + 1];
        if (currMax > maxVal) {
          maxVal = currMax;
        }
      }
      if (arr[x + 1]) {
        const currMax = val * [x + 1][y];
        if (currMax > maxVal) {
          maxVal = currMax;
        }
      }
    }
  }
  return maxVal;
};
