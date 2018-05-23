'use strict';

import Queue from 'queue-fifo';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  printLevelOrder() {
    if (!this.root) {
      return null;
    }
    return this._printLevelOrder(this.root);
  }

  _printLevelOrder(root) {
    const queue = new Queue();
    queue.enqueue(root);
    let printString = `${this.root.value}`;

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      for (let i = 0; i < currentNode.children.length; i++) {
        printString += currentNode.children[i].value;
        queue.enqueue(currentNode.children[i]);
      }
    }
    return printString;
  }
}
