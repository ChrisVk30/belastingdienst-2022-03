// App.js

'use strict';

export class App {
	constructor(name) {
		if (new.target === App) {
			throw 'The class App cannot be instantiated';
		} else {
			this.name = name;
		}
	}

	start() {
		console.log(`******* ${this.name} *******`);
	};
}

// end App.js