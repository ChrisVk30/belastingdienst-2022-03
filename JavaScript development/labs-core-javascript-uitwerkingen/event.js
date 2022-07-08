!function (ns) {
    // C# events
    ns.EventHandler = function () {
        let listeners = [];

        this.addListener = function (listener) {
            if (typeof listener === 'function') {
                listeners.push(listener);
            }
        };
        this.removeListener = function (listener) {
            if (listeners.includes(listener)) {
                listeners.splice(listeners.indexOf(listener), 1);
            }
        };
        this.invoke = function (sender, args) {
            for (let l of listeners) {
                l(sender, args);
            }
        };
    };
}(
    (
        globalThis.com = globalThis.com || {},
        com.yourCompany = com.yourCompany || {},
        com.yourCompany.common = com.yourCompany.common || {}
    )
);


!function (ns) {
    ns.Customer = function (id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
        let nrOfUnpaidBills = 0; // private
        this.unpaidBillsChanged = new com.yourCompany.common.EventHandler();

        this.buyStuff = function () {
            nrOfUnpaidBills++;
            this.unpaidBillsChanged.invoke(this, { bills: nrOfUnpaidBills });
        };
        this.payBill = function () {
            nrOfUnpaidBills--;
            this.unpaidBillsChanged.invoke(this, { bills: nrOfUnpaidBills });
        };
        this.badPayer = function (n) {
            return nrOfUnpaidBills >= n;
        };
    };
    ns.Customer.prototype.toString = function () {
        return '(' + this.id + ') ' + this.name + ' - ' + this.city;
    };
}(
    (
        globalThis.com = globalThis.com || {},
        com.yourCompany = com.yourCompany || {},
        com.yourCompany.CRM = com.yourCompany.CRM || {}
    )
);

let jp = new com.yourCompany.CRM.Customer(8, 'JP', 'Ede');
console.log(jp);
console.log(jp.toString());
jp.buyStuff();
jp.buyStuff();
jp.buyStuff();
jp.buyStuff();
jp.payBill();
console.log(jp.badPayer(2));
console.log(jp.badPayer(4));


function accountant(sender, args) {
    console.log(sender.toString());
    console.log(args.bills);
}

const bob = new com.yourCompany.CRM.Customer(101, "Bob", "Utrecht");
bob.unpaidBillsChanged.addListener(accountant);

bob.buyStuff();  // => prints  "(101) Bob - Utrecht"  and  1  to console
bob.buyStuff();  // => prints  "(101) Bob - Utrecht"  and  2  to console
bob.payBill();   // => prints  "(101) Bob - Utrecht"  and  1  to console

bob.unpaidBillsChanged.removeListener(accountant);

bob.buyStuff();  // => prints  nothing

// npm packages: RxJS
