'use strict';

const LinkedList = require('../ll-insertions');

const testList = new LinkedList();
testList.append(1);
testList.append(2);
testList.append(3);

describe('ll-insertions.js', () => {
  test('#append', () => {
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(2);
    expect(testList.head.next.next.value).toEqual(3);
    expect(testList.head.next.next.next).toBeNull();
  });
  test('#insertBefore', () => {
    testList.insertBefore(2, 4);
    expect(testList.head.next.next.value).toEqual(2);
    expect(testList.head.next.value).toEqual(4);
  });
  test('#insertAfter', () => {
    testList.insertAfter(4, 5);
    console.log(testList);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(() => { testList.insertAfter(6, 7); }).toThrow('Expected value does not exist');
  });
});
