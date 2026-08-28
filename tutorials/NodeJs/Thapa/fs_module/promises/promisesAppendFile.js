// Syntax: fs.promises.appendFile(path, data, options).then().catch();
// path: Path of the file.
// data: Content to write in file.
// Options: "utf-8"

const fs = require("fs");
const path = require("path");

const fileName = "promisesWriteFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

fs.promises
    .appendFile(filePath, "\nBy Promise append new data.", "utf-8")
    .then(console.log("File updated successfully."))
    .catch((err) => console.log(err));