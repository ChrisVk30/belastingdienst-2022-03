// Phone.js

'use strict';

import { AppDrawer } from './AppDrawer.js';
import { AddressBook } from './AddressBook.js';
import { Calculator } from './Calculator.js';

export class Phone {
	constructor(brand, name) {
		this.brand = brand;
		this.name = name;
		this.appDrawer = new AppDrawer();
		this.appDrawer.addApp(new AddressBook());
		this.appDrawer.addApp(new Calculator());
	}
}

// end Phone.js