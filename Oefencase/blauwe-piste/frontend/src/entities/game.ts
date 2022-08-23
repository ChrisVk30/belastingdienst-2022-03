import type { GameState } from './game-state';
import type { Player } from './player';

export interface Game {
	id: number;

	wordToGuess: string;

	nrOfIncorrectGuesses: number;

	guessedLetters: string;

	state: GameState;

	playerId: number;

	player: Player;

	start: string;

	end: string | null;
}
