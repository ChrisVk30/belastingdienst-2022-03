// dit wordt niet mooi.

// Immediately Invoked Function Expression
!function() {
	console.log('hoi 2');
	let x = 14;

	function bla() {

	}
}();

// Closures
let obj = (function() {
	let counter = 0;

	return {
		increment: function() {
			counter++;
			console.log('counter is nu:', counter);
		},
		decrement: function() {
			counter--;
			console.log('counter is nu:', counter);
		},
	};
})();
console.log(obj);
obj.increment();
obj.increment();
obj.increment();
obj.increment();
obj.decrement();


// namespace pattern


!function(ns) {
	// private helper functions
	function getWidth() {
		return 4;
	}
	function getHeight() {
		return 9;
	}

	ns.getSize = function() {
		console.log('getting size!', getWidth() * getHeight());
	};
}(
	(
		globalThis.com = globalThis.com || {},
		com.infoSupport = com.infoSupport || {},
		com.infoSupport.graphics = com.infoSupport.graphics || {}
	)
);

console.log(com);
com.infoSupport.graphics.getSize();
// using com.infoSupport;




