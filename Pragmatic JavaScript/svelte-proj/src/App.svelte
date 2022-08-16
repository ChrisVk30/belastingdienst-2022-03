<script>
	let name = 'world';

	let counter = 0; // ref(0)

	const increment = () => {
		counter++;

		counter = 20;
	};

	
	let config = {
		counter: 4
	};
	const incrementConfigCounter = () => {
		config.counter++;
	};
</script>

<h1>Hello {name}!</h1>

{counter}

<button on:click={increment}>Hoog op</button>


config counter: {JSON.stringify(config)}

<button on:click={incrementConfigCounter}>Hoog config counter op</button>
