
let obj = {
    hoi: 'q',

    toString: function () {
        return 'hoi';
    }
};

console.log(obj.toString());

if (obj === 'hoi') {
    console.log('ja is gelijk', obj);
}
else {
    console.log('nope anders', obj);
}

// === checkt het type
if (2 === '2') {
    console.log('ja 2 string 2 ja');
}

// best practice:
// - === en !==
// - let/const
// - () => {}

