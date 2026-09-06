import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));
app.get('/about', (req, res) => res.send('<h1>Hello About Us Page!</h1>'));

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

console.log(process);
//const PORT = 3000;
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
// set PORT=3002 && node --watch app.js
// PORT=3000 node --watch app.js