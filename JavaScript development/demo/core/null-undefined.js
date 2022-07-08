

let x = null;
let y = undefined;

console.log(x, y);


// wat is het verschil tussen null en undefined???

// null leeg en 
// undefined niet bestaat

// null heeft een type
// undefined niet

console.log(typeof NaN); // number
console.log(typeof null); // object - side effect
console.log(typeof undefined); // "undefined"


// null is altijd expliciet ingesteld
// undefined is "de default waarde" voor iets wat er niet is


let dinges;
console.log(dinges);

let obj = {};
console.log(obj.dinges);

console.log(document.querySelector('#niet-bestaand-element'));
