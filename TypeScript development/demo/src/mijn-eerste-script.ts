class Ding {
	constructor() {
		console.log(`hoi`);
	}
}

const voorwerp = new Ding();
console.log("hallo iets anders 29");

function bla(...params: number[]) {}
bla(4, 8, 15);

function doe2(naam?: string) {
	// if (!naam) {
	// 	throw new Error("...");
	// }

	naam?.substring(0, 51);
}
doe();

class Haha {
	x!: number;
	constructor() {
		// this.x = 23;
	}
}


let _this = {};

// const func = () => {
// 	console.log(this);
// };