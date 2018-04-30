'use strict';

const Stack = require('./stack');

module.exports = class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    this.stackA.push(value);
    return this.stackA;
  }

  dequeue() {
    if (this.stackB.isEmpty) {
      while (this.stackA) {
        const temp = this.stackA.pop();
        this.stackB.push(temp);
      }
    } 
    return this.stackB.pop(); 
  }
}
