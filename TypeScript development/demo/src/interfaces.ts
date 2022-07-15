let getalletje: number = 5;

let obj: {
    x: number,
    y: string,
    z: {}
} = {
    x: 8685,
    y: 'hallo',
    z: {}
};

interface Product {
    id: number,
    description: string,
    price: number,
    readonly isRemovedFromStock: boolean,

    calculateBtw(): number;
}; // bundle klein

let p: Product = {
    id: 47884,
    description: '3945',
    price: 9495,
    isRemovedFromStock: true,

    calculateBtw() {
        return 12.1;
    }
};
// p.isRemovedFromStock = false;

// p.isRemovedFromStock.valueOf()

function addProduct(newProduct: Product) {

}
// addProduct({

// });

// delegates
interface AddOperation {
    (x: number, y: number): number;
}
const add: AddOperation = (p, y) => {
    return 12345;
};

// extending interfaces
interface Blabla {
    doe(): string;
}
interface Blabla {
    maak(): number;
}

let bla4: Blabla = {
    doe() {
        return 'hoi';
    },
    maak() {
        return 35;
    }
};


// overloading
interface JQuery {
    init(fn: () => void): void;
    init(selector: string): void;
}

let jquery: JQuery = {
    init(fn) {
        if (typeof fn === 'function') {

        }
    }
};

// E2E-testlibrary met heel veel overloads:
// Cypress


// jquery.init()


// $(function())
// $('tr')
// $('<tr>')

class LivingBeing {
    speak() { 
        console.log('livingbeing speak');
    }
}
interface Human extends LivingBeing {
    name: string;
}
let jp: Human = {
    speak() {
        super.speak();
        console.log('jp speak');
    },
    name: 'hoi'
};

jp.speak();



interface IndexedObj {
    [key: string]: string;
}


let obj9: IndexedObj = {};
console.log(obj9.yzz);
console.log(obj9['assdfy']);
// console.log(obj9[8]);
