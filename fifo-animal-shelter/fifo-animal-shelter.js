'use strict';

module.exports = class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  enqueue(animal) {
    this.animals.push(animal);
  }

  dequeue(pref) {
    let returned = null;
    if (pref) {
      for (let x = 0; x < this.animals.length; x++) {
        if (this.animals[x].type === pref) {
          returned = this.animals.splice(x, 1);
        }
      }
    } else {
      returned = this.animals.splice(0, 1);
    }
    return returned[0];
  }
};
