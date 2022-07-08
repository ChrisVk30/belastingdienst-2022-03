// nieuwe dingen

// JavaScript's manier van overerving

function LivingBeing() {
	this.speak = function() {
		console.log('Fffffffffffff');
	};
}

function Mammal() {

}
Mammal.prototype = new LivingBeing();

function Human() {
	this.speak = undefined;
}
Human.prototype = new Mammal();

let jp = new Human();
delete jp.speak;
jp.speak();




