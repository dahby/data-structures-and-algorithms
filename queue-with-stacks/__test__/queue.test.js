'use strict';

const Queue = require('../queue');

describe('stacks with queues', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  test('#enqueue', () => {
    expect(queue.stackA.head).toEqual(1);
  }); 
});
