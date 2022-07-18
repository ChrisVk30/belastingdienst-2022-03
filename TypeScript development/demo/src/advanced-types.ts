let x: number = null;
let y: number = undefined;
let z: number | undefined = undefined;
z = 24;

let getallen = [4, null, 8];

class Animal {}
class Cat extends Animal {}
class Cow extends Animal {}
class Mouse extends Animal {}
let animals = [new Cat(), null, new Cow()];
animals.push(new Mouse());

let ietsjes: number | string = 42;


function bla(x: number | string): x is number { // custom type guard
	return typeof x === 'number';
}

function doeIetsMetType(q: number | string) {
	if (bla(q)) { // custom type guard
		q.toFixed(4);
	}
	// if (typeof q === "number") { // type guard
	// 	q.toFixed(4);
	// }
}
doeIetsMetType(ietsjes);


let whatthehellisdit: unknown = 42;
(whatthehellisdit as number).toFixed(2);

// any
// unknown
// as

interface Oogaboga {
	dingetje: number;
}

let btn = document.querySelector('#btn');
// (btn as Oogaboga).dingetje // nope
// (btn as any as Oogaboga).dingetje




type dingetje = 42 | 'hoi' | 'doei';
// enum Dingetje {
// 	Hoi,
// 	Doei,
// 	FortyTwo = 42
// }

function doe2333(x: dingetje) {
	
}
doe2333(42);
