let obj = {
    x: 24,
    y: 48,
    favorieteChips: ['Wokkels Paprika', 'Nibb-it rings']
};

let {
    x,
    favorieteChips: [eersteChips, tweeedeChips]
} = obj;

console.log(obj.x);
console.log(x);
console.log('chips:', eersteChips, tweeedeChips);

let lijstje = [4, 8, 15, 16, 23, 42];
let [ , , derde, vierde ] = lijstje;
console.log(derde, vierde);

// <crud-table data=...>  datagrid
// text
// password
// number
// prijzen
// lookup - 

let product = {
    artikelgroep: {
        beschrijving: 'Levensmiddelen 2'
    }
};

let prop = 'artikelgroep.beschrijving';
// let splits = prop.split('.');
// let mainProp = splits[0];
// let subProp = splits[1];

let [mainProp, subProp] = prop.split('.');
console.log(product[mainProp][subProp]);

let dateString = '2022-08-07';
let regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

console.log(dateString.match(regex));

let [, year, month, day] = dateString.match(regex);
console.log(year, month, day);


const func = ({ helebelangrijkewaarde }) => {
    console.log('helebelangrijkewaarde:', helebelangrijkewaarde);
};
func('iets'); // undefined
func({ hoi: 'piepeloi' }); // undefined
func({ helebelangrijkewaarde: 'hallo' })
