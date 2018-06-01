'use strict';

import leftJoin from '../left-join';

const hm1 = new Map();
const hm2 = new Map();

hm1.set('fond', ['enamored']);
hm1.set('wrath', ['anger']);
hm1.set('diligent', ['employed']);
hm1.set('outfit', ['garb']);
hm1.set('guide', ['usher']);
hm2.set('fond', ['averse']);
hm2.set('wrath', ['delight']);
hm2.set('diligent', ['idle']);
hm2.set('guide', ['follow']);
hm2.set('flow', ['jame']);

describe('#leftJoin', () => {
  test('should return left join of two hashmaps', () => {
    expect(leftJoin(hm1, hm2)).toEqual();
  });
});