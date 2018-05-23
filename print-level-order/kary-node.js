'use strict';

export default class KAryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.level = 1;
    this.children.level = this.level + 1;
  }
  appendChild(value) {
    this.children.push(new KAryNode(value));
  }
}
