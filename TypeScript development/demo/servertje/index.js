const express = require('express');

const app = express();

app.get('/', (req, resp) => {
	resp.send('Welkom bij mijn webservah');
});

app.listen(5000, () => console.log('Listening @ :5000'));
