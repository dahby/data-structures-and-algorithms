'use strict';

import repeatedWord from '../repeated-word';

const testStr1 = 'She sells sea shells by the sea shore';
const testStr2 = 'Many times many words will match other words';
const testStr3 = 'This string has no matching words';

describe('#repeatedWord', () => {
  test('Should return first match when only one match exists', () => {
    expect(repeatedWord(testStr1)).toEqual('sea');
  });
  test('Should return first match when multiple matches exist', () => {
    expect(repeatedWord(testStr2)).toEqual('many');
  });
  test('Should return null when no matches exist', () => {
    expect(repeatedWord(testStr3)).toBeNull();
  });
});
