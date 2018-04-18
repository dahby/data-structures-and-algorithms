'use strict';

const search = require('../binary-search');

describe('binary-search.test.js', () => {
  describe('search.BinarySearch', () => {
    test('Should return correct index, small array', () => {
      expect(search.BinarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
    });
    test('Should return -1', () => {
      expect(search.BinarySearch([5, 4, 3, 2, 1], 6)).toEqual(-1);
    });
    test('Should return correct index, large array', () => {
      expect(search.BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toEqual(6);
    });
  });
});
