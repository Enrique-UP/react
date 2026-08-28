// Synchronously append data to a file, creating the file if it does not yet exist. data can be a string or a <Buffer>.

const fs = require("fs");
const path = require("path");

const fileName = "writeFileSync.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

const readFile = fs.readFileSync(filePath);
console.log("readFile => ", readFile); // output in binary/machine language.
console.log("readFile => ", readFile.toString()); // output in string

// Or

const readFile1 = fs.readFileSync(filePath, "utf-8");
console.log("readFile => ", readFile1);