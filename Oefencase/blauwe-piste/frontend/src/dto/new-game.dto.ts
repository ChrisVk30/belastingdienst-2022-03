export interface NewGameDto {
	playerName: string;
}

export function createNewGameDto(): NewGameDto {
	return {
		playerName: '',
	};
}
