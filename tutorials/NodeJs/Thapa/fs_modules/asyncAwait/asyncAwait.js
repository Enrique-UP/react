const fs = require("fs");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);
const filePath1 = path.join(__dirname);

// fs.promises
//     .readdir(filePath1)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// or

const readFolder = async () => {
    try{
        const res = await fs.promises.readdir(filePath1);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
readFolder();