'use strict';

import { mergeSort } from '../mergesort';

const testList1 = [3, 2, 6, 5, 1, 9, 8];
const testList2 = [2];
const testList3 = [];

describe('#mergeSort', () => {
  test('Out of order input should return in order', () => {
    expect(mergeSort(testList1)).toEqual([1, 2, 3, 5, 6, 8, 9]);
  });
  test('Array with only one item should automatically re-return input', () => {
    expect(mergeSort(testList2)).toEqual([2]);
  });
  test('Empty input array should result in undefined', () => {
    expect(mergeSort(testList3)).toBeUndefined();
  });
});
