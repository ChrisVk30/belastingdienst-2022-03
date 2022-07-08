function functionName(func) {
	if(func.toString().replace(' ', '').startsWith('function()')) {
		return "anonymous";
	}

	

	return func.name;
}

function test() {}
console.log(functionName(test)); // test
console.log(functionName(function () {})); // anonymous

let obj = {
	test12345: function() {}
};

console.log(functionName(obj.test12345));
