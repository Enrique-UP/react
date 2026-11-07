const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url); // Pure req object ki jagah req.url log karna better hai
  
  // Browser ko response bhej kar request complete karein
  res.end('Server response received!');
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

// node --watch app.js