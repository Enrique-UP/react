import express from 'express';
import {PORT} from './env3.js';

const app = express();

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));
app.get('/about', (req, res) => res.send('<h1>Hello About Us Page...!</h1>'));

app.get('/contact', (req, res) => {
	res.send(`<form id="form">
		<label for="url">Enter URL:</label>
		<br>
		<input type="url" name="url" id="url" required />
		<br><br>
		<label for="shortCode">Enter URL:</label>
		<br>
		<input type="text" name="shortCode" id="shortCode" required />
		<br>
		<span>Same short code will not be submit.</span>
		<br><br>
		<button type="submit">Shorten</button>
	</form>`)
});

//const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});

// npm run dev

// node --env-file=.env --watch app.js
// echo $env:PORT
// or
// node --env-file=.env -e "console.log(process.env.PORT)"


// npm i zod