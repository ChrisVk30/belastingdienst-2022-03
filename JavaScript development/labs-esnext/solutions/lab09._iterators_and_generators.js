'use strict';

const createCustomer = (id, name, city) => {
  return {
    id,
    name,
    city,
    bills: {
      _bills: new Map([[false, new Map()], [true, new Map()]]),		// false = unpaid, true = paid
      add(bill) {
        this._bills.get(false).set(bill.number, bill);
      },
      pay(billnumber) {
        let bill = this._bills.get(false).get(billnumber);
        // console.log(`* about to delete from unpaid: ${bill.number} ${bill.amount}`);
        this._bills.get(false).delete(billnumber);
        // console.log(`* about to add to paid: ${bill.number} ${bill.amount}`);
        this._bills.get(true).set(billnumber, bill);
      },
      *unpaid() {
        for (const [number, bill] of this._bills.get(false).entries()) {
          yield bill;
        }
      },
      *paid() {
        for (const [number, bill] of this._bills.get(true).entries()) {
          yield bill;
        }
      }
    }
  }
}

let c1 = createCustomer(1, "Mario", "Roma");
console.log(`${c1.id} - ${c1.name}, ${c1.city}`);

c1.bills.add({ number: 'ab123', amount: 123 });
c1.bills.add({ number: 'cd456', amount: 456 });
c1.bills.add({ number: 'ef789', amount: 789 });
c1.bills.add({ number: 'gh012', amount: 128 });
c1.bills.add({ number: 'ij386', amount: 946 });

console.log('*********unpaid***********');
for (const b of c1.bills.unpaid()) {
  console.log(b.number, b.amount);
}

c1.bills.pay('ef789');
c1.bills.pay('cd456');

console.log('*********unpaid***********');
for (const b of c1.bills.unpaid()) {
  console.log(b.number, b.amount);
}

console.log('**********paid************');
for (const b of c1.bills.paid()) {
  console.log(b.number, b.amount);
}

// console.log([...c1.bills.unpaid()].length);