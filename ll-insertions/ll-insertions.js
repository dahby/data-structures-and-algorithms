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

  insertBefore(value, newVal) {
    const node = new Node(newVal);
    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    let currNode = this.head;
    while (currNode.next.value !== value) {
      currNode = currNode.next;
      if (currNode.value !== value && !currNode.next) {
        throw new Error('Expected value does not exist');
      }
    }
    node.next = currNode.next;
    currNode.next = node;
    return this;
  }

  insertAfter(value, newVal) {
    const node = new Node(newVal);
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
      if (currNode.value !== value && !currNode.next) {
        throw new Error('Expected value does not exist');
      }
    }
    node.next = currNode.next;
    currNode.next = node;
    return this;
  }
};
