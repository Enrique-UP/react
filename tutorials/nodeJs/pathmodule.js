// https://nodejs.org/docs/latest/api/path.html

const path = require("path");
const a = path.basename('C:\\temp\\myfile.html');
console.log(a); // myfile.html
const a1 = path.dirname('C:\\temp\\myfile.html');
console.log(a1); // C:\temp
const a2 = path.extname('C:\\temp\\myfile.html');
console.log(a2); // .html
const a3 = path.extname(__filename);
console.log(__filename, a3); // C:\Users\noman.na\Downloads\plgs\nodeJs\pathmodule.js .js

