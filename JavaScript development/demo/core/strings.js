// geen verschil.
let text = 'hoi ik ben JP en ik geef training vandaag';
let text2 = "hoi";

// PHP
// $bla = 'hoi';
// $dinges = 'haha $bla'; // 'haha $bla'
// $dinges2 = "haha $bla"; // 'haha hoi'

console.log(text.substring(5, 15));
console.log(text.indexOf('JP'));
console.log(text.substring(text.indexOf('JP')));
console.log(text.repeat(5));
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// regular expressions

let postalCode = '9487 PO';
let regex = /^[0-9]{4} ?[A-Za-z]{2}$/;

if (postalCode.match(regex)) {
    console.log('ja! match:', postalCode);
}
else {
    console.log('nope geen match:', postalCode);
}

let chineseStuff = '😊';

// ASCII (American)
// UTF-7 (dynamisch)
// UTF-8 (altijd meerdere bytes)
// UTF-16

console.log('chinese characters:', chineseStuff.length);
