// symbols

// wazig

// nieuw primitief datatype
// iets uniek te adresseren
// ab884ba0-abad9a9-abdeffe99ad094-90291

const sym1 = Symbol(); // nieuwe GUID
const sym2 = Symbol(); // nieuwe GUID

console.log(sym1);

console.log(sym1 === sym2);
console.log(sym1.toString());

const sym5 = Symbol.for('bladiebla'); // get or create
const sym6 = Symbol.for('bladiebla'); // get or create
console.log(sym5 === sym6);

let obj = {
	[sym5]: 'hoi',
	[Symbol.toPrimitive]() {
		return 'wauw!';
	},
	toString() {
		return 'flats';
	}
};
console.log(obj);
console.log(obj[sym5]);

console.log(`${obj}`);
