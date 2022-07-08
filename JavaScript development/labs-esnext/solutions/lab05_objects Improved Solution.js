const createCustomer = ({ id, name, city }) => {
  function buyStuff() {
    this.nrOfUnpaidBills++;
  }

  function payBill() {
    this.nrOfUnpaidBills--;
  }

  function badPayer(amount = 0) {
    return this.nrOfUnpaidBills >= amount;
  }

  function toString() {
    return `(${this.id}) ${this.name} - ${this.city}. # unpaid bills: ${this.nrOfUnpaidBills}`;
  }

  return {
    id,
    name,
    city,
    nrOfUnpaidBills: 0,
    buyStuff,
    payBill,
    badPayer,
    toString,
  };
};

const c1 = createCustomer({ id: 1, name: 'Ab', city: 'Ede' });
c1.buyStuff();
c1.buyStuff();
c1.buyStuff();
console.log(c1.toString());

const c2 = createCustomer({ id: 2, name: 'Bo', city: 'Urk' });
c2.buyStuff();
console.log(`${c2}`);

console.log('nr of unpaid bills user c1:', c1.nrOfUnpaidBills);
console.log('User c1 a bad payer?', c1.badPayer(2));
console.log('User c2 a bad payer?', c2.badPayer(2));

console.log(c1.toString() === '(1) Ab - Ede. # unpaid bills: 3');
console.log(c1.toString() === '(2) Bo - Urk. # unpaid bills: 1');
