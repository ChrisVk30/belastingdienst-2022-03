let obj1 = {};

console.log(+obj1);
console.log(`${obj1}`);
console.log(obj1 == 1);

let obj2 = {
	[Symbol.toPrimitive](hint) {
		if (hint === "number") {
			return 10;
		} else if (hint === "string") {
			return "hello";
		}

		return true;
	},
};

console.log(+obj2); // 10
console.log(`${obj2}`); // 'hello'
console.log(obj2 == 1); // true
