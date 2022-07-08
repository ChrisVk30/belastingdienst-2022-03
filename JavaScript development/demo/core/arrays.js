

let lijstje = [4, 6, 19, 844, 445, 4543545];
console.log('length:', lijstje.length);
// lijstje[999] = 58483;
lijstje[-4] = 'iets';

lijstje['hallo'] = 'whatevah';

lijstje.length = 0;
// lijstje.length++;

for (let i = -4; i < lijstje.length; i++) {
    console.log(lijstje[i]);
}
console.log('negatieve index:', lijstje[-4]);
console.log('hallo:', lijstje.hallo);

console.log('---------------');

let obj = {
    x: 4,
    y: 29
};
console.log(obj.y);
console.log(obj['y']);
