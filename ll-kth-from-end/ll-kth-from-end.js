'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = node;
    return this;
  }

  kthFromEnd(k) {
    let len = 0;
    let currNode = this.head;
    if (currNode === null) {
      throw new Error('LIST IS EMPTY');
    }
    while (currNode.next !== null) {
      currNode = currNode.next;
      len += 1;
    }
    if (k > len) {
      throw new Error('LIST DOES NOT CONTAIN THAT NODE');
    }
    const pos = len - k;
    let currNode2 = this.head;
    for (let x = 0; x < pos; x++) {
      currNode2 = currNode2.next;
    }
    return currNode2;
  }
};
