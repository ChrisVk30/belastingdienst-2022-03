

let nu = new Date();
console.log(nu);
console.log(nu.toString());

console.log(nu.toString('d-m-Y H:i:s'));
console.log(nu.toLocaleTimeString());

console.log('day:', nu.getDate());
console.log('month:', nu.getMonth() + 1);
console.log('year:', nu.getFullYear());

// datum/tijd wil formatten
// datum/tijd wil manipuleren (huidige datum => morgen)
// datum/tijdstrings parsen
// verschil in tijd berekenen
// tijdzones

// third-party libaries
// - moment.js (deprecated) - IE6
// - dayjs
// - luxon
