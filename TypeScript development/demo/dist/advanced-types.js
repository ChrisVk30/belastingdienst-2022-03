"use strict";
let x = null;
let y = undefined;
let z = undefined;
z = 24;
let getallen = [4, null, 8];
class Animal {
}
class Cat extends Animal {
}
class Cow extends Animal {
}
class Mouse extends Animal {
}
let animals = [new Cat(), null, new Cow()];
animals.push(new Mouse());
let ietsjes = 42;
function bla(x) {
    return typeof x === 'number';
}
function doeIetsMetType(q) {
    if (bla(q)) { // custom type guard
        q.toFixed(4);
    }
    // if (typeof q === "number") { // type guard
    // 	q.toFixed(4);
    // }
}
doeIetsMetType(ietsjes);
let whatthehellisdit = 42;
whatthehellisdit.toFixed(2);
let btn = document.querySelector('#btn');
// enum Dingetje {
// 	Hoi,
// 	Doei,
// 	FortyTwo = 42
// }
function doe2333(x) {
}
doe2333(42);
//# sourceMappingURL=advanced-types.js.map