

class Person {
    constructor() {
        // if (new.target === Person) {
        //     throw new Error('Kan Person niet instantieren');
        // }

        console.log('Person');
    }

    heyehy() {

    }
}


class Customer extends Person {
    static nrOfCustomers = 0;

    static {
        console.log('Static init van Customer');
    }

    name;
    #beganeOvertredingen = [];

    constructor(name) {
        super();
        console.log('Hallo vanaf constructor Customer');

        Customer.nrOfCustomers++;

        this.name = name;
    }

    buy() {
        console.log('kopen kopen kopen');
    }

    steel() {
        this.#beganeOvertredingen.push('Heeft iets gestolen');
    }
}

let jp = new Customer('JP');
jp.buy();

jp.steel();
jp.steel();
jp.steel();

jp.whatever = 'iets';

console.log(jp);
console.log(Customer.nrOfCustomers);
// console.log(jp.#beganeOvertredingen);


console.log(typeof new Person());


const x = function() {};
const y = () => {};
const c = class {

};

// Web Components: <jouw-sexy-element></jouw-sexy-element>

customElements.define('jouw-sexy-element', class extends HTMLElement {

});
