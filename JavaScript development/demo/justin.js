const createCustomer = (id, name, city) => {
    return {
        id, 
        name, 
        city,
        bills: {
            billsunpaid: new Map(),
            billspaid: new Map(),
 
            add(bill){
                this.billsunpaid.set(bill.number, bill);
            },
            pay(billnumber){
                let billtopay = this.billsunpaid.get(billnumber);
                this.billspaid.set(billnumber, billtopay);
                this.billsunpaid.delete(billnumber);
            },
            unpaid() {
                return this.billsunpaid.values();
            },
            paid () {
                return this.billspaid.values();
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
  console.log(b.number, b.amount, b);
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


let obj = { x: 24, y: 'hoi' };
console.log(obj);


delete obj.x;
obj.y = 1234567;

