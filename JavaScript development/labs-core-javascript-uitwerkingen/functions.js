function sum() {
	let total = 0;

	// [...arguments].reduce(() => {});

	for (let item of arguments) {
		// iterable
		total += item;
	}
	return total;
}

function sayHello(name) {
	// if(!name) {
	// 	console.log('Hello');
	// 	return;
	// }
	// console.log('Hello ' + name);

	name = name || "";
	console.log(("Hello " + name).trim());

	// writes 'Hello' to the console, or
	// 'Hello <name>' if a name is provided
	// (hint: try using the || operator)
}

sayHello();
console.log("------");
sayHello("JP");

console.log(sum(4, 8, 15, 16, 23, 42));

let reflection = (function () {
	function functionName(funct) {
		if (funct.toString().replace(" ", "").startsWith("function()")) {
			return "anonymous";
		}

		return funct.name;
	}
	function hasProperty(object, propertyName) {
		return propertyName in object; // overerving
	}
	function hasProperties(object) {
		for (let i = 1; i < arguments.length; i++) {
			if (!hasProperty(object, arguments[i])) {
				return false;
			}
		}
		return true;
	}

	// build the reflection API
	return {
		functionName: functionName,
		hasProperty: hasProperty,
		hasProperties: hasProperties,
	};
})();

let obj = { x: 25, y: "hoi", func: function () {} };

console.log(reflection.functionName(sayHello));
console.log(reflection.functionName(function () {}));
console.log(reflection.functionName(obj.func));

// returns the name of the function as a string, if the function has a name
// returns "anonymous", if it is an anonymous function
// returns undefined, otherwise
// (hint: try using regular expressions - it'll make this method a little more challenging)

console.log(reflection.hasProperty(obj, "func"));
console.log(reflection.hasProperty(obj, "ietsnietbstaands"));

// returns true if the object has a property with that name
// returns false, otherwise
// (hint: try using the in operator)

// returns true if the object has all listed properties
// returns false, otherwise
// (hint: this function has one or more arguments)

console.log(reflection.hasProperties(obj, "func")); // true
console.log(reflection.hasProperties(obj, "x", "y", "func")); // true
console.log(reflection.hasProperties(obj, "x", "y", "p", "func")); // false
console.log(reflection.hasProperties(obj, "p")); // false

!(function (ns) {
	ns.reflection = reflection;
})(
	((globalThis.com = globalThis.com || {}),
	(com.yourCompany = com.yourCompany || {}),
	(com.yourCompany.common = com.yourCompany.common || {}))
);

console.log(
	"namespace:",
	com.yourCompany.common.reflection.hasProperty(obj, "d")
);

function overload(func1, func2) {
	// throws a TypeError if both functions have the same number of parameters, otherwise
	// returns a function that
	//    - when called with n parameters, forwards the call to function_with_n_parameters,
	//    - when called with m parameters, forwards the call to function_with_m_parameters,
	//    - when called otherwise, throws a TypeError
	// (hint: every function has a length property that returns the number of formal parameters in the definition of that function)

	if (func1.length === func2.length) {
		throw new TypeError("Same number of arguments");
	}

	return function () {
		if (arguments.length === func1.length) {
			return func1.apply(undefined, arguments);
		} else if (arguments.length === func2.length) {
			return func2.apply(undefined, arguments);
		} else {
			throw new TypeError("No overload found");
		}
	};
}

const createVector = overload(
	function (a, b) {
		return { x: a, y: b };
	},
	function (length) {
		return { x: length / 1.414, y: length / 1.414 };
	}
);

console.log(createVector(3, 4)); // => { x: 3,  y: 4 }
console.log(createVector(7.07)); // => { x: 5,  y: 5 }
//   createVector('hoi', 'doei', 'bla');   // => { x: 5,  y: 5 }

// overload(
// 	function (a, b) {},
// 	function (x, y) {}
// ); // error


// object lab

Function.prototype.getName = function() {
	return reflection.functionName(this);
};
console.log('functienaam:', reflection.functionName.getName());


!function(ns) {
	ns.Customer = function(id, name, city) {
		this.id = id;
		this.name = name;
		this.city = city;
		let nrOfUnpaidBills = 0; // private

		this.buyStuff = function() {
			nrOfUnpaidBills++;
		};
		this.payBill = function() {
			nrOfUnpaidBills--;
		};
		this.badPayer = function(n) {
			return nrOfUnpaidBills >= n;
		};
	};
	ns.Customer.prototype.toString = function() {
		return '(' + this.id + ') ' + this.name + ' - ' + this.city;
	};
}(
	(
		globalThis.com = globalThis.com || {},
		com.yourCompany = com.yourCompany || {},
		com.yourCompany.CRM = com.yourCompany.CRM || {}
	)
);

let jp = new com.yourCompany.CRM.Customer(8, 'JP', 'Ede');
console.log(jp);
console.log(jp.toString());
jp.buyStuff();
jp.buyStuff();
jp.buyStuff();
jp.buyStuff();
jp.payBill();
console.log(jp.badPayer(2));
console.log(jp.badPayer(4));