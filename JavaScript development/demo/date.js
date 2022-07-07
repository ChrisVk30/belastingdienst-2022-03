

let nu = new Date();
console.log(nu);
console.log(nu.toString());

console.log(nu.toString('d-m-Y H:i:s'));
console.log(nu.toLocaleTimeString());

console.log('day:', nu.getDate());
console.log('month:', nu.getMonth() + 1);
console.log('year:', nu.getFullYear());

// datum/tijd wil formatten
// datum/tijd wil manipuleren (huidige datum => morgen)
// datum/tijdstrings parsen
// verschil in tijd berekenen
// tijdzones

// third-party libaries
// - moment.js (deprecated) - IE6
// - dayjs
// - luxon



Date.prototype.toPrettyDate = function() {
	return this.getDate().toString().padStart(2, '0') + '-' + (this.getMonth() + 1).toString().padStart(2, '0') + '-' + this.getFullYear();

};
console.log(nu.toPrettyDate()); // extension method C#


// performance

function Customer(name, age) {
	this.name = name;
	this.age = age;

	// this.doe = function() { // possibly gets executed 10000 times

	// };
}
Customer.prototype.doe = function() {

};

// Object.getPrototypeOf();
// Object.setPrototypeOf();
// Object.create()

let obj = {};
console.log(obj.__proto__); // 🚨 please don't use