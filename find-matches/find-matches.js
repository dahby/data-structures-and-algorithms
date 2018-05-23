'use strict';

import Queue from 'queue-fifo';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  findMatches() {
    if (!this.root) {
      return undefined;
    }
    return this._findMatches(this.root);
  }

  _findMatches(root, targetValue) {
    const queue = new Queue();
    const output = [];
    queue.enqueue(this.root);

    let currentNode = null;
    
    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      if (currentNode.value === targetValue) {
        output.push(currentNode);
      }
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return output;
  }
}
