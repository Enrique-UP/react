import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const json = await response.json();
console.log(json);

const staticPath = path.join(import.meta.dirname, 'public');
app.use(express.static(staticPath));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});