// add a namespace wrapper (another IIFE that will map reflection to the provided namespace)
(function (ns) {
  const reflection = (function () {
    function functionName(funct) {
      // SIMPLE
      // if (funct.name.length > 0)
      //   return funct.name;
      // return "anonymous";  

      // MORE COMPLEX
      let regex = /function (.+)\(.*/;
      let matches = regex.exec(funct.toString());

      if (matches === null)
        return "anonymous";
      return matches[1];
      // first group [0] is everything up to (
      // second group [1] is the function name
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

  // Make it publicly available in the provided namespace
  ns.reflection = reflection;
})(
  (
    global.com = global.com || {},
    global.com.infosupport = global.com.infosupport || {},
    global.com.infosupport.common = global.com.infosupport.common || {}
  )
);

function add(a, b) { return a + b; };
const obj = { x: 4, y: 7, sum: add };

// enshorten the namespace for simpler usage:
const reflection = com.infosupport.common.reflection;

// Test first method functionName()
console.log('functionName should detect "add": ' + reflection.functionName(add));
console.log('functionName should detect "add": ' + reflection.functionName(obj.sum));
console.log('functionName should detect "anonymous": ' + reflection.functionName(function () { }));

// Test second method hasProperty()
console.log('hasProperty should return true: ' + reflection.hasProperty(obj, "x"));
console.log('hasProperty should return true: ' + reflection.hasProperty(obj, "sum"));
console.log('hasProperty should return false: ' + reflection.hasProperty(obj, "z"));

// Test third method hasProperties()
console.log('hasProperties should return true: ' + reflection.hasProperties(obj, "x", "sum", "y"));
console.log('hasProperties should return true: ' + reflection.hasProperties(obj, "x", "sum"));
console.log('hasProperties should return false: ' + reflection.hasProperties(obj, "x", "show", "y"));