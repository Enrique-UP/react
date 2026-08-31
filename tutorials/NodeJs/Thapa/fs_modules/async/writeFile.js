// https://nodejs.org/docs/latest/api/fs.html
// File System (FS Module) => Read, Write, Update, Delete, Rename, Append

// fs.writeFile() : Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.

// syntax: fs.writeFile(filePath, data, option, callback);
// filePath: The file path to write to.
// data: The content to write to the file.
// options: Optional. Includes encoding ("utf-8"), mode, or flags. UTF-8 => Short for 8-bit unicode transformation format encodes characters from nearly all written languages, symbols, and emojis.
// callback: A funciton with a error parameter.

const fs = require("fs");
const path = require("path");

const fileName = "writeFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

const writeFile = fs.writeFile(fileName, "This is the initial data.", "utf-8", (err) => {
    if(err) console.error(err);
    else console.log("File has bees saved.");
});
console.log("Write File => ", writeFile);