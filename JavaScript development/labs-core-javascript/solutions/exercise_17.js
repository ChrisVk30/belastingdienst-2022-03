(function (ns) {
  ns.Customer = function (id, name, city) {
    this.id = id;
    this.name = name || '';
    this.city = city || '';
    this.unpaidBillsChanged = new ns.EventHandler();

    let nrOfUnpaidBills = 0;  // private member

    this.buyStuff = function () {
      nrOfUnpaidBills++;
      this.unpaidBillsChanged.invoke(this, { bills: nrOfUnpaidBills});
    }

    this.payBill = function () {
      nrOfUnpaidBills--;
      this.unpaidBillsChanged.invoke(this, { bills: nrOfUnpaidBills });
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

// add this helper class
(function (ns) {
  ns.EventHandler = function () {
    const listeners = [];   // private member

    this.addListener = function (listener) {
      if (typeof listener === 'function') {
        listeners.push(listener);
      }
    }

    this.removeListener = function (listener) {
      let index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }

    this.invoke = function (sender, args) {
      for (let listener of listeners) {
        listener(sender, args);
      }
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

// add this test code
function accountant(sender, args) {
  console.log(sender.toString());
  console.log(args.bills);
}

const bob = new com.infoSupport.CRM.Customer(101, "Bob", "Utrecht");
bob.unpaidBillsChanged.addListener(accountant);

bob.buyStuff();  // => prints  "(101) Bob - Utrecht"  and  1  to console
bob.buyStuff();  // => prints  "(101) Bob - Utrecht"  and  2  to console
bob.payBill();   // => prints  "(101) Bob - Utrecht"  and  1  to console

bob.unpaidBillsChanged.removeListener(accountant);

bob.buyStuff();  // => prints  nothing

