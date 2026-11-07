const http = require('http');
const requestHandler = require('./user');

const server = http.createServer(requestHandler);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

// node --watch app.js
// http://localhost:3001
// http://localhost:3001/submit-details