'use strict';

import KAryNode from '../kary-node';
import KAryTree from '../find-matches';

describe('find-matches.js tests', () => {
  const one = new KAryNode(1);
  one.appendChild(2);
  one.appendChild(1);
  one.appendChild(4);
  one.children[1].appendChild(1);
  one.children[1].appendChild(6);
  one.children[1].appendChild(7);
  one.children[1].children[1].appendChild(1);
  const testTree = new KAryTree(one);
  const falseTree = new KAryTree();
  describe('#findMatches', () => {
    test('should return array of matching node values', () => {
      expect(testTree.findMatches(testTree, 1)).toEqual([1, 1, 1, 1]);
      expect(testTree.findMatches(testTree, 2)).toEqual([2]);
    });
    test('should return undefined if not a tree', () => {
      expect(falseTree.findMatches()).toBeNull();
    });
  });
});
