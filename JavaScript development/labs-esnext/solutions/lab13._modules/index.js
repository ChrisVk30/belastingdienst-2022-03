// PhoneMain.js

'use strict';

import { Phone } from './Phone.js';
import { Contact } from './Contact.js';

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

// end PhoneMain.js