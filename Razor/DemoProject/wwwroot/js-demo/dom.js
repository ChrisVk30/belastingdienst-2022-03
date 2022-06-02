// websites - WordPress
// webapplicaties

function getTelevisions() {
	document.querySelector('#tv-loading').style.display = 'block';
	fetch('https://localhost:7037/api/television').then(x => x.json()).then(televisions => {
		document.querySelector('#tv-loading').style.display = 'none';
		document.querySelector('table tbody').innerHTML = '';
		televisions.forEach(tv => addTelevisionToTable(tv));
	});
}

// fetch({
// 	url: 'https://localhost:7037/api/television',
// 	method: 'post',
// 	headers: {
// 		'content-type': 'application/json'
// 	},
// 	body: JSON.stringify({x : 24})
// })


document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();

	let newTelevision = {
		brand: document.querySelector('#input-brand').value,
		price: +document.querySelector('#input-price').value,
		size: +document.querySelector('#input-size').value
	};

	addTelevisionToTable(newTelevision);

	// DOM API

	// 3 manieren

	// lelijke, lange, maar wel hele snelle manier


	// BAD PRACTICE: lelijke, trage, maar wel korte manier
	// bad performance. alle event listeners verdwijnen.
	// document.querySelector('table').innerHTML += `<tr>
	// 	<td>9</td>
	// 	<td>${newTelevision.brand}</td>
	// 	<td>${newTelevision.price}</td>
	// 	<td>${newTelevision.size}</td>
	// </tr>`;
});

function addTelevisionToTable(tv) {
	console.time();

	// ok, lekker snel, vrij korte manier
	let template = document.querySelector('#tv-template').content;
	let clone = template.cloneNode(true);

	clone.querySelector('.id').innerText = '912';
	clone.querySelector('.brand').innerText = tv.brand;
	clone.querySelector('.price').innerText = tv.price;
	clone.querySelector('.size').innerText = tv.size;

	document.querySelector('table tbody').appendChild(clone);
	console.timeEnd();
}