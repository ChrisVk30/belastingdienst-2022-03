<script lang="ts">
	import { navigateTo } from "svelte-router-spa";


	let name: string;

	const start = () => {
		console.log('name:', name);

		navigateTo('/game/45');
	};
</script>

<main>
	<h1>Nieuw spel</h1>

	<form on:submit|preventDefault={start}>
		<label for="input-name">Je naam?</label>
		<input id="input-name" bind:value={name} />
		<button>Start!</button>
	</form>
	{name}
</main>
