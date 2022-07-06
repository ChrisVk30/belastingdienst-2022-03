

// ternary / elvis
// nested meh niet lekker leesbaar
let y = 4 > 8 ? 'hoi' : 'doei'; // prima
let x = 4 > 8 ? 'hoi' : 32 > 15 ? 'ja' : 'nee';

console.log(x);


let z = (4, 8, 15, 16, 23, 42);
console.log(z);

// patterns: namespace

if (4 > 7 || 3 < 9) {

}

let and = '0' && 'hoi';
console.log(and);

let or = false || 'hoi';
console.log(or);


// praktische ||:
getGpsCoordinates({ city: 'Amsterdam' });
getGpsCoordinates({});

function getGpsCoordinates(config) {
    config.city = config.city || 'New York';

    console.log('city:', config.city);
}


// praktische &&:
document.querySelector('#input-wow').addEventListener('keyup', event => {
    console.log(event);

    // verkort if-statement
    event.key === 'R' && wow();

    // // C#
    // obj?.wow();
});

function wow() {
    console.log('wow triggered');
}


let nogeentje = 4 + '5';
let nogeentje2 = true + '5';
console.log("4 + '5'", nogeentje);
console.log("true + '5'", nogeentje2);
