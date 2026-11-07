const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(3000, () => {
  console.log('http://localhost:3000');
});

// http://localhost:8080
