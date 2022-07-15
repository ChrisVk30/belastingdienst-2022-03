"use strict";
// het is puur een development feestje, dat TypeScript
// type inference
// C# var
// Java var
// let getal = 'hoi';
// getal = 'hoi';
let getal = true;
let n;
let s;
let b;
let bi;
let sym;
let nu;
let undef;
function doe() {
    console.log("hoi");
}
console.log(doe());
// trust me, I'm a programmer
// gebruik deze zo min mogelijk.
// let a: any = {};
// a.doe();
// a ** 4;
let lijst = [4, 8, 15, 16, 23, 42]; // Lost
let lijstVanGetallen;
let lijstVanStrings;
let lijstVanDatums;
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Blue"] = "BLAUW";
    Colors["Purple"] = "PURPLE";
    Colors["Green"] = "GREEN";
    Colors["Black"] = "BLACK";
})(Colors || (Colors = {}));
;
let zwart = Colors.Green;
let kleurtje;
kleurtje = Colors.Red;
if (zwart === Colors.Green) {
    console.log('blauw');
}
else if (zwart === Colors.Black) {
    console.log('zwart');
}
else {
    console.log('nope');
}
console.log(zwart);
console.log(Colors);
//# sourceMappingURL=types.js.map