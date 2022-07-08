'use strict';

let lijstje = [
    1,
    2,
];
console.log(lijstje.length);

let iets = [,,,,,].length
console.log(iets);

let obj = {
    x: 24,
    y: 49,
    hoi: function() {

    },
    subobj: {},
    sublijst: []
};
obj.z = 'qweert';
console.log(obj);

// Object.preventExtensions(obj);
obj.x = 48;
// Object.freeze(obj);

// obj.ietsnieuws = 384;
console.log(obj);
console.log('x met punt:', obj.x);
console.log('x met blokhaken:', obj['x']);

// schattig dat dit kan
// maar zeker geen best practice
obj['ik wil graag zo"n property hebben met lastige karakters 😊'] = 'esdf';

Object.defineProperty(obj, 'heledynamischeprop', {
    value: 'halloooo',
    configurable: false,
    writable: false
});

console.log('na defineproperty', obj);
console.log('na defineproperty', obj.heledynamischeprop);

let image = {
    width: 150,
    height: 225,
    // for convenience reasons
    get squareFootage() {
        return this.width * this.height;
    },
    set squareFootage(value) {
        console.log('setter aangeroepen met', value);
    }
};
console.log('image properties');
console.log(image.width);
console.log(image.height);
console.log(image.squareFootage);

image.squareFootage = 23884;

console.log(JSON.stringify(obj));
let jsonString = '{"x":48,"y":49,"subobj":{},"sublijst":[],"z":"qweert","ik wil graag zo\\"n property hebben met lastige karakters 😊😊😊🤣":"esdf"}';
let fatsoenlijkObj = JSON.parse(jsonString);
console.log(fatsoenlijkObj);



let onnodigWerk = JSON.parse(JSON.stringify(obj)); // deep copy / deep clone
console.log(onnodigWerk);
console.log('same?', onnodigWerk === obj);
