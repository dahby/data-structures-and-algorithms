'use strict';

const LinkedList = require('../ll-kth-from-end');

const testList = new LinkedList();
const emptyList = new LinkedList();
testList.append(1);
testList.append(2);
testList.append(3);
testList.append(4);

describe('ll-kth-from-end.js', () => {
  test('#kthFromEnd on testList - success', () => {
    expect(testList.kthFromEnd(0).value).toEqual(4);
  });
  test('#kthFromEnd on testList - error', () => {
    expect(() => { testList.kthFromEnd(5); }).toThrow('LIST DOES NOT CONTAIN THAT NODE');
  });
  test('#kthFromEnd on emptyList', () => {
    expect(() => { emptyList.kthFromEnd(2); }).toThrow('LIST IS EMPTY');
  });
});
