// fs.appendFileSync(); => Synchronously append data to a file, creating the file if it does not yet exist. data can be a string or a <Buffer>.
// Syntax: fs.appendFileSync(filePath, data, options);
// filePath: The file path to write to.
// data: The content to write to the file.
// options: Optional. Encoding options ("utf-8").

const fs = require("fs");
const path = require("path");

const fileName = "writeFileSync.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

const appendFile = fs.appendFileSync(filePath, "\nThis is the updated data.", "utf-8");
console.log("Append File => ", appendFile);