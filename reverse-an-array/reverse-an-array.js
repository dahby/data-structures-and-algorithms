'use strict';


const reverseArray = (arr) => {
  const newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  console.log(newArray);
  return newArray;
};

reverseArray();
