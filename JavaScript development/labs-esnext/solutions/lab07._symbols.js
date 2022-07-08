'use strict';

// Exercise 1

// An object without Symbol.toPrimitive property
const obj1 = {};
console.log('************obj1********************');
console.log(+obj1);      // NaN
console.log(`${obj1}`);  // "[object Object]"
console.log(obj1 == 0);  // false

// An object with Symbol.toPrimitive property
const obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 10;
    }
    if (hint === 'string') {
      return 'hello';
    }
    return true;
  }
}

console.log('************obj2********************');
console.log(+obj2);      // 10
console.log(`${obj2}`);  // "hello"
console.log(obj2 == 0);  // true