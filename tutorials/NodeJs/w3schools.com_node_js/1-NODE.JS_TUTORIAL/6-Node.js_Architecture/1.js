// Blocking vs Non-blocking Code

const fs = require('fs');

// Blocking code example
console.log('---------------------------------------');
console.log('Start of blocking code');
const data = fs.readFileSync('myfile.txt', 'utf8'); // Blocks here
console.log('Blocking operation completed');

console.log('---------------------------------------');

// Non-blocking code example
console.log('Start of non-blocking code');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Non-blocking operation completed');
});
console.log('This runs before the file is read');
console.log('---------------------------------------');

// Start of blocking code
// Blocking operation completed
// Start of non-blocking code
// This runs before the file is read
// Non-blocking operation completed