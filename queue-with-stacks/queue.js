'use strict';

// const Stack = require('./stack');

module.exports = class Queue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  enqueue(value) {
    this.stackA.push(value);
    return this.stackA;
  }

  dequeue() {
    if (this.stackB.length === 0) {
      while (this.stackA._storage) {
        const temp = this.stackA.pop();
        this.stackB.push(temp);
      }
    } 
    return this.stackB.pop(); 
  }
};
