// console.log("hallo daar");

// // console.log('i voor for:', i); // undefined
// for (let i = 0; i < 5; i++) {
// 	console.log("i:", i);
// }
// // console.log('i buiten for:', i);

// let getal = 14; // let == c# var
// getal = "text";
// console.log(getal);

// if (getal.startsWith("te")) {
// 	console.log("ja!");
// } else {
// 	console.log("nope");
// }

// console.log('null == null', null == null); // true
// console.log('undefined == undefined', undefined == undefined); // true
// console.log('undefined == null', undefined == null); // true
// console.log('undefined === null', undefined === null); // strict compare false
// console.log('NaN == NaN', NaN == NaN); // false

// console.log(7 / 'bla');
// console.log('0 / 7', 0 / 7);
// console.log('7 / 0', 7 / 0, Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log('0 / 0', 0 / 0);


function test() {
	console.log('hallo vanuit test');
}
test();

function test(x, y) {
	console.log('hallo vanuit test met params:', x, y);
}
test(4, 8);

test(4, 8, 15, 16, 23, 42);

class Item {

}

class Ding extends Item {
	
}
