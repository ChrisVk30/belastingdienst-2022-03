// This is the copied reflection API
const reflection = (function () {
  function functionName(funct) {
    // SIMPLE
    if (funct.name.length > 0)
      return funct.name;
    return "anonymous";  
  }

  function hasProperty(object, propertyName) {
    return propertyName in object;
  }

  function hasProperties(object) {
    if (arguments.length < 2) {
      return false;
    } else {
      for (let i = 1; i < arguments.length; i++) {
        if (!hasProperty(object, arguments[i])) {
          return false;
        }
      }
      return true;
    }
  }

  return {
    functionName: functionName,
    hasProperty: hasProperty,
    hasProperties: hasProperties
  }
})();

// This is the solution
Function.prototype.getName = function () {
  // this = the complete function definition: function add(a, b) {...}
  return reflection.functionName(this);
}

// This has been copied as well
function add(a, b) { return a + b; };
var obj = { x: 4, y: 7, sum: add };

// Test first method functionName()
console.log('getName should detect "add": ' + add.getName());
console.log('anonymous function should detect "anonymous": ' + function () { }.getName());