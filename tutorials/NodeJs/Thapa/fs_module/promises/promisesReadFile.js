// Syntax: fs.promises.readFile(path, options).then().catch();
// path: Path of the file.
// Options: "utf-8"

const fs = require("fs");
const path = require("path");

const fileName = "promisesWriteFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

fs.promises
    .readFile(filePath, "utf-8")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));