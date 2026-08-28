// fs.appendFile(); => Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a <Buffer>.
// Syntax: fs.appendFile(filePath, data, options, callback);
// filePath: The file path to write to.
// data: The content to write to the file.
// options: Optional. Encoding options ("utf-8").
// callback: A funciton with a error parameter(error, data).

const fs = require("fs");
const path = require("path");

const fileName = "writeFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

const appendFile = fs.appendFile(filePath, "\nThis is the updated data.", "utf-8", (err, data) => {
    if(err) console.error(err);
    else console.log(data);
});
console.log("appendFile => ", appendFile);