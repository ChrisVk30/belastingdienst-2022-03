function sum(args) {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

// alternative
// function sum(args) {
//   let result = 0;
//   for (let arg of arguments) {
//     result += arg
//   }
//   return result;
// }

// alternative
// function sum(args) {
//   return Array.from(arguments).reduce((prev, curr) => prev + curr, 0);
// }

// test
console.log(sum(1, 2, 3));
console.log(sum());

function sayHello(name) {
  return "Hello " + (name || "");
}

// test
console.log(sayHello());
console.log(sayHello("Bob"));