// Calculator.js

'use strict';

import { App } from './App.js';

export class Calculator extends App {
	constructor() {
		super('Calculator');
	}

	start() {
		super.start();
	}

	add(...numbers) {
		return numbers.reduce((total, current) => total + current, 0);
	}

	subtract(...numbers) {
		return numbers.reduce((total, current) => total - current, 0);
	}

	multiply(...numbers) {
		return numbers.reduce((total, current) => total * current, 1);
	}

	divide(...numbers) {
		return numbers.reduce((total, current) => total / current, 1);
	}
}