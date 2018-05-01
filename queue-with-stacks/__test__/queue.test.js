'use strict';

const Queue = require('../queue');

describe('stacks with queues', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  test('#enqueue', () => {
    expect(queue.stackA[0]).toEqual(1);
    expect(queue.stackA[1]).toEqual(2);
    expect(queue.stackB[0]).toBeUndefined();
  });
  test('#dequeue', () => {
    // queue.dequeue();
    expect(queue.dequeue()).toEqual(3);

    // expect(queue.stackB[0]).toEqual(3);
    // expect(queue.stackB._storage.head.next.next).toBeNull();
  }); 
});
