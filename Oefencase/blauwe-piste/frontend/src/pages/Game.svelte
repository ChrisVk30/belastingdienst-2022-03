<script lang="ts">
	import { useMutation, useQuery, useQueryClient } from '@sveltestack/svelte-query';
	import { getGame } from 'src/dal/game.dal';
	import { postGuess } from 'src/dal/guess.dal';
	import type { GuessDto } from 'src/dto/guess.dto';
	import type { Game } from 'src/entities/game';
	import { GameState } from 'src/entities/game-state';
	import type { CurrentRoute } from 'svelte-router-spa/types/components/route';

	export let currentRoute: CurrentRoute;

	// thanks to https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3
	// also, yes just manually defining an alphabet array is more readable, but prettier then wants to place every letter on a new line.
	const alpha = Array.from(Array(26)).map((e, i) => i + 65);
	const alphabet = alpha.map(x => String.fromCharCode(x));

	const queryClient = useQueryClient();
	const game = useQuery<Game, Error>(['game', { id: +currentRoute.namedParams.id }], () =>
		getGame(+currentRoute.namedParams.id)
	);
	const guess = useMutation<Game, unknown, GuessDto>(postGuess, {
		onSuccess(data) {
			queryClient.setQueryData(['game', { id: data.id }], data);
		},
	});

	let showJsonData = false;
	let maxNrOfGuesses = 5;
	let stateClasses = '';
	let notification = '';

	$: {
		if ($game.isSuccess) {
			stateClasses = '';
			for (let i = 1; i <= $game.data.nrOfIncorrectGuesses; i++) {
				stateClasses += ` hang${i}`;
			}
		}
	}

	const handleGuess = (letter: string) => {
		$guess.mutate({
			gameId: $game.data!.id,
			letter,
		});
	};
</script>

