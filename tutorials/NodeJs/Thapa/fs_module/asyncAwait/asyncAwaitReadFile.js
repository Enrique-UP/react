const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);


const readFile = async () => {
    try{
        const data = await fs.readFile(filePath, "utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
readFile();