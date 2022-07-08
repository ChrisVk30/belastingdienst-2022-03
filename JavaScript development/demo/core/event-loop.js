const fs = require('fs');


console.log('start');

fs.readFile('boek.txt', 'utf8', (err, content) => {
    if (err) {
        console.error('err:', err);
    }
    console.log('content:', content);
});

for (let i = 0; i < 50000; i++) {
    console.log('. ' + i);
}

console.log('eind');

