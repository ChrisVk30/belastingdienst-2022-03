function contains(array, item) {
  return array.indexOf(item) !== -1;
}

// alternative:
// function contains(array, item) {
//   return array.includes(item);
// }

function add(array, item) {
  if (array.indexOf(item) === -1) {
    array.push(item);
  }
}

function remove(array, item) {
  let index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

function sum(array) {
  let total = 0;
  for(let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// alternative:
// function sum(array) {
//   return array.reduce(function(total, elem) {
//     return total + elem;
//   }, 0);
// }



// Test contains
let testArray = [1,2,3];
console.log("Array contains 3:", contains(testArray, 3));
console.log("Array doesn't contain 4:", !contains(testArray, 4));

// Test add
add(testArray, 4);
console.log("Array contains 1,2,3,4:", testArray.join() === "1,2,3,4");
add(testArray, 2);
console.log("Array contains 1,2,3,4:", testArray.join() === "1,2,3,4");

// Test remove
remove(testArray, 2);
console.log("Array contains 1,3,4:", testArray.join() === "1,3,4");
remove(testArray, 2);
console.log("Array contains 1,3,4:", testArray.join() === "1,3,4");

// Test sum
console.log("Sum is 10:", sum([1,2,3,4]) === 10);