// fs.unlinkSync(); => Delete a file by its path.
// Syntax: fs.unlinkSync(filePath);
// filePath: The file path to the file to delete.

const fs = require("fs");
const path = require("path");

const fileName = "writeFileSync.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

const deleteFile = fs.unlinkSync(filePath);
console.log("Delete File => ", deleteFile);