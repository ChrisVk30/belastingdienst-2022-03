// iterator
let allAboutMeObj = {
	name: "JP",
	favorieteChips: ["Wokkels Paprika", "Nibb-it Rings"],
	[Symbol.iterator]() {
		let favoChips = this.favorieteChips;
		let index = 0;

		return {
			next() {
				return {
					value: favoChips[index],
					done: index++ === favoChips.length,
				};
			},
		};
	},
};

for (let item of allAboutMeObj) {
	// iterable / IEnumerable<>
	console.log(item);
}

// Array Map Set WeakMap WeakSet NodeList (document.querySelectorAll) arguments

// generators

function* gen() {
	// IEnumerable<>
	let x = 4;
	console.log("eerste");
	x += 10;
	yield 4;
	console.log("tweede", x);
	yield 8;
	console.log("derde");
	x += 20;
	yield 15;
	console.log("vierde");
	yield 16;
	console.log("vijfde", x);
	yield 23;
	console.log("zesde en laatste");
	yield 42;
}

for (let item of gen()) {
	console.log(item);
}

// generators andere generators yielden

function* traverseTree(node) {
	yield* node.left;
	yield node.value;
	yield* node.right;
}
