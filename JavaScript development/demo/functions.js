function doe() {
	console.log('doe');
}
doe();


function doe(param1, param2) {
	console.log('doe met params:', param1, param2);
}
doe(41, 15);
window.doe(41, 15);

var hallodaar = 'iets';
console.log(window.hallodaar);



// polluting the global object


function test() {
	console.log(arguments); // rest parameters are better
}
test();
test(498483, 23493);
test(498483, 23493, 'hoi', 'doei');






// patterns:
// namespace pattern
// this












