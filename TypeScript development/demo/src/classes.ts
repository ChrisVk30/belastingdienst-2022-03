

class Voorwerp {
    readonly name: string;

    constructor() {
        this.name = 'iets';
    }

    doe() {
        // this.name = 'fsdf';
    }
}

class Productje {
    constructor(
        private readonly id: number,
        private description: string,
        private price: number) {
        // this.fillId();
    }

    fillId() {
        // this.id = 4565;
    }
}

let product = new Productje(4, 'Iets tofs', 999);
console.log(product);


abstract class DeadBeing {

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
function handleClick(this: HTMLButtonElement) {
    console.log(this);
}

document.querySelector('#btn')?.addEventListener('click', handleClick);

