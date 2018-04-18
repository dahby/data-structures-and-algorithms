'use strict';

const search = module.exports = {};

search.BinarySearch = (arr, key) => {
  let n;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      n = i;
      break;
    } else {
      n = -1;
    }
  }
  return n;
};
