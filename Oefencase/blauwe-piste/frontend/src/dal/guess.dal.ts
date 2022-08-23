import type { GuessDto } from 'src/dto/guess.dto';

export const postGuess = async (newGuess: GuessDto) => {
	console.log('in postGuess', newGuess);

	const req = await fetch(`https://localhost:7223/api/game/${newGuess.gameId}/guess`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newGuess),
	});

	if (!req.ok) {
		throw new Error(`Bad network response for POST ${req.url}: ${req.status}`);
	}
	return req.json();
};
