'use strict' // backwards compatibility

let obj = {
    x: 14,
    y: 'hallo'
}

for (let prop in obj) { // reflection
    console.log('prop:', prop, obj[prop])
}

let lijstje = [4, 8, 15, 16, 23, 42]
for (let item of lijstje) { // door een lijstje
    console.log(item)
}

for (let i = 0; i < 5; i++) {
    console.log(i)
}


// generieke UI-componenten





// reflection
// Assembly.GetExecutingAssembly().GetTypes()
// typeof(MijnClass).GetMethods()

// ASP.NET Core
// - dependency injection
// - controllers {id}
// - vinden controllers  .MapControllers()
//   - : ControllerBase  [Route]  "Controller"
// EF Core
// - Id primary key


undefined = 'hoi' // ECMAScript 3  - IE6
console.log(undefined)

// if (x == undefined) { 

// }


function doe() {

} // functie declaratie


let doe = function() {

}; // functie expressie







