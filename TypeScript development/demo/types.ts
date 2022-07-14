// het is puur een development feestje, dat TypeScript

// type inference
// C# var
// Java var

// let getal = 'hoi';
// getal = 'hoi';

let getal = true;

let n: number;
let s: string;
let b: boolean;
let bi: bigint;
let sym: symbol;

let nu: null;
let undef: void;

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
let lijstVanGetallen: number[];
let lijstVanStrings: string[];
let lijstVanDatums: Date[];


enum Colors {
	Red = 'RED',
	Blue = 'BLAUW',
	Purple = 'PURPLE',
	Green = 'GREEN',
	Black = 'BLACK'
};

let zwart = Colors.Green;
let kleurtje: Colors;
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