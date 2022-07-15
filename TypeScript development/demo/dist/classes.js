"use strict";
var _a;
class Voorwerp {
    constructor() {
        this.name = 'iets';
    }
    doe() {
        // this.name = 'fsdf';
    }
}
class Productje {
    constructor(id, description, price) {
        this.id = id;
        this.description = description;
        this.price = price;
        // this.fillId();
    }
    fillId() {
        // this.id = 4565;
    }
}
let product = new Productje(4, 'Iets tofs', 999);
console.log(product);
class DeadBeing {
}
class DeadAnimal extends DeadBeing {
    move() {
        console.log(this);
    }
}
new DeadAnimal();
// new DeadBeing(); // compile-time only, as multiple things with TypeScript
let roadkill = new DeadAnimal();
roadkill.move();
// TypeScript does not do a lot here
let move = roadkill.move;
move();
// this als een fake parameter
function handleClick() {
    console.log(this);
}
(_a = document.querySelector('#btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleClick);
//# sourceMappingURL=classes.js.map