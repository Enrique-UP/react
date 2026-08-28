// syntax: fs.writeRead(filePath, option, callback);
// filePath: The file path to read from.
// options: Optional. Includes encoding ("utf-8"), mode, or flags. UTF-8 => Short for 8-bit unicode transformation format encodes characters from nearly all written languages, symbols, and emojis.
// callback: A funciton with a error parameter(error, data).



const fs = require("fs");
const path = require("path");

const fileName = "writeFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);

const readFile = fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) console.error(err);
    else console.log(data);
});
console.log("readFile => ", readFile);