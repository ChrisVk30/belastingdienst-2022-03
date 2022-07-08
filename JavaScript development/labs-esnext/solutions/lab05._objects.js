'use strict';

const CreateCustomer = (id, name, city) => {
  return {
    id,
    name,
    city,
    nrOfUnpaidBills: 0,
    buyStuff() {
      this.nrOfUnpaidBills++;
    },
    payBill() {
      this.nrOfUnpaidBills--;
    },
    badPayer(n = 0) {
      return this.nrOfUnpaidBills >= n;
    },
    toString() {
      return `(${this.id}) ${this.name} - ${this.city}`;
    }
  }
}

let c1 = CreateCustomer(1, 'Bert', 'Ede');
c1.buyStuff();
c1.buyStuff();
c1.buyStuff();
console.log(c1.nrOfUnpaidBills);
console.log(c1.badPayer(2));
console.log(c1);

let c2 = CreateCustomer(2, 'Els', 'Baarn');
console.log(c2);