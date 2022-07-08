

// catch-all parameter 
function test(...rest) {
    
}
// function test(...rest, ...nogMeerRest) {
    
// }
// function test(...rest, nogMeerRest) {
    
// }

// default parameters

function bla() {
    return 555;
}

// temporal dead zone
function doe(p1 = 'hoi', p2 = bla()) {
    console.log(p1, p2);
}
doe();
doe(99);
doe(10, 400);
doe(undefined, 10);
doe(null, 10);


// lambda
console.log(this);
let arrow = (p1, p2 = 'hoi', ...rest) => {
    
    console.log('hallo vanuit arrow', this);
};
arrow.call({ x: 24 });

// no new
// geen prototype
// geen arguments
// this voorspelbaarder

// IIFE
// IIAFE
// IIAAFE

(() => {
    console.log('IIAFE');
})();


// fs.readFile('...', '...', () => {

// });
// document.querySelector('...').addEventListener('click', () => {

// });

// Date.prototype.toPrettyString = () => {
//     this.getDate() this.getMonth()
// };
