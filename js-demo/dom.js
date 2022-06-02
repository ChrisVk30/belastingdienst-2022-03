

document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();

	let newTelevision = {
		brand: document.querySelector('#input-brand').value,
		price: +document.querySelector('#input-price').value,
		size: +document.querySelector('#input-size').value
	};


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

	console.time();

	// ok, lekker snel, vrij korte manier
	let template = document.querySelector('#tv-template').content;
	let clone = template.cloneNode(true);

	clone.querySelector('.id').innerText = '912';
	clone.querySelector('.brand').innerText = newTelevision.brand;
	clone.querySelector('.price').innerText = newTelevision.price;
	clone.querySelector('.size').innerText = newTelevision.size;

	document.querySelector('table').appendChild(clone);
	console.timeEnd();

});
