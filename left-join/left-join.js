'use strict';

const leftJoin = (hashMap1, hashMap2) => {
  hashMap1.forEach((value, key) => {
    const currentValue = hashMap2.get(key);
    if (currentValue) {
      for (let i = 0; i < currentValue.length; i++) {
        value.push(currentValue[i]);
      }
    } else {
      value.push(null);
    }
  });
  return hashMap1;
};

export default leftJoin;
