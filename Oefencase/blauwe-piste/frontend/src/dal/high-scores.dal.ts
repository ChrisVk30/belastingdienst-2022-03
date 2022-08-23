export const getTop10Players = async () => {
	const req = await fetch(`https://localhost:7223/api/highscore/players`);

	if (!req.ok) {
		throw new Error(`Bad network response for GET ${req.url}: ${req.status}`);
	}
	return req.json();
};
