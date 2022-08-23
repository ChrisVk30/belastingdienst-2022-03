<script lang="ts">
	import { isError, useMutation } from '@sveltestack/svelte-query';
	import { navigateTo } from 'svelte-router-spa';
	import { postGame } from '../dal/game.dal';
	import { createNewGameDto, type NewGameDto } from 'src/dto/new-game.dto';
	import type { Game } from 'src/entities/game';

	let newGameDto = createNewGameDto();

	let post = useMutation<Game, unknown, NewGameDto>(postGame);

	const start = () => {
		$post.mutate(newGameDto, {
			onSuccess(game) {
				navigateTo(`/game/${game.id}`);
			},
		});
	};
</script>

<main>
	<h1>Nieuw spel</h1>

	{#if $post.isLoading}
		<div class="alert alert-secondary">Het spel wordt gestart!</div>
	{/if}

	{#if $post.isError}
		<div class="alert alert-danger">Oei daar ging iets mis:<br><br>{$post.error}</div>
	{/if}

	<form on:submit|preventDefault={start}>
		<label for="input-name">Je naam?</label>
		<input id="input-name" bind:value={newGameDto.playerName} />
		<button disabled={$post.isLoading} class="paper-btn btn-primary">Start!</button>
	</form>
</main>

<style>
	form {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
