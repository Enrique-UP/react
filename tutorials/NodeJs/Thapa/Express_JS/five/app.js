import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// console.log(__filename, __dirname);
console.log(import.meta.filename, import.meta.dirname);

const staticPath = path.join(import.meta.dirname, 'public');
app.use(express.static(staticPath));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});