const http = require('http');

const server = http.createServer((req, res) => {
  console.log("Request aayi hai!"); 
  
  // Browser ko response bhejna zaroori hai
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello! Server has successfully started.');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

// npm start
// npm run khul-ja-sim-sim