// fs.renameSync(); => Rename a file from one name to another.
// Syntax: fs.renameSync(oldFilePath, newFilePath);
// oldFilePath: Current file path or name.
// newFilePath: New file path or name


const fs = require("fs");
const path = require("path");

const fileName = "renameSync.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

const newUpdatedFileName = "renameSyncUpdated.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);
const renameFile = fs.renameSync(filePath, newFilePath);
console.log(renameFile);