const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);
console.log("__dirname => ", filePath);


const appendFile = async () => {
    try{
        await fs.appendFile(filePath, "\nThis is asyncAwait updated file.", "utf-8");
        console.log("File updated succesfully.");
    } catch (error) {
        console.log(error);
    }
}
appendFile();