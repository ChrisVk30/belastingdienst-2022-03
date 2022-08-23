import type { NewGameDto } from 'src/dto/new-game.dto';

export const getGames = async () => {
	const req =  await fetch(`https://localhost:7223/api/game`);

	if (!req.ok) {
		throw new Error(`Bad network response for GET ${req.url}: ${req.status}`);
	}
	return req.json();
};

export const getGame = async (id: number) => {
	const req =  await fetch(`https://localhost:7223/api/game/${id}`);

	if (!req.ok) {
		throw new Error(`Bad network response for GET ${req.url}: ${req.status}`);
	}
	return req.json();
};

export const postGame = async (newGame: NewGameDto) => {
	console.log('in postGame');

	const req = await fetch('https://localhost:7223/api/game', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newGame),
	});

	if (!req.ok) {
		throw new Error(`Bad network response for POST ${req.url}: ${req.status}`);
	}

	return req.json();
};
