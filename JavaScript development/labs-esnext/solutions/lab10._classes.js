'use strict';

class App {
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

class Calculator extends App {
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
		return numbers.reduce((total, current) => total / current);
	}
}

class Contact {
	constructor(name, surname, phoneNumber) {
		this.name = name;
		this.surname = surname;
		this.phoneNumber = phoneNumber;
	}
}

class AddressBook extends App {
	constructor() {
		super('AddressBook');
		this._contacts = [];
	}

	start() {
		super.start();
	}

	addContact(contact) {
		if (contact instanceof Contact) {
			this._contacts.push(contact);
		} else {
			throw `Cannot add item other than a Contact`;
		}
	}

	*[Symbol.iterator]() {
		yield* this._contacts;
	}

	*where(predicate) {
		for (const contact of this._contacts) {
			if (predicate(contact)) {
				yield contact;
			}
		}
	}
}

class AppDrawer {
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

class Phone {
	constructor(brand, name) {
		this.brand = brand;
		this.name = name;
		this.appDrawer = new AppDrawer();
		this.appDrawer.addApp(new AddressBook());
		this.appDrawer.addApp(new Calculator());
	}
}

const p1 = new Phone('Android', 'S10');
console.log(p1.brand, p1.name);

const ab = p1.appDrawer.addressBook;
ab.addContact(new Contact('Bert', 'Visser', '0611111111'));
ab.addContact(new Contact('Els', 'Wagerde', '0302222222'));
ab.addContact(new Contact('Folkert', 'Bruin', '0633333333'));
ab.addContact(new Contact('Stien', 'Geluk', '0354444444'));

console.log('****** all contacts ******');
for (const c of ab) {
	console.log(c);
}

console.log('****** phone numbers including 06 ******');
for (const c of ab.where(c => c.phoneNumber.includes('06'))) {
	console.log(c);
}

const calc = p1.appDrawer.calculator;
console.log(calc.add(1, 2, 3, 4));
console.log(calc.subtract(1, 2, 3, 4));
console.log(calc.multiply(1, 2, 3, 4));
console.log(calc.divide(1, 2, 3, 4));
console.log(calc.divide(2,4));