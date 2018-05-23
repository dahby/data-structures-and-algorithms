'use strict';

import KAryNode from '../kary-node';
import KAryTree from '../print_level_order';

describe('print_level_order.js tests', () => {
  const one = new KAryNode(1);
  one.appendChild(2);
  one.appendChild(3);
  one.appendChild(4);
  one.children[1].appendChild(5);
  one.children[1].appendChild(6);
  one.children[1].appendChild(7);
  one.children[1].children[1].appendChild(8);
  const testTree = new KAryTree(one);
  const falseTree = new KAryTree();

  describe('#printLevelOrder', () => {
    test('should return string in level order', () => {
      expect(testTree.printLevelOrder()).toEqual('12345678');
      expect(typeof testTree.printLevelOrder()).toEqual('string');
    });
    test('should return null if no tree is present', () => {
      expect(falseTree.printLevelOrder()).toBeNull();
    });
  });
});
