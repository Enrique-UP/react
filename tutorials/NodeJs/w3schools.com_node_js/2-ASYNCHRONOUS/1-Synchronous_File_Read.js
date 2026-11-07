const fs = require('fs');

console.log('1. Starting sync read...');
const data = fs.readFileSync('myfile.txt', 'utf8');
console.log('2. File contents:', data);
console.log('3. Done reading file');


// 1. Starting sync read...
// 2. File contents: This is the content of myfile.txt
// 3. Done reading file