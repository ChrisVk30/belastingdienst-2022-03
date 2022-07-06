## Lab 5 - Objects

### 14. Baseline Questions

* With new knowledge gained, answer the next questions (18-1B) again.
* Let your favourite JavaScript engine evaluate expressions and verify your answers.

```javascript
function test(a) {
  return a + 5;
}
test.b = null;

typeof test             // 18
typeof test.prototype   // 19
test.toString()         // 1A
"b" in new test()       // 1B
```

### 15. Prototypes
Add a ```getName()``` method to the Function prototype. Implement it using the functionName(funct) in the reflection API from lab 04, exercise 11.
Store the full solution in one file.

### 16. Classes
* Write a class Customer that has the following properties:  
  ```id```, ```name```, ```city```, ```nrOfUnpaidBills```  
and the methods:
```buyStuff()```, ```payBill()```  
and the constructor
```Customer(id, name, city)```

  When a Customer is created, ```nrOfUnpaidBills```  equals 0.  
  Each time ```buyStuff()``` is called, ```nrOfUnpaidBills``` is increased by 1.  Each time ```payBill()``` is called, ```nrOfUnpaidBills``` is decreased by 1.
* Make the property ```nrOfUnpaidBills``` private (not accessible outside the Customer object), and add a method ```badPayer(int n)```. This method returns ```true``` if ```nrOfUnpaidBills``` is n or more, and returns ```false```, otherwise.  
* Override the ```toString()``` method for Customer objects. It should return ```id```, ```name```, and ```city```, formatted like: "(id) name - city".

When tests are successfully add the Customer class to the namespace **com.yourCompany.CRM** and retest.

### 17. Event Class
Copy the code from exercise 16 in a new file. Write a helper class (in the namespace **com.yourCompany.common**) that implements an event mechanism.  

* Write a class EventHandler, that has a private array ```listeners```
and 3 public methods:
  * ```addListener(listener)```  
    if ```listener``` is a function, then add the listener to the array of listeners, otherwise fail silently.
  * ```removeListener(listener)```
    if the array of listeners contains ```listener``` (same object reference), then remove the first occurrence of this listener from the array of listeners, otherwise fail silently.
  * ```invoke(sender, args)```
    iterates through the array of listener functions and invoke all functions by passing them the sender and args objects.  

* Change the Customer class. Add a property ```unpaidBillsChanged``` and assign it a new EventHandler object in the Customer constructor.  

* Invoke the ```unpaidBillsChanged``` event handler each time the ```nrOfUnpaidBills``` changes value, passing the customer object and an object literal with a bills property that contains the new number of unpaid bills.

* Add the following code and see that information is printed in the console:

```javascript
function accountant(sender, args) {
  console.log(sender.toString());
  console.log(args.bills);
}

const bob = new com.infoSupport.CRM.Customer(101, "Bob", "Utrecht");
bob.unpaidBillsChanged.addListener(accountant);

bob.buyStuff();  // => prints  "(101) Bob - Utrecht"  and  1  to console
bob.buyStuff();  // => prints  "(101) Bob - Utrecht"  and  2  to console
bob.payBill();   // => prints  "(101) Bob - Utrecht"  and  1  to console

bob.unpaidBillsChanged.removeListener(accountant);

bob.buyStuff();  // => prints  nothing
```

### 18. Puzzle (if time permits)
For long namespaces, the namespace pattern can get a bit out of control.

```javascript
let com;

(function(ns) {
  ns.getSize = function () {
    return 'getSize() works!';
  };
})
(
  (
    com = com || {},
    com.infoSupport = com.infoSupport || {},
    com.infoSupport.projX = com.infoSupport.projX || {},
    com.infoSupport.projX.v1 = com.infoSupport.projX.v1 || {},
    com.infoSupport.projX.v1.model = com.infoSupport.projX.v1. model || {}
  )
);
```

Let's try to make this somewhat less cumbersome.

It would be more convenient to just write:

```javascript
(function(ns) {
  ns.getSize = function () {
    return 'getSize() works!';
  }; 
})
((comNS("com.infoSupport.projx.v1.model"));
```

Implement a solution by writing a new helper function ```comNS```.