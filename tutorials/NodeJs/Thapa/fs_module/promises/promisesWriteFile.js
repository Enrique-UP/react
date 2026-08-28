// Syntax: fs.promises.writeFile(path, data, options).then().catch();
// path: Path of the file.
// data: Content to write in file.
// Options: "utf-8"

const fs = require("fs");
const path = require("path");

const fileName = "promisesWriteFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

fs.promises
    .writeFile(filePath, "This is a initial data.", "utf-8")
    .then(console.log("File created successfully."))
    .catch((err) => console.log(err));