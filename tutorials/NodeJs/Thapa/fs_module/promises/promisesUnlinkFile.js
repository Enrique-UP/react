// Syntax: fs.promises.unlink(path).then().catch();
// path: Path of the file.

const fs = require("fs");
const path = require("path");

const fileName = "promisesWriteFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

fs.promises
    .unlink(filePath)
    .then(console.log("File deleted successfully."))
    .catch((err) => console.log(err));