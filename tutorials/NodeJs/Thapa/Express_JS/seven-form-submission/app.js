import express from 'express';
import path from 'path';
import {PORT} from './env.js';

const app = express();

const staticPath = path.join(import.meta.dirname, 'public');

app.use(express.static(staticPath));
// app.use(express.urlencoded()); // { 'user[name]': 'Enrique', 'user[message]': 'Up' }
app.use(express.urlencoded({extended:true})); // { user: { name: 'Enique', message: 'up' } }

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.redirect('/'); // [Object: null prototype] { name: 'Enrique', message: 'Hello' }
    // res.send('OK'); // http://localhost:3001/contact?name=Enc&message=Hi
});

app.use((req, res) => {
    // return res.status(404).send(`<h1>Page not found</h1>`);
    return res.status(404).sendFile(path.join(import.meta.dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
// http://localhost:3001/
