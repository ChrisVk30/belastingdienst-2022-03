const createCustomer = (id, name, city) => {
    let bills = {
        paid: new Map(),
        unpaid: new Map()
    };

    return {
        id,
        name,
        city,
        bills: {
            add(bill) {
                bills.unpaid.set(bill.number, bill);
                console.log(bills);
            },
            *unpaid() {
                yield* bills.unpaid.values();
            },
            *paid() {
                yield* bills.paid.values();
            },
            pay(number) {
                let bill = bills.unpaid.get(number);
                bills.unpaid.delete(number);
                bills.paid.set(number, bill);
            }
        }
    };
};


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