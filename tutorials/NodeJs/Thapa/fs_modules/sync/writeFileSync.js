// https://nodejs.org/docs/latest/api/fs.html
// File System (FS Module) => Read, Write, Update, Delete, Rename, Append

// fs.writeFileSync() : Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.

// syntax: fs.writeFileSync(filePath, data, option);
// filePath: The file path to write to.
// data: The content to write to the file.
// options: Optional. Includes encoding ("utf-8"), mode, or flags. UTF-8 => Short for 8-bit unicode transformation format encodes characters from nearly all written languages, symbols, and emojis.

const fs = require("fs");
const path = require("path");

const fileName = "writeFileSync.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

const writeFile = fs.writeFileSync(fileName, "This is the initial data.", "utf-8");
console.log("Write File => ", writeFile);

// const writeFile1 = fs.writeFileSync(filePath, "This is the initial data, updated.", "utf-8");
// const writeFile1 = fs.writeFileSync(filePath, "This is the initial data, updated1."); //  without utf-8
// console.log("Write File1 => ", writeFile1);