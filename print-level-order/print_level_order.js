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
    const queueA = new Queue();
    const queueB = new Queue();
    queueA.enqueue(root);
    let output = `${this.root.value}`;

    let currentNode = null;

    while (!queueA.isEmpty() && !queueB.isEmpty()) {
      if (queueB.isEmpty()) {
        currentNode = queueA.dequeue();
        for (let i = 0; i < currentNode.children.length; i++) {
          output += currentNode.children[i].value;
          queueB.enqueue(currentNode.children[i]);
        }
      }
    }
    return output;
  }
}
