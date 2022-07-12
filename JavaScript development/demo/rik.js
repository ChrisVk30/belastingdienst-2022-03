class Phone{
    brand = null;
    type = null;
    appDrawer = null;
    constructor(){
        this.appDrawer = new AppDrawer(new Calculator(), new AddressBook());
    }
}
class AppDrawer{
    get addressBook(){
        console.log('entries:', this.apps.values());
        return [...this.apps.values()].find(p=>{
            return p instanceof AddressBook
        });
    }
    get calculator(){
        return [...this.apps.values()].find(p=>{
            return p instanceof Calculator
        });
    }
    apps = new Set();
    
    addApp(app){
        if(!(app instanceof App)){
            throw new Error(`App is not an app!`);
        }
        this.apps.add(app);
    }
    getApps(){
 
    }
    [Symbol.iterator](){
        return this.apps
    }
    constructor(calculator, addressbook){
        this.addApp(addressbook);
        this.addApp(calculator);
    }
}
class App{
    名前 = "";
    constructor(名前) {
        if (this.constructor === App) {
            throw new Error("OI, not !abstract enough");
        }
        this.名前 = 名前;
    }    
    start(){
        console.log(this.名前)
    }
}
class AddressBook extends App{
    constructor(){
        super("AddressBook")
    }
    contacts = new Set();
    addContact(contact){
        if(!(contact instanceof Contacts)){
            throw new Error("Not a contact");
        }
        this.contacts.add(contact);
 
    }
    getContacts(){
 
    }
    [Symbol.iterator](){
        return this.contacts;
    }
}
class Contacts{
    firstName = "";
    surname="";
    phoneNumber="0";
}
class Calculator extends App{
    constructor(){
        super("Calculator");
    }
    add(...x){
        return x[0] + x[1];
    }
    multiply(...x){
        return x[0] * x[1];
    }
    divide(...x){
        return x[0] / x[1];
    }
    subtract(...x){
        return x[0] - x[1];
    }
}
let phone = new Phone();
console.log(phone.appDrawer)