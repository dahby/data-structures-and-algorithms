'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

const mockCat = {
  type: 'cat',
};

const mockDog = {
  type: 'dog',
};

describe('AnimalShelter Class', () => {
  const mockShelter = new AnimalShelter();
  mockShelter.enqueue(mockCat);
  mockShelter.enqueue(mockDog);
  mockShelter.enqueue(mockCat);
  mockShelter.enqueue(mockCat);
  mockShelter.enqueue(mockDog);
  test('#enqueue', () => {
    expect(mockShelter.animals).toHaveLength(5);
    expect(mockShelter.animals[0]).toEqual(mockCat);
    expect(mockShelter.animals[1]).toEqual(mockDog);
    expect(mockShelter.animals[2]).toEqual(mockCat);
  });

  test('#dequeue', () => {
    expect(mockShelter.dequeue()).toEqual(mockCat);
    expect(mockShelter.animals[0]).toEqual(mockDog);
    expect(mockShelter.dequeue('cat')).toEqual(mockCat);
    expect(mockShelter.animals[0]).toEqual(mockDog);
    expect(mockShelter.dequeue('dog')).toEqual(mockDog);
    expect(mockShelter.animals[0]).toEqual(mockCat);
  });
});
