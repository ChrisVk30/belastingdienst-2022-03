// AddressBook.js

'use strict';

import { App } from './App.js';
import { Contact } from './Contact.js';

export class AddressBook extends App {
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

// end AddressBook.js