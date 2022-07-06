## Lab 2 - Types, Conversions, Operators

### 3. Baseline Questions

* With new knowledge gained, answer the first eleven questions (shown below) again.
* Let your favourite JavaScript engine evaluate the first eleven expressions and verify your answers.

```javascript
null == null              // 1
undefined == undefined    // 2
null == undefined         // 3
NaN == NaN                // 4
2 == "2"                  // 5
2 + "2"                   // 6
"2" * "2"                 // 7
true && false             // 8
2 && 4                    // 9
4 && 2                    // A
null || 7                 // B
```

### 4. Reasoning about Expressions
Look at the code below.  
a. What would be the value of the four expressions below?  
b. What steps (conversions) have been taken and what triggered those conversions?

```javascript
let x = "1";
let y = 1;
x + y        // 1
x * y        // 2
x == y       // 3
x ? 2 : 3    // 4
```

### 5. Puzzle (if time permits)
a. Find a value x for which:
```javascript
+!x === 1
```
b. Check your answer by writing a little JavaScript program.  
c. Find all different values for which this holds.
