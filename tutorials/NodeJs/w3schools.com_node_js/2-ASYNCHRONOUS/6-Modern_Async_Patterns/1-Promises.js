const fs = require('fs').promises;

console.log('1. Reading file...');
fs.readFile('myfile.txt', 'utf8')
  .then(data => {
    console.log('3. File content:', data);
  })
  .catch(err => console.error('Error:', err));

console.log('2. This runs before file is read!');