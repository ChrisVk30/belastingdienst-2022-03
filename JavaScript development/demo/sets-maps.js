"use strict";

// lijstje met unieke waarden
let set = new Set();
set.add(15);
set.add(15);
set.add(15);
set.add(15);
set.add("15"); // ===
set.add(16);
set.add(15);
set.add("bla");
set.add([]);
console.log(set);

if (set.has(15)) {
	console.log("ja!");
}

// hashtable
// hashmap
// Dictionary<K, V>
let map = new Map();
map.set('nu', new Date());

console.log(map);
console.log(map.get('nu'));

// hoe verschilt een map van een gewoon JS-object?
let obj = {};
obj.nu = new Date();
obj['nu']

// key kan complex zijn
// .size
// volgorde van de keys

WeakSet
WeakMap

// geen harde referenties vast naar de objecten
// HTML-elementen
// SPA   Routing