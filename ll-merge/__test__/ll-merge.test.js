'use strict';

const LinkedList = require('../linked-lists');
const merge = require('../ll-merge');

const llOne = new LinkedList();
const llTwo = new LinkedList();
llOne.append(1);
llOne.append(3);
llOne.append(5);
llTwo.append(2);
llTwo.append(4);
llTwo.append(6);

describe('ll-merge.js', () => {
  test('#merge when lists are same size', () => {
    expect(merge.mergeLists(llOne, llTwo)).toEqual(llOne);
  });
  test('#merge when llTwo is larger than llOne', () => {
    llTwo.append(8);
    llTwo.append(10);
    expect(merge.mergeLists(llOne, llTwo)).toEqual(llTwo);
  });
  test('#merge when llOne is larger than llOne', () => {
    llOne.append(7);
    llOne.append(9);
    llOne.append(11);
    expect(merge.mergeLists(llOne, llTwo)).toEqual(llOne);
  });
});
