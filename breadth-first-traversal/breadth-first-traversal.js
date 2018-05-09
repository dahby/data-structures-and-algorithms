'use strict';

import Queue from 'queue-fifo';


const breadthFirstTraversal = (rootNode) => {
  let output = '';
  if (!rootNode) {
    return undefined;
  }
  const queue = new Queue();
  queue.enqueue(rootNode);
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    output += node.value;
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  return output;
};

export default breadthFirstTraversal;