<main>
	<h1>Hangman</h1>

	{#if $game.isLoading}
		nog geen game
	{:else if $game.isSuccess && $game.data}
		<div id="game-container">
			<!-- Visual Hangman representation, thanks to https://codepen.io/jaga3421/pen/Joedvr -->
			<div class="wrapper hangmanGame">
				<div id="hangMan">
					<div class="indicator">
						<span class="maxTry">{$game.data.nrOfIncorrectGuesses}</span>
						/
						<span class="remaining">{maxNrOfGuesses}</span>
					</div>
					<div class="hangman {stateClasses}">
						<div class="shaft" />
						<div class="pole" />
						<div class="rope" />
						<div class="base" />
						<div class="man">
							<div class="wrapperMan">
								<div class="face" />
								<div class="hands" />
								<div class="legs" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<!-- Show the word to guess -->
				<p id="word-to-guess">
					<!-- if game is over and word has not been guessed, show word -->
					{#if $game.data.state !== GameState.InProgress}
						{$game.data.wordToGuess}
					{:else}
						{#each $game.data.wordToGuess.split('') as letter}
							{#if letter === ' '}
								<span>&nbsp;</span>
							{:else if !$game.data.guessedLetters || !$game.data.guessedLetters.includes(letter.toUpperCase())}
								<span>_</span>
							{:else}
								<span>{letter}</span>
							{/if}

							&nbsp;
						{/each}
					{/if}
				</p>

				<!-- Show the letters -->
				{#if $game.data.state === GameState.InProgress}
					<ul id="letters">
						{#each alphabet as letter}
							<li
								class:guessed={$game.data.guessedLetters &&
									$game.data.guessedLetters.includes(letter)}
							>
								<button on:click={() => handleGuess(letter)}>{letter}</button>
							</li>
						{/each}
					</ul>
				{/if}

				{#if $guess.isLoading}
					<div class="alert alert-secondary clear">Gok vastleggen, spannend!</div>
				{/if}

				{#if $guess.isError}
					<div class="alert alert-danger clear">Oei daar ging iets mis:<br /><br />{$guess.error}</div>
				{/if}

				<!-- Show error messages, but only when the word hasn't been guessed yet -->
				{#if $game.data.state === GameState.InProgress && notification}
					<div class="alert alert-danger clear">{notification}</div>
				{/if}

				{#if $game.data.state === GameState.Solved}
					<div class="box good">
						<div class="content">
							<p id="word-guessed">Je hebt het woord geraden! Goed bezig!</p>
						</div>
					</div>
				{/if}

				{#if $game.data.state === GameState.Unsolved}
					<div class="box bad">
						<div class="content">
							<p id="word-not-guessed">Helaas, volgende keer beter...</p>
						</div>
					</div>
				{/if}

				<br />

				<button on:click={() => (showJsonData = !showJsonData)} class="toggle-data"
					>Toggle game data van server</button
				>

				{#if showJsonData}
					<pre>{JSON.stringify($game.data, null, '    ')}</pre>
				{/if}
			</div>
		</div>
	{/if}
</main>

<style>
	h1 {
		font-family: 'Lucida Sans', sans-serif;
		font-weight: bold;
		font-size: 2rem;
		margin-bottom: 20px;
	}

	#game-container {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}
	#game-container > * {
		flex: 1;
	}

	#new-game {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	p {
		margin-top: 0;
	}

	.toggle-data {
		margin-top: 3rem;
	}

	#word-to-guess {
		font-size: 2rem;
		text-transform: uppercase;
		margin-bottom: 20px;
	}

	.hangmanGame {
		margin-right: 20px;
		max-width: 400px;
	}

	br, .clear {
		clear: both;
		display: block;
	}

	#letters li::before {
		content: ''; /* override papercss */
	}
	#letters li {
		padding: 5px;
		margin: 5px;
		float: left;
	}
	#letters li:nth-child(9n + 1) {
		clear: left;
	}
	#letters a {
		text-decoration: none;
		color: white;
	}
	#letters li.guessed {
		opacity: 0.5;
		text-decoration: line-through;
	}
	#word-guessed,
	#word-not-guessed {
		padding: 25px;
		color: black;
	}
	#word-guessed {
		background: lightgreen;
	}
	#word-not-guessed {
		background: #d34f4f;
	}
	p {
		margin-bottom: 16px;
	}

	@font-face {
		font-family: 'Titillium Web';
		font-style: normal;
		font-weight: 200;
		src: local('Titillium Web ExtraLight'), local('TitilliumWeb-ExtraLight'),
			url(https://fonts.gstatic.com/s/titilliumweb/v8/NaPDcZTIAOhVxoMyOr9n_E7ffAzHGItzZg.ttf)
				format('truetype');
	}

	@font-face {
		font-family: 'Titillium Web';
		font-style: normal;
		font-weight: 400;
		src: local('Titillium Web Regular'), local('TitilliumWeb-Regular'),
			url(https://fonts.gstatic.com/s/titilliumweb/v8/NaPecZTIAOhVxoMyOr9n_E7fdMPmCA.ttf)
				format('truetype');
	}
	/* Mixins Start */
	.noselect {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	/* Mixins end */
	body {
		margin: 0;
		padding: 0;
	}

	.wrapper {
		font-family: 'Trebuchet MS';
		overflow: auto;
		margin: 2px auto 0;
		width: 500px;
		background: #eee;
		border: 5px solid #00a8ff;
		position: relative;
	}

	.wrapper #hangMan {
		border-bottom: 1px solid #047a9d;
		position: relative;
	}

	.wrapper #hangMan .indicator {
		z-index: 9;
		position: absolute;
		padding: 10px;
		top: -10px;
		right: 0;
		color: #047a9d;
	}

	.wrapper #hangMan .hangman {
		width: 300px;
		margin: 0 auto;
		position: relative;
	}

	.wrapper #hangMan .hangman > div {
		position: relative;
		visibility: hidden;
	}

	.wrapper #hangMan .hangman.hang1 .pole {
		visibility: visible !important;
	}

	.wrapper #hangMan .hangman.hang2 .shaft {
		visibility: visible !important;
	}

	.wrapper #hangMan .hangman.hang3 .rope {
		visibility: visible !important;
	}

	.wrapper #hangMan .hangman.hang4 .man {
		visibility: visible !important;
	}

	.wrapper #hangMan .hangman.hang5 .wrapperMan {
		margin-top: 0px !important;
	}

	.wrapper #hangMan .hangman.hang5 .wrapperMan .hands:before,
	.wrapper #hangMan .hangman.hang5 .wrapperMan .legs:before {
		animation: deadRight 0.5s linear;
	}

	.wrapper #hangMan .hangman.hang5 .wrapperMan .hands:after,
	.wrapper #hangMan .hangman.hang5 .wrapperMan .legs:after {
		animation: deadLeft 0.5s linear;
	}

	.wrapper #hangMan .hangman .base {
		visibility: visible;
		height: 50px;
		width: 100px;
		background: #00a8ff;
		border-radius: 50px 50px 0 0;
	}

	.wrapper #hangMan .hangman .base:after {
		content: ' ';
		width: 100px;
		height: 10px;
		background: #047a9d;
		position: absolute;
		bottom: 0;
	}

	.wrapper #hangMan .hangman .pole {
		height: 300px;
		width: 10px;
		background: #00a8ff;
		margin-left: 45px;
	}

	.wrapper #hangMan .hangman .shaft {
		height: 5px;
		width: 250px;
		background: #00a8ff;
	}

	.wrapper #hangMan .hangman .rope {
		height: 50px;
		width: 1px;
		background: #047a9d;
		left: 240px;
		top: 0;
		position: absolute;
	}

	.wrapper #hangMan .hangman .man {
		height: 200px;
		width: 100px;
		position: absolute;
		top: 50px;
		left: 190px;
	}

	.wrapper #hangMan .hangman .man .wrapperMan {
		position: relative;
		margin-top: -20px;
	}

	.wrapper #hangMan .hangman .man .wrapperMan > div:after,
	.wrapper #hangMan .hangman .man .wrapperMan > div:before {
		background: #00a8ff;
		content: '';
		position: absolute;
	}

	.wrapper #hangMan .hangman .man .wrapperMan .face {
		width: 50px;
		height: 50px;
		border-radius: 25px;
		margin-left: 25px;
		background: #00a8ff;
	}

	.wrapper #hangMan .hangman .man .wrapperMan .face:after {
		height: 100px;
		width: 2px;
		top: 50px;
		left: 50px;
	}

	.wrapper #hangMan .hangman .man .wrapperMan .hands {
		height: 99px;
	}

	.wrapper #hangMan .hangman .man .wrapperMan .hands,
	.wrapper #hangMan .hangman .man .wrapperMan .legs {
		transition: 0.2s Linear;
	}

	.wrapper #hangMan .hangman .man .wrapperMan .hands:before,
	.wrapper #hangMan .hangman .man .wrapperMan .legs:before,
	.wrapper #hangMan .hangman .man .wrapperMan .hands:after,
	.wrapper #hangMan .hangman .man .wrapperMan .legs:after {
		height: 2px;
		width: 50px;
		transform: rotate(-45deg);
		transform-origin: 100% 0%;
	}

	.wrapper #hangMan .hangman .man .wrapperMan .hands:before,
	.wrapper #hangMan .hangman .man .wrapperMan .legs:before {
		transform: rotate(45deg);
		transform-origin: 0% 100%;
		right: 0;
	}

	.wrapper #scoreBoard {
		margin-top: 20px;
		border-top: 1px solid #00a8ff;
	}

	.wrapper #scoreBoard .won > div {
		border-left: 1px solid #00a8ff;
	}

	.wrapper #scoreBoard .reset:hover,
	.wrapper #scoreBoard .mute:hover {
		background: #fff;
		color: #047a9d;
	}

	.wrapper #scoreBoard .mute > div:first-child {
		display: block;
	}

	.wrapper #scoreBoard .mute > div:last-child {
		display: none;
	}

	.wrapper #scoreBoard .mute.active > div:first-child {
		display: none;
	}

	.wrapper #scoreBoard .mute.active > div:last-child {
		display: block;
	}

	.wrapper #scoreBoard > div {
		cursor: pointer;
		background: #047a9d;
		color: #fff;
		width: 25%;
		float: left;
	}

	.wrapper #scoreBoard > div > div {
		padding: 10px;
		text-align: center;
	}

	@keyframes deadLeft {
		0% {
			transform: rotate(-45deg);
		}

		30% {
			transform: rotate(-25deg);
		}

		60% {
			transform: rotate(-45deg);
		}

		75% {
			transform: rotate(-25deg);
		}

		100% {
			transform: rotate(-45deg);
		}
	}

	@keyframes deadRight {
		0% {
			transform: rotate(45deg);
		}

		30% {
			transform: rotate(25deg);
		}

		60% {
			transform: rotate(45deg);
		}

		75% {
			transform: rotate(25deg);
		}

		100% {
			transform: rotate(45deg);
		}
	}
</style>
