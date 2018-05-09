'use strict';

import BinaryTree from '../binary-tree';
import Node from '../node';
import findMaximumValue from '../find-maximum-value-binary-tree';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const fifteen = new Node(15);
const nine = new Node(9);
const tree = new BinaryTree(one);
const falseTree = 0;

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = fifteen;
seven.right = nine;

describe('#findMaximumValue', () => {
  test('Should return maximum value', () => {
    expect(findMaximumValue(tree)).toEqual(15);
  });
  test('Should return correct typeof, "number"', () => {
    expect(typeof findMaximumValue(tree)).toEqual('number');
  });
  test('Should return undefinted as there is no root node', () => {
    expect(findMaximumValue(falseTree)).toEqual(undefined);
  });
});
