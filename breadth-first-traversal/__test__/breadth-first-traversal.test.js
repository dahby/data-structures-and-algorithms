'use strict';

import Node from '../node';
import breadthFirstTraversal from '../breadth-first-traversal';
import BinaryTree from '../binary-tree';

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
const falseTree = new BinaryTree();

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = fifteen;
seven.right = nine;

describe('#breadthFirstTraversal', () => {
  test('Should return string in level-order sequence', () => {
    expect(breadthFirstTraversal(tree.root)).toEqual('1236457159');
  });
  test('Should return correct typeof, "string"', () => {
    expect(typeof breadthFirstTraversal(tree.root)).toEqual('string');
  });
  test('Should return undefinted as there is no root node', () => {
    expect(breadthFirstTraversal(falseTree.root)).toEqual(undefined);
  });
});
