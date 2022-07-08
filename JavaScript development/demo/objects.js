let x = 6868;
let y = 66;

let suffix = 'name';

let obj = {
    x,
    y,
    // computed property names
    ['first' + suffix]: 'JP',
    ['sur' + suffix]: 'ten Berge',
    y: 'hoi',
    doe() { // classes
        console.log('obj doe', this);
    }
};

console.log(obj);
obj.doe();

let obj1 = { x: 24, y: 'hoi' };
let obj2 = { y: 'wauw', z: 999 };
let combined = { ...obj2, ...obj1 };
console.log('combined:', combined);

// testdata
function createProduct(partialProduct) {
    return {
        id: 8,
        description: 'Muis',
        price: 485,
        ...partialProduct // spread operator
    };
}
console.log(createProduct({
    description: 'Monitor'
}));

console.log(Object.is(2, '2')); // false
console.log(Object.is(2, 2)); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false

let merged = { t: 'hallo'};
Object.assign(merged, obj1, obj2);
console.log('merged:', merged);
