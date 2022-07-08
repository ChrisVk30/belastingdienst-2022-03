

// nieuwe string functies

console.log('bla'.repeat(3));
console.log('hoi hoi hoi'.replaceAll('hoi', 'doei'));
console.log('8'.padStart(4, '0'));
console.log('80'.padStart(4, '0'));
// left-pad

let x = 'dsfdsf\n\n' +


'qqq';
let y = "dfjkf <br>dhgjk";
let z = `hallo ${x.toUpperCase()}

daar`; // backtick // string interpolation // template
// let z = 'hallo ' + x + 'daar'; // backtick // string interpolation

console.log(z);

console.log('------------');


transform`hallo ${x.toUpperCase()}

daar`;

function transform(input) {
    console.log('transform:', input);
}

// unicode support
console.log('😊😂🤣'.length);
console.log([...'😊😂🤣'].length);

console.log('😊'.codePointAt());
// console.log('😊'.charCodeAt());

let regex = /[a-z🤣]/u; // flags
