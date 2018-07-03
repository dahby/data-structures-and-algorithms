'use strict';

const deleteNth = (arr, n) => {
  const result = [];
  const itemCounter = {};
  for (let x = 0; x < arr.length; x++) {
    const item = arr[x];
    const counter = itemCounter[item] || 0;
    if (counter < n) {
      result.push(item);
      itemCounter[item] = counter + 1;
    }
  }
  return result;
};

export default deleteNth;
