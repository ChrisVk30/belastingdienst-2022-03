const express = require('express');

const app = express();

app.get('/', (req, resp) => {
	resp.send('Welkom bij mijn webservah');
});

app.post('/', (req, res) => {
	// req.body
});

app.listen(5000, () => console.log('Listening @ :5000'));

// Program.cs

// Type-safe
// validatie van gePOSTe data?
// - good luck!
// authenticatie?
// middleware
// dependency injection? => nope
// structuur

