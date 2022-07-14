// non-typed parameters
function doe(options = '') {
	// options.
}

doe(42);
doe('q');
doe('w');
doe('e');

// dynamische objecten
let obj = { x: 24 };
obj.y = 24;
delete obj.x;

// dynamische variabelen
let x = 24;
x = 'hoi';
x = {};
x = [];

// refactor
let blaObj = { x: 'hoi' };
console.log(blaObj.x);
console.log(blaObj['x']);

let prop = 'x';
console.log(blaObj[prop]);

