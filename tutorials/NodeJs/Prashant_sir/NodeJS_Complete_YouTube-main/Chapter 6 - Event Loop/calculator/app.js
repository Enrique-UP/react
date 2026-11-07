const http = require('http');
const { requestHandler } = require('./handler');

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})

// http://localhost:3000/
// http://localhost:3000/calculator
// http://localhost:3000/calculate-result
// http://localhost:3000/demo