<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import { navigateTo } from 'svelte-router-spa';
	import dayjs from 'dayjs';
	import 'dayjs/locale/nl'; // load on demand
	import { getGames } from 'src/dal/game.dal';
	import type { Game } from 'src/entities/game';
	import { GameState } from 'src/entities/game-state';

	dayjs.locale('nl');

	const games = useQuery<Game[], Error>('games', () => getGames());
</script>

<h1>Welkom</h1>

<p>Hier een lijst van actieve spellen:</p>

{#if $games.isLoading}
	<div class="alert alert-secondary">Bezig met laden van spellen!</div>
{:else if $games.data}
	<table class="table-hover">
		<thead>
			<tr>
				<th>ID</th>
				<th>Speler</th>
				<th>Gestart op</th>
				<th>Geëindigd op</th>
				<th>Tijd</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
			{#each $games.data as game}
				<tr on:click={() => navigateTo(`/game/${game.id}`)}
					class:background-success={game.state === GameState.Solved}>
					<td>{game.playerId}</td>
					<td>{game.player.name}</td>
					<td>
						{dayjs(game.start).format('D MMM YYYY [om] HH:mm:ss').replace(' ', '\xa0')}
					</td>
					<td>
						{game.end
							? dayjs(game.end).format('D MMM YYYY [om] HH:mm:ss').replace(' ', '\xa0')
							: ''}
					</td>
					<td
						>{game.state === GameState.Solved && game.end
							? (dayjs(game.end).diff(game.start) / 1000).toFixed(1) + 's'
							: ''}</td
					>
					<td>{game.state}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<style>
	tr:hover {
		cursor: pointer;
	}
</style>
