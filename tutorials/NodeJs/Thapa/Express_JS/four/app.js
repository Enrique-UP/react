import express from 'express';
// import {PORT} from './env.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT;
// console.log(__dirname, __filename);

// app.use(express.static(path.join(import.meta.dirname, 'public')));
// app.use(express.static('public'));
const staticPath = path.join(import.meta.dirname, 'public');
app.use(express.static(staticPath));
// app.use('/public', express.static(staticPath)); // http://localhost:3000/public/
// public/index.html page style.css is not working path the cause of path by the above method this is working.

app.get('/', (req, res) => {
    // console.log(import.meta.dirname, import.meta.url);
    // const __filename = new URL(import.meta.url).pathname;
    // console.log(__filename);

    const homePagePath = path.join(import.meta.dirname, 'public', 'index.html');
    res.sendFile(homePagePath);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});