"use strict";

let surnames = [
"Jansen",
"De Vries",
"Van den Berg",
"Van Dijk",
"Bakker",
"Janssen",
"Visser",
"Smit",
"Meijer",
"De Boer",
"Mulder",
"De Groot",
"Bos",
"Vos",
"Peters",
"Hendriks",
"Van Leeuwen",
"Dekker",
"Brouwer",
"De Wit",
"Dijkstra",
"Smits",
"De Graaf",
"Van der Meer"
];

for (let i = 0; i < surnames.length; i++) {
  if (surnames[i].startsWith("V")) {
    console.log(`${surnames[i]} found at position ${i}.`);
  }
}

surnames.forEach((elem, index) => {
  if (elem.startsWith('V')) {
    console.log(`${elem} found at position ${index}.`);
  }
});