const createCustomer = (id, name, city) => {
    function buyStuff() {
        this.nrOfUnpaidBills++;
    }
    function payBill() {
        this.nrOfUnpaidBills--;
    }
    function badPayer(n) {
        return this.nrOfUnpaidBills >= n;
    }

    return {
        id,
        name,
        city,
        nrOfUnpaidBills: 0,
        buyStuff,
        payBill,
        badPayer
    };
};

let jp = createCustomer(9, 'JP', 'Veenendaal');
jp.buyStuff();
jp.buyStuff();
jp.buyStuff();
jp.buyStuff();
jp.payBill();
console.log(jp);
console.log(jp.badPayer(2)); // true
console.log(jp.badPayer(5)); // false
