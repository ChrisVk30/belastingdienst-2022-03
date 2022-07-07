'use strict';

// var = lexical scope
// let = block scope (C#)
// JS let === C# var

// var i; // hoisting

var x = 14;
let y = 28;
const iets = 'wauw';


// console.log('i voor for:', i);


for (let i = 0; i < 5; i++) {
	console.log('i:', i);
}

// console.log('i buiten for:', i);

function test() { // dit introduceerde een nieuwe scope
	ding = 'wauw 2';
}
test();

console.log('ding:', ding);
