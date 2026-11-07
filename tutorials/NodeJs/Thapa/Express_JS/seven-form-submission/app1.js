import express from 'express';
import path from 'path';
import {PORT} from './env.js';

const app = express();

const staticPath = path.join(import.meta.dirname, 'public');

app.use(express.static(staticPath));

app.get('/contact', (req, res) => {
    console.log(req.query);
    res.redirect('/'); // [Object: null prototype] { name: 'Enrique', message: 'Hello' }
    // res.send('OK'); // http://localhost:3001/contact?name=Enc&message=Hi
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
// http://localhost:3001/
