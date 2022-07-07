'use strict';

// uitgangspunt: this kan wat verraderlijk zijn.
// op de juiste manier toegepast is hij helemaal prima,
// maar let wel op bij bugs e.d.

// this wijst naar:
// - de instantie als je het netjes new't
// - de eigenaar van de functie
//   - behalve als use strict aanstaat


// constructor function
function Customer(name, age) {
	console.log('this:', this);
	this.name = name;
	this.age = age;

	this.doe = function() {

		function bla() {
			console.log('bla this:', this);
		}

		console.log('customer doe this:', this);
		bla();
	};
}

let jp = new Customer('JP', 35);
console.log(jp);

jp.doe();



// let obj = {
// 	doe: function() {
// 		console.log('doe this:', this);
// 	}
// };
// obj.doe();

// let func = obj.doe;
// func();

// func.call({ bla: 'iets' });



// libraries/frameworks

// jQuery
// Mocha
// AngularJS

// $('div').each(function() {
// 	this // div
// });