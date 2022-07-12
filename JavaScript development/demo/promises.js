

// beloftes

// async maar dan net anders


// tasks vanuit C#/.NET

// wrappers om async processen


// .toPromise()
// resolve

// logIn(function (value1) {
//     getUserPreferences(value1, function(value2) {
//         getSomeDataBasedOnPreferences(value2, function(value3) {
//             step4(value3, function(value4) {
//                 // Do something with value4
//             });
//         });
//     });
// });

// Q.fcall(promisedStep1)
// .then(promisedStep2)
// .then(promisedStep3)
// .then(promisedStep4)
// .then(function (value4) {
//     // Do something with value4
// })
// .catch(function (error) {
//     // Handle any error from all above steps
// })
// .done();

// .then()
// await

let prom = new Promise((resolve, reject) => {
    // doe async werk

    console.log('promise starten');
    setTimeout(() => {
        console.log('promise klaar met reject');
        // reject('Onacceptabel met daarna resolve');
        resolve(42);
    }, 3000);

});

prom
    .then(result => result * 4)
    .then(result => console.log('result:', result))
    .catch(err => console.log('Oh oh', err));

// Immediately Invoked Arrow Function Expression
(async () => {
    let result = await prom;
    console.log('awaited result:', result);
})();




// fetch('api/product').then(x => x.json()).then(result => {

// });

let prom1 = new Promise(resolve => setTimeout(() => {
    resolve(42);
}, 2000));
let prom2 = new Promise((resolve, reject) => setTimeout(() => {
    reject(15);
}, 5000));
let prom3 = new Promise(resolve => setTimeout(() => {
    resolve(18200);
}, 1000));

Promise
    .allSettled([prom1, prom2, prom3])
    .then(x => console.log(x))
    .catch(err => console.log('err:', err));

