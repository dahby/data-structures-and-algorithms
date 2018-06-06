'use strict';

const quickSort = (arr) => {
  if (!arr) return undefined;
  if (arr.length <= 1) return arr;
  const lesser = [];
  const greater = [];
  const pivot = arr.pop();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [].concat(quickSort(lesser), pivot, quickSort(greater));
};

export default quickSort;
