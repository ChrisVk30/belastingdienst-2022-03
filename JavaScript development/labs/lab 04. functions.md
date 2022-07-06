## Lab 4 - Functions

### 9. Baseline Questions

* With new knowledge gained, answer the next questions (11-17) again.
* Let your favourite JavaScript engine evaluate expressions and verify your answers.

```javascript
function test(a) {
  return a + 5;
}
test.b = null;

test(3)         // 11
test("2")       // 12
test(4, 2)      // 13
test.a + 5      // 14
test.b          // 15
test.c          // 16
test["b"] + 7   // 17
```

### 10. Functions
Write a function with an arbitrary number of parameters:

```javascript
function sum( /* arbitrary number of parameters */ ) {
  // returns the sum of all parameters
}
```

Write a function with an optional parameter:

```javascript
function sayHello( /* optional: name */ ) {
  // writes 'Hello' to the console, or
  // 'Hello <name>' if a name is provided
  // (hint: try using the || operator)
}
```

### 11. Revealing Module Pattern
Build a reflection API that exposes the following methods:

```javascript
functionName(funct) {
  // returns the name of the function as a string, if the function has a name
  // returns "anonymous", if it is an anonymous function
  // returns undefined, otherwise
  // (hint: try using regular expressions - it'll make this method a little more challenging)

hasProperty(object, propertyName)
  // returns true if the object has a property with that name
  // returns false, otherwise
  // (hint: try using the in operator)	

hasProperties(object, name_1, name_2, ..., name_n) 
  // returns true if the object has all listed properties
  // returns false, otherwise
  // (hint: this function has one or more arguments)
```

The reflection API must be usable as follows: 	

```javascript
function add(a,b) { return a + b; };
const obj = { x: 4, y: 7, sum: add };

reflection.functionName(obj.sum);                // => "add"
reflection.hasProperty(obj, "x");     	         // => true
reflection.hasProperties(obj, "x", "sum", "y");  // => true
```

### 12. Namespace Pattern
Make the reflection API a member of the namespace **com.yourCompany.common**.

### 13. Puzzle (if time permits)
Write a function: 

```javascript
  function overload(function_with_n_parameters, function_with_m_parameters) { 
    // throws a TypeError if both functions have the same number of parameters, otherwise
    // returns a function that
    //    - when called with n parameters, forwards the call to function_with_n_parameters,
    //    - when called with m parameters, forwards the call to function_with_m_parameters,
    //    - when called otherwise, throws a TypeError
    // (hint: every function has a length property that returns the number of formal parameters in the definition of that function)
  }
```

```javascript
const createVector = overload(
  function (a, b) {
    return { x: a,  y: b };
  },
  function (length) {
    return { x: length / 1.414,  y: length / 1.414 };
  }
);

createVector(3, 4);  // => { x: 3,  y: 4 }
createVector(7.07);   // => { x: 5,  y: 5 }
```