

console.log('start');
setTimeout(() => {
    console.log('timeout');
}, 0);

for (let i = 0; i < 250000; i++) {
    console.log('. ' + i);
}

console.log('eind');
