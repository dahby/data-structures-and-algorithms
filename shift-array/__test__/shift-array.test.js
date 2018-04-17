'use strict';

const shiftArray = require('../shift-array.js');

describe('shift-array.test.js', () => {
  describe('shiftArray.insertShiftArray', () => {
    test('Should return correctly from even numbered array', () => {
      expect(shiftArray.insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
    });
    test('Should return correctly from odd numbered array', () => {
      expect(shiftArray.insertShiftArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
    });
    test('Should return correctly from an empty array', () => {
      expect(shiftArray.insertShiftArray([])).toEqual([]);
    });
  });
});
