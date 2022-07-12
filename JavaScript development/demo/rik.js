let createBill = function({number, amount}){
    return {        
        number,
        amount,
        paid: false
    }
}
let createCustomer = function(id, name, city){
    let billsCollection = new Map();
    return{
        id,
        name,
        city,
        bills: {
            add: (obj = {})=>{
                billsCollection.set(obj.number, createBill(obj))
            },
            pay: (id) =>{
                
                billsCollection.get(id).paid = true;
            },
            unpaid: () => {
                let unpaidBills = [...billsCollection.values()].filter(x => !x.paid);

                return{
                    [Symbol.iterator](){
                        let index = 0;
                        return{
                            next(){ 
                                return {
                                    value: unpaidBills[index++],
                                    done: index > unpaidBills.length
                                };                        
                            }
                        }
                    }
                }                
            },
            paid: () =>{
                return{
                    [Symbol.iterator](){
                        let index = 0;
                        return{
                            next(){ 
                                let value = billsCollection.get([...billsCollection.keys()][index]);
                                while (index < billsCollection.size) {
                                    value = billsCollection.get([...billsCollection.keys()][index]);;
                                    if (value.paid===true){
                                        break;
                                    }
                                    index++;
                                }
                                return{
                                    value,
                                    done: index++ >= billsCollection.size - 1
                                }
                            }
                        }
                    }
                } 
            },
            number: 0,
            amount: 0
        }
    }
}
 
let c1 = createCustomer(1, "Mario", "Roma");
console.log(`${c1.id} - ${c1.name}, ${c1.city}`);
c1.bills.add({ number: 'ab123', amount: 123 });
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