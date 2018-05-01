'use strict';

const largest = require('../largest-product');

describe('largest-product.test.js', () => {
  describe('largest.largestProduct', () => {
    test('Should return largest product, 2D array length of 2', () => {
      expect(largest.largestProduct([[1, 2], [2, 3], [3, 4]])).toEqual(12);
    });
    // test('Should return another largest product from more complex array', () => {
    //   expect(largest.largestProduct([[3, 4], [9, 2], [7, 4]])).toEqual(63);
  });
});
// });
