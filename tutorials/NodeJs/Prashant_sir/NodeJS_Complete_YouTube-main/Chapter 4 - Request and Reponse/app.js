const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Welcome to Home</h1></body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Checkout our products</h1></body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === '/demo') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Complete Coding</title></head>
        <body><h1>Checkout our demo page here...</h1></body>
      </html>
    `);
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

// node --watch app.js
// http://localhost:3001
// http://localhost:3001/products
// http://localhost:3001/demo
// http://localhost:3001/login