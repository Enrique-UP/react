// fs.unlink(); => Delete a file by its path.
// Syntax: fs.unlink(filePath);
// filePath: The file path to the file to delete.
// callback: A funciton with a error parameter(error).

const fs = require("fs");
const path = require("path");

const fileName = "writeFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

fs.unlink(filePath, (err) => {
    if(err) console.error(err);
    else console.log("File has been deleted.");
});