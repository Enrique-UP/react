const fs = require('fs');
// fs.readFile("file.txt", 'utf8', (err, data) => {
//     console.log(err, data);
// });
// console.log("Finished reading file");


// const a = fs.readFileSync("file.txt");
// console.log(a.toString());
// console.log("Finished reading file");

// fs.writeFile("file.txt", "This is a data.", () => {
//     console.log("Written to the file.");    
// });
// console.log("Finished reading file");

b = fs.writeFileSync("file1.txt", "This is a data2.");
console.log(b);
console.log("Finished reading file");