import express from 'express';
import {PORT} from './env.js';

const app = express();

// console.log(__dirname, __filename);

app.get('/', (req, res) => {
    console.log(import.meta.dirname, import.meta.url);
    const __filename = new URL(import.meta.url).pathname;
    console.log(__filename);
    res.send('Hi');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});