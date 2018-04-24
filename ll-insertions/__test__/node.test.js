'use strict';

const Node = require('../node');

const node = new Node('David');

describe('node.js', () => {
  test('node constructor', () => {
    expect(node.value).toEqual('David');
    expect(node.next).toBeNull();
  });
});
