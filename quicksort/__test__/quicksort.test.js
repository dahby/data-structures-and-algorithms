'use strict';

import quickSort from '../quicksort';

const testArray1 = [4, 2, 9, 5, 1, -10, 32];
const testArray2 = [2];
// const testArray3 = 'not an array';

describe('#quicksort', () => {
  test('Should return a sorted array', () => {
    expect(quickSort(testArray1)).toEqual([-10, 1, 2, 4, 5, 9, 32]);
  });
  test('Should return original array if length = 1', () => {
    expect(quickSort(testArray2)).toEqual([2]);
  });
  test('Should return undefined if no array is passed', () => {
    expect(quickSort()).toBeUndefined();
  });
});
