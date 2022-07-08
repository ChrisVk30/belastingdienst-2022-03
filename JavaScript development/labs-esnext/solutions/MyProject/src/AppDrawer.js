// AppDrawer.js

'use strict';

import { App } from './App.js';
import { Calculator } from './Calculator.js';
import { AddressBook } from './AddressBook.js';

export class AppDrawer {
	constructor() {
		this.apps = [];
	}

	addApp(app) {
		if (app instanceof App) {
			this.apps.push(app);
		} else {
			throw `${app} is not an App`;
		}
	}

	*[Symbol.iterator]() {
		yield* this._apps;
	}

	get calculator() {
		for (const app of this.apps) {
			if (app instanceof Calculator) {
				return app;
			}

		}
	}

	get addressBook() {
		for (const app of this.apps) {
			if (app instanceof AddressBook) {
				return app;
			}
		}
	}
}

// end AppDrawer.js