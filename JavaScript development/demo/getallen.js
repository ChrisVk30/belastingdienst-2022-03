console.log('hoi');
console.log('0.1 + 0.2', 0.1 + 0.2);
console.log('0.3 - 0.2', 0.3 - 0.2);

// IEEE 754
// float
// double
// decimal

console.log('12.1 * iets', 12.1 * 9);
console.log('12.1 * iets afgerond', Math.round(12.1 * 9, 3));
console.log('12.1 * iets afgerond op 2 decimalen', (12.1 * 9).toFixed(3));
console.log('12.1 * iets afgerond op 2 decimalen typeof', typeof (12.1 * 9).toFixed(3));

let afgerond = (12.1 * -9).toFixed(3);
console.log('afgerond naar getal:', afgerond * 1);
console.log('afgerond naar getal:', parseInt(afgerond));
console.log('afgerond naar getal:', parseFloat(afgerond));
console.log('afgerond naar getal:', +afgerond);
console.log('afgerond naar getal:', -afgerond);

let x = -24;
let y = +-48;
console.log('y:', y);

let eerste = 7;
let tweede = 'bla';

console.log('7 / bla', eerste / tweede); // Not a Number
console.log('7 / bla * 94', eerste / tweede * 94 / 384 * 33 / 'bla' + 9494); // Not a Number

if (isNaN(eerste / tweede === NaN)) {
    console.log('oei 2 dat is NaN', eerste, tweede);
}
else {
    console.log('jippie 2 geen NaN', eerste, tweede);
}

if (isNaN(NaN)) {
    console.log('ja 2');
}
else {
    console.log('nope 2');
}

console.log('Number.isNaN met NaN', Number.isNaN(NaN));
console.log('isNaN met NaN', isNaN(NaN));
console.log('isNaN met bla', isNaN('bla'));
console.log('Number.isNaN met bla', Number.isNaN('bla'));

let n = 123456789;

console.log(n.toString()); // 10
console.log(n.toString(8));
console.log(n.toString(4));
console.log(n.toString(2));
console.log(n.toString(36));
