import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// console.log(__filename, __dirname);
console.log(import.meta.filename, import.meta.dirname);

const staticPath = path.join(import.meta.dirname, 'public');
app.use('/public', express.static(staticPath));

app.get('/profile/:username', (req, res) => {
    console.log(req.params);
    res.send(`My user name is ${req.params.username}`);
});

app.get('/profile/:username/article/:slug', (req, res) => {
    console.log(req.slug);
    const formatSlug = req.params.slug.replace(/-/g, ' ');
    res.send(`My user name is ${req.params.username} from ${formatSlug}`);
});



app.get('/product', (req, res) => {
    console.log(req.query);
    res.send(`Product Page<br> ${req.query.search}<br> ${req.query.page}<br> ${req.query.limit}`);
});
// http://localhost:3001/product?search=samsungm24
// http://localhost:3001/product?page=2&limit=10
// [Object: null prototype] { page: '2', limit: '10' }




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
// http://localhost:3001/
// http://localhost:3001/public/
// http://localhost:3001/profile/enrique
// http://localhost:3001/profile/enrique/article/how-to-learn-nodejs