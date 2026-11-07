import path from 'path';
import express from 'express';
import {shortenedRoutes} from './routes/shortner.routes.js';

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.static(path.resolve('public')));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());


app.set('view engine', 'ejs'); // pug etc
app.set('views', './views');


// express router
// app.use(router);
app.use(shortenedRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});