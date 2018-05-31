'use strict';

import BinaryTree from '../binary-tree';
import Node from '../node';
import treeIntersection from '../tree-intersection';

const oneL = new Node(1);
const twoL = new Node(2);
const threeL = new Node(3);
const fourL = new Node(4);
const fiveL = new Node(5);
const sixL = new Node(6);
const twoR = new Node(2);
const fourR = new Node(4);
const fiveR = new Node(5);
const sevenR = new Node(7);
const eightR = new Node(8);
const treeLeft = new BinaryTree(oneL);
const treeRight = new BinaryTree(twoR);
const notATree = 0;

oneL.left = twoL;
oneL.right = threeL;
twoL.left = fourL;
threeL.left = fiveL;
threeL.right = sixL;
twoR.left = fourR;
twoR.right = sevenR;
fourR.left = fiveR;
fourR.right = eightR;

describe('#treeIntersection', () => {
  test('Should return array of matching values', () => {
    expect(treeIntersection(treeLeft, treeRight)).toEqual([5, 4, 2]);
  });
  test('Should return empty array if no matching values', () => {
    // const output = [];
    const sevenF = new Node(7);
    const eightF = new Node(8);
    const nineF = new Node(9);
    const tenF = new Node(10);
    sevenF.left = eightF;
    sevenF.right = nineF;
    nineF.right = tenF;
    const treeFail = new BinaryTree(sevenF);
    expect(treeIntersection(treeLeft, treeFail)).toEqual([]);
  });
  test('Should be undefined if one of the inputs is not a tree', () => {
    expect(treeIntersection(treeLeft, notATree)).toBeUndefined();
  });
});
