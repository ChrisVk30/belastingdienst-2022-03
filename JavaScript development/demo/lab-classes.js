class Phone {
    brand;
    type;
    appDrawer;

    constructor() {
        this.appDrawer = new AppDrawer();

        this.appDrawer.addApp(new Calculator());
        this.appDrawer.addApp(new AddressBook());
    }
}

class AppDrawer {
    apps = [];

    get calculator() {
        return this.apps.find(x => x instanceof Calculator);
    }
    get addressBook() {
        return this.apps.find(x => x instanceof AddressBook);
    }

    addApp(app) {
        if (!(app instanceof App)) {
            throw new Error('app is not an App');
        }
        this.apps.push(app);
    }
    getApps() {

    }
    *[Symbol.iterator]() {
        yield* this.apps;
    }
}

class App {
    name;

    constructor(name) {
        if (new.target === App) {
            throw new Error('Abstract baby');
        }
        this.name = name;
    }

    start() {
        console.log(`App ${this.name} is starting!`);
    }
}
class Calculator extends App {
    constructor() {
        super('Calculator');
    }

    add() { }
    multiply(...numbers) { return numbers.reduce((prev, current) => prev * current); }
    divide() { }
    subtract() { }
}
class AddressBook extends App {
    contacts = [];

    constructor() {
        super('Adresboek');
    }

    addContact(contact) {
        if (!(contact instanceof Contact)) {
            throw new Error('contact is not an Contact');
        }
        this.contacts.push(contact);
    }
    getContacts() {

    }

    *[Symbol.iterator]() {
        yield* this.contacts;
    }

    *where(predicate) {
        for (let contact of this.contacts) {
            if (predicate(contact)) {
                yield contact;
            }
        }
    }

    // where(pred) {
    //     return this.contacts.filter(pred);
    // }
}
class Contact {
    firstName;
    surname;
    phoneNumber;

    constructor(firstName, surname, phoneNumber) {
        this.firstName = firstName;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }
}


let p = new Phone();
for (let app of p.appDrawer) {
    console.log('app:', app);
}

p.appDrawer.calculator.start(); // niet nodig
console.log('calculator', p.appDrawer.calculator);
console.log('4 * 8', p.appDrawer.calculator.multiply(4, 8));
console.log('1 * 2 * 3 * 4 * 5', p.appDrawer.calculator.multiply(1, 2, 3, 4, 5));
console.log('addressBook', p.appDrawer.addressBook);

// new App();

p.appDrawer.addressBook.addContact(new Contact('JP', 'tB', '0956849058906'));
p.appDrawer.addressBook.addContact(new Contact('Job', 'Bla', '846546512'));
p.appDrawer.addressBook.addContact(new Contact('Henk', 'Frits', '54684786153'));
console.log(p.appDrawer.addressBook.contacts);

for (let contact of p.appDrawer.addressBook.where(x => x.firstName.startsWith('J'))) {
    console.log('where:', contact);
}
