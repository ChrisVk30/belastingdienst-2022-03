'use strict';

function sum(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5));


function sayHello(name = "you") {
  console.log(`Hello ${name}`);
}

sayHello('Esther');
sayHello();

const sum2 = (...numbers) => {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sum2(1, 2, 3, 4, 5));

const sayHello2 = (name = "you") => console.log(`Hello ${name}`);

sayHello('Sarah');
sayHello();