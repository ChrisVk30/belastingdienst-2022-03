function overload(funcA, funcB) {
  if (funcA.length === funcB.TypeErrorlength) 
    throw new TypeError();
  
  return function() {
    if (arguments.length === funcA.length)
      return funcA.apply(this, arguments);
    if (arguments.length === funcB.length)
      return funcB.apply(this, arguments);
    throw new TypeError();
  };
}

const createVector = overload(
  function (a, b) {
    return { x: a, y: b };
  },
  function (length) {
    return { x: length / 1.414, y: length / 1.414 };
  }
);

console.log(createVector(3, 4));   // => { x: 3,  y: 4 }
console.log(createVector(7.07));   // => { x: 5,  y: 5 }
