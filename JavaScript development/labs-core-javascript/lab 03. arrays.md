## Lab 3 - Arrays

### 6. Baseline Questions

* With new knowledge gained, answer the next questions again.
* Let your favourite JavaScript engine evaluate expressions and verify your answers.

```javascript
{ x: null }                   // C
[1, 2, 3] || [3, 4, 5]        // D
~[4]                          // E
{ x: null } == { x: null }    // F
{ x: null } === { x: null }   // 10
```

### 7. Arrays
Write the following functions on arrays:

```javascript
function contains(array, item) {
  // returns true if the array contains the item
  // returns false otherwise
}

function add(array, item) {
  // adds the item to the array, if it is not yet included
  // does nothing, otherwise
}

function remove(array, item) {
  // removes the item from the array, if it is included
  // does nothing, otherwise
}

function sum(array) {
  // returns the sum of all elements
}
```

### 8. Puzzle (if time permits)
a. What is the value of x in:

```javascript
let x = [ , , ].length
```

Check the result in a browser.

b. What is the value of x in:

```javascript
let x = ++[[]][+[]]+[+[]];
```

Check the result in a browser.