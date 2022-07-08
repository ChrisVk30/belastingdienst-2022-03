// // 1. Implementation without namespace pattern:
// const Customer = function (id, name, city) {
//   this.id = id;
//   this.name = name || '';
//   this.city = city || '';

//   let nrOfUnpaidBills = 0;  // private member

//   this.buyStuff = function () {
//     nrOfUnpaidBills++;
//   }

//   this.payBill = function () {
//     nrOfUnpaidBills--;
//   }

//   this.badPayer = function (n) {
//     return nrOfUnpaidBills >= n;
//   }

//   this.toString = function () {
//     return '(' + this.id + ') ' + this.name + ' - ' + this.city;
//   }
// }

// const c1 = new Customer(1, 'Bert', 'Ede');
// const c2 = new Customer(2, 'Els', 'Urk');

// console.log("New customer: ", c1);
// console.log("New customer: ", c2);

// console.log("nrOfUnpaidBills should not be accessible (undefined):", c1.nrOfUnpaidBills);

// c1.buyStuff();
// c1.buyStuff();
// c1.buyStuff();

// console.log('badPayer() should return true with n=2 and 3 unpaid bills:', c1.badPayer(3));
// console.log('badPayer() should return false with n=5 and 3 unpaid bills:', c1.badPayer(5));

// console.log('Should overwrite the toString() function:', c1.toString());
// console.log('Should overwrite the toString() function:', c2.toString());


// 2. Implementation with namespace pattern (using IIFE)
(function (ns) {
  ns.Customer = function (id, name, city) {
    this.id = id;
    this.name = name || '';
    this.city = city || '';

    let nrOfUnpaidBills = 0;  // private member

    this.buyStuff = function () {
      nrOfUnpaidBills++;
    }

    this.payBill = function () {
      nrOfUnpaidBills--;
    }

    this.badPayer = function (n) {
      return nrOfUnpaidBills >= n;
    }

    this.toString = function () {
      return '(' + this.id + ') ' + this.name + ' - ' + this.city;
    }
  }
})
(
  (
    global.com = global.com || {},
    global.com.infoSupport = global.com.infoSupport || {},
    global.com.infoSupport.CRM = global.com.infoSupport.CRM || {}
  )
);

const CRM = global.com.infoSupport.CRM;

const c1 = new CRM.Customer(1, 'Bert', 'Ede');
const c2 = new CRM.Customer(2, 'Els', 'Urk');

console.log("New customer: ", c1);
console.log("New customer: ", c2);

console.log("nrOfUnpaidBills should not be accessible (undefined):", c1.nrOfUnpaidBills);

c1.buyStuff();
c1.buyStuff();
c1.buyStuff();

console.log('badPayer() should return true with n=2 and 3 unpaid bills:', c1.badPayer(3));
console.log('badPayer() should return false with n=5 and 3 unpaid bills:', c1.badPayer(5));

console.log('Should overwrite the toString() function:', c1.toString());
console.log('Should overwrite the toString() function:', c2.toString());