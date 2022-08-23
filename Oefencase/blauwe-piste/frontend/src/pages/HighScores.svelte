<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import { getTop10Players } from 'src/dal/high-scores.dal';
	import type { Player } from 'src/entities/player';

	const top10Players = useQuery<Player[], Error>('top10players', () => getTop10Players());
</script>

<h1>High scores</h1>

<h2>Top 10 spelers</h2>

{#if $top10Players.isLoading}
	<div class="alert alert-secondary">Bezig met laden van de top 10 spelers!</div>
{:else if $top10Players.data}
	<table>
		<thead>
			<tr>
				<th>Speler</th>
				<th>Aantal geraden</th>
				<th>Aantal niet geraden</th>
				<th>Ratio</th>
			</tr>
		</thead>
		<tbody>
			{#each $top10Players.data as player}
				<tr>
					<td>{player.name}</td>
					<td>{player.nrOfSolvedGames}</td>
					<td>{player.nrOfUnsolvedGames}</td>
					<td
						>{(
							(player.nrOfSolvedGames / (player.nrOfSolvedGames + player.nrOfUnsolvedGames)) *
							100
						).toFixed(2)}% win</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<h2>Snelste oplossers</h2>

Moet nog.
